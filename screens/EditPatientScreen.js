import React, { useState, useEffect, useCallback } from 'react';
import { Text } from 'react-native';
import { Item, Input, Label } from 'native-base';
import styled from 'styled-components';

import { patientsApi } from '../utils/api';

import { Button, Container } from '../components';

const EditPatientScreen = ({ navigation }) => {
    const [values, setValues] = useState({});
    const patientId = navigation.getParam('patientId');

    const fetchUserInfo = useCallback(async () => {
        const { data } = await patientsApi.getById({id: patientId});
        setValues(data.data);
        return data;
    }, []);

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const handleChange = (name, e) => {
        const text = e.nativeEvent.text;
        setValues({
            ...values,
            [name]: text,
        });
    };

    const onSubmit = useCallback(() => {
        patientsApi
            .update({id: patientId, values})
            .then(() => {
                navigation.navigate('Patients');
            })
            .catch(e => {
                alert('BAD');
            });
    }, [patientId, values]);

    return (
        <Container>
            <Item style={{ marginLeft: 0 }} floatingLabel>
                <Label>Имя и Фамилия</Label>
                <Input
                    onChange={handleChange.bind(this, 'fullname')}
                    value={values.fullname}
                    style={{ marginTop: 12 }}
                    autoFocus
                />
            </Item>
            <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
                <Label>Номер телефона</Label>
                <Input
                    onChange={handleChange.bind(this, 'phone')}
                    value={values.phone}
                    keyboardType="numeric"
                    dataDetectorTypes="phoneNumber"
                    style={{ marginTop: 12 }}
                />
            </Item>
            <ButtonView>
                <Button onPress={onSubmit} color="#87CC6F">
                    <Text>Сохранить</Text>
                </Button>
            </ButtonView>
        </Container>
    );
};

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

EditPatientScreen.navigationOptions = {
    title: 'Редактировать пациента',
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8,
    },
};

export default EditPatientScreen;