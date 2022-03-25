import { FC } from "react";
import MuiModal from "@mui/material/Modal";
import { Box } from "@mui/system";

interface ModalProps {
  className?: string;
  open: boolean;
  handleClose?: () => void;
  fullScreen?: boolean;
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
  const { className, open, children, handleClose, fullScreen } = props;
  const modalStyle: typeof style & { height?: string } = { ...style };

  if (fullScreen) {
    modalStyle.width = "95vw";
    modalStyle.maxWidth = "unset";
    modalStyle.height = "80vh"
  }

  return (
    <div className={className}>
      <MuiModal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>{children}</Box>
      </MuiModal>
    </div>
  );
};

export default Modal;
