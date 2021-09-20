import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'

export default function UpdateData() {

    let history = useHistory();
    const { id } = useParams();
    const [users, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const { email, name, phone } = users;
    const onInputeChange = e => {
        setUser({ ...users, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/users/${id}`, users);
        history.push("/")
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(result.data);
    }

    return (
        <div className="container">
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control"
                        name="email"
                        value={email}
                        onChange={e => onInputeChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="name" class="form-control"
                        name="name"
                        value={name}
                        onChange={e => onInputeChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">password</label>
                    <input type="phone" class="form-control"
                        name="phone"
                        value={phone}
                        onChange={e => onInputeChange(e)}
                    />
                </div>
                <button type="submit" class="btn btn-primary">update</button>
            </form>
        </div>
    )
}
