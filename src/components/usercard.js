import React from 'react';

export default function UserCard({user}) {
    return (
        <div>
        <h3>{user.name}</h3>
        <a href={user.email}>{user.email}</a>
        </div>
    )
}