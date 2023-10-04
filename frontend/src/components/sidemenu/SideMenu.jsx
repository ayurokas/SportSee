import React from 'react';
import classes from "../sidemenu/SideMenu.module.css";
import yogaIcon from "./../../assets//yoga.png";
import swimmingIcon from "./../../assets//swimming.png";
import cyclingIcon from "./../../assets//cycling.png";
import workoutIcon from "./../../assets//workout.png";

function SideMenu() {

    const handleYogaClick = () => {
        console.log("Yoga icon clicked!");
    };

    const handleSwimmingClick = () => {
        console.log("Swimming icon clicked!");
    };

    const handleCyclingClick = () => {
        console.log("Cycling icon clicked!");
    };

    const handleWorkoutClick = () => {
        console.log("Workout icon clicked!");
    };

    return (
        <div className={classes.sidemenu}>
            <div className={classes.sidemenu_buttons}>
                <button onClick={handleYogaClick}>
                    <div className={classes.icon_container}>
                        <img className={classes.sidemenu_buttons_icon} src={yogaIcon} alt="Yoga" />
                    </div>
                </button>
                <button onClick={handleSwimmingClick}>
                    <div className={classes.icon_container}>
                        <img className={classes.sidemenu_buttons_icon} src={swimmingIcon} alt="Swimming" />
                    </div>
                </button>
                <button onClick={handleCyclingClick}>
                    <div className={classes.icon_container}>
                        <img className={classes.sidemenu_buttons_icon} src={cyclingIcon} alt="Cycling" />
                    </div>
                </button>
                <button onClick={handleWorkoutClick}>
                    <div className={classes.icon_container}>
                        <img className={classes.sidemenu_buttons_icon} src={workoutIcon} alt="Workout" />
                    </div>
                </button>
            </div>
            <div className={classes.sidemenu_copyright}>
                <p>Copyright, SportSee 2020</p>
            </div>
        </div>
    );
}

export default SideMenu;
