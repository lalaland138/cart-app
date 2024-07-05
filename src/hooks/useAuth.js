import { useDispatch, useSelector } from "react-redux";
import { authorise } from "../reducers/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const isUserAuthorised = useSelector((state) => state.auth.authFlag);
  const authoriseUser = (payload) => {
    dispatch(authorise(payload));
  };
  return { isUserAuthorised, authoriseUser };
};

export default useAuth;
