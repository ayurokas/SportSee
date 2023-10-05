import React from 'react';
import PropTypes from 'prop-types';
import classes from '../keydatacard/KeyDataCard.module.css';

/**
 * Composant KeyDataCard pour afficher une carte avec des données clés.
 * 
 * @param {number} count - La quantité de la donnée clé.
 * @param {string} unit - L'unité de la donnée clé.
 * @param {string} type - Le type de la donnée clé.
 * @param {string} color - La couleur de l'icône.
 * @param {string} icon - L'URL de l'icône associée à la donnée clé.
 */

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

KeyDataCard.propTypes = {
    count: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}


export default KeyDataCard;
