import { Box, Flex, Spinner } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

//  children its gonna be the content on the rigth pass by the routes into props.
// userLocation its gonna recupere the url and the sidebar its gonna render when ever is not /auth

export const PageLayout = ({ children }) => {
    const { pathname } = useLocation()
    const [user, loading] = useAuthState(auth);
	const canRenderSidebar = pathname !== "/auth" && user;
	const canRenderNavbar = !user && !loading && pathname !== "/auth";

    const checkingUserIsAuth = !user && loading;
	if (checkingUserIsAuth) return <PageLayoutSpinner />;

    return (
        <Flex flexDir={canRenderNavbar ? "column" : "row"}>
			{/* sidebar on the left */}
			{canRenderSidebar ? (
				<Box w={{ base: "70px", md: "240px" }}>
					<Sidebar />
				</Box>
            ) : null}
            	{/* Navbar */}
			{canRenderNavbar ? <Navbar /> : null}
            <Box flex={1} w={{ base: "calc(100% -70px)", md: "calc(100% -240px)" }}>
                {children}
            </Box>

        </Flex>
    )
}

export default PageLayout

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' color={"red.700"}/>
		</Flex>
	);
};