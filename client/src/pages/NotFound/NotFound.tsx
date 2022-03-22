import { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../routes.enum";

const NotFound: FC = () => {
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        <Link to={Routes.MAIN_PAGE}>Go to Home </Link>
      </p>
    </div>
  );
};

export default NotFound;
