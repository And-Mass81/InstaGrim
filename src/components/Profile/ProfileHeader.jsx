import { Avatar, AvatarGroup, Flex, VStack, Text, Button } from '@chakra-ui/react'
import { base } from 'framer-motion/client'
import React from 'react'

export const ProfileHeader = () => {
  return ( 
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name='Ash Williams' src='/ash.webp' alt="El jefe " />
      </AvatarGroup>
      <VStack>
        <Flex
          gap={4}
          direction={{ base: "collumn", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }} >The king</Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.800" }} size={{ base: "xs", md: "sm" }}>
              Edit profile
            </Button>
          </Flex >
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{base:"xs",md:"sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
            Posts
          </Text>
          <Text fontSize={{base:"xs",md:"sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>148</Text>
            Followers
          </Text>
          <Text fontSize={{base:"xs",md:"sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>0</Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} >Ash</Text>
        </Flex>
        <Text fontSize={"sm"} >Ash Williams was "The Promised One", destined to be humanity's champion against the forces of evil.</Text>
      </VStack>
    </Flex>
    
  )
}

export default ProfileHeader