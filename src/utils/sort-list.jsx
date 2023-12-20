export function sortList(list, sortedField, sortedOrder) {
  if (
    (sortedField === "date" && sortedOrder === "old") ||
    (sortedField === "value" && sortedOrder === "direct")
  ) {
    return list.sort((todo_1, todo_2) =>
      compareTwoElements(todo_1, todo_2, sortedField)
    );
  } else if (sortedField === "date" && sortedOrder === "new") {
    return list.sort((todo_1, todo_2) =>
      compareTwoElements(todo_2, todo_1, sortedField)
    );
  }
}

const compareTwoElements = (item1, item2, field) => {
  if (item1[field] > item2[field]) return 1;
  else if (item2[field] > item1[field]) return -1;
  return 0;
};
