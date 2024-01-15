import { LogBox } from "react-native";
import { App } from "./src/App";

LogBox.ignoreAllLogs();

export default function () {
  return <App />;
}
