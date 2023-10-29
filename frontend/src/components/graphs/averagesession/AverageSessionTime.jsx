import PropTypes from 'prop-types';
import { AreaChart, XAxis, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import classes from './AverageSessionTime.module.css';
import React, { useState, useRef } from 'react';


/**
 * Composant AverageSessionTime pour afficher un graphique représentant la durée moyenne des sessions.
 * 
 * @param {Object[]} sessions - La liste des sessions à afficher.
 */


function AverageSessionTime({ sessions }) {
// États pour gérer la largeur du rectangle et sa visibilité lors du passage de la souris.
    const [rectangleWidth, setRectangleWidth] = useState(0);
    const [showRectangle, setShowRectangle] = useState(false);
    const containerRef = useRef(null);

    /**
     * Convertit les numéros des jours (1-7) en lettres (L-D).
     * 
     * @param {number} value - Le numéro du jour.
     * @returns {string} La lettre correspondant au jour.
     */

    //Fonction pour remplacer 1,2,...7 par les lettres
    const xAxisTickFormatter = (value) => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[value - 1];
    };

    /**
     * Affiche le texte de la légende pour le graphique.
     * 
     * @returns {React.Element} Le texte de la légende.
     */

    const customTooltip = ({ active, payload }) => {
        if (active && payload) {
            return (
                <div className={`${classes.custom_tooltip} ${classes.tooltip}`}>
                    <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }
    };

    //Fonction qui crée une zone grisée lors du passage de la souris
    const handleMouseMove = e => {
        if (e && e.chartX !== undefined) {
            const cursorX = e.chartX;
            const chartWidth = containerRef.current.current.clientWidth;
            setRectangleWidth(chartWidth - cursorX);
            setShowRectangle(true);
        }
    };

    const handleMouseLeave = () => {
        setShowRectangle(false);
    };
    return (
        <div className={classes.average_session_time_chart} style={{ position: 'relative' }}>
            <ResponsiveContainer width='100%' height='100%' ref={containerRef}>
                <AreaChart data={sessions} style={{ backgroundColor: '#FF0000' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <XAxis dataKey='day' tickFormatter={xAxisTickFormatter} tick={{ fill: '#FFF', opacity: '50%' }} axisLine={false} tickLine={false} />
                    <Tooltip content={customTooltip} cursor={{ opacity: '0' }} />
                    <Legend iconSize={0} verticalAlign="top" formatter={() => <p className={classes.legendText}>Durée moyenne des sessions</p>} />
                    <Area type='basis' dataKey='sessionLength' stroke='url(#lineGradient)' unit=' min' fill='#FFF' fillOpacity={0.05} strokeWidth={2} />
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#FFF" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#FFF" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer>
            {showRectangle && <div className={classes.rectangle} style={{ width: rectangleWidth }} />}
        </div>
    );
}


// aide a valide le type de donne -> si ne correspond pas !AVERTISEMENT!
AverageSessionTime.propTypes = {
    sessions: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.number.isRequired,
            sessionLength: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default AverageSessionTime;