// import React, { useState, useEffect } from "react";
// import './App.css';
// import Portfolio from './Component/Portfolio';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [percentage, setPercentage] = useState(0);
//   const [loadingDuration, setLoadingDuration] = useState(5000);

//   useEffect(() => {
//     const cursorRing = document.createElement("div");
//     cursorRing.classList.add("cursor-ring");
//     document.body.appendChild(cursorRing);

//     let mouseX = 0;
//     let mouseY = 0;
//     let cursorX = 0;
//     let cursorY = 0;

//     const updateCursorPosition = (event) => {
//       mouseX = event.clientX;
//       mouseY = event.clientY;
//       cursorRing.style.opacity = "1";
//     };

//     const animateCursor = () => {
//       cursorX += (mouseX - cursorX) * 0.2;
//       cursorY += (mouseY - cursorY) * 0.2;

//       cursorRing.style.left = `${cursorX}px`;
//       cursorRing.style.top = `${cursorY}px`;

//       requestAnimationFrame(animateCursor);
//     };

//     const handleHover = (event) => {
//       const { width, height } = event.target.getBoundingClientRect();
//       cursorRing.style.width = `${width}px`;
//       cursorRing.style.height = `${height}px`;

//       const borderRadius = window.getComputedStyle(event.target).borderRadius;
//       cursorRing.style.borderRadius = borderRadius;
//     };

//     const resetCursor = () => {
//       cursorRing.style.width = "40px";
//       cursorRing.style.height = "40px";
//       cursorRing.style.borderRadius = "50%";
//     };

//     document.addEventListener("mousemove", updateCursorPosition);

//     const addHoverListeners = () => {
//       document.querySelectorAll("button, a , .close-button").forEach((element) => { 
//         element.addEventListener("mouseenter", handleHover);
//         element.addEventListener("mouseleave", resetCursor);
//       });
//     };

//     addHoverListeners();

//     const observer = new MutationObserver(addHoverListeners);
//     observer.observe(document.body, { childList: true, subtree: true });

//     animateCursor();

//     return () => {
//       document.removeEventListener("mousemove", updateCursorPosition);
//       document.querySelectorAll("button, a , .close-button").forEach((element) => {
//         element.removeEventListener("mouseenter", handleHover);
//         element.removeEventListener("mouseleave", resetCursor);
//       });
//       observer.disconnect();
//       document.body.removeChild(cursorRing);
//     };
// }, []);


//   useEffect(() => {
//     if (navigator.connection) {
//       const connection = navigator.connection;
//       const { effectiveType, downlink } = connection;

//       if (effectiveType === "2g" || effectiveType === "3g") {
//         setLoadingDuration(10000);
//       } else if (effectiveType === "4g") {
//         setLoadingDuration(5000);
//       } else if (effectiveType === "wifi" && downlink < 1) {
//         setLoadingDuration(7000);
//       } else {
//         setLoadingDuration(3000);
//       }
//     } else {
//       setLoadingDuration(5000);
//     }

//     const loadingInterval = setInterval(() => {
//       setPercentage((prevPercentage) => {
//         if (prevPercentage >= 100) {
//           clearInterval(loadingInterval);
//           setLoading(false);
//           return 100;
//         }
//         return prevPercentage + 1;
//       });
//     }, loadingDuration / 100);

//     return () => clearInterval(loadingInterval);
//   }, [loadingDuration]);

//   return (
//     <div className="App">
//       {loading ? (
//         <div className="loading-screen">
//           <div className="progress-container">
//             <div
//               className="progress-bar"
//               style={{ width: `${percentage}%` }}
//             ></div>
//           </div>
//           <div className="progress-text">Loading {percentage}%</div>
//         </div>
//       ) : (
//         <Portfolio />
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import './App.css';
import Portfolio from './Component/Portfolio';
import Preloader from './Component/Preloader';

function App() {

  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const cursorRing = document.createElement("div");
    cursorRing.classList.add("cursor-ring");
    document.body.appendChild(cursorRing);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursorPosition = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursorRing.style.opacity = "1";
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      cursorRing.style.left = `${cursorX}px`;
      cursorRing.style.top = `${cursorY}px`;

      requestAnimationFrame(animateCursor);
    };

    const handleHover = (event) => {
      const { width, height } = event.target.getBoundingClientRect();
      cursorRing.style.width = `${width}px`;
      cursorRing.style.height = `${height}px`;

      const borderRadius = window.getComputedStyle(event.target).borderRadius;
      cursorRing.style.borderRadius = borderRadius;
    };

    const resetCursor = () => {
      cursorRing.style.width = "40px";
      cursorRing.style.height = "40px";
      cursorRing.style.borderRadius = "50%";
    };

    document.addEventListener("mousemove", updateCursorPosition);

    const addHoverListeners = () => {
      document.querySelectorAll("button, a , .close-button").forEach((element) => {
        element.addEventListener("mouseenter", handleHover);
        element.addEventListener("mouseleave", resetCursor);
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    animateCursor();

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.querySelectorAll("button, a , .close-button").forEach((element) => {
        element.removeEventListener("mouseenter", handleHover);
        element.removeEventListener("mouseleave", resetCursor);
      });
      observer.disconnect();
      document.body.removeChild(cursorRing);
    };
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


  return (
    <div className="App">
      {/* <Preloader/> */}
      {/* {loading ? <Preloader /> : <Portfolio />} */}
      <Portfolio/>
    </div>
  );
}

export default App;
