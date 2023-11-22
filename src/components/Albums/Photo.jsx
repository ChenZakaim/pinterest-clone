import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Photo() {
  const [photo, setPhoto] = useState();
  const { id } = useParams();
  useEffect(() => {}, []);
  return <p>{id}</p>;
}
export default Photo;
