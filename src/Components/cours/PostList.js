import React from 'react'
import { List ,Datagrid , TextField, DateField,EditButton,DeleteButton} from 'react-admin'



 const PostList = (props) => {
     
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'></TextField>
                <TextField source='title'></TextField>
                <TextField source='volume'></TextField>
                <TextField source='difficulté'></TextField>
                <DateField  source='publishedAt'></DateField>
                <EditButton basePath='/coursuml'></EditButton>
                <DeleteButton  basePath='/coursuml'></DeleteButton>
            </Datagrid>
        </List>
    )
}
export default PostList