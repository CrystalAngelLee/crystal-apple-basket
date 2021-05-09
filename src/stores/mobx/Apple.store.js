import { makeAutoObservable, computed, runInAction } from "mobx";

const defaultState = {
  apples: [
    {
      id: 0,
      weight: 233,
      isEaten: false,
    },
    {
      id: 1,
      weight: 235,
      isEaten: true,
    },
    {
      id: 2,
      weight: 256,
      isEaten: false,
    },
  ],
};

class AppleStore {
  constructor() {
    // 将参数对象中的属性设置为 observable state
    // 将参数对象中的方法设置为 action
    makeAutoObservable(this, { reset: true }, { autoBind: true });
  }
  apples = defaultState.apples; // 所有的苹果
  isPicking = false; // 正在摘苹果
  buttonText = "摘苹果";
  mockid = 3;

  @computed get status() {
    let status = {
      appleNow: { num: 0, weight: 0 },
      eatenApple: { num: 0, weight: 0 },
    };
    this.apples.forEach((a) => {
      const key = a.isEaten ? "eatenApple" : "appleNow";
      status[key].num++;
      status[key].weight += a.weight;
    });
    return status;
  }

  async pickApple() {
    if (this.isPicking) return;
    this.isPicking = true;
    this.buttonText = "正在采摘...";
    const data = await new Promise((resolve, reject) => {
      const apple = {
        id: this.mockid++,
        weight: Math.floor(200 + Math.random() * 60),
        isEaten: false,
      };
      resolve(apple);
    });
    runInAction(() => {
      this.apples = [...this.apples, data];
      this.isPicking = false;
      this.buttonText = "摘苹果";
    });
  }

  eatApple = (id) => {
    this.apples = this.apples.map((a) => {
      if (a.id === id) {
        a.isEaten = true;
      }
      return a;
    });
  };
}

export default AppleStore;
