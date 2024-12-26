import React, { useState, useEffect } from "react";
import './App.css';
import Portfolio from './Component/Portfolio';

function App() {

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

  return (
    <div className="App">
      <Portfolio/>
    </div>
  );
}

export default App;
