import React from "react";
import { Link, hashHistory } from "react-router";
import { graphql } from "react-apollo";
// import { useMutation } from "apollo-client";
import { fetchSongsQuery } from "../queriesAndMutations/queries";
import { addSongMutation } from "../queriesAndMutations/mutations";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);
    // const [addSong, { loading: mutationLoading, error: mutationError }] = useMutation(mutation, {
    //   onCompleted() {
    //     hashHistory.push("/");
    //   },
    // });
    this.state = { songTitle: "" };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault(); // prevents form from attempting to submit itself

    // addSong({ variables: {title: this.state.songTitle} });
    this.props
      .mutate({
        variables: {
          title: this.state.songTitle,
        },
        refetchQueries: [{ query: fetchSongsQuery }],
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div className="container">
        <Link to="/">Back</Link>
        <h3>Create a new song.</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input
            onChange={(e) => this.setState({ songTitle: e.target.value })}
            value={this.state.songTitle}
            autoFocus
          />
        </form>
      </div>
    );
  }
}

export default graphql(addSongMutation)(SongCreate);
