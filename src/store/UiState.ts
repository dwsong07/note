import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";

class UiState {
    search = "";
    root;

    constructor(root: RootStore) {
        makeAutoObservable(this);
        this.root = root;
    }

    setSearch = (search: string) => {
        this.search = search;
    };
}

export default UiState;
