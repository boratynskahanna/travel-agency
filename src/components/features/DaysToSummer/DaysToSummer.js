import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';


class DaysToSummer extends React.Component {
  constructor() {
    super();

    setInterval(() => this.forceUpdate(), 1000);
  }

  getTimeTillSummer() {
    const currentDate = new Date();
    const summerStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23));
    console.log('CurrentDate', currentDate);
    console.log('Summerstart', summerStart);
    console.log('SummerEnd', summerEnd);

    if (
      (currentDate.getUTCMonth() == summerEnd.getUTCMonth() &&
        currentDate.getUTCDate() > summerEnd.getUTCDate()) ||
      currentDate.getUTCMonth() > summerEnd.getUTCMonth() ||
      currentDate.getUTCMonth() < summerStart.getUTCMonth() ||
      (currentDate.getUTCMonth() == summerStart.getUTCMonth() &&
        currentDate.getUTCDate() < summerStart.getUTCDate())
    ) {
      if (
        currentDate.getUTCMonth() > summerEnd.getUTCMonth() ||
        (currentDate.getUTCMonth() == summerEnd.getUTCMonth() &&
          currentDate.getUTCDate > summerEnd.getUTCDate())
      ) {
        summerStart.setUTCFullYear(currentDate.getUTCFullYear() + 1);
      }

      const summerDay = Math.floor(
        (summerStart.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (summerDay > 1) {
        return summerDay + ' DAYS';
      } else {
        return summerDay + 'DAY';
      }
    } else {
      return '';
    }
  }

  render() {
    const days = this.getTimeTillSummer();
    return (
      <div className={styles.component}>
        
        <h2 className={styles.title}>{days}</h2>
      </div>
    );
  }
}

DaysToSummer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

  

export default DaysToSummer;