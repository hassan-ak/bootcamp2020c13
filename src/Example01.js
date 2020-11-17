import React, {useRef, useEffect} from 'react';

export const Example01 = () => {
    const inputE1 = useRef(null);
    useEffect(() => {
      inputE1.current.focus();
    },[])
    return (
      <div className="container" >
        Name: 
        <input ref={inputE1} type="text"/>
      </div>
    );
  }
