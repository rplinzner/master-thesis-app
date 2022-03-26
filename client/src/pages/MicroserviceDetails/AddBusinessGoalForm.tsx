import { useForm } from "react-hook-form";

import { FC } from "react";
import { Button, TextField } from "@mui/material";
import { css } from "@emotion/css";

type AddBusinessGoalFormValues = {
  name: string;
};

interface AddBusinessGoalFormProps {
  className?: string;
  handleClose: () => void;
  onSubmit: (values: AddBusinessGoalFormValues) => Promise<void> | void;
}

const AddBusinessGoalForm: FC<AddBusinessGoalFormProps> = (props) => {
  const { className, handleClose, onSubmit } = props;
  const { handleSubmit, register } = useForm<AddBusinessGoalFormValues>();

  return (
    <div className={className}>
      <form
        className={css`
          padding: "3rem";
        `}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register("name", { required: true })}
          className={css`
            margin-bottom: 2rem !important;
          `}
          autoFocus
          label="Nazwa"
          type="name"
          name="name"
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

export default AddBusinessGoalForm;
