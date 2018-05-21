import React from 'react';

const ValidationComponent = (props) => {
    var validation = ''
    if (props.text.length > 5) {
        validation = "Text long enoguh";
    } else {
        validation = "Text too short";
    } 
    return <p>{validation}</p>
}

export default ValidationComponent;