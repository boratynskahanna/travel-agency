import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div className={styles.component}>
    <DatePicker
      className={styles.input}
      value={currentValue}
      selected={currentValue}
      onChange={setOptionValue}
      placeholderText={'Choose date of trip'}
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;