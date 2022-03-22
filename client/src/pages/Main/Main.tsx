import { Button, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { css } from "@emotion/css";

interface MainProps {
  className?: string;
}

const Main: FC<MainProps> = (props: MainProps) => {
  const { className } = props;
  return (
    <Container
      maxWidth="md"
      className={css`
        padding-top: 2rem;
      `}
    >
      <Button
        variant="contained"
        color="secondary"
        className={css`
          position: fixed;
          right: 2rem;
        `}
      >
        Nowy projekt
      </Button>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={12} sm={4} xs={4} display="flex" justifyContent="center">
          <Typography variant="h3">Wybór projektu</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
