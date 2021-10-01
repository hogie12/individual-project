import React from "react";
import GamesCard from "../component/card/card";
import { Container } from "react-bootstrap";
import Nav from "../component/nav";

export default function FavoritePage() {
  const data = JSON.parse(localStorage.getItem("session"));
  console.log(data);
  return (
    <Container className="text-light">
      <Nav />
      <h3 className="text-center">
        Showing All Favorites
        <span className="text-danger"> Games</span>
      </h3>
      {data ? (
        <>
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
        </>
      ) : (
        <>
          <div
            className="d-flex justify-content-center mt-5"
            style={{ height: "75vh" }}
          >
            <h4>No Favorites Found</h4>
          </div>
        </>
      )}
    </Container>
  );
}
