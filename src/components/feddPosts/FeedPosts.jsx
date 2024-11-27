
import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react"
import FeedPost from './FeedPost'
import React, { useEffect, useState } from 'react'

const FeedPosts = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  },[]);

  return (
    <Container maxW={"container.sm"} py={10} px={2} >
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap='2'>
              <SkeletonCircle size='10' />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height='10px' w={"200px"} />
                <Skeleton height='10px' w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost img="/ashagain.webp" username="Ashy Slashy" avatar="/ash.webp" />
          <FeedPost img="/allxx.webp" username="BJx3" avatar="/bj.webp" />
          <FeedPost img="/ML.jpg" username="Fred" avatar="/fred2.jpg" />
          <FeedPost img="/carre2.png" username="Pazuzu" avatar="/exo.webp" />
        </>
      )}

    </Container>

  )
}

export default FeedPosts