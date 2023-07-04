import React from 'react';
import styles from './Pricing.module.css';

function Pricing() {
  const cards = [
    {
      plan: 'Basic',
      price: '$9.99/month',
      features: ['Access to gym facilities', 'Fitness assessment', 'Group classes'],
    },
    {
      plan: 'Pro',
      price: '$19.99/month',
      features: ['Access to gym facilities', 'Fitness assessment', 'Group classes', 'Personal trainer', 'Nutrition consultation'],
    },
    {
      plan: 'Premium',
      price: '$29.99/month',
      features: ['Access to gym facilities', 'Fitness assessment', 'Group classes', 'Personal trainer', 'Nutrition consultation', 'SPA access'],
    },
  ];

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <div className={styles.main}>
      <h2 className={styles.heading}>Select your Plan</h2>
      <p className={styles.description}>Choose the perfect plan that suits your fitness goals and preferences. Each plan comes with its unique set of features and benefits. Select the plan that best fits your needs and start your fitness journey today!</p>
      <div className={styles.cards}>
        {cards.map((options, index) => (
          <div className={styles.pass} key={index}>
            <h3>{options.plan}</h3>
            <p>{options.price}</p>
            <ul>
              {options.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button>Choose Plan</button>

          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Pricing;
