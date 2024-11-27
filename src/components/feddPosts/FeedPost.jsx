import React from 'react'
import { Box, Avatar, Flex, Link, Image , Button, Container } from "@chakra-ui/react";
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

export const FeedPost = ({img,username,avatar}) => {
  return (
    <>
    <PostHeader username={username} avatar={avatar}/>
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        < Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} />

    </>
  )
}


export default FeedPost