import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import { createOrder } from '../../redux/actions/OrderActions';

const ProductForm = ({ product }) => {

    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        if (quantity > 0) {
            let data = {
                ...product,
                quantity
            }
            dispatch(createOrder(data));
            toast.info('Order created successfully.');
        }
        else {
            toast.error(`Please, select at least one ${product.name}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column">
            <div className="d-flex justify-content-center mr-1 mb-4">
                <Button
                    variant="light"
                    className="rounded-circle"
                    onClick={ () => setQuantity(quantity === 0 ? 0 : Number(quantity - 1)) }>
                    <AiOutlineMinusCircle />
                </Button>
                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    onChange={ e => setQuantity(Number(e.target.value)) }
                    className="form-control mx-1" />
                <Button
                    variant="light"
                    className="rounded-circle"
                    onClick={ () => setQuantity(Number(quantity + 1)) }>
                    <AiOutlinePlusCircle />
                </Button>
            </div>
            <div>
                <Button type="submit" variant="primary" className="btn-sm btn-block">
                    <small>ORDER</small>
                </Button>
            </div>
        </form>
    )
}

ProductForm.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductForm
