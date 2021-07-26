import NoteStore from "./NoteStore";
import UiState from "./UiState";

class RootStore {
    noteStore = new NoteStore();
    uiState = new UiState();
}

export default RootStore;
