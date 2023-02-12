import { Link } from "react-router-dom";
import Logo from "../../atoms/logo/Logo";

const LogoAnchor = ({ to = "/", ...logoProps }) => {
  return (
    <Link to={to}>
      <Logo {...logoProps} />
    </Link>
  );
};

export default LogoAnchor;
