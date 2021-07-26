import NoteStore from "./NoteStore";
import UiState from "./UiState";

class RootStore {
    noteStore = new NoteStore(this);
    uiState = new UiState(this);
}

export default RootStore;
