// import React, { useEffect } from 'react';

// const BreathingSection = () => {
//   useEffect(() => {
//     const container = document.getElementById('container');
//     const text = document.getElementById('text');

//     const totalTime = 7500;
//     const breatheTime = (totalTime / 5) * 2;
//     const holdTime = totalTime / 5;

//     function breathAnimation() {
//       text.innerText = 'Breathe In!';
//       container.classList.add('grow');
//       container.classList.remove('shrink');

//       setTimeout(() => {
//         text.innerText = 'Hold';

//         setTimeout(() => {
//           text.innerText = 'Breathe Out!';
//           container.classList.add('shrink');
//           container.classList.remove('grow');
//         }, holdTime);
//       }, breatheTime);
//     }

//     breathAnimation();
//     const interval = setInterval(breathAnimation, totalTime);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-[#224941] text-white font-montserrat overflow-hidden">
//       <div
//         id="container"
//         className="container flex items-center justify-center w-72 h-72 relative"
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-[#010f1c] rounded-full z-[-1]" />
//         <div
//           className="absolute top-[-10px] left-[-10px] w-[320px] h-[320px] rounded-full
//             bg-gradient-conic from-[#55b7a4] via-[#4ca493] via-[40%] to-[#2a5b52]"
//         />
//         <div className="absolute top-[-40px] left-[140px] w-5 h-48 pointer-container animate-rotate transform-origin-bottom-center">
//           <span className="block w-5 h-5 bg-white rounded-full"></span>
//         </div>
//       </div>
//       <p id="text" className="mt-5 text-2xl">
//         Breathe In!
//       </p>
//     </div>
//   );
// };

// export default BreathingSection;





// import React, { useEffect } from 'react';

// const BreathingSection = () => {
//   useEffect(() => {
//     const container = document.getElementById('container');
//     const text = document.getElementById('text');

//     const totalTime = 7500;
//     const breatheTime = (totalTime / 5) * 2;
//     const holdTime = totalTime / 5;

//     function breathAnimation() {
//       text.innerText = 'Breathe In';
//       container.classList.add('animate-grow');
//       container.classList.remove('animate-shrink');

//       setTimeout(() => {
//         text.innerText = 'Hold';

//         setTimeout(() => {
//           text.innerText = 'Breathe Out';
//           container.classList.add('animate-shrink');
//           container.classList.remove('animate-grow');
//         }, holdTime);
//       }, breatheTime);
//     }

//     breathAnimation();
//     const interval = setInterval(breathAnimation, totalTime);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-[#224941] text-white font-montserrat overflow-hidden">
//       <div
//         id="container"
//         className="flex items-center justify-center w-70 h-70 relative transition-transform duration-[5s] ease-in-out"
//       >
//         <div className="absolute w-full h-full bg-[#010f1c] rounded-full animate-pulse" />
//         <div
//           className="absolute w-[320px] h-[320px] rounded-full
//             bg-gradient-to-r from-[#55b7a4] via-[#4ca493] to-[#2a5b52] opacity-80 animate-spin-slow"
//         />
//         <div className="absolute w-5 h-5 bg-white rounded-full animate-ping" style={{ top: '-20px' }} />
//       </div>
//       <p id="text" className="mt-8 text-2xl "> {/* Adjusted margin here */}
       
//       </p>
//     </div>
//   );
// };

// export default BreathingSection;





// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// export default function BreathingExercise() {
//   const [phase, setPhase] = useState('inhale');
//   const [counter, setCounter] = useState(4);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isActive) {
//       timer = setInterval(() => {
//         setCounter((prev) => {
//           if (prev === 1) {
//             setPhase((currentPhase) => {
//               switch (currentPhase) {
//                 case 'inhale':
//                   return 'hold';
//                 case 'hold':
//                   return 'exhale';
//                 case 'exhale':
//                   return 'inhale';
//                 default:
//                   return 'inhale';
//               }
//             });
//             return phase === 'hold' ? 7 : 4;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [phase, isActive]);

//   const toggleExercise = () => setIsActive(!isActive);

//   return (
//     <div className="text-center p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-6 text-blue-600">Breathing Exercise</h2>
//       <motion.div
//         className="text-8xl mb-8"
//         animate={{ scale: phase === 'inhale' ? 1.5 : phase === 'hold' ? 1.2 : 1 }}
//         transition={{ duration: 2 }}
//       >
//         {phase === 'inhale' ? '😤' : phase === 'hold' ? '😶' : '😮‍💨'}
//       </motion.div>
//       <p className="text-2xl mb-6 text-gray-700">
//         {phase.charAt(0).toUpperCase() + phase.slice(1)} for {counter} seconds
//       </p>
//       <button
//         onClick={toggleExercise}
//         className={`px-6 py-3 rounded-full text-white font-semibold transition-colors ${
//           isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
//         }`}
//       >
//         {isActive ? 'Stop' : 'Start'} Exercise
//       </button>
//     </div>
//   );
// }






import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BreathingExercise() {
  const [phase, setPhase] = useState('inhale');
  const [counter, setCounter] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(0);
  const [leaves, setLeaves] = useState(0); // Track number of leaves
  const [totalScore, setTotalScore] = useState(0); // Total score state

  useEffect(() => {
    const savedScore = localStorage.getItem('breathingExerciseScore');
    const savedLeaves = localStorage.getItem('breathingExerciseLeaves');
    const savedActiveState = localStorage.getItem('breathingExerciseIsActive');
    const savedTotalScore = localStorage.getItem('totalScore');

    if (savedScore) setScore(Number(savedScore));
    if (savedLeaves) setLeaves(Number(savedLeaves));
    if (savedActiveState === 'true') setIsActive(true);
    if (savedTotalScore) setTotalScore(Number(savedTotalScore));
  }, []);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setCounter((prev) => {
          if (prev === 1) {
            setPhase((currentPhase) => {
              switch (currentPhase) {
                case 'inhale':
                  handleScoreAndLeaf('inhale');
                  return 'hold';
                case 'hold':
                  handleScoreAndLeaf('hold');
                  return 'exhale';
                case 'exhale':
                  handleScoreAndLeaf('exhale');
                  return 'inhale';
                default:
                  return 'inhale';
              }
            });
            return phase === 'hold' ? 7 : 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [phase, isActive]);

  const toggleExercise = () => {
    const newIsActive = !isActive;
    setIsActive(newIsActive);
    localStorage.setItem('breathingExerciseIsActive', newIsActive.toString());
  };

  const handleScoreAndLeaf = (phaseType) => {
    let newScore = score;
    let newLeaves = leaves;
    let newTotalScore = totalScore;

    switch (phaseType) {
      case 'inhale':
        newScore += 1;
        newLeaves += 1;
        newTotalScore += 1;
        break;
      case 'hold':
        newScore += 2;
        newLeaves += 1;
        newTotalScore += 2;
        break;
      case 'exhale':
        newScore += 1;
        newLeaves += 1;
        newTotalScore += 1;
        break;
      default:
        break;
    }

    setScore(newScore);
    setLeaves(newLeaves);
    setTotalScore(newTotalScore);

    localStorage.setItem('breathingExerciseScore', newScore);
    localStorage.setItem('breathingExerciseLeaves', newLeaves);
    localStorage.setItem('totalScore', newTotalScore);
  };

  const handleReset = () => {
    setScore(0);
    setLeaves(0);
    setIsActive(false);
    setPhase('inhale');
    setCounter(4);
    setTotalScore(0);
    localStorage.setItem('breathingExerciseScore', 0);
    localStorage.setItem('breathingExerciseLeaves', 0);
    localStorage.setItem('breathingExerciseIsActive', 'false');
    localStorage.setItem('totalScore', 0);
  };

  return (
    <div className="text-center p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Breathing Exercise</h2>
      <motion.div
        className="text-8xl mb-8"
        animate={{ scale: phase === 'inhale' ? 1.5 : phase === 'hold' ? 1.2 : 1 }}
        transition={{ duration: 2 }}
      >
        {phase === 'inhale' ? '😤' : phase === 'hold' ? '😶' : '😮‍💨'}
      </motion.div>
      <p className="text-2xl mb-6 text-gray-700">
        {phase.charAt(0).toUpperCase() + phase.slice(1)} for {counter} seconds
      </p>
      <button
        onClick={toggleExercise}
        className={`px-6 py-3 rounded-full text-white font-semibold transition-colors ${
          isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isActive ? 'Stop' : 'Start'} 
      </button>
      <button
        onClick={handleReset}
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors mt-4"
      >
        Reset
      </button>

      {/* Displaying the tree with leaves */}
      <div className="mt-8">
        <h3 className="text-2xl mb-4 text-blue-600">Progress</h3>
        <div className="flex justify-center items-center">
          <div className="tree-container relative">
            <div className="trunk w-10 h-40 bg-brown-600 rounded-b-lg absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="leaves absolute bottom-16 left-1/2 transform -translate-x-1/2 flex">
              {Array.from({ length: leaves }).map((_, index) => (
                <div
                  key={index}
                  className="leaf bg-white-500 rounded-full w-6 h-6 mx-1"
                  style={{
                    animation: 'leafFall 1s ease-in-out forwards',
                    animationDelay: `${index * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
