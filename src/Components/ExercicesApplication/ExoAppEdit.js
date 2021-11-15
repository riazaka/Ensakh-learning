import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const ExoappEdit = (props) => {
  return (
    <Edit title='Modifier un cours' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput  source='volume' />
        <TextInput  source='difficulté' />
        <DateInput disabled label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default ExoappEdit