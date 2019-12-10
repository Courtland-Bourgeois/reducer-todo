export const initialState = [
  {
    item: 'Complete Frontend Masters lesson on React',
    completed: false,
    id: 1
  },
  {
    item: 'Complete Scrimba lesson on React',
    completed: false,
    id: 2
  },
  {
    item: 'Complete Replit challenges from Lambda',
    completed: false,
    id: 3
  },
  {
    item: 'Complete a Codewars challenge daily',
    completed: false,
    id: 4
  },
  {
    item: 'Complete the Practical Javascript lesson',
    completed: false,
    id: 5
  },
  {
    item: 'Complete the edx lesson on Programming',
    completed: false,
    id: 6
  },
  {
    item: 'Complete the Udemy course on React',
    completed: false,
    id: 7
  }
];

export const reducer = (state, action) => {
  switch(action.type) {
    default:
        return state;
  }
};

console.log(initialState)