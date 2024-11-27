import { Box, Grid, Skeleton, VStack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'

export const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },2000)
  }, []);

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading && [0, 1, 2, 3, 4].map((_, idx) => (
        <VStack key={idx} alignItems={"flex-start"} gap={4} >
          <Skeleton w={"full"}>
            <Box h={"300px"}> contents wraped</Box>
          </Skeleton>
        </VStack>
      ))}
      
      {!isLoading && (
       <>
       <ProfilePost img="/toys.jpg" />
       <ProfilePost img="/ML.jpg" />
       <ProfilePost img="/chuku.png" />
       <ProfilePost img="/chuku.png" />
       <ProfilePost img="/ashcocaine.jpg" />
       <ProfilePost img="/toys.jpg" />
       <ProfilePost img="/ML.jpg" />
       <ProfilePost img="/chuku.png" />
       <ProfilePost img="/chuku.png" />
       <ProfilePost img="/ashcocaine.jpg" />
       <ProfilePost img="/toys.jpg" />
       

       </>

      )}


    </Grid>
  )
}

export default ProfilePosts