import React, { useEffect, useState } from "react";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/fontawesome-free-brands'

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "./style.css";

function Derek() {
  const [githubData, setgithubData] = useState('')

  useEffect(() => {
    fetch("https://api.github.com/users/Dvogel345")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setgithubData(data)
      });
  }, []);

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={githubData.avatar_url} alt="Dereks profile picture" />
      <Card.Body>
        <Card.Title>{githubData.name}</Card.Title>
        <Card.Text className="card-text">{githubData.bio}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Email: dvogel345@gmail.com {githubData.email}</ListGroupItem>
        <ListGroupItem>Located: New Jersey {githubData.location}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <ExternalLink href={githubData.html_url} target="_blank">
          <FontAwesomeIcon className='fa-lg github-icon' icon={faGithub} />
        </ExternalLink>
      </Card.Body>
    </Card>
  );
}

export default Derek;
