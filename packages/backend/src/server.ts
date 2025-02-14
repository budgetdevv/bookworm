import App from "@/app";
import AuthRoute from "@routes/auth.route";
import IndexRoute from "@routes/index.route";
import UsersRoute from "@routes/users.route";
import validateEnv from "@utils/validateEnv";
import ProtectedRoute from "./routes/protected.route";

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new ProtectedRoute(),
  new AuthRoute(),
]);

app.listen();
