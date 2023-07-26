import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function AddBrandModal({ newBrands }) {
    const [show, setShow] = useState(false);
    const [brandname, setBrandname] = useState("");
    const [brandImage, setBrandImage] = useState("");


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addBrand = (e) => {
        e.preventDefault();
        const payload = { BrandName: brandname, BrandImage: brandImage }
        // console.log(payload)

        


        axios.post('http://localhost:1789/api/add-brand', payload)
            .then(json => {
                console.log(json.data)
                newBrands(json.data.brands)
                setShow(false)

            })
            .catch(err => console.log(err))
    }
    return (
        <>


            <button className='btn btn-secondary mx-1' onClick={handleShow}>Add Brand</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addBrand}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Brand Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="brandnameHelp"
                                value={brandname}
                                onChange={(e) => setBrandname(e.target.value)}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Brand Image
                            </label>
                            <input
                                type="brandImage"
                                className="form-control"
                                id="exampleInputPassword1"
                                value={brandImage}
                                onChange={(e) => setBrandImage(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Add Brand
                        </button>
                    </form>

                </Modal.Body>

            </Modal>
        </>
    )
}
