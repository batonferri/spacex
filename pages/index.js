import Head from "next/head";
import { useQuery } from "@apollo/client";
import { Heading, Box, Flex, SimpleGrid } from "@chakra-ui/react";
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
    (launch) =>
      launch.links.flickr_images.length > 0 && launch.links.mission_patch
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
        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
          {launches.slice(0, 6).map((launch) => (
            <LaunchesList
              key={launch.id}
              id={launch.id}
              image={launch.links.flickr_images[0]}
              name={launch.mission_name}
              details={launch.details}
              avatar={launch.links.mission_patch}
              siteName={launch.launch_site.site_name_long}
              date={launch.launch_date_local}
              load
            />
          ))}
        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
          {launches.slice(6, launches.length).map((launch) => (
            <LaunchesList
              key={launch.id}
              id={launch.id}
              image={launch.links.flickr_images[0]}
              name={launch.mission_name}
              details={launch.details}
              avatar={launch.links.mission_patch}
              siteName={launch.launch_site.site_name_long}
              date={launch.launch_date_local}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
