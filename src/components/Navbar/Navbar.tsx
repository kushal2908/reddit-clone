import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <Flex bg='white' padding='6px 12px'>
            <Flex>
                <Image src="/logo.jpg" alt='reddit-logo' height={8} display={{ base: 'none', md: 'inline-block' }} />
                <Image src="/reddit-only-logo.png" alt='reddit-logo' height={8} display={{ base: 'inline-block', md: 'none' }} />
            </Flex>
            <SearchInput />
            <RightContent />
            {/* <Directory/> */}
        </Flex>
    );
};
export default Navbar;
