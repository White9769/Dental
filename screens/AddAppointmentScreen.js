import React, { useState } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View } from 'react-native';
import { Item, Input, Label, Picker } from 'native-base';
import styled from 'styled-components';
import DatePicker from 'react-native-datepicker';

import { appointmentsApi } from '../utils/api';

import { Button, Container } from '../components';

const AddAppointmentScreen = ({ navigation }) => {
  const [values, setValues] = useState({
    diagnosis: '',
    dentNumber: '',
    price: '',
    date: null,
    time: null,
    patient: navigation.getParam('patientId')
  });

  const fieldsName = {
    diagnosis: 'Диагноз',
    dentNumber: 'Номер зуба',
    price: 'Цена',
    date: 'Дата',
    time: 'Время'
  };

  const setFieldValue = (name, value) => {
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleInputChange = (name, e) => {
    const text = e.nativeEvent.text;
    setFieldValue(name, text);
  };

  const onSubmit = () => {
    appointmentsApi
        .add(values)
        .then(() => {
          navigation.navigate('Home', { lastUpdate: new Date() });
        })
        .catch(e => {
          if (e.response.data && e.response.data.message) {
            e.response.data.message.forEach(err => {
              const fieldName = err.param;
              alert(`Ошибка! Поле "${fieldsName[fieldName]}" указано неверно.`);
            });
          }
        });
  };

  return (
      <Container>
        <Item style={{ marginLeft: 0 }} floatingLabel>
          <Label>Номер зуба</Label>
          <Input
              onChange={handleInputChange.bind(this, 'dentNumber')}
              value={values.fullname}
              style={{ marginTop: 12 }}
              keyboardType="numeric"
              autoFocus
          />
        </Item>
        <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
          <Label>Цена</Label>
          <Input
              onChange={handleInputChange.bind(this, 'price')}
              value={values.phone}
              keyboardType="numeric"
              style={{ marginTop: 12 }}
          />
        </Item>
        <Item style={{ marginTop: 20, marginLeft: 0 }} >
          <Picker
              mode="dropdown"
              placeholder="Выберите диагноз"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              style={{ width: '100%' }}
              onValueChange={setFieldValue.bind(this, 'diagnosis')}
              selectedValue={values.diagnosis}
          >
              <Picker.Item label="Выберите услугу:" />
            <Picker.Item label="лучение пульпита" value="лучение пульпита" />
            <Picker.Item label="удаление зуба" value="удаление зуба" />
            <Picker.Item label="лечение кариеса" value="лечение кариеса" />
            <Picker.Item label="пломбирование зуба" value="пломбирование зуба" />
            <Picker.Item label="наращивание зуба" value="наращивание зуба" />
            <Picker.Item label="удаление зубных отложений" value="удаление зубных отложений" />
            <Picker.Item label="герметизация фиссур зуба" value="герметизация фиссур зуба" />
            <Picker.Item label="шинирование зуба" value="шинирование зуба" />
            <Picker.Item label="распломбировка корневого канала" value="распломбировка корневого канала" />
            <Picker.Item label="резекция верхушки корня зуба" value="резекция верхушки корня зуба" />
            <Picker.Item label="имплантация зуба" value="имплантация зуба" />

          </Picker>
        </Item>
        <Item style={{ marginTop: 20, marginLeft: 0 }}>
          <TimeRow>
            <View style={{ flex: 1 }}>
              <DatePicker
                  date={new Date()}
                  mode="date"
                  placeholder="Дата"
                  format="YYYY-MM-DD"
                  minDate={new Date()}
                  confirmBtnText="Сохранить"
                  cancelBtnText="Отмена"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      borderWidth: 0
                    },
                    dateText: {
                      fontSize: 18
                    }
                  }}
                  date={values.date}
                  onDateChange={setFieldValue.bind(this, 'date')}
              />
            </View>
            <View style={{ flex: 1 }}>
              <DatePicker
                  mode="time"
                  placeholder="Время"
                  format="HH:mm"
                  minDate={new Date()}
                  confirmBtnText="Сохранить"
                  cancelBtnText="Отмена"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      borderWidth: 0
                    },
                    dateText: {
                      fontSize: 18
                    }
                  }}
                  date={values.time}
                  onDateChange={setFieldValue.bind(this, 'time')}
              />
            </View>
          </TimeRow>
        </Item>
        <ButtonView>
          <Button onPress={onSubmit} color="#87CC6F">
            <Text>Добавить приём</Text>
          </Button>
        </ButtonView>
      </Container>
  );
};

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

const TimeRow = styled.View`
  flex-direction: row;
`;

AddAppointmentScreen.navigationOptions = {
  title: 'Добавить прием',
  headerTintColor: '#2A86FF',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8
  }
};

export default AddAppointmentScreen;