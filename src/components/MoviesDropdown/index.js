import Nav from "react-bootstrap/Nav";
import "./style.css";
import { useNavigate } from "react-router-dom";

function MoviesDropdown() {
  let navigate = useNavigate();

  const routeMovie = () => {
    let path = `/movie`;
    navigate(path);
  };

  return (
    <div className="dropdown">
      <Nav.Link onClick={routeMovie}>Movies</Nav.Link>
      <div className="dropdown-content">
        <div className="dp-flex">
          <div className="dropdown-items">
            <p>MOVIES IN THEATERS</p>
            <p>Opening This Week</p>
            <p>Top Box Office</p>
            <p>Coming Soon to Theaters</p>
            <p>Weekend Earnings</p>
            <p>Certified Fresh Movies</p>
            {/* <Nav.Link href="/tv-shows">Opening This Week</Nav.Link>
            <Nav.Link href="/podcast">Top Box Office</Nav.Link>
            <Nav.Link href="/tv-shows">Coming Soon to Theaters</Nav.Link>
            <Nav.Link href="/podcast">Weekend Earnings</Nav.Link>
            <Nav.Link href="/tv-shows">Certified Fresh Movies</Nav.Link> */}
          </div>
          <div className="dropdown-items">
            <p>ON DVD & STREAMING</p>
            <p>VUDU</p>
            <p>Netflix Streaming</p>
            <p>iTunes</p>
            <p>Amazon and Amazon Prime</p>
            <p>Top DVD & Streaming</p>
            <p>Certified Fresh Movies</p>
            <p>Browse All</p>
            {/* <Nav.Link href="/tv-shows">VUDU</Nav.Link>
            <Nav.Link href="/podcast">Netflix Streaming</Nav.Link>
            <Nav.Link href="/tv-shows">iTunes</Nav.Link>
            <Nav.Link href="/podcast">Amazon and Amazon Prime</Nav.Link>
            <Nav.Link href="/tv-shows">Top DVD & Streaming</Nav.Link>
            <Nav.Link href="/podcast">Certified Fresh Movies</Nav.Link>
            <Nav.Link href="/tv-shows">Browse All</Nav.Link> */}
          </div>
          <div className="dropdown-items">
            <p>MORE</p>
            <p>Top Movies</p>
            <p>Trailers</p>
            {/* <Nav.Link href="/tv-shows">Top Movies</Nav.Link>
            <Nav.Link href="/podcast">Trailers</Nav.Link> */}
          </div>
          <div className="dropdown-imgs">
            <p>CERTIFIED FRESH PICKS</p>
            <div className="movie-poster">
              <img src={{}} alt="movie poster"></img>
              <img src={{}} alt="movie poster"></img>
              <img src={{}} alt="movie poster"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDropdown;
