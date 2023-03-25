import React, { useState } from "react";
import { authModalState } from "@/atoms/authModal.atoms";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Firebase logic
    const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <Input name="email" placeholder="Email" type="email" mb={2} onChange={handleChange} required />
            <Input name="password" placeholder="Password" type="password" mb={2} onChange={handleChange} required />
            <Input name="confirmPassword" placeholder="Confirm Password" type="password" mb={2} onChange={handleChange} required />
            <Button width={"100%"} height="36px">
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
