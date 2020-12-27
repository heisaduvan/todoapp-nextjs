import "../node_modules/normalize.css/normalize.css";
import "../styles/globals.css";
import {TaskProvider} from "../TaskContext";
function MyApp({ Component, pageProps }) {
  return(
  <TaskProvider>
    <Component {...pageProps} />
  </TaskProvider>);
}

export default MyApp;
