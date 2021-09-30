import React, {useState} from "react";
import "./header.css";
import { Navbar, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getGamesBySearch } from "../../store/action";

export default function Header() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(getGamesBySearch(search))
  }
  
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex">
              <h2>
                Game<span className="text-danger">List</span>
              </h2>
            </div>
          </Navbar.Brand>
          <div className="search-input">
            <form
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              onSubmit = {handleSubmit}
            >
              <input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
              <Button variant="outline-danger" className="ms-3" type="submit">
                search
              </Button>
            </form>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
