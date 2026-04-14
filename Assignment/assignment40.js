const orders = [
  { id:1, userId:1, total:500, status:"completed" },
  { id:2, userId:2, total:300, status:"pending" },
  { id:3, userId:1, total:200, status:"completed" },
  { id:4, userId:3, total:700, status:"completed" }
];

// Step 1: sum + count
const temp = orders.reduce((acc, order) => {
  if (!acc[order.userId]) {
    acc[order.userId] = { sum: 0, count: 0 };
  }
  acc[order.userId].sum += order.total;
  acc[order.userId].count += 1;
  return acc;
}, {});

// Step 2: convert to average
const result = {};
for (let userId in temp) {
  result[userId] = temp[userId].sum / temp[userId].count;
}

console.log(result);