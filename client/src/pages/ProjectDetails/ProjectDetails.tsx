import { css } from "@emotion/css";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { addHighLevelStructDiagram, getById } from "api/projects";
import { FC, useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Project } from "types/Project";
import styled from "@emotion/styled";
import { AddDiagramModal, DiagramViewer } from "components";
// import ReactBpmn from "react-bpmn";
// import BpmnJS from "bpmn-js";

interface ProjectDetailsProps {
  className?: string;
}

const FlexDiv = styled.div`
  display: flex;
`;

const ProjectDetails: FC<ProjectDetailsProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const [addDiagramModalOpen, setAddDiagramModalOpen] = useState(false);
  const [diagramViewerOpen, setDiagramViewerOpen] = useState(false);

  const queryClient = useQueryClient();

  const { data, status } = useQuery<Project>(["project", id], () =>
    getById(id!)
  );

  const mutation = useMutation(addHighLevelStructDiagram, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["project", id]);
      setAddDiagramModalOpen(false);
    },
  });

  

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
            <Button variant="contained">Dodaj mikroserwis</Button>
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
            <FlexDiv>
              <Button
                className={css`
                  width: 50%;
                  margin-right: 0.5rem !important;
                `}
                variant="contained"
                onClick={() => setAddDiagramModalOpen(true)}
              >
                {`${
                  data.highLevelStructDiagram ? "Zmień" : "Dodaj"
                } diagram strukturalny wysokiego poziomu`}
              </Button>

              <Button
                className={css`
                  width: 50%;
                  margin-left: 0.5rem !important;
                `}
                variant="contained"
              >
                Dodaj diagram strukturalny szczegółowy (mikroserwisy)
              </Button>
            </FlexDiv>
            <Divider
              className={css`
                margin: 1rem 0rem !important;
              `}
            />
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
          </Grid>
        </Grid>
        {/* <div
          style={{ height: "500px", marginTop: "50px" }}
          className="bpmn-container"
        >
          <ReactBpmn diagramXML={xml} onShown={console.log} />
        </div> */}
        {/* <div
          style={{ height: "500px", marginTop: "50px" }}
          className="bpmn-container"
        ></div> */}
      </Container>
      <AddDiagramModal
        open={addDiagramModalOpen}
        handleClose={() => setAddDiagramModalOpen(false)}
        onSave={(e) => mutation.mutate({ id: data.id, diagram: e })}
        initialValue={data.highLevelStructDiagram}
      />
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
