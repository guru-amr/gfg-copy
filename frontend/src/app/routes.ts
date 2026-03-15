import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { EventsPage } from "./components/EventsPage";
import { ResourcesPage } from "./components/ResourcesPage";
import { LeaderboardPage } from "./components/LeaderboardPage";
import { BlogPage } from "./components/BlogPage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "events", Component: EventsPage },
      { path: "resources", Component: ResourcesPage },
      { path: "leaderboard", Component: LeaderboardPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
      {
        path: "*",
        Component: HomePage,
      },
    ],
  },
]);
