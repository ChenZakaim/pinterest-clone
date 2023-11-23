import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { handleFetch } from "../../fetchHandl";

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const [myPhotos, setMyPhotos] = useState();
  const { user } = useContext(UserContext);
  const { id = 0 } = useParams();
  useEffect(() => {
    try {
      handleFetch(`/albums?userId=${user.id}`, "GET", undefined).then(
        (data) => {
          setAlbums(data);
        }
      );
    } catch (error) {
      console.error("Error fetching album data:", error);
    }
  }, []);

  useEffect(() => {
    try {
      handleFetch(`/photos?albumId=${id}`, "GET", undefined).then((data) => {
        console.log("data: ", data);

        setMyPhotos(data);
      });
    } catch (error) {
      console.error("Error fetching album data:", error);
    }
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
