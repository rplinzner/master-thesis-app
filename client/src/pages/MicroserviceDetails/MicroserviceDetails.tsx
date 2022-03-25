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
} from "@mui/material";
import { getMicroservice } from "api/microservices";
import { FC } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { MicroserviceWithProject } from "types/Microservice";
import FolderIcon from "@mui/icons-material/Folder";
import styled from "@emotion/styled";

interface MicroserviceDetailsProps {
  className?: string;
}

const MicroserviceDetails: FC<MicroserviceDetailsProps> = (props) => {
  const { id } = useParams<{ id: string }>();

  const { data, status } = useQuery<MicroserviceWithProject>(
    ["microservice", id],
    () => getMicroservice(id!)
  );

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
        <Typography variant="h3">Microservice: {data.name || ""}</Typography>
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
          >
            Dodaj cel biznesowy
          </Button>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              {!data && (
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
              {/* <TableBody>
                {data &&
                  data.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">
                        {row.firstMicroservice.name}
                      </TableCell>
                      <TableCell align="left">
                        {row.secondMicroservice.name}
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleShowDiagram(row.diagram)}
                        >
                          Wyświetl
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        <IconButton
                          onClick={() => handleDeleteDiagram(row.id)}
                          edge="end"
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody> */}
            </Table>
          </TableContainer>
        </Grid>
      </Container>

      {/* <AddDiagramModal
        open={addDiagramModalOpen}
        handleClose={() => setAddDiagramModalOpen(false)}
        onSave={(e) => addDiagramMutation.mutate({ id: data.id, diagram: e })}
        initialValue={data.highLevelStructDiagram}
      /> */}
    </div>
  );
};

export default MicroserviceDetails;
