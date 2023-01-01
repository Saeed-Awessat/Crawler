import * as React from "react";
import {
  ChakraProvider,
  Box,
  //  Text,
  //  Link,
  VStack,
  theme,
  Container,
} from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Results } from "./components/Results";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Header />

      <Container width="1200px" margin="90px auto 20px auto">
        <Box>
          <SearchBar onSearch={() => {}} />
        </Box>
      </Container>

      <Container width="100%">
        <Results />
      </Container>
      <Footer />
    </Box>
  </ChakraProvider>
);
