import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQuery } from "@apollo/client";
import { Heading, Box, Flex } from "@chakra-ui/react";
import LaunchesList from "../components/LaunchesList";

import { GET_LAUNCHES } from "../graphql/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }

  const launches = data.launchesPast.filter(
    (launch) => launch.links.flickr_images.length > 0
  );

  return (
    <Flex direction="column" justify="center" align="center">
      <Head>
        <title>SpaceX</title>
        <meta name="description" content="SpaceX launches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mb={4} flexDirection="column" py={8}>
        <Heading as="h1" size="2xl" align="center" justify="center" mb={8}>
          SpaceX Launches{" "}
        </Heading>
        <LaunchesList launches={launches} />
      </Box>
    </Flex>
  );
}

// export async function getStaticProps(context) {
//   const client = new ApolloClient({
//     uri: "https://api.spacex.land/graphql/",
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       query GetLaunches {
//         launchesPast(limit: 16) {
//           id
//           mission_name
//           launch_date_local
//           launch_site {
//             site_name_long
//           }
//           links {
//             flickr_images
//           }
//         }
//       }
//     `,
//   });

//   const launches = data.launchesPast.filter(
//     (launch) => launch.links.flickr_images.length > 0
//   );

//   return {
//     props: {
//       launches: launches,
//     },
//   };
// }
