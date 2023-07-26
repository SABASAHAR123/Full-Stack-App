import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddBrandModal from './AddBrandModal'

export default function Brands() {

    const [brands, setBrands] = useState([])

    const newBrands = (values) => {
        setBrands(values)
    }

    useEffect(() => {
        axios.get('http://localhost:1789/api/get-all-brands')
            .then(json => {
                console.log(json.data.brands)
                setBrands(json.data.brands)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between mt-3'>
                <h2>Brands</h2>
                <AddBrandModal newBrands={newBrands} />
            </div>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>

                            <th scope="col">Name</th>
                            <th scope="col">Image</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            brands.map((val, key) =>
                                <tr key={key}>
                                    <th scope="row">{key + 1}</th>
                                    <td>{val.BrandName}</td>
                                    <td><img style={{ width: '10%' }} className='img-fluid' src={val.BrandImage} /></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}
