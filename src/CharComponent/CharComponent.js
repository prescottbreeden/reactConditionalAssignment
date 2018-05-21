import React from 'react';

const CharComponent = (props) => {
    return (
        <div 
          className="Char"
          onClick={props.clicked}>
            {props.text}
        </div>
    );
}

export default CharComponent;