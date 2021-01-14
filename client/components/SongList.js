import React from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import { fetchSongsQuery } from "../queriesAndMutations/queries";
import { deleteSongMutation } from "../queriesAndMutations/mutations";
import "../style/style.css";

class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  onSongDelete(id) {
    this.props
      .mutate({
        variables: { id },
      })
      .then(() => this.props.data.refetch()); // only useful here since we have the "fetchSongsQuery" as the primarily associate query with this "SongList" component
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title } = song) => {
      return (
        <li key={id} className="collection-item">
          <h5>
            <Link to={`/songs/${id}`}>{title}</Link>
          </h5>
          <i className="material-icons" onClick={() => this.onSongDelete(id)}>
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }

    return (
      <div>
        <h3>Songs:</h3>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large green right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteSongMutation)(graphql(fetchSongsQuery)(SongList));
