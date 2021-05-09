import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../stores/mobx";
import Image from "../../assets/images/apple.jpg";

function AppleItem({ apple }) {
  const { store } = useStore();
  const { eatApple: $eatApple } = store;

  function eatApple() {
    $eatApple(apple.id);
  }

  return (
    <div className="appleItem">
      <div className="apple">
        <img src={Image} alt="" />
      </div>
      <div className="info">
        <div className="name">红苹果 - {apple.id}号</div>
        <div className="weight">{apple.weight}克</div>
      </div>
      <div className="btn-div">
        <button onClick={() => eatApple(apple.id)}> 吃掉 </button>
      </div>
    </div>
  );
}

export default observer(AppleItem);
