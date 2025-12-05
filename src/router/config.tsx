import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Features from "../pages/features/page";
import Products from "../pages/products/page";
import TorsionSpring from "../pages/products/torsion-spring/page";
import CompressionSpring from "../pages/products/compression-spring/page";
import TensionSpring from "../pages/products/tension-spring/page";
import WireForming from "../pages/products/wire-forming/page";
import MicroSpring from "../pages/products/micro-spring/page";
import OtherProducts from "../pages/products/other-products/page";
import Contact from "../pages/contact/page";
import Recruit from "../pages/recruit/page";
import MessagePage from "../pages/company/message/page";
import CompanyOverviewPage from "../pages/company/overview/page";
import OfficePage from "../pages/company/office/page";
import HistoryPage from "../pages/company/history/page";
import CSRPage from "../pages/company/csr/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/torsion-spring",
    element: <TorsionSpring />,
  },
  {
    path: "/products/compression-spring",
    element: <CompressionSpring />,
  },
  {
    path: "/products/tension-spring",
    element: <TensionSpring />,
  },
  {
    path: "/products/wire-forming",
    element: <WireForming />,
  },
  {
    path: "/products/micro-spring",
    element: <MicroSpring />,
  },
  {
    path: "/products/other-products",
    element: <OtherProducts />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/recruit",
    element: <Recruit />,
  },
  {
    path: "/company/message",
    element: <MessagePage />,
  },
  {
    path: "/company/overview",
    element: <CompanyOverviewPage />,
  },
  {
    path: "/company/office",
    element: <OfficePage />,
  },
  {
    path: "/company/history",
    element: <HistoryPage />,
  },
  {
    path: "/company/csr",
    element: <CSRPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
