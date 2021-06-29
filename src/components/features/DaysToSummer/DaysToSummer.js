import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';


class DaysToSummer extends React.Component {

  getTimeTillSummer() {
    let currentDate = new Date();
    currentDate = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), 0, 0, 0, 0));
    const summerStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23));
    
    // if it's summer return empty string and do nothing
    if (currentDate.getTime() >= summerStart.getTime() && currentDate.getTime() <= summerEnd.getTime()) return null;
    
    // if it's not summer, then go further and check currentDate is past summer of current year. If yes, change suemrStart year for next year.
    if (currentDate > summerEnd) summerStart.setUTCFullYear(currentDate.getUTCFullYear() + 1);

    // count the seoconds difference between sumsmerStart and currentDate and covert it to days
    const summerDay = Math.floor(summerStart.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

    if (summerDay > 1) return summerDay + ' DAYS';
    else return 'DAY';
  
  }

  render() {
    const days = this.getTimeTillSummer();
    if(!days) return null; 
    else {
      
      return (
        <div className={styles.component}>
        
          <h2 className={styles.title}>{days}</h2>
        </div>
      );
    }
  }
}

DaysToSummer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

  

export default DaysToSummer;