import classes from "../form/Form.module.css";
import { useNavigate } from "react-router-dom";
import maleImage from './../../assets/homme.png';
import femaleImage from './../../assets/femme.png';


/**
 * Composant Form pour afficher le formulaire de connexion pour les utilisateurs.
 */

function Form() {
    const navigate = useNavigate();

    
    /**
     * Gère la soumission du formulaire utilisateur.
     * 
     * @param {Event} event - L'événement de soumission du formulaire.
     * @param {string} userId - L'ID de l'utilisateur.
     */

    const handleUserSubmit = (event, userId) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        if (formJson.api === 'true') {
            localStorage.setItem("dataSrc", 'api');
        } else if (formJson.api === 'false') {
            localStorage.setItem("dataSrc", 'mockedData');
        }
        navigate(`/dashboard/${userId}/`);
    };

    return (
        <div className={classes.login}>
            <h2 className={classes.userCardsTitle}>Page connexion des utilisateurs :</h2>
            <div className={classes.userCards}>
                <form onSubmit={(e) => handleUserSubmit(e, "12")} className={classes.form}>
                    <h3>Karl Dovineau - ID: 12</h3>
                    <img src={maleImage} alt="Karl Dovineau" className={classes.userImage} />
                    <div className={classes.form_radiobuttons}>
                        <label>
                            <input type="radio" name="api" value='true' defaultChecked={true} />
                            API
                        </label>
                        <label>
                            <input type="radio" name="api" value='false' />
                            Mocked Data
                        </label>
                    </div>
                    <button type="submit" className={classes.form_submitbutton}>Connexion</button>
                </form>

                <form onSubmit={(e) => handleUserSubmit(e, "18")} className={classes.form}>
                    <h3>Cecilia Ratorez - ID: 18</h3>
                    <img src={femaleImage} alt="Cecilia Ratorez" className={classes.userImage} />
                    <div className={classes.form_radiobuttons}>
                        <label>
                            <input type="radio" name="api" value='true' defaultChecked={true} />
                            API
                        </label>
                        <label>
                            <input type="radio" name="api" value='false' />
                            Mocked Data
                        </label>
                    </div>
                    <button type="submit" className={classes.form_submitbutton}>Connexion</button>
                </form>

            </div>
        </div>
    )
}
export default Form;