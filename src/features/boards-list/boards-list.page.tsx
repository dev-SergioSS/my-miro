import { href, Link } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";

function BoardsListPage() {
  return (
    <div>
      Boards list
      <Link to={href(ROUTES.BOARD, { boardId: "1" })}>board 1</Link>
    </div>
  );
}

export const Component = BoardsListPage;
