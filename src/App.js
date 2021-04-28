import React, { useState, useEffect } from "react";
import { API_KEY } from "./request";
import Image from "./components/Image";
import Search from "./components/Search";

function App() {
  const [images, setImages] = useState([]);
  const [isLoadinging, setIsLoadinging] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fectData = async () => {
      const request = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo
      `);
      const _images = await request.json();
      setImages(_images.hits);
      setIsLoadinging(false);
    };
    fectData();
  }, [term]);

  console.log(images);

  return (
    <div className="container mx-auto">
      <Search/>
      {isLoadinging ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => {
            return <Image key={image.id} image={image} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
