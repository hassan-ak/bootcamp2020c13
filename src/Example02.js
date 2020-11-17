import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css'
function Example02() {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes:[
            {transform: "translate(-150px)", background : "red"},
            {transform: "translate(150px)", background : "yellow"}
        ],
        timing: {
            duration: 3000,
            iterations: 2,
            direction: "alternate",
            easing: "ease-in-out"
        },
        onUpdate: ({ playState, animate, animation }) => {
            console.log("palyState : ", {playState})
            console.log("animate : ", {animate})
            console.log("animation : ", {animation})
          },
    });
  return (
    <div className="container">
        <div>Animation state : {playState}</div>
        <div ref={ref} className = "element">
            Hello World
        </div>
        <button onClick = { ()=>{
            getAnimation().play();
        }}>Play</button>
        <button onClick = { ()=>{
            getAnimation().pause();
        }}>Pause</button>
        <button onClick = { ()=>{
            getAnimation().reverse();
        }}>reverse</button>
    </div>
  );
}

export default Example02;
