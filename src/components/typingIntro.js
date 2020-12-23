import React from 'react';
import Typist from 'react-typist';
import './layout.scss';

const TypingIntro = () => {
    return (
      <>
        <h1>
        <Typist
          className="h1"
          avgTypingDelay={100}
          startDelay={2000}
        >
          {/* Hi there, I'm Ben. */}
          Nice to meet you...
        </Typist>
        </h1>
      </>
    );
  };

  export default TypingIntro;