import React from 'react';

//Styles
import styles from "./Services.module.css";

const Services = ({image, title, subtitle}) => {
    return (
        <div className={styles.service}>
            <div>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
            <div>
                <img src={image} alt="services" />
            </div>
        </div>
    );
};

export default Services;