import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
} from "@mui/material";
import { DiagramViewer } from "components";
import { FC, useState } from "react";
import { DetailedStructuralDiagram } from "types/DetailedStructuralDiagram";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface StructuralDiagramsTableProps {
  className?: string;
  data?: DetailedStructuralDiagram[];
  handleDeleteDiagram: (diagramId: string) => void;
}

const StructuralDiagramsTable: FC<StructuralDiagramsTableProps> = (props) => {
  const { className, data, handleDeleteDiagram } = props;

  const [isDiagramOpen, setIsDiagramOpen] = useState(false);
  const [diagramXml, setDiagramXml] = useState<string | undefined>();

  const handleShowDiagram = (xml: string) => {
    setDiagramXml(xml);
    setIsDiagramOpen(true);
  };

  return (
    <div className={className}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          {(!data || !data.length) && (
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
              <TableCell align="left">Mikroserwis 1</TableCell>
              <TableCell align="left">Mikroserwis 2</TableCell>
              <TableCell align="left">Diagram</TableCell>
              <TableCell align="left">Akcje</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
                    <IconButton onClick={() => handleDeleteDiagram(row.id)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {diagramXml && (
        <DiagramViewer
          open={isDiagramOpen}
          handleClose={() => setIsDiagramOpen(false)}
          xml={diagramXml}
        />
      )}
    </div>
  );
};

export default StructuralDiagramsTable;
