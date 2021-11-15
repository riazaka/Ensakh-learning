import React from 'react'
import { List ,Datagrid , TextField, DateField,EditButton,DeleteButton} from 'react-admin'




 const OngList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                
                <TextField source='title'></TextField>
                <TextField source='path'></TextField>
                <EditButton basePath='/onglets'></EditButton>
                <DeleteButton  basePath='/onglets'></DeleteButton>
            </Datagrid>
        </List>
    )
}
export default OngList