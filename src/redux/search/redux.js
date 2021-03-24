import { createActions, createReducer } from "reduxsauce";
import produce from "immer";

const initialState = {
  searchResults: {
    photos: {
      results: []
    },
    related_searches: []
  },
  isLoading: false,
  popupControl: false
};

export const Action = createActions(
  {
    updateState: ["props"],
    searchPhotos: ["data"],
    deleteHistory: ["props"]
  },
  {
    prefix: "SEARCH/"
  }
);

export default createReducer(initialState, {
  [Action.Types.UPDATE_STATE]: (state, { props }) => ({
    ...state,
    ...props
  }),

  [Action.Types.DELETE_HISTORY]: (state, { props }) =>
    produce(state, draft => {
      draft.searchResults.photos.results = [];
    })
});
