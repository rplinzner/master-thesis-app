import { FC } from "react";
import MuiModal from "@mui/material/Modal";
import { Box } from "@mui/system";

interface ModalProps {
  className?: string;
  open: boolean;
  handleClose?: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  maxWidth: "900px",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const Modal: FC<ModalProps> = (props) => {
  const { className, open, children, handleClose } = props;
  return (
    <div className={className}>
      <MuiModal open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </MuiModal>
    </div>
  );
};

export default Modal;
