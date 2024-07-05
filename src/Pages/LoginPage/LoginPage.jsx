import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isUserAuthorised, authoriseUser } = useAuth();
  const processLogin = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    authoriseUser({ username: username, password: password });
    if (isUserAuthorised) {
      navigate("/cart");
    }
  };

  return (
    <div
      style={{
        height: "24rem",
        width: "40vw",
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
        <h1>Please Login</h1>
        <form onSubmit={processLogin}>
          <div>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
