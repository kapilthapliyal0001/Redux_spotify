import React from "react";
import {Card} from "react-bootstrap";
import {withRouter} from "react-router-dom";

function HomeCard(props) {
  return (
    <Card style={{width: "18rem"}} className="m-3 " key={props.music.id}>
      <Card.Img variant="top" src={props.music.album.cover_big} />
      <Card.Body className="text-center">
        <h4>{props.music.title_short}</h4>
        <Card.Title
          onClick={() => props.history.push("/album/" + props.music.album.id)}
        >
          {props.music.album.title}
        </Card.Title>
        <Card.Text
          onClick={() => props.history.push("/artist/" + props.music.artist.id)}
        >
          {props.music.artist.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default withRouter(HomeCard);
