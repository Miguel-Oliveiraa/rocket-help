import { VStack, Heading } from "native-base";

function SignIn() {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Heading color="gray.100" fontSize="xl" marginTop={20} marginBottom={6}>
        Acessar sua conta
      </Heading>
    </VStack>
  );
}

export default SignIn;
