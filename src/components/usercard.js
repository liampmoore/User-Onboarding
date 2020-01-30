import React from 'react';
import './card.css';

export default function UserCard({user}) {
    return (
        <div className='card'>
        <h3>{user.name}</h3>
        <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
        </div>
    )
}