import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import projectIcon from "assets/project.png";
import { css } from "@emotion/css";
import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import BpmnJS from "bpmn-js";

const BpmnDiv = styled.div`
  height: 140px;
`;
interface ProjectCardProps {
  title: string;
  description: string;
  id: string;
  diagram?: string | null;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { description, title, id, diagram } = props;
  const navigate = useNavigate();

  const viewer = useRef(new BpmnJS());

  useEffect(() => {
    if (!diagram) return;

    async function inner() {
      try {
        const { warnings } = await viewer.current.importXML(diagram);
        const canvas = viewer.current.get("canvas");
        canvas.zoom("fit-viewport");
        if (warnings.length) {
          const arr = warnings as any[];
          const text = arr.reduce((acc, next) => {
            return `${acc}\n${next.message}`;
          }, "BPMN Viewer ERROR:");
          window.alert(text);
        }
      } catch (error) {
        console.log(error);
      }
    }

    viewer.current.attachTo("div#bpmn-viewer-card");
    inner();
  }, [diagram]);

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/${id}`)}>
        {!diagram && (
          <CardMedia
            component="img"
            height="140"
            image={projectIcon}
            alt="green iguana"
            className={css`
              width: auto !important;
              margin-left: auto;
              margin-right: auto;
            `}
          />
        )}
        <CardContent>
          {diagram && <BpmnDiv id="bpmn-viewer-card"/>}

          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
