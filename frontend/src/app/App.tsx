import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AIProblemRecommender } from "./components/AIProblemRecommender";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <AIProblemRecommender />
    </>
  );
}
