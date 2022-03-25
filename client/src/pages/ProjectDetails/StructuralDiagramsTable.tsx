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
} from "@mui/material";
import { FC } from "react";
import { DetailedStructuralDiagram } from "types/DetailedStructuralDiagram";

interface StructuralDiagramsTableProps {
  className?: string;
  data?: DetailedStructuralDiagram[];
}

const StructuralDiagramsTable: FC<StructuralDiagramsTableProps> = (props) => {
  const { className, data } = props;
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.firstMicroservice.name}</TableCell>
                <TableCell align="left">{row.secondMicroservice.name}</TableCell>
                <TableCell align="left">
                  <Button variant="outlined" size="small">
                    Wyświetl
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StructuralDiagramsTable;
