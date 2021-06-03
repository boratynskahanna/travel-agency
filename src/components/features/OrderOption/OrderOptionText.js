import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue, currentValue}) => (
  <div>
    <input className={styles.input}
      type="text"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      placeholder={'Data to contact'}
    />
  </div>
);

OrderOptionText.propTypes ={
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;