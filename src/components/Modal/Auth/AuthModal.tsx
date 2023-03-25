import React from "react";
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { authModalState } from "@/atoms/authModal.atoms";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);
    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open: false,
        }));
    };
    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={'center'}>
                        {modalState.view === "login" && "Log in"}
                        {modalState.view === "signup" && "Sign Up"}
                        {modalState.view === "resetPassword" && "Reset Password"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" pb={12}>
                        <Flex direction={'column'} justify={'center'} align='center' width={'70%'}>
                            <OAuthButtons />
                            <Text color='gray.500' fontWeight={700} fontSize="14px" >Or</Text>
                            <AuthInputs />
                            {/* <ResetPassword/> */}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
export default AuthModal;
