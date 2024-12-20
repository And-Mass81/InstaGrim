import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { BsBookmarkCheck, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'
import { GiSpiderWeb } from 'react-icons/gi'

export const ProfileTabs = () => {
  return (
    <Flex 
    w={"full"}
    justifyContent={"center"}
    gap={{base:4,sm:10}}
    textTransform={"uppercase"}
    fontWeight={"bold"}
    >
      <Flex borderTop={"1px solid white "} alignItems={"center"} p="3" cursor={"pointer"}gap={1}>
       <Box fontSize={20}> 
        <GiSpiderWeb/>
       </Box>
       <Text fontSize={12} display={{base:"none",sm:"block"}}>Posts</Text>
      </Flex>
      <Flex  alignItems={"center"} p="3" cursor={"pointer"} gap={1}>
       <Box fontSize={20}> 
        <BsBookmarkCheck/>
       </Box>
       <Text fontSize={12} display={{base:"none",sm:"block"}}>Saved</Text>
      </Flex>
      <Flex  alignItems={"center"} p="3" cursor={"pointer"} gap={1}>
       <Box fontSize={20}> 
        <BsSuitHeart/>
       </Box>
       <Text fontSize={12} display={{base:"none",sm:"block"}}>Likes</Text>
      </Flex>

    </Flex>
  )
}

export default ProfileTabs

// 2:10