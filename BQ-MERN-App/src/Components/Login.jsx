import React, { useContext } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Cookies from 'js-cookie'
import { GlobalContext } from '../Context/context';

export default function Login() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { state, dispatch } = useContext(GlobalContext)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loginUser = (e) => {
        e.preventDefault();
        const payload = { email, password }
        console.log(payload)
        axios.post('http://localhost:1789/api/login', payload)
            .then(json => {
                console.log(json.data)


                dispatch({
                    type: "LOGIN_USER",
                    user: json.data.token
                })
                setShow(false)
            })
            .catch(err => console.log(err))
    }


    return (
        <>


            <button className='btn btn-secondary mx-1' onClick={handleShow}>Login</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={loginUser}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>

                </Modal.Body>

            </Modal>
        </>
    )
}
