import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

export default function Signup() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const SignupUser = (e) => {
        e.preventDefault();
        const payload = { email, password, username }
        console.log(payload)
        axios.post('http://localhost:1789/api/signup', payload)
            .then(json => {
                console.log(json.data)
                setShow(false)
            })
            .catch(err => console.log(err))

    }
    return (
        <>
            <button className='btn-outline-secondary btn  mx-1' onClick={handleShow}>Signup</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={SignupUser}>
                        <div className="mb-3">
                            <label htmlFor="User" className="form-label">
                                Name
                            </label>

                            <input
                                type='text'
                                className="form-control"
                                id="User"
                                aria-describedby="emailHelp"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />

                        </div>


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
