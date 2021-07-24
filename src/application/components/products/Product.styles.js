import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CardWithShadow = styled(Card)`
    transition: all 0.5s;
    border-radius: .75rem;
    border-color: transparent;
    box-shadow: 0 0.2rem .2rem rgb(63 120 225 / 25%);
    &:hover {
        box-shadow: 0 0.5rem 1rem rgb(63 120 225 / 35%)
    }
`;

export const CardImageContainer = styled.div `
    overflow: hidden;
    border: .5rem solid #fff;
    border-radius: .75rem;
`;

export const CardImage = styled.div `
    height: 200px;
    transition: all 0.5s;
    background-color: #fff;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: .75rem;
    background-image: url(${props => props.image});
    &:hover {
        transform: scale(1.4);
    }
`;