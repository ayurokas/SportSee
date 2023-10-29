
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Error.module.css';
import errorImage from './../../assets/error404.svg';

/**
 * Composant Error pour afficher une page d'erreur 404 avec une image d'erreur et un lien de retour à la page d'accueil..
 */

function Error() {

  useEffect(() => {
    const pageTitle = 'Error 404';
    document.title = `SportSee - ${pageTitle}`;
  }, []);

  const errorText = `Oups! La page que vous demandez n'existe pas.`;
  const linkText = "Retourner à la page d'accueil";

  return (
    <div className={classes.error}>
        <img className={classes.error_image} src={errorImage} alt="Erreur 404" />
        <p>{errorText}</p>
        <Link to={'/'}><p>{linkText}</p></Link>
    </div>
  );
}

export default Error;
