import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

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
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.any,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;