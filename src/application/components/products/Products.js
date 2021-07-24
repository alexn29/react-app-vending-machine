import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

import axios from 'axios';

import { API } from '../../config/constants';
import Product from './Product';

const SpinnerContainer = styled.div`
    display: grid;
    justify-content: center;
    place-items: center;
    gap: .75rem;
`;

const Products = () => {
    
    useEffect(() => {
        getProducts();
    }, []);

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = () => {
        
        setIsLoading(true);

        axios.get(API)
            .then((response) => {
                const { data } = response.data;
                setTimeout(() => {
                    setProducts(data);
                    setIsLoading(false);
                }, 500);
            })
            .catch((error) => {
                toast.error(error.message);
                setIsLoading(false);
            });
    }

    return (
        <Container className="my-4">
            <h2 className="my-5">Available Products</h2>

            { isLoading && 
                <SpinnerContainer>
                    <Spinner animation="border" variant="primary" />
                    <small>Fetching data, please wait!</small>
                </SpinnerContainer>
            }

            <Row>
                {
                    products && products.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </Row>
        </Container>
    )
}

export default Products
