import React from 'react';
import { useNetwork } from '../hooks/useNetwork';

export function Users() {
    const users = useNetwork('https://reqres.in/api/users')
    return (
        <section>
            {users?.data?.map(({ first_name, last_name, email }) => {
                return (
                    <div>
                        <h1>{first_name} {last_name}</h1>
                        <p>{email}</p>
                    </div>
                )
            })}
        </section>
    )
}
