import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import projectIcon from "assets/project.png";
import { css } from "@emotion/css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  id: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { description, title, id } = props;
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/${id}`)}>
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
        <CardContent>
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
