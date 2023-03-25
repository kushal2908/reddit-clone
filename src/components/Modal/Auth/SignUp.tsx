import React, { useState } from "react";
import { authModalState } from "@/atoms/authModal.atoms";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { auth } from "@/firebase/clientApp";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import ErrorMsg from "@/components/Input/ErrorMsg";
type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [error, setError] = useState("");
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Firebase logic
  const [createUserWithEmailAndPassword, user, loading, userError] = useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Password do not match!");
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ErrorMsg>{error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}</ErrorMsg>
      <Input name="email" placeholder="Email" type="email" mb={2} onChange={handleChange} required />
      <Input name="password" placeholder="Password" type="password" mb={2} onChange={handleChange} required />
      <Input name="confirmPassword" placeholder="Confirm Password" type="password" mb={2} onChange={handleChange} required />
      <Button type="submit" width={"100%"} height="36px" isLoading={loading}>
        Sign up
      </Button>
      <Flex fontSize={"14px"} justify="center" mt={2}>
        <Text>Already a redditor?</Text>
        <Text
          ml={1}
          color="blue.500"
          fontWeight={700}
          cursor={"pointer"}
          onClick={() => setAuthModalState((prev) => ({ ...prev, view: "login" }))}
        >
          LOGIN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
