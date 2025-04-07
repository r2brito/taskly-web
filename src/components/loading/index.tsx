import React from "react";
import { Wrapper, Text } from "./styles";

type LoadingScreenProps = {
  isMain?: boolean;
  [key: string]: any;
};

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <Wrapper>
      <Text>Loading...</Text>
    </Wrapper>
  );
};

export default LoadingScreen;
