import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card" style={{width: '18rem'}}>
                    <img src={props.imgsrc} className="card-img-top cardImgg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">{props.description.slice(0, 100)}...</p>
                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card