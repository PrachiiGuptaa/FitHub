import React from 'react'
import styles from './About.module.css'
import ReactPlayer from 'react-player'

function About() {
  const handleClick = () => {
    alert('Clicked from About Us Section')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container1}>
        <div className={styles.video1}>
        <ReactPlayer
        url='https://www.youtube.com/watch?v=TFO9hBtLVec'
        height="100%"
        width="100%"
        controls
        />
        </div>
        <div className={styles.text1}>
          <h1>About Us</h1>
          <p>"We are a premier fitness destination offering top-notch facilities, expert trainers, and a supportive community. Our mission is to empower individuals to lead healthy and active lifestyles through personalized training and comprehensive programs. Discover the difference at our gym today!"</p>
          <button onClick={handleClick}>Learn More</button>
        </div>
      </div>
      

      <div className={styles.container2}>
        <div className={styles.text2}>
          <h1>Why Choose Us?</h1>
          <p>- Highly qualified and experienced trainers dedicated to helping you achieve your fitness goals.</p>
          <p>- Variety of classes and training options to keep you motivated and engaged on your fitness journey. Choose us for an exceptional fitness experience.</p>
        </div>
        <div className={styles.video2}>
        <ReactPlayer
        url='https://www.youtube.com/watch?v=HnoPHqrdXQ8'
        height="100%"
        width="100%"
        controls
        />
        </div>
      </div>
    </div>
  )
}

export default About