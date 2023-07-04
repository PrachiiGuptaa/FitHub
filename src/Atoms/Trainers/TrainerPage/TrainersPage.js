import React from 'react';
import styles from './TrainersPage.module.css';
import { useNavigate } from 'react-router-dom';

function Trainers() {
  const navigate = useNavigate();

  function handleHome() {
    navigate('/');
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
    {
      name: 'Shubham Khanna',
      image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Auburn&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Red&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Light',
    },
    {
      name: 'Rhea Mehra',
      image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairMiaWallace&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Pale',
    },
    {
      name: 'Kartik Joshi',
      image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Squint&eyebrowType=Default&mouthType=Smile&skinColor=Pale',
    },
    {
      name: 'Vedika Sharma',
      image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&clotheColor=Blue03&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Pale',
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Meet our whole Team</h2>
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
        <button onClick={handleHome}>Back to Home</button>
      </span>
    </>
  );
}

export default Trainers;
