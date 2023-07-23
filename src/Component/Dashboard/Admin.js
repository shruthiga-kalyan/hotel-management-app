import React from 'react'
import AddRoom from './AddRoom';
import DeleteRoom from './DeleteRoom';
import ListRoom from './ListRoom';
import UpdateRoom from './UpdateRoom';


const Admin = () => {
  return (
    <div>
      <AddRoom/>
      <DeleteRoom/>
      <ListRoom/>
      <UpdateRoom/>
    </div>
  )
}

export default Admin;