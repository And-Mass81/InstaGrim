import React from 'react'
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from "@chakra-ui/react";
import { FullHeart, Heart, Dialog } from '../../assets/constants';
import { useState } from 'react';

function PostFooter({username,isProfilePage}) {

  const [Liked, setLiked] = useState(false)
  const [Likes, setLikes] = useState(1000)
  const handleLike = () => {
    if (Liked) {
      setLiked(false);
      setLikes(Likes - 1)
    } else {
      setLiked(true);
      setLikes(Likes + 1)
    }
  }

  return (
    <Box my={8} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} >
          {!Liked ? <Heart /> : <FullHeart />}
        </Box>

        <Box cursor={"pointer"} >
          <Dialog />
        </Box>

      </Flex>

      <Text fontWeight={600} fontSize={"sm"}>
        {Likes} likes
      </Text>

      { !isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
        {username}{""}
        <Text as="span" fontWeight={400}>
          Feeling good
        </Text>
      </Text>
       <Text fontSize='sm' color={"gray"}>
         View all comments
       </Text>
        </>
      )}

       <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
       <InputGroup>
						<Input
							variant={"flushed"}
							placeholder={"Add a comment..."}
							fontSize={14}
							// onChange={(e) => setComment(e.target.value)}
							// value={comment}
							// ref={commentRef}
						/>
						<InputRightElement>
							<Button
								fontSize={15}
								color={"red.700"}
								fontWeight={600}
								cursor={"pointer"}
								_hover={{ color: "white" }}
								bg={"transparent"}
								// onClick={handleSubmitComment}
								// isLoading={isCommenting}
							>
								Post
							</Button>
						</InputRightElement>
					</InputGroup>

       </Flex>
    </Box>
  )
}

export default PostFooter