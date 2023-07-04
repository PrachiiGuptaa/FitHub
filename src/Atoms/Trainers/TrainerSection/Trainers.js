import React from 'react';
import styles from './Trainers.module.css';
import { useNavigate } from 'react-router-dom';

function Trainers() {
  const navigate = useNavigate();

  function handleSeeMore() {
    navigate('/trainersPage');
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  const trainers = [
    {
      name: 'Sakshi Taneja',
      image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
    },
    {
      name: 'Rohit Arora',
      image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light',
    },
    {
      name: 'Ritika Malhotra',
      image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue02&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Tanned',
    },
    {
      name: 'Shravin Kohli',
      image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Blue03&graphicType=Deer&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light',
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2>Meet our Trainers</h2>
          <p>
            "Get acquainted with our skilled and passionate trainers who are committed to guiding you towards your fitness aspirations. Meet our team and embark on a transformative fitness experience."
          </p>
        </div>
        <div className={styles.images}>
          {trainers.map((trainer, index) => (
            <div key={index} className={styles.trainerItem}>
              <img src={trainer.image} alt={trainer.name} />
              <p className={styles.name}>{trainer.name}</p>
            </div>
          ))}
        </div>
      </div>
      <span className={styles.btn}>
        <button onClick={handleSeeMore}>See More</button>
      </span>
    </>
  );
}

export default Trainers;
