import { View, Text } from "react-native";
import { NativeBaseProvider } from "native-base";

function SignIn() {
  return (
    <NativeBaseProvider>
      <Text>Ola, Miguel!</Text>
    </NativeBaseProvider>
  );
}

export default SignIn;
