import React from 'react'
// import { userData } from '../utils/constant';

const Card = ({id,name, email, role}) => {

    
  return (
    <div className="flex flex-col">
   <table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
 
            <tbody>
                {customers.map(customer =>
                    <tr>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.role}</td>
                    </tr>
                )}
            </tbody>
        </table>
</div>

  );
}

export default Card