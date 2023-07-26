import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GlobalContext } from '../../Context/context';


export default function AdminNav() {

    const { state, dispatch } = useContext(GlobalContext)

    const logOutUser = () => {

        dispatch(
            {
                type: "LOGOUT_USER",
                value: undefined
            }
        )
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Admin</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: Admin Name
                    </Navbar.Text>
                    <button className='btn btn-outline-secondary ms-4'
                        onClick={logOutUser}

                    >Logout</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}
