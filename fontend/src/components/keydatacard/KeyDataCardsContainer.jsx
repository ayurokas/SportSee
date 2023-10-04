import React from 'react';
import PropTypes from 'prop-types';
import energyIcon from './../../assets/energy.svg';
import chickenIcon from './../../assets/chicken.svg';
import appleIcon from './../../assets/apple.svg';
import cheeseburgerIcon from './../../assets/cheeseburger.svg';
import classes from '../keydatacard/KeyDataCardsContainer.module.css';
import KeyDataCard from './KeyDataCard';

KeyDataCardsContainer.propTypes = {
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
}

function KeyDataCardsContainer({ calorieCount, proteinCount, carbohydrateCount, lipidCount, }) {

    return (
        <div className={classes.dashboard_graphs_info_cards}>
            <KeyDataCard count={calorieCount} unit="kCal" type="Calories" color="rgba(255, 0, 0, 0.066)" icon={energyIcon} />
            <KeyDataCard count={proteinCount} unit="g" type="Proteines" color="rgba(74, 184, 255, 0.066)" icon={chickenIcon} />
            <KeyDataCard count={carbohydrateCount} unit="g" type="Glucides" color="rgba(249, 206, 35, 0.066)" icon={appleIcon} />
            <KeyDataCard count={lipidCount} unit="g" type="Lipides" color="rgba(253, 81, 129, 0.066)" icon={cheeseburgerIcon} />
        </div>
    )
}


export default KeyDataCardsContainer;
