// create your App component here
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  // State to hold the dog image URL
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      });
    }, []);
    // Render the image or a loading message
    if(loading) return <p>Loading...</p>;

  return (<div>
    <img src={dogImage} alt="A Random Dog" />
    </div>);
}

export default App;