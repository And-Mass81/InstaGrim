import React from 'react'
import { Box, Flex, Link, Tooltip, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"
import { InstagramLogoR, InstagramLogoMini} from '../../assets/constants'
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
import SidebarItems from './SidebarItems';


export const Sidebar = () => {

	const  {handleLogout, isLogginOut,error} = useLogout()
	return (
		<Box height={"100vh"}
			borderRight={"1px solid"}
			borderColor={"whiteAlpha.300"}
			py={8} position={"sticky"}
			top={0}
			left={0} px={{ base: 2, md: 4 }}>

			<Flex direction={"column"} gap={10} w='full' height={"full"}>
				<Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
					<InstagramLogoR />
				</Link>
				<Link
					to={"/"}
					as={RouterLink}
					p={0}
					display={{ base: "block", md: "none" }}
					borderRadius={6}
					_hover={{
						bg: "whiteAlpha.200",
					}}
					w={10}
					cursor='pointer'
				>
					<InstagramLogoMini />
				</Link>
				<Flex direction={"column"} gap={5} cursor={"pointer"}>
				<SidebarItems/>
				</Flex>
				<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: 'block' }}
				>
					<Flex
					    onClick={handleLogout}
						alignItems={"center"}
						gap={4}
						_hover={{ bg: "whiteAlpha.400" }}
						borderRadius={6}
						p={2}
						w={{ base: 10, md: "full" }}
						mt={'auto'}
						justifyContent={{ base: "center", md: "flex-start" }}
					>
						<BiLogOut size={30}/>
						<Box display={{ base: "none", md: "block" }}>Logout</Box>
					</Flex>
				</Tooltip>
			</Flex>

		</Box>

	)
}

export default Sidebar