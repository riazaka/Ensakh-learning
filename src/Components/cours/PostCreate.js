import React from 'react'
import { Create,SimpleForm,TextInput,DateInput} from 'react-admin'
const PostCreate = (props) => {
    return (
        <Create title='créer un cours' {...props}>
            <SimpleForm>
        <TextInput source='title' />
        <TextInput  source='volume' />
        <TextInput  source='difficulté' />
        <DateInput label='date de publication' source='publishedAt' />
      </SimpleForm>
        </Create>
    )
}

export default PostCreate
