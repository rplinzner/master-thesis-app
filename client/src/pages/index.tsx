import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import MicroserviceDetails from "./MicroserviceDetails";
import NotFound from "./NotFound";
import ProjectDetails from "./ProjectDetails";
import { Routes as RoutesEnum } from "./routes.enum";

const RoutedContent: FC = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.MAIN_PAGE} element={<Main />} />
      <Route path={RoutesEnum.PROJECT_DETAILS} element={<ProjectDetails />} />
      <Route path={RoutesEnum.MICROSERVICE} element={<MicroserviceDetails />} />
      <Route path={RoutesEnum.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default RoutedContent;
