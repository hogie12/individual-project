import React, { useState } from "react";
import "./header.css";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getGamesBySearch } from "../../store/action";
import { Link } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getGamesBySearch(search));
  };

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div className="d-flex">
            <h2>
              Game<span className="text-danger">List</span>
            </h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="search-input">
            <form
              style={{
                display: "flex",
                justifyContent: "start",
              }}
              className="m-3"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-text"
              />
              <Button variant="outline-danger" className="ms-3" type="submit">
                search
              </Button>
            </form>
          </Nav>
          <Nav>
            <div
              className="m-2"
              style={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Link to="/favorites">
                <Button variant="danger" className="rounded-pill m-1">
                  To My Favorites
                </Button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
