import React from "react";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { auth } from "@/firebase/clientApp";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import ErrorMsg from "@/components/Input/ErrorMsg";
type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction={"column"} width="100%" mb={2}>
      <Button variant="oauth" mb={2} isLoading={loading} onClick={() => signInWithGoogle()}>
        <Image src="/google-logo.png" alt="google-logo" height={"15px"} mr={1} />
        Continue with Google
      </Button>
      <Button variant="oauth" mb={2}>
        Continue with other
      </Button>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Flex>
  );
};
export default OAuthButtons;
