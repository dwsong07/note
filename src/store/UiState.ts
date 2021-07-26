import { makeAutoObservable } from "mobx";

class UiState {
    search = "";

    constructor() {
        makeAutoObservable(this);
    }

    setSearch(search: string) {
        this.search = search;
    }
}

export default UiState;
