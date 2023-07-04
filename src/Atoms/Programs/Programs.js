import React from 'react';
import styles from './Programs.module.css';
import Carousel from 'better-react-carousel';

function Programs() {

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.programTitle}>Training Programs</h2>
      <p className={styles.description}>
        Discover a range of training programs at our gym designed to help you achieve your fitness goals. From weightlifting to cardio, yoga to HIIT, our programs cater to all levels and interests. Join us and transform your fitness journey today!
      </p>
      <Carousel cols={4} rows={1} gap={10} loop>

        <Carousel.Item>
          <div className={styles.carouselItem}>
            <img className={styles.programImage} src="https://hips.hearstapps.com/hmg-prod/images/yoga-for-beginners-main-1582136732.jpg?crop=0.8927841075080338xw:1xh;center,top&resize=1200:*" alt="Yoga" />
            <p className={styles.programName}>Yoga</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.carouselItem}>
            <img className={styles.programImage} src="https://www.mensjournal.com/.image/t_share/MTk2MTM3Mjk2NTQ5NTIwNTI5/_main_liftlift.jpg" alt="Weightlifting" />
            <p className={styles.programName}>Weightlifting</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.carouselItem}>
            <img className={styles.programImage} src="https://indiaeducationdiary.in/wp-content/uploads/2023/04/70b32dbd278afe846f41a4eaae064a8a_M.jpg" alt="Cardiovascular" />
            <p className={styles.programName}>Cardiovascular</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.carouselItem}>
            <img className={styles.programImage} src="https://media.self.com/photos/5c10255b2f04d8625a2fbb64/4:3/w_2560%2Cc_limit/women-with-dumbbells.jpg" alt="High-Intensity Interval Training" />
            <p className={styles.programName}>High-Intensity Interval Training</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.carouselItem}>
            <img className={styles.programImage} src="https://bizimages.withfloats.com/actual/5b1f64810c1c510a64ff73c0.jpg" alt="Zumba and Dance" />
            <p className={styles.programName}>Zumba and Dance</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.carouselItem}>
            <img className={styles.programImage} src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-79149482/79149482.jpg" alt="Spin and Cycling" />
            <p className={styles.programName}>Spin and Cycling</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.carouselItem}>
            <img className={styles.programImage} src="https://stylesatlife.com/wp-content/uploads/2019/05/Best-Aerobic-Exercises.jpg.webp" alt="Aerobics" />
            <p className={styles.programName}>Aerobics</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.carouselItem}>
            <img className={styles.programImage} src="https://in2training.fit/wp-content/uploads/2017/06/PHOTO-2022-09-19-13-45-15.jpg" alt="CrossFit" />
            <p className={styles.programName}>CrossFit</p>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Programs;