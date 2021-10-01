import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "react-bootstrap";
import { getAllGames } from "../store/action";
import GamesCard from "../component/card/card";
import "./scroll.css";

export default function Homepage() {
  const { data, isLoading } = useSelector((state) => state.allGames);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [tittle, setTittle] = useState("");
  const [judul, setJudul] = useState("");
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const res = await axios.get(
      `https://api.rawg.io/api/genres?key=${process.env.REACT_APP_API_KEY}`
    );
    setCategories(res.data.results);
  };

  useEffect(() => {
    dispatch(getAllGames(page, tittle));
    fetchCategories();
  }, [dispatch, tittle, page]);

  return (
    <Container className="text-light">
      <h3 className="text-center">
        {judul === "" ? "Show All" : `${judul}`}{" "}
        <span className="text-danger">Games</span>
      </h3>
      {isLoading ? (
        <div
          className="d-flex justify-content-center mt-5"
          style={{ height: "75vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <>
          <h4 className="mb-3">Categories :</h4>
          <div
            className="d-flex scroll mb-3"
            style={{ overflow: "scroll", overflowY: "hidden" }}
          >
            <Button
              variant="danger"
              className="me-3 mb-3"
              style={{ borderRadius: "25px" }}
              onClick={() => [setTittle(""), setJudul("")]}
            >
              All Games
            </Button>
            {categories.map((data, idx) => (
              <Button
                variant="danger"
                className="me-3 mb-3"
                style={{ borderRadius: "25px" }}
                key={idx}
                onClick={() => [setTittle(data.slug), setJudul(data.name)]}
              >
                {data.name}
              </Button>
            ))}
          </div>
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
          <div className="text-center m-5 fw-bold">
            <Button
              variant="danger"
              className="me-3"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              PREVIOUS
            </Button>
            <Button variant="danger" onClick={() => setPage(page + 1)}>
              NEXT
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}
