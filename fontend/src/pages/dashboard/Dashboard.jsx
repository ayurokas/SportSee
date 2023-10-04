import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Greetings from '../../components/greetings/Greetings';
import DailyActivity from '../../components/graphs/dailyactivity/DailyActivity';
import AverageSessionTime from '../../components/graphs/averagesession/AverageSessionTime';
import Performances from '../../components/graphs/performance/Performances';
import Score from '../../components/graphs/score/Score';
import classes from './Dashboard.module.css';
import KeyDataCardsContainer from '../../components/keydatacard/KeyDataCardsContainer';
import getProfile from '../../service/userRequest';

function Dashboard() {
    const [userModel, setUserModel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Récupération de l'id de l'URL
    const { id } = useParams();

    // Navigation pour la redirection
    const navigate = useNavigate();

    // Titre de la page
    const pageTitle = 'Dashboard';
    document.title = `SportSee - ${pageTitle}`;

    // Récupération du userModel
    useEffect(() => {
        setIsLoading(true);
        getProfile(id)
            .then((model) => {
                setUserModel(model);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError("Une erreur s'est produite lors de la récupération des données.");
                setIsLoading(false);
                navigate('/404'); // Redirection vers la page d'erreur
            });
    }, [id, navigate]);

    return (
        <div className={classes.dashboard}>
            {isLoading && <p>Chargement...</p>}
            {error && <p>{error}</p>}
            {userModel && !isLoading && !error && (
                <>
                    <Greetings firstName={userModel.firstName} />
                    <section className={classes.dashboard_graphs}>
                        <DailyActivity sessions={userModel.dailyActivity} />
                        <AverageSessionTime sessions={userModel.sessionLength} />
                        <Performances performances={userModel.performances} />
                        <Score todayScore={userModel.score} />
                        <KeyDataCardsContainer 
                            calorieCount={userModel.calorieCount} 
                            proteinCount={userModel.proteinCount} 
                            carbohydrateCount={userModel.carbohydrateCount} 
                            lipidCount={userModel.lipidCount} 
                        />
                    </section>
                </>
            )}
        </div>
    )
}

export default Dashboard;
