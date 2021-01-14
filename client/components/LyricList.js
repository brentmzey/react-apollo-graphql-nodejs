import React from "react";
import { graphql } from "react-apollo";
import { likeLyricMutation } from "../queriesAndMutations/mutations";

class LyricList extends React.Component {
  constructor(props) {
    super(props);
  }

  onLike(id, content, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          content,
          likes: likes + 1,
        },
      },
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <p>Number of likes: {likes}</p>
            <i onClick={() => this.onLike(id, content, likes)} className="material-icons">
              thumb_up
            </i>
          </div>
        </li>
      );
    });
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default graphql(likeLyricMutation)(LyricList);
