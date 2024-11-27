import { Flex, Avatar, Box ,Text} from '@chakra-ui/react'
import React from 'react'

function PostHeader({username,avatar}) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} alt="user profile pic" size={"sm"} />
        <Flex alignItems={"center"} gap={2} fontWeight={"bold"}>
          {username}
          <Box color={"gray.500"}> . 1w</Box>
        </Flex>
      </Flex>
      <Box 
      cursor={"pointer"}
      >
        <Text
        fontSize={12}
        color={"red.700"}
        fontWeight={"bold"}
        _hover={{
          color:"white",
        }}
        transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>

  )
}

export default PostHeader