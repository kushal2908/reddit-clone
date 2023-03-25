import React, { useState } from "react";
import { authModalState } from "@/atoms/authModal.atoms";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import ErrorMsg from "@/components/Input/ErrorMsg";
import { FIREBASE_ERRORS } from "@/firebase/errors";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  // Firebase logic
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };
  return (
    <form onSubmit={onSubmit}>
      <ErrorMsg>{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}</ErrorMsg>
      <Input name="email" placeholder="Email" type="email" mb={2} onChange={handleChange} required />
      <Input name="password" placeholder="Password" type="password" mb={2} onChange={handleChange} required />
      <Button type="submit" width={"100%"} height="36px" isLoading={loading}>
        Login
      </Button>
      <Flex fontSize={"14px"} justify="center" mt={2}>
        <Text>New here?</Text>
        <Text
          ml={1}
          color="blue.500"
          fontWeight={700}
          cursor={"pointer"}
          onClick={() => setAuthModalState((prev) => ({ ...prev, view: "signup" }))}
        >
          SIGNUP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
