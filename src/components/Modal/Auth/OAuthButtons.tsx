import React from "react";
import { Button, Flex, Image } from "@chakra-ui/react";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
    return (
        <Flex direction={"column"} width='100%' mb={2}>
            <Button variant='oauth' mb={2}>
                <Image src='/google-logo.png' alt='google-logo' height={'15px'} mr={1} />
                Continue with Google
            </Button>
            <Button variant='oauth' mb={2}>
                Continue with other
            </Button>
        </Flex>
    );
};
export default OAuthButtons;
