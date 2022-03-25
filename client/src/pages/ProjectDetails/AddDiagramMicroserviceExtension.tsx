import styled from "@emotion/styled";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Microservice } from "types/Microservice";

const FlexDiv = styled.div`
  display: flex;
`;

interface AddDiagramMicroserviceExtensionProps {
  className?: string;
  microservices: Microservice[];
  onChange: (values: Values) => void;
}

export interface Values {
  "1": Microservice | null;
  "2": Microservice | null;
}

const AddDiagramMicroserviceExtension: FC<
  AddDiagramMicroserviceExtensionProps
> = (props) => {
  const { className, microservices, onChange } = props;

  const [selectedMicroservices, setSelectedMicroservices] = useState<Values>({
    "1": microservices[0] || null,
    "2": microservices[1] || null,
  });

  useEffect(() => {
    onChange(selectedMicroservices);

    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMicroservices]);

  const handleSelectChange = (msNumber: string, msId: string) => {
    const newValue = { ...selectedMicroservices };
    const ms = microservices.find((e) => e.id === msId) || null;
    newValue[msNumber as keyof typeof selectedMicroservices] = ms;
    setSelectedMicroservices(newValue);
  };

  return (
    <div className={className}>
      <FlexDiv>
        {["1", "2"].map((msNumber) => (
          <FormControl
            style={{
              margin: msNumber === "1" ? "0 0.5rem 0 0" : "0 0 0 0.5rem",
            }}
            fullWidth
            key={msNumber}
          >
            <InputLabel id="demo-simple-select-label">
              Mikroserwis {msNumber}
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={
                selectedMicroservices[
                  msNumber as keyof typeof selectedMicroservices
                ]?.id
              }
              label={`Mikroserwis ${msNumber}`}
              onChange={(e) => handleSelectChange(msNumber, e.target.value)}
            >
              {microservices.map((ms) => (
                <MenuItem key={ms.id} value={ms.id}>
                  {ms.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </FlexDiv>
    </div>
  );
};

export default AddDiagramMicroserviceExtension;
