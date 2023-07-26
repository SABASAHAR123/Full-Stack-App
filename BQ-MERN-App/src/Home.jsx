import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1789/api/get-all-brands')
            .then(json => setBrands(json.data.brands))
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='container'>
            <div className='text-center my-5'>
                <h2>Brands</h2>
                <p className='text-secondary'>Hello Hmaare pas apky lye bht saari achi achi brands hain</p>
            </div>

            <div className='row'>

                {
                    brands.map((val, key) =>
                        <div className='col-md-4' key={key}>
                            <div className="card">
                                <img src={val.BrandImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{val.BrandName}</h5>
                                </div>
                            </div>

                        </div>)
                }

            </div>

        </div>
    )
}
