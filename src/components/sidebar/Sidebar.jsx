import React from 'react'
import { Box, Avatar, Flex, Link, Tooltip, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"
import { InstagramLogoR, InstagramLogoMini, HomeIcon, SerchIcon, PlusIcon,Heart } from '../../assets/constants'
import { BiLogOut } from 'react-icons/bi';



export const Sidebar = () => {
	const sidebarItems = [
		{
			icon: <HomeIcon />,
			text: "Home",
			link: "/"
		},
		{
			icon: <SerchIcon />,
			text: "Search",
		},
		{
			icon: <Heart />,
			text: "Notifications",
		},
		{
			icon: <PlusIcon />,
			text: "Create",
		},
		{
			icon: <Avatar size={"sm"} name="Ash Williams" src='/ash.webp' />,
			text: "Profile",
			link: "/ashyslashy"
		},
	]
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
					{sidebarItems.map((item, index) => (
						<Tooltip
							key={index}
							hasArrow
							label={item.text}
							placement='right'
							openDelay={500}
							display={{ base: "block", md: 'block' }}
						>
							<Link
								display={"flex"}
								to={item.link || null}
								as={RouterLink}
								alignItems={"center"}
								gap={4}
								_hover={{ bg: "whiteAlpha.400" }}
								borderRadius={6}
								p={2}
								w={{ base: 10, md: "full" }}
								justifyContent={{ base: "center", md: "flex-start" }}
							>
								{item.icon}
								<Box display={{ base: "none", md: "block" }}>
									{item.text}
								</Box>
							</Link>
						</Tooltip>
					))}
				</Flex>
				<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: 'block' }}
				>
					<Link
						display={"flex"}
						to={"/auth"}
						as={RouterLink}
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
					</Link>
				</Tooltip>
			</Flex>

		</Box>

	)
}

export default Sidebar