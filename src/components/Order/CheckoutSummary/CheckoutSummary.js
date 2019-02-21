import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div>
            <div className={classes.CheckoutSummary}>
            <h2>We hope it tastes well!</h2>
                <div className={classes.BurgerAuth}>
                    <Burger ingredients={props.ingredients} />
                    <div className={classes.CheckoutButtons}>
                        <Button
                            btnType="Danger"
                            clicked={props.checkoutCancelled}>CANCEL</Button>
                        <Button
                            btnType="Success"
                            clicked={props.checkoutContinued}>CONTINUE</Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default checkoutSummary;