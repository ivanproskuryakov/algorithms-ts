// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a
// different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/


function maxProfit(prices: number[]): number {
  let sell = 0;
  let buy = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[buy]) {
      buy = i;
      sell = i;
    }

    if (prices[sell] - prices[buy] < prices[i] - prices[buy]) {
      sell = i;
    }
  }

  return prices[sell] - prices[buy];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
