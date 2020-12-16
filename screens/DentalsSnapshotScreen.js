//<img src={{"/assets/Zub.png"}} style={{height:100 ,width:100, flex:0.5, resizeMode:'contain'}} />
import React, { useState } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View } from 'react-native';
import { Item, Input, Label, Picker } from 'native-base';
import styled from 'styled-components';
import DatePicker from 'react-native-datepicker';

import { appointmentsApi } from '../utils/api';

import { Button, Container } from '../components';


export default function DentalsSnapshotScreen() {
    return (
        <Containerr>
        <Textt>Нет снимка зубов пациента</Textt>
        </Containerr>
    );
}



const Containerr = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const Textt = styled.Text`
  font-size: 28px;
`;

