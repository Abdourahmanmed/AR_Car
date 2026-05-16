export const adminStats = {
  inventory: {
    totalCars: 128,
    carsForRent: 72,
    carsForSale: 56,
  },
  activity: {
    reservationsThisMonth: 34,
    purchaseRequests: 18,
    pendingPayments: 9,
  },
  revenue: {
    rentalRevenue: 28450,
    salesRevenue: 412000,
    platformCommission: 38700,
  },
};

export const recentOperations = [
  {
    id: "RES-2048",
    customer: "Ayan Mohamed",
    vehicle: "Mercedes-AMG GT",
    type: "Location",
    amount: 1350,
    status: "confirmed",
  },
  {
    id: "BUY-1182",
    customer: "Nour Hassan",
    vehicle: "BMW M8 Competition",
    type: "Achat",
    amount: 138000,
    status: "pending",
  },
  {
    id: "PAY-9031",
    customer: "Ilyas Omar",
    vehicle: "Porsche 911 Turbo S",
    type: "Paiement",
    amount: 2200,
    status: "waiting_payment",
  },
];
