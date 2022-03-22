import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppBar from "./layout";
import RoutedContent from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#610f7f",
    },
    secondary: {
      main: "#b9929f",
    },
  },
});

function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppBar />
          <RoutedContent />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
