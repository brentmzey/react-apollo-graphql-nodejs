import gql from "graphql-tag";

export const fetchSongsQuery = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const fetchSongDetail = gql`
  query FetchSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
