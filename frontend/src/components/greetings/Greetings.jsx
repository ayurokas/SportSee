import React from 'react';
import PropTypes from 'prop-types';
import classes from '../greetings/Greetings.module.css';

/**
 * Composant Greetings pour afficher un message de bienvenue à l'utilisateur.
 * 
 * @param {string} firstName - Le prénom de l'utilisateur.
 */


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

Greetings.propTypes = {
    firstName: PropTypes.string.isRequired
}


export default Greetings;
