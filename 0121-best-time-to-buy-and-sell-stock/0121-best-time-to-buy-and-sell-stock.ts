function maxProfit(prices: number[]): number {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            if (prices[j] <= prices[i]) continue;
            profit = Math.max(profit, prices[j] - prices[i]);
        }
    }
    return profit;
};