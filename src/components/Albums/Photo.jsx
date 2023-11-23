import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Photo() {
  const [photo, setPhoto] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const getPhoto = async () => {
      const response = await fetch(`http://localhost:3000/photos/${id}`);
      const data = await response.json();
      setPhoto(data);
    };
    getPhoto();
  }, []);
  if (photo === null) {
    return <p>loding...</p>;
  }
  return <img src={photo.url} alt="" />;
}
export default Photo;
