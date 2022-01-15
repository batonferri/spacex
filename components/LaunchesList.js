import Image from "next/image";
import { Box, Center, Heading, Text, Stack, Avatar } from "@chakra-ui/react";
import Link from "next/link";

const LaunchesList = ({
  id,
  image,
  name,
  details,
  avatar,
  siteName,
  date,
  load,
}) => {
  return (
    <Link href={`/launches/${id}`}>
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
              src={image}
              objectFit="cover"
              layout={"fill"}
              priority={load ? true : false}
            />
          </Box>
          <Stack>
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              align="center"
              justify="center"
            >
              {name.slice(0, 25)}
            </Heading>
            <Text color={"gray.500"}>{details?.slice(0, 90)}...</Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Avatar src={avatar} alt={"Author"} />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{siteName?.slice(0, 45)}...</Text>
              <Text color={"gray.500"}>
                {new Date(date).toLocaleDateString("en-US")}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Link>
  );
};

export default LaunchesList;
