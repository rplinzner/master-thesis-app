import { Button, Container, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { css } from "@emotion/css";
import { Modal, ProjectCard } from "components";
import Form from "./Form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addNewProject, getAll } from "api/projects";
import { Project } from "types/Project";

interface MainProps {
  className?: string;
}

const Main: FC<MainProps> = (props: MainProps) => {
  const { className } = props;

  const [modalOpen, setModalOpen] = useState(false);

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { data, status } = useQuery<Project[]>("projects", getAll);

  const mutation = useMutation(addNewProject, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("projects");
      setModalOpen(false);
    },
  });

  return (
    <div className={className}>
      <Container
        maxWidth="xl"
        className={css`
          padding-top: 2rem;
        `}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setModalOpen(true)}
          className={css`
            position: fixed !important;
            right: 2rem;
          `}
        >
          Nowy projekt
        </Button>
        <Grid container justifyContent="center" mb={5}>
          <Grid
            item
            md={12}
            sm={4}
            xs={4}
            display="flex"
            justifyContent="center"
          >
            <Typography variant="h3">Wybór projektu</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          {status === "loading" && (
            <Grid item>
              <p>Loading...</p>
            </Grid>
          )}
          {data?.map((e) => (
            <Grid item key={e.id}>
              <ProjectCard title={e.title} description={e.description} />
            </Grid>
          )) || "Error :("}
        </Grid>
      </Container>
      <Modal open={modalOpen} handleClose={() => setModalOpen(false)}>
        <Form
          onSubmit={(e) => mutation.mutate(e)}
          handleClose={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Main;
