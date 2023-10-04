import React from 'react';
import PropTypes from 'prop-types';
import classes from '../keydatacard/KeyDataCard.module.css';


KeyDataCard.propTypes = {
    count: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}


function KeyDataCard({count, unit, type, color, icon}) {

    return (
        <div className={classes.keydata_card}>
            <div className={classes.keydata_card_icon} style={{backgroundColor: color}}>
                <img src={icon} alt={type}></img>
            </div>
            <div className={classes.keydata_card_text_content}>
                <strong>{count}{unit}</strong>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default KeyDataCard;
