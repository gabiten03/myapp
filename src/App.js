
import { VStack } from "@chakra-ui/layout";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";


function App() {

  return (
    <VStack p={5}>
      <NavBar />
      <Header></Header>

    </VStack>
  );
}

export default App;