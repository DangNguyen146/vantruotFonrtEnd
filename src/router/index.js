import HomePage from "../container/HomeTemplate/HomePage";
import AccUser from "../container/HomeTemplate/AccUser";
import DetailPage from "../container/HomeTemplate/DetailPage";
import DetaiPageDeck from "../container/HomeTemplate/DetaiPageDeck";
import DetaiPageTruck from "../container/HomeTemplate/DetaiPageTruck";
import DetaiPageWheel from "../container/HomeTemplate/DetaiPageWheel";
import ContactDetail from "../container/HomeTemplate/ContactDetail";
import Blog from "../container/HomeTemplate/Blog";
import SearchPage from "../container/HomeTemplate/SearchPage";
import LichSuTruotVan from "../container/HomeTemplate/Page/News/LichSuTruotVan";
import QuanLiDonHang from "../container/HomeTemplate/QuanLiDonHang";

const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/login",
    component: AccUser,
    exact: false,
  },
  {
    path: "/detail/:id",
    component: DetailPage,
    exact: false,
  },
  {
    path: "/deck/:id",
    component: DetaiPageDeck,
    exact: false,
  },
  {
    path: "/truck/:id",
    component: DetaiPageTruck,
    exact: false,
  },
  {
    path: "/wheel/:id",
    component: DetaiPageWheel,
    exact: false,
  },
  {
    path: "/contact",
    component: ContactDetail,
    exact: false,
  },
  {
    path: "/blog",
    component: Blog,
    exact: false,
  },
  {
    path: "/blog",
    component: Blog,
    exact: false,
  },
  {
    path: "/LichSuTruotVan",
    component: LichSuTruotVan,
    exact: false,
  },
  {
    path: "/search",
    component: SearchPage,
    exact: false,
  },
  {
    path: "/quanlidonhang",
    component: QuanLiDonHang,
    exact: false,
  },
];

export { routeHome };
