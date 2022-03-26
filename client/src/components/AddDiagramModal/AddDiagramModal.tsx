import { css } from "@emotion/css";
import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { Modal } from "..";
import styled from "@emotion/styled";

interface AddDiagramModalProps {
  className?: string;
  initialValue?: string | null;
  onSave: (diagram: string) => void;
  open: boolean;
  handleClose: () => void;
}

const FlexDiv = styled.div`
  display: flex;
`;

const AddDiagramModal: FC<AddDiagramModalProps> = (props) => {
  const { className, open, handleClose, initialValue, onSave, children } =
    props;
  const [diagramValue, setDiagramValue] = useState(initialValue || "");

  const handleSave = () => {
    setDiagramValue("");
    onSave(diagramValue);
  };

  return (
    <div className={className}>
      <Modal open={open} handleClose={handleClose}>
        {children}
        <TextField
          value={diagramValue}
          onChange={(e) => setDiagramValue(e.target.value)}
          rows={20}
          label="BPMN 2.0 XML"
          fullWidth
          multiline
        />
        <FlexDiv>
          <Button
            onClick={handleSave}
            color="primary"
            className={css`
              margin: 0.5rem 0.5rem 0rem 0rem !important;
            `}
            variant="contained"
          >
            Zapisz
          </Button>
          <Button
            color="secondary"
            className={css`
              margin: 0.5rem 0rem 0rem 0rem !important;
            `}
            variant="contained"
            onClick={() => handleClose()}
          >
            Anuluj
          </Button>
        </FlexDiv>
      </Modal>
    </div>
  );
};

export default AddDiagramModal;
