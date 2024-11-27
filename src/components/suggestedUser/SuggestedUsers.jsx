import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import { Box, Flex, Text, VStack, Link } from '@chakra-ui/react'
import SuggestedUser from './SuggestedUser'



export const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
           <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
             <Text fontSize={12} fontWeight={"bold"} color={"wite"}>
              Suggested for you
             </Text >
             <Text fontSize={12} fontWeight={"bold"} color={"red.700"} _hover={{color:"gray.400"}} cursor={"pointer"}>
              See All
             </Text >
           </Flex >
           <SuggestedUser name="pepe pot"  followers={1500} avatar="/fred2.jpg"/>
           <SuggestedUser name="kakator peel"  followers={850} avatar="/exo.webp" />
           <SuggestedUser name="slover drover"  followers={620} avatar="/bj.webp"/>
           <Box alignSelf={"start"} fontSize={12} color={"withe"} mt={5}> 
           © 2024 Built By {""}
           <Link href="https://am-portfolio-gilt.vercel.app/" target='_blank' color='red.700' fontSize={14} fontWeight={"bold"}>
           AM design
           </Link>
           </Box>
        </VStack>

    )
}

export default SuggestedUsers