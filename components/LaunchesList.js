import Image from "next/image";
import { Heading, Text, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

const LaunchesList = ({ launches }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {launches.map((launch) => (
        <Link key={launch.id} href={`/launches/${launch.id}`}>
          <div>
            <Image
              src={launch.links.flickr_images[0]}
              width={300}
              height={300}
            />
            <Heading as="h4" align="center" size="md">
              {launch.mission_name}
            </Heading>
            <Text align="center">
              Date:{" "}
              {new Date(launch.launch_date_local).toLocaleDateString("en-US")}
            </Text>
            <Text align="center">{launch.launch_site.site_name_long}</Text>
          </div>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default LaunchesList;
