import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

export default function ManeTable() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:5000/users/${id}`);
        loadUsers();
    };


    return (
        <div className="container-fluid">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <Link
                                    class="btn btn-danger"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </Link>
                                <Link
                                    className="btn btn-primary"
                                    to={`/edit/${user.id}`}
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
