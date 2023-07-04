// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './HomePage.module.css';
// import Programs from '../../Atoms/Programs/Programs';
// import Trainers from '../../Atoms/Trainers/TrainerSection/Trainers';
// import Pricing from '../../Atoms/Pricing/Pricing';

// function HomePage() {
//   const [showBtn, setShowBtn] = useState(false);

//   return (
//     <>
//       <div className={styles.wrapper}>
//         <div className={styles.text}>
//           <h3>
//             "Unlock your fitness potential. Train with experts, engage in dynamic workouts, and join a supportive community for a healthier you."
//           </h3>
//           {showBtn ? (
//             <>
//               <Link to="/registration">
//                 <button>Registration</button>
//               </Link>
//               <Link to="/login">
//                 <button>Login</button>
//               </Link>
//             </>
//           ) : (
//             <button onClick={() => setShowBtn(true)}>Join with Us</button>
//           )}
//         </div>
//       </div>

//       <div id="programs">
//       <Programs />
//       </div>

//       <div id="trainers">
//       <Trainers />
//       </div>

//       <div id="pricing">
//         <Pricing/>
//       </div>
//     </>
//   );
// }

// export default HomePage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Programs from '../../Atoms/Programs/Programs';
import Trainers from '../../Atoms/Trainers/TrainerSection/Trainers';
import Pricing from '../../Atoms/Pricing/Pricing';

function HomePage() {
  const [showButtons, setShowButtons] = useState(false);
  const isLoggedIn = localStorage.getItem('loggedIn');

  const handleJoinWithUs = () => {
    setShowButtons(true);
  };

  const handleLogout = (e) => {
    localStorage.removeItem('loggedIn');
    setShowButtons(false);
    e.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h3>
            "Unlock your fitness potential. Train with experts, engage in dynamic workouts, and join a supportive community for a healthier you."
          </h3>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            showButtons && (
              <>
                <Link to="/registration">
                  <button>Registration</button>
                </Link>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </>
            )
          )}
          {!isLoggedIn && !showButtons && (
            <button onClick={handleJoinWithUs}>Join with Us</button>
          )}
        </div>
      </div>

      <div id="programs">
        <Programs />
      </div>

      <div id="trainers">
        <Trainers />
      </div>

      <div id="pricing">
        <Pricing />
      </div>
    </>
  );
}

export default HomePage;
