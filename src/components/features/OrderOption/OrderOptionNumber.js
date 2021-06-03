import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({setOptionValue, currentValue, limits, price}) => (
  <div className={styles.number}>
    <input
      type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  setOrderOption: PropTypes.func,
  min: PropTypes.string,
  max: PropTypes.string,
  price: PropTypes.string,
  limits: PropTypes.object,
};

export default OrderOptionNumber;