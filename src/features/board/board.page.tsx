import { ROUTES, type PathParams } from "@/shared/model/routes";
import { useParams } from "react-router-dom";

function BoardPage() {
  const params = useParams<PathParams[typeof ROUTES.BOARD]>();

  return (
    <div>
      Board page
      <b>{params.boardId}</b>
    </div>
  );
}

export const Component = BoardPage;
