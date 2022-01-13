import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  {
    launchesPast {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        flickr_images
        mission_patch
      }
      details
    }
  }
`;

export const GET_ROCKET_DETAILS = gql`
  {
    launchesPast {
      id
      mission_name
      links {
        flickr_images
        video_link
        article_link
      }
      rocket {
        rocket_name
        rocket_type
        rocket {
          description
        }
      }
    }
  }
`;
