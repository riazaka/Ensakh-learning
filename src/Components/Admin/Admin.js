import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest'

import React from 'react';
import PostList from '../cours/PostList';
import PostCreate from '../cours/PostCreate';
import PostEdit from '../cours/PostEdit';
import ExoApList from '../ExercicesApplication/ExoApList';
import ExoAppCreate from '../ExercicesApplication/ExoAppCreate';
import ExoappEdit from '../ExercicesApplication/ExoAppEdit';
import ExList from '../exercices/ExList';
import ExoCreate from '../exercices/ExoCreate';
import ExoEdit from '../exercices/ExoEdit';
import AppList from '../Application/AppList';
import AppCreate from '../Application/AppCreate';
import AppEdit from '../Application/AppEdit';
import OngList from '../onglets/OngList';
import OngletsCreate from '../onglets/OngletsCreate';
import OngletsEdit from '../onglets/OngletsEdit';

const Adm = (props) => {console.log(props.titreModule)
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='coursalgorithmique' list={PostList} create={PostCreate} edit={PostEdit}></Resource>
    <Resource name='exoappalgorithmique' list={ExoApList}create={ExoAppCreate} edit={ExoappEdit}></Resource>
    <Resource name='exoalgorithmique' list={ExList}create={ExoCreate} edit={ExoEdit}></Resource>
    <Resource name='appalgorithmique' list={AppList}create={AppCreate} edit={AppEdit}></Resource>
    <Resource name='ongletsalgorithmique' list={OngList}create={OngletsCreate} edit={OngletsEdit}></Resource>
    <Resource name='coursuml' list={PostList} create={PostCreate} edit={PostEdit}></Resource>
    <Resource name='ongletsuml' list={OngList}create={OngletsCreate} edit={OngletsEdit}></Resource>
    <Resource name='exouml' list={ExList}create={ExoCreate} edit={ExoEdit}></Resource>
  </Admin>
    )
}

export default Adm
