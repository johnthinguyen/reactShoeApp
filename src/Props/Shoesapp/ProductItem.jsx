import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        // const { image, name, price, description, chitiet } = this.props.prop
        const { prop, chitiet } = this.props
        return (
            < div >
                <div className="card">
                    <img src={prop.image} alt="" />
                    <div className="card-body">
                        <h3 style={{ height: 100 }}>Name: {prop.name}</h3>
                        <p className='alert alert-danger'>{prop.price}$</p>
                        <p className='text-success' style={{ height: 100 }} >Description {prop.description.length > 50 ? prop.description.substring(0, 50) + '...' : prop.description}</p>
                        <button className='btn btn-dark' data-toggle="modal" data-target="#exampleModal"
                            onClick={() => {
                                chitiet(prop)
                            }}>Chi tiết</button>
                    </div>
                </div>
            </ div >
        )
    }
}
