import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function AddData() {

    let history = useHistory();
    const [users, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const { name, email, phone } = users;

    const onInputChange = e => {
        setUser({ ...users, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:5000/users", users);
        console.log(users)
        history.push("/")
    }

    return (
        <div className="container-fluid">
            <form onSubmit={e => onSubmit(e)}>
                <div class="form-group">
                    <label for="exampleInputEmail1">name</label>
                    <input type="name" class="form-control"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">phone</label>
                    <input type="phone" class="form-control"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)} />
                </div>
                <button type="submit" class="btn btn-primary">log in</button>
            </form>
        </div>
    )
}
