import { Text } from "@chakra-ui/react";
import React from "react";

type ErrorMsgProps = {
  children: any;
};

const ErrorMsg: React.FC<ErrorMsgProps> = ({ children }) => {
  return (
    <Text color={"red.500"} fontSize="12px" textAlign="center" mb="2" bg="red.50" rounded="sm">
      {children}
    </Text>
  );
};
export default ErrorMsg;
