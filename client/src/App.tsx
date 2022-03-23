import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppBar from "./layout";
import RoutedContent from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: "#610f7f",
    },
    secondary: {
      main: "#b9929f",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <AppBar />
            <RoutedContent />
          </ThemeProvider>
        </BrowserRouter>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
