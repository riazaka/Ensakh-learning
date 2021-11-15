import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const OngletsEdit = (props) => {
  return (
    <Edit title='Modifier un cours' {...props}>
      <SimpleForm>
      <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput  source='path' />
      </SimpleForm>
    </Edit>
  )
}

export default OngletsEdit