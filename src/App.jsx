import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AndroidLong from "./pages/android-long";
import AndroidLeaveGroup from "./pages/android-leave-group";
import AndroidSignup from "./pages/android-signup";
import AndroidSignin from "./pages/android-signin";
import NotLoggedInDesktop from "./pages/not-logged-in-desktop";
import LoggedInUserScrolledLo from "./pages/logged-in-user-scrolled-lo";
import LoggedInUserScrolledFo from "./pages/logged-in-user-scrolled-fo";
import DesktopJoinGroup from "./pages/desktop-join-group";
import DesktopJoinGroupSignIN from "./pages/desktop-join-group-sign-i-n";
import Android from "./pages/android";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/android-leave-group":
        title = "";
        metaDescription = "";
        break;
      case "/android-signup":
        title = "";
        metaDescription = "";
        break;
      case "/android-signin":
        title = "";
        metaDescription = "";
        break;
      case "/not-logged-in-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/logged-in-user-scrolled-location-edit-enabled":
        title = "";
        metaDescription = "";
        break;
      case "/logged-in-user-scrolled-follow-groups-clicked":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-join-group":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-join-group-signin":
        title = "";
        metaDescription = "";
        break;
      case "/android":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AndroidLong />} />
      <Route path="/android-leave-group" element={<AndroidLeaveGroup />} />
      <Route path="/android-signup" element={<AndroidSignup />} />
      <Route path="/android-signin" element={<AndroidSignin />} />
      <Route path="/not-logged-in-desktop" element={<NotLoggedInDesktop />} />
      <Route
        path="/logged-in-user-scrolled-location-edit-enabled"
        element={<LoggedInUserScrolledLo />}
      />
      <Route
        path="/logged-in-user-scrolled-follow-groups-clicked"
        element={<LoggedInUserScrolledFo />}
      />
      <Route path="/desktop-join-group" element={<DesktopJoinGroup />} />
      <Route
        path="/desktop-join-group-signin"
        element={<DesktopJoinGroupSignIN />}
      />
      <Route path="/android" element={<Android />} />
    </Routes>
  );
}
export default App;
