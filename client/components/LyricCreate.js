import React from "react";
import { graphql } from "react-apollo";
import { addLyricMutation } from "../queriesAndMutations/mutations";

class LyricCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lyric: "" };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: { content: this.state.lyric, songId: this.props.songId },
    });
    //   .then(() => this.setState({ lyric: "" }));
    this.setState({ lyric: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input onChange={(e) => this.setState({ lyric: e.target.value })} value={this.state.lyric} autoFocus />
      </form>
    );
  }
}

export default graphql(addLyricMutation)(LyricCreate);
