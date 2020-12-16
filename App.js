import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// TODO: Сделать редактирование приемов.
// TODO: Сделать автоматичское обновление после изменения или добавления пользвателя.


import {
    HomeScreen,
    PatientScreen,
    AddPatientScreen,
    AddAppointmentScreen,
    PatientsScreen,
    EditPatientScreen,
    EditAppointmentScreen,
    DentalSnapshotScreen,
} from './screens';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Patient: {
            screen: PatientScreen
        },
        AddPatient: {
            screen: AddPatientScreen
        },
        EditAppointment: {
            screen: EditAppointmentScreen
        },
        EditPatient: {
            screen: EditPatientScreen
        },
        AddAppointment: {
            screen: AddAppointmentScreen
        },
        Patients: {
            screen: PatientsScreen
        },
        DentalSnapshot: {
            screen: DentalSnapshotScreen
        },
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);
