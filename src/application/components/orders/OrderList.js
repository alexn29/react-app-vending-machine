import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, Badge, Image } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

const DataTableContainer = styled.div`
    padding: 1rem;
    background-color: #fff;
    border-radius: .75rem;
    box-shadow: 0 0.2rem .2rem rgb(63 120 225 / 25%);
`;

const OrderList = () => {

    const { products } = useSelector(state => state.order);

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
			cell: (row) => <RowStatus row={row} />,
		},
	];

    return (
        <Container className="my-4">
            <h2 className="my-5">Order list</h2>

            <DataTableContainer>
                <DataTable
                    noHeader
                    columns={columns}
                    data={products}
                    pagination={true}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5,10,20]}
                />
            </DataTableContainer>

        </Container>
    )
}

export default OrderList
