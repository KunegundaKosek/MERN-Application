import React from 'react';
import UserItem from './UserItem';
import { UserListProps } from '../interfaces/interfaces-user';

import '../../scss/UserList.scss';


const UserList: React.FC<UserListProps> = ({ items }) => {
    if (items.length === 0) {
        return (
            <div className="center">
                <h2>No users found.</h2>
            </div>
        )
    }

    return (
        <ul className='users-list'>
            {items.map((user) => (
                 <UserItem 
                  key={user.id}
                  id={user.id}
                  image={user.image}
                  name={user.name}
                  places={user.places}
                 />
            ))}
        </ul>
    )
}

export default UserList
