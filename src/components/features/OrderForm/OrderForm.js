import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripDetails) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    ...tripDetails,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = props => (
  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option} currentValue = {props.options[option.id]} setOrderOption = {props.setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>    
      <OrderSummary cost={props.tripCost} options={props.options}/>
    </Col>
    <Button onClick={() => sendOrder(props.options, props.tripCost, props.tripDetails)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.any,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  name: PropTypes.string,
  tripDetails: PropTypes.object,
};

export default OrderForm;
