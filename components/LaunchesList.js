import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

const LaunchesList = ({ launches }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {launches.map((launch) => (
        <Link key={launch.id} href={`/launches/${launch.id}`}>
          <Center py={6}>
            <Box
              maxW={"445px"}
              w={"full"}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  src={launch.links.flickr_images[0]}
                  objectFit="cover"
                  layout={"fill"}
                />
              </Box>
              <Stack>
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  align="center"
                  justify="center"
                >
                  {launch.mission_name.slice(0, 25)}
                </Heading>
                <Text color={"gray.500"}>
                  {launch.details?.slice(0, 90)}...
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar src={launch.links.mission_patch} alt={"Author"} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>
                    {launch.launch_site.site_name_long.slice(0, 45)}...
                  </Text>
                  <Text color={"gray.500"}>
                    {new Date(launch.launch_date_local).toLocaleDateString(
                      "en-US"
                    )}
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Center>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default LaunchesList;
