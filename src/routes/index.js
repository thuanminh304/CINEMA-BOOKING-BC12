import About from "containers/client/About/About";
import DemoHOC from "containers/client/DemoHOC/DemoHOC";
import DemoHook from "containers/client/DemoHook/DemoHook";
import Home from "containers/client/Home/Home";
import MovieDetail from "containers/client/MovieDetail/MovieDetail";
import Review from "containers/client/Review/Review";
import SeatPlan from "containers/client/SeatPlan/SeatPlan";
import Theater from "containers/client/Theater/Theater";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/theater",
    component: Theater,
    exact: false,
  },
  {
    path: "/review",
    component: Review,
    exact: false,
  },
  {
    path: "/about",
    component: About,
    exact: false,
  },
  {
    path: "/movie-detail/:movieId",
    component: MovieDetail,
    exact: false,
  },
  {
    path: "/seat-plan/:showtimeId",
    component: SeatPlan,
    exact: false,
  },
  {
    path: "/hook",
    component: DemoHook,
    exact: false,
  },
  {
    path: "/hoc",
    component: DemoHOC,
    exact: false,
  },
];

