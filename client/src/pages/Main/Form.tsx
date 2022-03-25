import { useForm } from "react-hook-form";

import { FC } from "react";
import { Button, TextField } from "@mui/material";
import { css } from "@emotion/css";

type FormValues = {
  title: string;
  description: string;
};

interface FormProps {
  className?: string;
  handleClose: () => void;
  onSubmit: (values: FormValues) => Promise<void> | void;
}

const Form: FC<FormProps> = (props) => {
  const { className, handleClose, onSubmit } = props;
  const { handleSubmit, register } = useForm<FormValues>();

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
        <TextField
          {...register("description", { required: true })}
          className={css`
            margin-bottom: 2rem !important;
          `}
          rows={4}
          label="Opis"
          type="description"
          name="description"
          fullWidth
          multiline
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

export default Form;
