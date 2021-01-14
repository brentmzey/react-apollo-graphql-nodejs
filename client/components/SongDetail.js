import React from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import { fetchSongDetail } from "../queriesAndMutations/queries";

import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = ({ params: { id }, data: { loading, song, refetch } }) => {
  // console.log(props);
  if (!song) {
    return (
      <div className="container">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
};

export default graphql(fetchSongDetail, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
