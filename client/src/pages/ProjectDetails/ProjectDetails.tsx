import { css } from "@emotion/css";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { getById } from "api/projects";
import { FC, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Project } from "types/Project";
import styled from "@emotion/styled";
import xml from "./temp";
import ReactBpmn from "react-bpmn";
import BpmnJS from "bpmn-js";

interface ProjectDetailsProps {
  className?: string;
}

const Div = styled.div`
  display: flex;
`;

const ProjectDetails: FC<ProjectDetailsProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  const { data, status } = useQuery<Project>(
    ["project", id],
    () => getById(id!),
    { onSuccess: console.log }
  );

  const viewer = useRef(new BpmnJS());

  useEffect(() => {
    if (status === "loading") return;

    async function inner() {
      try {
        const { warnings } = await viewer.current.importXML(xml);
        const canvas = viewer.current.get("canvas");
        canvas.zoom("fit-viewport");
        if (warnings.length) {
          const arr = warnings as any[];
          const text = arr.reduce((acc, next) => {
            return `${acc}\n${next.message}`;
          }, "BPMN Viewer ERROR:");
          window.alert(text);
        }
      } catch (error) {
        console.log(error);
      }
    }

    viewer.current.attachTo("div.bpmn-container");
    inner();

  }, [status]);

  if (status === "loading")
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
        <Typography variant="h3">{data?.title || ""}</Typography>
        <Typography variant="body1">{data?.description || ""}</Typography>
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
            <Div>
              <Button
                className={css`
                  width: 50%;
                  margin-right: 0.5rem !important;
                `}
                variant="contained"
              >
                Dodaj diagram strukturalny wysokiego poziomu
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
            </Div>
          </Grid>
        </Grid>
        {/* <div
          style={{ height: "500px", marginTop: "50px" }}
          className="bpmn-container"
        >
          <ReactBpmn diagramXML={xml} onShown={console.log} />
        </div> */}
        <div
          style={{ height: "500px", marginTop: "50px" }}
          className="bpmn-container"
        ></div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
