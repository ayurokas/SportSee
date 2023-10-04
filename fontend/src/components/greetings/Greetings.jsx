import React from 'react';
import PropTypes from 'prop-types';
import classes from '../greetings/Greetings.module.css';

Greetings.propTypes = {
    firstName: PropTypes.string.isRequired
}


function Greetings({ firstName }) {
    return (
        <div className={classes.greetings}>
            <div className={classes.greetings_title}>
                <h2 className={classes.greetings_title_bonjour}>Bonjour </h2>
                {firstName && <h2 className={classes.greetings_title_name}>{firstName}</h2>}
            </div>
            {firstName && <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>}
        </div>
    )
}

export default Greetings;
