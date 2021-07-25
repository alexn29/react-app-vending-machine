import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

import styled from 'styled-components';

import { createOrder } from '../../redux/actions/OrderActions';

const RadiusButton = styled(Button)`
    border-radius: 1.5rem;
    position: relative;
    background-color: var(--indigo);
    &:hover {
        background-color: var(--light-indigo);
    }
    .BsArrowRight {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
    }
`;

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
            toast.info(`Created order with: ${data.name} x ${data.quantity}`);
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
                    className="form-control text-center mx-1" />
                <Button
                    variant="light"
                    className="rounded-circle"
                    onClick={ () => setQuantity(Number(quantity + 1)) }>
                    <AiOutlinePlusCircle />
                </Button>
            </div>
            <div>
                <RadiusButton type="submit" className="btn-block">
                    <small>ORDER</small>
                    <BsArrowRight className="BsArrowRight" />
                </RadiusButton>
            </div>
        </form>
    )
}

ProductForm.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductForm
