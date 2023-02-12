const Logo = ({ src, style }) => {
  return <img style={{ maxWidth: "100%", ...style }} src={src} alt="logo" />;
};

export default Logo;
