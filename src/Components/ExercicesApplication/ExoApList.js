import React from 'react'
import { List ,Datagrid , TextField, DateField,EditButton,DeleteButton} from 'react-admin'




 const ExoApList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'></TextField>
                <TextField source='title'></TextField>
                <TextField source='volume'></TextField>
                <TextField source='difficulté'></TextField>
                <DateField  source='publishedAt'></DateField>
                <EditButton basePath='/exoapp'></EditButton>
                <DeleteButton  basePath='/exoapp'></DeleteButton>
            </Datagrid>
        </List>
    )
}
export default ExoApList