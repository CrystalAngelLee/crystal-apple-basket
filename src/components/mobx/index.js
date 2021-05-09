import { observer } from "mobx-react";
import { useStore } from "../../stores/mobx";
import AppleItem from "./AppleItem";

function Apple() {
  const { store } = useStore();
  const { status, buttonText, isPicking, apples, pickApple } = store;
  const { appleNow, eatenApple } = status;

  /** 获取未吃苹果的组件数组*/
  function getAppleItem() {
    const $apples = apples.filter((a) => !a.isEaten);
    if (!$apples.length)
      return (
        <div className="empty-tip" key="empty">
          苹果篮子空空如也
        </div>
      );
    return $apples.map((i) => <AppleItem apple={i} key={i.id} />);
  }

  return (
    <div className="appleBusket">
      <div className="title">苹果篮子</div>
      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">
            {appleNow.num}个苹果，{appleNow.weight}克
          </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">
            {eatenApple.num}个苹果，{eatenApple.weight}克
          </div>
        </div>
      </div>
      <div className="appleList">{getAppleItem()}</div>
      <div className="btn-div">
        <button className={isPicking ? "disabled" : ""} onClick={pickApple}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default observer(Apple);
