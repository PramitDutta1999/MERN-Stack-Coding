import React from 'react';
function Child(props) {
    return <div>
        <h1>This is child component</h1>
        <h1>The received country is {props.country}</h1>
        <h1>The received game from parent component is {props.game}</h1>
    </div>
}
export default Child