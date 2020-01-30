import React from 'react';
import UserCard from './usercard';

export default function UserList({users}) {
    return (
        <div>
        {users.map((user) => {
            return (
                <UserCard user={user} key={user.id}/>
            )
        })}
        </div>
    )
}