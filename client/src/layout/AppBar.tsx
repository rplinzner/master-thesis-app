import TopBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppBar = () => {
  return (
    <div id="app-bar">
      <TopBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pomocnik BPMN
          </Typography>
        </Toolbar>
      </TopBar>
    </div>
  );
};

export default AppBar;
