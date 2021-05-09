import MApple from "./mobx";
import { MStore, Provider } from "../stores/mobx";
import "../styles/index.scss";
const mStore = new MStore();

export default function Main() {
  return (
    <Provider store={mStore}>
      <MApple />
    </Provider>
  );
}
