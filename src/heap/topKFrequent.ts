function topKFrequent(words: string[], k: number): string[] {
  const collection: string[] = [];
  const counter: number[] = [];
  const result: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const x = collection.indexOf(words[i]);

    if (x < 0) {
      collection.push(words[i]);
      counter[collection.length - 1] = 1;
    } else {
      counter[x]++;
    }
  }

  for (let i = 0; i < counter.length; i++) {
    if (counter[i] >= k) {
      result.push(collection[i]);
    }
  }

  return result;
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
