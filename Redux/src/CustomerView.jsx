import React from 'react';
import { useSelector } from 'react-redux';
import { deleteCustomer } from './Slices/CustomerSlices';
import { useDispatch } from 'react-redux';

export default function CustomerView() {
    const customers = useSelector((state) => state.customer);
    const dispatch = useDispatch();

    function deleteHandler(index) {
        dispatch(deleteCustomer(index))
    }

    return <div>
        <h3>Customer list</h3>
        <ul>
            {
                customers.map((customer, index) => <li key={index}>{customer}<button onClick={() => deleteHandler(index)}>delete</button> </li>)

            }
        </ul>
    </div>
}