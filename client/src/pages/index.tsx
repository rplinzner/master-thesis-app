import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";
import { Routes as RoutesEnum } from "./routes.enum";

const RoutedContent: FC = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.MAIN_PAGE} element={<Main />} />
      <Route path={RoutesEnum.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default RoutedContent;
