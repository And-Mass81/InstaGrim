import React from 'react'
import { Avatar, Text, Flex , Link } from '@chakra-ui/react'
import { Link as RouterLink} from 'react-router-dom'

export const SuggestedHeader = () => {
  return (
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
          <Flex alignItems={"center"} gap={2}>
              <Avatar name='As a Programmer' size='sm' src='/ash.webp' />
              <Text fontSize={12} fontWeight={"bold"}>
              Ashy Slashy
              </Text>
          </Flex>
          <Link as={RouterLink}  to={"/auth"} fontSize={14} fontWeight={600} cursor={"pointer"} color={"red.700"} style={{textDecoration:"none"}}>
           Log out
          </Link>
      </Flex>
  )
}

export default SuggestedHeader