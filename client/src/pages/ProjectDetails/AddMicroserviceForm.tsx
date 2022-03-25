import { useForm } from "react-hook-form";

import { FC } from "react";
import { Button, TextField } from "@mui/material";
import { css } from "@emotion/css";

type AddMicroserviceFormValues = {
  title: string;
};

interface AddMicroserviceFormProps {
  className?: string;
  handleClose: () => void;
  onSubmit: (values: AddMicroserviceFormValues) => Promise<void> | void;
}

const AddMicroserviceForm: FC<AddMicroserviceFormProps> = (props) => {
  const { className, handleClose, onSubmit } = props;
  const { handleSubmit, register } = useForm<AddMicroserviceFormValues>();

  return (
    <div className={className}>
      <form
        className={css`
          padding: "3rem";
        `}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register("title", { required: true })}
          className={css`
            margin-bottom: 2rem !important;
          `}
          autoFocus
          label="Tytuł"
          type="title"
          name="title"
          fullWidth
        />
        <Button variant="contained" type="submit" color="primary">
          Utwórz
        </Button>
        <Button
          className={css`
            margin-left: 1rem !important;
          `}
          color="primary"
          onClick={handleClose}
        >
          Anuluj
        </Button>
      </form>
    </div>
  );
};

export default AddMicroserviceForm;
