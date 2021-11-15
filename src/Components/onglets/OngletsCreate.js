import React from 'react'
import { Create,SimpleForm,TextInput,DateInput} from 'react-admin'
const OngletsCreate = (props) => {
    return (
        <Create title='créer un cours' {...props}>
            <SimpleForm>
        <TextInput source='title' />
        <TextInput  source='path' />
        
      </SimpleForm>
        </Create>
    )
}

export default OngletsCreate