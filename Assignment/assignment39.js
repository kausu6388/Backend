const orders = [
  { id:1, userId:1, total:500, status:"completed" },
  { id:2, userId:2, total:300, status:"pending" },
  { id:3, userId:1, total:200, status:"completed" },
  { id:4, userId:3, total:700, status:"completed" }
];

const N = 2;

const topOrders = [...orders] // copy (important)
  .sort((a, b) => b.total - a.total) // descending
  .slice(0, N);

console.log(topOrders);