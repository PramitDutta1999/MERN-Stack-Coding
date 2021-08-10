import React from 'react';
import Child from './Child';
function Parent() {
    return <div>
        <h1>This is parent component</h1>
        <Child country='Bagladesh' game='cricket' />
    </div>
}
export default Parent