import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../assets/images/logo.png";
import LogoAnchor from "../molecules/logo/LogoAnchor";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import { removeProfile } from "../../../../store/userSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const authLinks = profile
    ? {
        children: "Sign Out",
        onClick: () => dispatch(removeProfile()),
      }
    : { children: "Sign In", to: "/signin" };
  return (
    <>
      <Header
        navItems={[
          { children: "Home", to: "/" },
          { children: "Cart", to: "/cart" },
          authLinks,
        ]}
        logo={<LogoAnchor src={logo} style={{ width: "5rem" }} />}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
