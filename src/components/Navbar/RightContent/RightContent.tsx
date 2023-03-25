import AuthModal from "@/components/Modal/Auth/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <>
      <AuthModal />
      <Flex justify={"center"} align="center">
        {user ? <Button onClick={() => signOut()}> logout</Button> : <AuthButtons />}
      </Flex>
    </>
  );
};
export default RightContent;
