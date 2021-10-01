import React, { useState } from "react";
import GamesCard from "../component/card/card";
import { Container } from "react-bootstrap";
import Nav from "../component/nav";

export default function FavoritePage() {
  const [data] = useState(JSON.parse(localStorage.getItem("session")) || []);
  return (
    <Container className="text-light">
      <Nav />
      <h3 className="text-center">
        Showing All Favorites
        <span className="text-danger"> Games</span>
      </h3>
      {data.length < 1 ? (
        <>
          <div
            className="d-flex justify-content-center mt-5"
            style={{ height: "75vh" }}
          >
            <h4>No Favorites Found</h4>
          </div>
        </>
      ) : (
        <>
          {data.length > 3 ? (
            <div className="d-flex flex-wrap justify-content-center">
              {data.map((data, idx) => (
                <div style={{ width: "20rem" }} className="p-3" key={idx}>
                  <GamesCard
                    image={data?.background_image}
                    tittle={data?.name}
                    rating={Math.floor(data.rating)}
                    genres={data.genres}
                    id={data.id}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex flex-wrap justify-content-center" 
            style={{height:"80vh"}}
            >
              {data.map((data, idx) => (
                <div style={{ width: "20rem" }} className="p-3" key={idx}>
                  <GamesCard
                    image={data?.background_image}
                    tittle={data?.name}
                    rating={Math.floor(data.rating)}
                    genres={data.genres}
                    id={data.id}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </Container>
  );
}
