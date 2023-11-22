import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import Album from "./Album";

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const [myPhotos, setMyPhotos] = useState();
  const { user } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/albums?userId=${9}`
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    };

    fetchAlbumData();
  }, []);

  useEffect(() => {
    const fetchAlbumPhotos = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/photos?albumId=${id}`
        );
        const data = await response.json();
        setMyPhotos(data);
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    };

    fetchAlbumPhotos();
  }, [id]);

  if (!albums) {
    return <div>Loading...</div>;
  }
  console.log("albums: ", albums);
  const curentAlbum = albums.find((album) => album.id == id);
  return (
    <>
      <div>
        <h1>albums</h1>
        {curentAlbum?.title}
        <br />

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {myPhotos &&
            myPhotos.map((photo, index) => (
              <div key={index} style={{ maxWidth: "100px", margin: "10px" }}>
                <NavLink to={`/photo/${photo.id}`}>
                  <img
                    src={photo.url}
                    alt={`Photo ${index}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </NavLink>
              </div>
            ))}
        </div>

        <br />

        <nav style={{ display: "flex" }}>
          {albums.map((album, key) => {
            return (
              <div key={key}>
                <NavLink to={`${album.id}`}>{album.title}</NavLink>
                {console.log("album.title: ", album.title)};
              </div>
            );
          })}
        </nav>
      </div>
      ;
    </>
  );
};

export default Albums;
