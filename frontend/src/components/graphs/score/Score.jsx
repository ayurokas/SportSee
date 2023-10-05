import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import classes from './Score.module.css'

/**
 * Composant Score pour afficher un graphique en anneau représentant le score actuel de l'utilisateur.
 * 
 * @param {number} todayScore - Le score actuel de l'utilisateur (entre 0 et 1).
 */

function Score({todayScore}) {

    let scoreData = {};
    let leftToDo = {};
    let chartData = [];
    if (todayScore) {
        scoreData = {
            "name": "Score",
            "value": todayScore
        }
        leftToDo = {
            "name": "Remaining",
            "value": 1 - todayScore
        }
        chartData = [scoreData, leftToDo];
    }
    const innerCircle = [{
        "name": "innerCircle",
        "value": 1
    }, {
        "name": "innerCircle",
        "value": 0
    }]

    return (
        <div className={classes.score_chart}>
            <p className={classes.piechart_title}>Score</p>
            <div className={classes.piechart_legend}>
                <strong>{100 * todayScore + '%'}</strong>
                <p>de votre objectif</p>
            </div>
            <ResponsiveContainer className={classes.piechart} width='100%' height='100%'>
                <PieChart style={{backgroundColor: '#FBFBFB'}}>
                    <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={80} fill="#FF0000" startAngle={90} endAngle={450} cornerRadius={10}/>
                    <Pie data={innerCircle} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={70} fill="#FFFFFF" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

Score.propTypes = {
    todayScore: PropTypes.number.isRequired
}

export default Score;