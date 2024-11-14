export const enum STATE {
  USED = "Used",
  PENDING = "Pending",
  DELETED = "Deleted",
  DISCOUNT = "Discount",
}

export const ticketData = [
  {
    id: "1",
    type: "Ticket",
    from: "Nyabugogo",
    to: "Remera",
    date: "27/12/2024",
    time: "12:00PM",
    states: [STATE.USED, STATE.PENDING, STATE.DELETED],
  },
  {
    id: "2",
    type: "Rented Car",
    owner: "Mary James",
    driver: "Jacob",
    price: "200,000 Rwf",
    states: [STATE.DISCOUNT],
  },
  {
    id: "3",
    type: "Ticket",
    from: "Nyabugogo",
    to: "Remera",
    date: "27/12/2024",
    time: "12:00PM",
    states: [STATE.USED, STATE.PENDING, STATE.DELETED],
  },
  {
    id: "4",
    type: "Rented Car",
    owner: "Mary James",
    driver: "Jacob",
    price: "300,000 Rwf",
    states: [STATE.DISCOUNT],
  },
];
