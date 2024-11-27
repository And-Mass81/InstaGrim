
import React from 'react'
import { Box, Avatar, Flex, Link, Tooltip, Button, Container } from "@chakra-ui/react";
import FeedPosts from '../../components/feddPosts/Feedposts';
import { SuggestedUsers } from '../../components/suggestedUser/SuggestedUsers';


const HomePage = () =>{
    return (
        <Container maxWidth={"container.lg"}>
        <Flex gap={20}>
            <Box flex={2} py={10}>
              <FeedPosts/>
            </Box>
            <Box flex={3} mr={20} display={{base:"none" , lg:"block"}} maxW={"300px"}  >
            <SuggestedUsers/>
            </Box>
        </Flex>
        </Container>
    )
}

export default HomePage