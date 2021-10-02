import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaShoppingCart } from 'react-icons/fa';

export default function NavBar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (

        <Flex w="100%">
            <Heading
                ml="8" size="md" fontWeight='semibold' color="cyan.400">Ecommerce</Heading>

            <Spacer></Spacer>
            <IconButton icon={<FaShoppingCart />} isRound='true' onClick={toggleColorMode}></IconButton>
            
            <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
    );
}


