import { css } from "@emotion/css";
import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { addHighLevelStructDiagram, getById } from "api/projects";
import { FC, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Project } from "types/Project";
import { AddDiagramModal, DiagramViewer, Modal } from "components";
import AddMicroserviceForm from "./AddMicroserviceForm";
import { addMicroservice, deleteMicroservice } from "api/microservices";
import DeleteIcon from "@mui/icons-material/Delete";
import StructuralDiagramsTable from "./StructuralDiagramsTable";
import AddDiagramMicroserviceExtension, {
  Values,
} from "./AddDiagramMicroserviceExtension";
import {
  addDetailedStructuralDiagram,
  deleteDetailedStructuralDiagram,
} from "api/detailedStructuralDiagram";
import { Routes } from "pages/routes.enum";

interface ProjectDetailsProps {
  className?: string;
}

const ProjectDetails: FC<ProjectDetailsProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [addDiagramModalOpen, setAddDiagramModalOpen] = useState(false);
  const [addStructuralDiagramModalOpen, setAddStructuralDiagramModalOpen] =
    useState(false);
  const [addMicroserviceModal, setAddMicroserviceModal] = useState(false);
  const [diagramViewerOpen, setDiagramViewerOpen] = useState(false);

  const pickedMicroservicesValue = useRef<Values>({ "1": null, "2": null });

  const queryClient = useQueryClient();

  const { data, status } = useQuery<Project>(["project", id], () =>
    getById(id!)
  );

  const addDiagramMutation = useMutation(addHighLevelStructDiagram, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["project", id]);
      setAddDiagramModalOpen(false);
    },
  });

  const addMicroserviceMutation = useMutation(addMicroservice, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["project", id]);
      setAddMicroserviceModal(false);
    },
  });

  const deleteMicroserviceMutation = useMutation(deleteMicroservice, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["project", id]);
    },
  });

  const addDetailedStructuralMutation = useMutation(
    addDetailedStructuralDiagram,
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["project", id]);
        setAddStructuralDiagramModalOpen(false);
      },
    }
  );

  const deleteDetailedStructuralMutation = useMutation(
    deleteDetailedStructuralDiagram,
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["project", id]);
      },
    }
  );

  const handleAddDiagram = (diagram: string) => {
    const values = pickedMicroservicesValue.current;
    if (!values[1] || !values[2] || !data?.id) {
      alert("Wybierz oba mikroserwisy!");
      return;
    }
    addDetailedStructuralMutation.mutate({
      diagram,
      firstMicroserviceId: values[1].id,
      secondMicroserviceId: values[2].id,
      projectId: data.id,
    });
  };

  if (status === "loading" || !data)
    return (
      <Container
        maxWidth="xl"
        className={css`
          padding-top: 2rem;
          display: flex !important;
          justify-content: center;
        `}
      >
        <Typography variant="h3">Loading...</Typography>
      </Container>
    );

  return (
    <div className={className}>
      <Container
        maxWidth="xl"
        className={css`
          padding-top: 2rem;
        `}
      >
        <Typography variant="h3">{data.title || ""}</Typography>
        <Typography variant="body1">{data.description || ""}</Typography>
        <Divider
          className={css`
            margin-top: 2rem !important;
            margin-bottom: 2rem !important;
          `}
        />
        <Grid container>
          <Grid item xs={5}>
            <Typography mb={2} variant="h5">
              Mikroserwisy
            </Typography>
            <Button
              onClick={() => setAddMicroserviceModal(true)}
              variant="contained"
            >
              Dodaj mikroserwis
            </Button>
            <Paper
              className={css`
                margin: 1rem 0;
              `}
              hidden={!data.microservices.length}
            >
              <List>
                {data.microservices.map((e) => (
                  <ListItem
                    disablePadding
                    key={e.id}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => deleteMicroserviceMutation.mutate(e.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemButton
                      onClick={() =>
                        navigate(Routes.MICROSERVICE.replace(":id", e.id))
                      }
                    >
                      <ListItemText primary={e.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item display="flex" justifyContent="center" xs={1}>
            <Divider
              className={css`
                height: 100%;
              `}
              orientation="vertical"
              flexItem
            />
          </Grid>
          <Grid item xs={5}>
            <Typography mb={2} variant="h5">
              Diagramy
            </Typography>
            <Button
              className={css`
                margin: 0.5rem 0 !important;
                width: 100%;
              `}
              variant="contained"
              onClick={() => setAddDiagramModalOpen(true)}
            >
              {`${
                data.highLevelStructDiagram ? "Zmień" : "Dodaj"
              } diagram strukturalny wysokiego poziomu`}
            </Button>
            {data.highLevelStructDiagram ? (
              <Button
                variant="outlined"
                onClick={() => setDiagramViewerOpen(true)}
                className={css`
                  width: 100%;
                `}
              >
                Wyświetl diagram strukturalny wysokiego poziomu
              </Button>
            ) : (
              <Typography fontWeight="bold" my={2} variant="body1">
                Brak diagramu strukturalnego wysokiego poziomu!
              </Typography>
            )}
            <Divider
              className={css`
                margin: 1rem 0rem !important;
              `}
            />
            <Button
              className={css`
                width: 100%;
              `}
              variant="contained"
              onClick={() => setAddStructuralDiagramModalOpen(true)}
            >
              Dodaj diagram strukturalny szczegółowy (mikroserwisy)
            </Button>

            <StructuralDiagramsTable
              handleDeleteDiagram={(e) =>
                deleteDetailedStructuralMutation.mutate(e)
              }
              className={css`
                margin-top: 1rem;
              `}
              data={data.detailedDiagrams}
            />
          </Grid>
        </Grid>
      </Container>
      <AddDiagramModal
        open={addStructuralDiagramModalOpen}
        handleClose={() => setAddStructuralDiagramModalOpen(false)}
        onSave={(e) => handleAddDiagram(e)}
      >
        <AddDiagramMicroserviceExtension
          onChange={(e) => {
            pickedMicroservicesValue.current = e;
          }}
          className={css`
            margin: 1rem 0;
          `}
          microservices={data.microservices}
        />
      </AddDiagramModal>
      <AddDiagramModal
        open={addDiagramModalOpen}
        handleClose={() => setAddDiagramModalOpen(false)}
        onSave={(e) => addDiagramMutation.mutate({ id: data.id, diagram: e })}
        initialValue={data.highLevelStructDiagram}
      />
      <Modal
        open={addMicroserviceModal}
        handleClose={() => setAddMicroserviceModal(false)}
      >
        <AddMicroserviceForm
          handleClose={() => setAddMicroserviceModal(false)}
          onSubmit={(e) =>
            addMicroserviceMutation.mutate({
              name: e.name,
              projectId: data.id,
            })
          }
        />
      </Modal>
      {data.highLevelStructDiagram && (
        <DiagramViewer
          handleClose={() => setDiagramViewerOpen(false)}
          open={diagramViewerOpen}
          xml={data.highLevelStructDiagram}
        />
      )}
    </div>
  );
};

export default ProjectDetails;
