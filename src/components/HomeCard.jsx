import React from "react";
import {Card} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {useState, useEffect} from "react";
import {Button} from "bootstrap";

// these two has to be there for the reading and dispatching to the state
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToPlayer: (music) =>
    dispatch({
      type: "ADD_TO_PLAYER",
      payload: music,
    }),

  addToLike: (id) =>
    dispatch({
      type: "ADD_TO_LIKED_MUSIC",
      payload: id,
    }),

  removeFromLike: (id) =>
    dispatch({
      type: "REMOVED_FROM_LIKED_MUSIC",
      payload: id,
    }),
});

function HomeCard(props) {
  let array = props.likedMusic;
  useEffect(() => {
    if (array.includes(props.music.id)) {
      setLike(true);
    }
  }, []);

  const [like, setLike] = useState(false);

  function likeClicked() {
    if (!like && !props.likedMusic.includes(props.music.id)) {
      setLike(!like);
      props.addToLike(props.music.id);
      console.log(props.music.id, "this is the id to be sent");
    }
  }

  function unlikeClicked() {
    if (props.likedMusic.includes(props.music.id)) {
      setLike(!like);
      props.removeFromLike(props.music.id);
      console.log(
        props.music.id,
        "this is the id to be removed from the unliked list"
      );
    }
  }

  return (
    <Card style={{width: "18rem"}} className="m-3 " key={props.music.id}>
      <Card.Img
        variant="top"
        src={props.music.album.cover_big}
        onClick={() => {
          props.addToPlayer(props.music);
        }}
      />
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
        {like ? (
          <button onClick={() => unlikeClicked()}>Unlike</button>
        ) : (
          <button onClick={() => likeClicked()}>Like</button>
        )}
      </Card.Body>
    </Card>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeCard));
