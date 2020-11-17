import React from 'react';
import useWebAnimations, {bounce} from "@wellyshen/use-web-animations";
import './App.css'
function Example03() {
    const { ref, playState } = useWebAnimations({...bounce})
  return (
    <div className="container">
        <div>Animation state : {playState}</div>
        <div ref={ref} className = "element">
            Hello World
        </div>
    </div>
  );
}

export default Example03;
