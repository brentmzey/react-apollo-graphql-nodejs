import gql from "graphql-tag";

export const addSongMutation = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export const deleteSongMutation = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export const addLyricMutation = gql`
  mutation AddLyricToSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export const likeLyricMutation = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;
