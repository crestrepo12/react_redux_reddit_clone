//this file is going to look like links reducer.


const defaultState = [
  {
    id: "1",
    comment: ["omg look at that rainbow", "Honey I shrunk the kids"]
  },
  {
    id: "2",
    comment: ["Here we go Lucy"]
  },
  {
    id: "3",
    comment: ["Honey I'm home"]
  },
  {
    id: "4",
    comment: ["Oh Dear, we shrunk the kids"]
  },
  {
    id: "5",
    comment: ["I just can't right now"]
  }
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
        return [...state, action.comment];
    default:
      return state;
  }
};

//action is the generic word for object of dispatch.
