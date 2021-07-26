import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Container, Badge, Image, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { updatePreparationTime, deleteOrders } from '../../redux/actions/OrderActions';

const DataTableContainer = styled.div`
    padding: 1rem;
    background-color: #fff;
    border-radius: .75rem;
    box-shadow: 0 0.2rem .2rem rgb(63 120 225 / 25%);
`;

const RadiusButton = styled(Button)`
    border-radius: 1.5rem;
    min-width: 125px;
`;

const OrderList = () => {

    const { products } = useSelector(state => state.order);
    const dispatch = useDispatch();

    useEffect(() => {

        let interval = setInterval(() => {
            dispatch(updatePreparationTime());
        }, 1000)
        
        return () => {
            clearInterval(interval);
        };

    }, [dispatch, products]);

    const RowImage = ({ row }) => (
		<div className="p-2">
            <Image
                width="75px"
                rounded
                src={row.thumbnail}
                alt={row.name}
            />
        </div>
	)

    const RowStatus = ({ row }) => {
        if (row.status === 'Pending') {
            return <Badge variant="warning">{row.status}</Badge>
        }
        else if (row.status === 'Dispatched') {
            return <Badge variant="success">{row.status}</Badge>
        }
        return null;
    }

    const columns = [
		{
			name: 'Image',
			cell: (row) => <RowImage row={row} />,
		},
        {
			name: 'Name',
			selector: 'name',
			sortable: true,
		},
		{
			name: 'Quantity',
            selector: 'quantity',
			sortable: true,
		},
        {
			name: 'Preparation Time',
			selector: 'preparation_time',
			sortable: true,
		},
		{
			name: 'Status',
            selector: 'status',
			cell: (row) => <RowStatus row={row} />,
            sortable: true,
		},
        {
			name: 'Created At',
			selector: 'createdAt',
            sortable: true,
		},
	];

    const handleDeleteOrders = () => {
        dispatch(deleteOrders());
    }

    return (
        <Container className="my-4">
            
            <div className="d-flex justify-content-between">
                <h2 className="my-5">Order list</h2>
                
                { products.length > 0 && 
                    <RadiusButton
                        variant="danger"
                        size="sm"
                        className="align-self-center"
                        onClick={handleDeleteOrders}>
                        <small>DELETE ORDERS</small>
                    </RadiusButton>
                }

            </div>

            <DataTableContainer>
                <DataTable
                    noHeader
                    columns={columns}
                    data={products}
                    pagination={true}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5,10,20]}
                    defaultSortField="createdAt"
                />
            </DataTableContainer>

        </Container>
    )
}

export default OrderList
