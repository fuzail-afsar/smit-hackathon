import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile, isUserLoggedIn } from "../services/firebase/auth";
import { setProfile } from "../store/userSlice";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (await isUserLoggedIn()) {
        const { displayName, email, uid } = getUserProfile();
        dispatch(setProfile({ name: displayName, email, id: uid }));
      }
    })();
  }, []);
  return children;
};

export default Auth;
