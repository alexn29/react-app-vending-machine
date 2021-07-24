import React from 'react'
import { Col, Card } from 'react-bootstrap';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CardWithShadow, CardImageContainer, CardImage  } from './Product.styles';

const Product = ({ product }) => {

    return (
        <Col xs={6} md={4} lg={3} className="mb-4">
            <CardWithShadow>
                <CardImageContainer>
                    <CardImage image={product.thumbnail} />
                </CardImageContainer>
                <Card.Body>
                    <Card.Subtitle className="text-center mb-2 text-truncate" title={ product.name }>
                        { product.name }
                    </Card.Subtitle>
                    <div className="text-center">
                        <div>
                            <AiOutlineClockCircle size="1.5em" />
                        </div>
                        <div className="mb-4">
                            <small>Preparation</small><br />
                            <span>{ product.preparation_time }</span>
                        </div>
                    </div>
                </Card.Body>
            </CardWithShadow>
        </Col>
    )
}

export default Product