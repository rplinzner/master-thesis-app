import { Link } from "react-router-dom";
import TopBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Routes } from "pages/routes.enum";
import { css } from "@emotion/css";

const AppBar = () => {
  return (
    <div id="app-bar">
      <TopBar position="static">
        <Toolbar>
          <Link
            to={Routes.MAIN_PAGE}
            className={css`
              text-decoration: none !important;
              color: unset;
            `}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pomocnik BPMN
            </Typography>
          </Link>
        </Toolbar>
      </TopBar>
    </div>
  );
};

export default AppBar;
