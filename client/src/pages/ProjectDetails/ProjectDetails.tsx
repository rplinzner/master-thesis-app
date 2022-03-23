import { FC } from "react";
import { useParams } from "react-router-dom";

interface ProjectDetailsProps {
  className?: string;
}

const ProjectDetails: FC<ProjectDetailsProps> = (props) => {
  const { className } = props;
  const {id} = useParams<{ id: string }>();
  return <div className={className}>{id}</div>;
};

export default ProjectDetails;
