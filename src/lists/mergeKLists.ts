const mergeKLists = (lists: number[][]) => {
  const collection = lists[0];

  lists.shift();

  for (let x = 0; x < lists.length; x++) {
    for (let y = 0; y < lists[x].length; y++) {
      const value = lists[x][y];
      let index = null;
      const max = collection[collection.length - 1];

      for (let i = 0; i < collection.length; i++) {
        if (!index && value >= collection[i] && value < collection[i + 1]) {
          index = i;
        }
      }

      // console.log(max);

      if (index !== null) {
        collection.splice(index + 1, 0, value);
      }
      if (value > max) {
        collection.splice(collection.length + 1, 0, value);
      }
    }
  }

  return collection;
};

mergeKLists([
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
]);
