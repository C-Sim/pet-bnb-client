import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Stack from "@mui/material/Stack";

import { AppProvider } from "./context/AppProvider";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";

const link = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL || "http://localhost:4000",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppProvider>
          <Stack sx={{ minHeight: "100vh" }} spacing={0}>
            <NavBar
              navItems={[
                {
                  label: "Login",
                  path: "/login",
                },
                {
                  label: "Sign Up",
                  path: "/sign-up",
                },
              ]}
            />
            <AppRoutes />
          </Stack>
        </AppProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};
