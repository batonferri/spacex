import { useRouter } from "next/router";
import { GET_ROCKET_DETAILS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

import { Flex, Heading, Stack, Text, Image, Button } from "@chakra-ui/react";
import { LinkIcon, ViewIcon } from "@chakra-ui/icons";
import Link from "next/link";

const LaunchPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_ROCKET_DETAILS, {
    variables: { id },
  });

  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }

  return (
    <>
      <Stack
        minH={"100vh"}
        maxH={"100vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex={1}>
          <Image
            src={data.launch.links.flickr_images[0]}
            alt={"Rocket_Image"}
            objectFit={"cover"}
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                {data.launch.mission_name}
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Name: {data.launch.rocket.rocket_name}
              </Text>{" "}
              <br />
              <Text color={"blue.400"} as={"span"}>
                Type: {data.launch.rocket.rocket_type}
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              {data.launch.rocket.rocket.description}
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              {data.launch.links.video_link && (
                <Link href={data.launch.links.video_link}>
                  <Button
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    spacing="40px"
                    leftIcon={<ViewIcon w={6} h={6} color="gray.200" />}
                  >
                    Youtube
                  </Button>
                </Link>
              )}
              {data.launch.links.article_link && (
                <Link href={data.launch.links.article_link}>
                  <Button
                    rounded={"full"}
                    leftIcon={<LinkIcon w={6} h={6} color="blue.400" />}
                  >
                    Article
                  </Button>
                </Link>
              )}
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default LaunchPage;
