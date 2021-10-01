import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./detail.css";
import Nav from "../../component/nav";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGamesById } from "../../store/action";
import { RatingView } from "react-simple-star-rating";

export default function DetailPage() {
  const [localStorageData] = useState(
    JSON.parse(localStorage.getItem("session")) || []
  );
  const { data, isLoading } = useSelector((state) => state.gameDetail);
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(
    localStorageData.some((e) => e.id === data.id)
  );
  const dispatch = useDispatch();
  console.log(isFavorite);

  useEffect(() => {
    dispatch(getGamesById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setIsFavorite(localStorageData.some((e) => e.id === data.id));
  }, [data.id, localStorageData]);

  const addToLocalStorage = () => {
    let a = localStorageData;
    a.push(data);
    localStorage.setItem("session", JSON.stringify(a));
    setIsFavorite(true);
  };

  const removeFromLocalStorage = () => {
    let a = localStorageData.filter((fil) => fil.id !== data.id);
    localStorage.setItem("session", JSON.stringify(a));
    setIsFavorite(false);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(34,38,42,7)), url(${data?.background_image}`,
        }}
        className="background"
      >
        <Container>
          <Nav />
          {isLoading ? (
            <>
              <div
                className="d-flex justify-content-center mt-5"
                style={{ height: "80vh" }}
              >
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>{data?.name}</h1>
              <div className="d-flex">
                <RatingView ratingValue={Math.floor(data.rating)} />
                <h5 className="ms-2">{data.reviews_count} Reviews</h5>
              </div>
              {data.genres?.map((data, index) => (
                <Button
                  variant="danger"
                  className="rounded-pill m-1"
                  key={index}
                  disabled
                >
                  {data.name}
                </Button>
              ))}
              <div className="pt-2">
                {isFavorite ? (
                  <Button
                    variant="danger"
                    className="rounded-pill m-1"
                    onClick={removeFromLocalStorage}
                  >
                    Remove From Favorite
                  </Button>
                ) : (
                  <Button
                    variant="danger"
                    className="rounded-pill m-1"
                    onClick={addToLocalStorage}
                    disabled={false}
                  >
                    Add To Favorite
                  </Button>
                )}
              </div>
              <h5 className="pt-3">Description :</h5>
              <p>{data?.description_raw}</p>
              <div className="pt-2 pb-2">
                <h5> Release Date : {data.released}</h5>
              </div>
              <div className="d-lg-flex justify-content-between pb-3">
                <div>
                  <h5>Tags : </h5>
                  <ul>
                    {data?.tags?.map((data, idx) => (
                      <li key={idx}>{data.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Platforms : </h5>
                  <ul>
                    {data?.platforms?.map((data, idx) => (
                      <li key={idx}>{data.platform.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Developers : </h5>
                  <ul>
                    {data?.developers?.map((data, idx) => (
                      <li key={idx}>{data.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Publisher : </h5>
                  <ul>
                    {data?.publishers?.map((data, idx) => (
                      <li key={idx}>{data.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </Container>
      </div>
    </>
  );
}
