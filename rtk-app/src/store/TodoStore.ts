import { ApiArticleData } from "../components/MainPage/MainPage"
import { makeAutoObservable, makeObservable } from "mobx";

class todoStore {
    data: ApiArticleData[] = [];
    constructor() {
      makeAutoObservable(this);
    }
};


export default new todoStore();