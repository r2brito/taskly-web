import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { SnackbarProvider } from "notistack";
import AppRoutes from "./routes";

import { GlobalStyle } from "./theme/globalStyles";
import { theme } from "./theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  AuthCredentialsProvider,
  initializeStorage,
  localStorage
} from "./services";

initializeStorage(localStorage);

const queryClient = new QueryClient();

function App() {
  return (
    <AuthCredentialsProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
              <AppRoutes />
            </Suspense>
          </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
