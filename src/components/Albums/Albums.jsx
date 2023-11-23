import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import Album from "./Album";

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const [myPhotos, setMyPhotos] = useState();
  const { user } = useContext(UserContext);
  console.log("user: ", user);
  const { id } = useParams();
  console.log("id: ", id);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/albums?userId=${user.id}`
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

        <nav style={{ display: "flex", justifyContent: "center" }}>
          {albums.map((album, key) => {
            const title = album.title;
            const words = title.split(" ");
            const firstTwoWords = words.slice(0, 2).join(" ");
            return (
              <div key={key} style={{ margin: "0 10px" }}>
                *<NavLink to={`${album.id}`}>{firstTwoWords}</NavLink>*
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
