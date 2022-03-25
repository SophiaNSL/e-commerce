import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';


const ShippingScreen = ({history}) => {

    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
  
    const [street, setStreet] = useState(shippingAddress.street);
    const [suburb, setSuburb] = useState(shippingAddress.suburb);
    const [state, setState] = useState(shippingAddress.state);
    const [country, setCountry] = useState(shippingAddress.country);
    const [postCode, setPostCode] = useState(shippingAddress.postCode);


    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({street, suburb, state, country, postCode}));
        history.push('/payment');
    }



    return (
    
    <FormContainer>
        <CheckoutSteps step1 step2/>
        <h1>Shipping</h1>     
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='street'>
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter street'
                    value={street}
                    required
                    onChange= {e => setStreet(e.target.value)}
                    >
                    </Form.Control>
            </Form.Group>

            <Form.Group controlId='suburb'>
                    <Form.Label>Suburb</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter suburb'
                    value={suburb}
                    required
                    onChange= {e => setSuburb(e.target.value)}
                    >
                    </Form.Control>
            </Form.Group>

            <Form.Group controlId='state'>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter state'
                    value={state}
                    required
                    onChange= {e => setState(e.target.value)}
                    >
                    </Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter country'
                    value={country}
                    required
                    onChange= {e => setCountry(e.target.value)}
                    >
                    </Form.Control>
            </Form.Group>

            <Form.Group controlId='postcode'>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter postcode'
                    value={postCode}
                    required
                    onChange= {e => setPostCode(e.target.value)}
                    >
                    </Form.Control>
            </Form.Group>

         

            <Button type='submit' variant='primary' className='my-3'>Continue</Button>

        </Form>
    </FormContainer>
  )
}

export default ShippingScreen