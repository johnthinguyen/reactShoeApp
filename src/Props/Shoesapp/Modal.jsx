import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { data } = this.props
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{data.id}</h5>
                            <img src={data.image} alt="" style={{ width: 200, height: 200 }} />
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h2 style={{ color: 'red' }}>{data.name}</h2>
                            <h2 style={{ color: 'red' }}>Price: {data.price}</h2>
                            <p style={{ color: 'red' }}>Description: {data.description}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-warning">BUY</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
