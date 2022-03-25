import { FC } from "react";
import { Modal } from "..";
import ReactBpmn from "react-bpmn";
import { Button } from "@mui/material";
import { css } from "@emotion/css";

interface DiagramViewerProps {
  className?: string;
  open: boolean;
  xml: string;
  handleClose: () => void;
}

const DiagramViewer: FC<DiagramViewerProps> = (props) => {
  const { className, open, xml, handleClose } = props;
  return (
    <div className={className}>
      <Modal handleClose={handleClose} fullScreen open={open}>
        <ReactBpmn diagramXML={xml} />
        <Button
          color="primary"
          className={css`
            margin: 0rem 0rem !important;
            width: 100%;
          `}
          variant="contained"
          onClick={handleClose}
        >
          Zamknij
        </Button>
      </Modal>
    </div>
  );
};

export default DiagramViewer;
