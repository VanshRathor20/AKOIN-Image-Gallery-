// Supported actions: ADD_FAVOURITE | REMOVE_FAVOURITE

const favouritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      // Prevent duplicates before adding.
      if (state.find((photo) => photo.id === action.payload.id)) return state;
      return [...state, action.payload];

    case "REMOVE_FAVOURITE":
      return state.filter((photo) => photo.id !== action.payload.id);

    default:
      return state;
  }
};

export default favouritesReducer;
