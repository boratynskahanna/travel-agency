import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';


const OrderForm = props => (
  <Row>
    <Col xs={12}>    
      <OrderSummary cost={props.cost} options={props.options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.string,
  cost: PropTypes.object,
};

export default OrderForm;