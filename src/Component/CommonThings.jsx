import React from 'react'
import { NavLink } from 'react-router-dom'

function CommonThings(props) {
    return (
        <>
            <section id='header' className='d-flex align-content-center'>
                <div className='container-fluid nav_bg'>
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-items-center flex-column'>
                                    <h1>{props.name} <br /> <strong className='brand-name'>M Babar Waseem</strong> </h1>
                                    <h2 className='my-3'>We are the team of talented developers making  websites</h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-2-lg-2 header-img'>
                                    <img src={props.imgsrc} width='550px' alt="any" className='img-fluid animated' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CommonThings