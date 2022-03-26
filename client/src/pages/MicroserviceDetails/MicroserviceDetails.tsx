import { css } from "@emotion/css";
import {
  Container,
  Typography,
  Divider,
  Grid,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  TableBody,
} from "@mui/material";
import { getMicroservice } from "api/microservices";
import { FC, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import { MicroserviceWithProject } from "types/Microservice";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import {
  addBusinessGoal,
  deleteBusinessGoal,
  updateBehavioralDiagram,
  updateCollaborationScenario,
  updateExceptionScenario,
} from "api/businessGoal";
import { AddDiagramModal, DiagramViewer, Modal } from "components";
import AddBusinessGoalForm from "./AddBusinessGoalForm";

interface MicroserviceDetailsProps {
  className?: string;
}

const MicroserviceDetails: FC<MicroserviceDetailsProps> = (props) => {
  const { id } = useParams<{ id: string }>();

  const { data, status } = useQuery<MicroserviceWithProject>(
    ["microservice", id],
    () => getMicroservice(id!, true)
  );

  const queryClient = useQueryClient();

  const addBusinessGoalMutation = useMutation(addBusinessGoal, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["microservice", id]);
      setAddGoalOpen(false);
    },
  });

  const updateBehavioralDiagramMutation = useMutation(updateBehavioralDiagram, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["microservice", id]);
      setIsAddingModalOpen(false);
    },
  });

  const updateCollaborationScenarioMutation = useMutation(
    updateCollaborationScenario,
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["microservice", id]);
        setIsAddingModalOpen(false);
      },
    }
  );

  const updateExceptionScenarioMutation = useMutation(updateExceptionScenario, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["microservice", id]);
      setIsAddingModalOpen(false);
    },
  });

  const deleteBusinessGoalMutation = useMutation(deleteBusinessGoal, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["microservice", id]);
    },
  });

  const [addGoalOpen, setAddGoalOpen] = useState(false);

  const [businessGoalId, setBusinessGoalId] = useState("");
  const [initialValue, setInitialValue] = useState("");
  const [isAddingModalOpen, setIsAddingModalOpen] = useState(false);

  const [xmlToShow, setXmlToShow] = useState("");
  const [isShowingDiagram, setIsShowingDiagram] = useState(false);

  const mutationMethod = useRef(updateBehavioralDiagramMutation);

  const prepareComponenentForDiagram = (
    goalId: string,
    index: number,
    behavioral: string | null,
    collaboration: string | null,
    exceptional: string | null,
    diagram = false
  ) => {
    switch (index) {
      case 0:
        mutationMethod.current = updateBehavioralDiagramMutation;
        if (diagram) setInitialValue(behavioral!);
        break;
      case 1:
        mutationMethod.current = updateCollaborationScenarioMutation;
        if (diagram) setInitialValue(collaboration!);
        break;
      case 2:
        mutationMethod.current = updateExceptionScenarioMutation;
        if (diagram) setInitialValue(exceptional!);
        break;

      default:
        break;
    }
    setBusinessGoalId(goalId);
    setIsAddingModalOpen(true);
  };

  const showCorrectDiagram = (
    index: number,
    behavioral: string | null,
    collaboration: string | null,
    exceptional: string | null
  ) => {
    switch (index) {
      case 0:
        setXmlToShow(behavioral!);
        break;
      case 1:
        setXmlToShow(collaboration!);
        break;
      case 2:
        setXmlToShow(exceptional!);
        break;

      default:
        break;
    }
    setIsShowingDiagram(true);
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

  const { className } = props;
  return (
    <div className={className}>
      <Container
        maxWidth="xl"
        className={css`
          padding-top: 2rem;
        `}
      >
        <Typography variant="h3">Mikroserwis: {data.name || ""}</Typography>
        <Link
          to={`/${data.project.id}`}
          className={css`
            color: black;
          `}
        >
          <Typography variant="body1">
            Powrót do projektu: {data.project.title || ""}
          </Typography>
        </Link>
        <Divider
          className={css`
            margin-top: 2rem !important;
            margin-bottom: 2rem !important;
          `}
        />
        <Grid container justifyContent="center">
          <Typography mt={2} variant="h5">
            Cele biznesowe mikroserwisu
          </Typography>
          <Button
            className={css`
              margin: 1rem 0 !important;
              width: 100%;
            `}
            variant="contained"
            onClick={() => setAddGoalOpen(true)}
          >
            Dodaj cel biznesowy
          </Button>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              {!data.goals.length && (
                <caption
                  className={css`
                    font-weight: bold !important;
                    text-align: center !important;
                  `}
                >
                  Brak diagramów do wyświetlenia
                </caption>
              )}
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nazwa celu biznesowego</TableCell>
                  <TableCell align="left">Diagram behawioralny</TableCell>
                  <TableCell align="left">Scenariusz kolaboracji</TableCell>
                  <TableCell align="left">Scenariusz wyjątkowy</TableCell>
                  <TableCell align="left">Akcje</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.goals.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    {[
                      row.behavioralDiagram,
                      row.collaborationScenario,
                      row.exceptionScenario,
                    ].map((diagram, i) => (
                      <TableCell key={`diagram-${row.id}-${i}`} align="left">
                        {diagram ? (
                          <>
                            <Button
                              className={css`
                                margin-right: 0.5rem !important;
                              `}
                              size="small"
                              variant="outlined"
                              onClick={() =>
                                showCorrectDiagram(
                                  i,
                                  row.behavioralDiagram,
                                  row.collaborationScenario,
                                  row.exceptionScenario
                                )
                              }
                            >
                              Wyświetl
                            </Button>
                            <Button
                              onClick={() =>
                                prepareComponenentForDiagram(
                                  row.id,
                                  i,
                                  row.behavioralDiagram,
                                  row.collaborationScenario,
                                  row.exceptionScenario,
                                  true
                                )
                              }
                              size="small"
                              variant="contained"
                            >
                              Zmień
                            </Button>
                          </>
                        ) : (
                          <Button
                            onClick={() =>
                              prepareComponenentForDiagram(
                                row.id,
                                i,
                                row.behavioralDiagram,
                                row.collaborationScenario,
                                row.exceptionScenario
                              )
                            }
                            size="small"
                            variant="contained"
                          >
                            Dodaj
                          </Button>
                        )}
                      </TableCell>
                    ))}
                    <TableCell align="left">
                      <IconButton
                        onClick={() =>
                          deleteBusinessGoalMutation.mutate(row.id)
                        }
                        edge="end"
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
      <AddDiagramModal
        open={isAddingModalOpen}
        handleClose={() => setIsAddingModalOpen(false)}
        onSave={(e) =>
          mutationMethod.current.mutate({
            id: businessGoalId,
            xml: e,
          })
        }
        initialValue={initialValue}
      />
      <Modal open={addGoalOpen} handleClose={() => setAddGoalOpen(false)}>
        <AddBusinessGoalForm
          handleClose={() => setAddGoalOpen(false)}
          onSubmit={({ name }) =>
            addBusinessGoalMutation.mutate({ name, microserviceId: data.id })
          }
        />
      </Modal>
      {xmlToShow && (
        <DiagramViewer
          open={isShowingDiagram}
          xml={xmlToShow}
          handleClose={() => setIsShowingDiagram(false)}
        />
      )}
    </div>
  );
};

export default MicroserviceDetails;
