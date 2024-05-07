import React from 'react';
import ImageOne from '../components/ImageOne';
import ImageTwo from '../components/ImageTwo';
import ImageThree from '../components/ImageThree';

function App() {
    return (
    <div>
        <h1>Image Gallery</h1>
        <div >
        <ImageOne/>
        <ImageTwo/>
        <ImageThree/>
        </div>
    </div>
    )
}

export default App