interface Ibody{
  Username: String,
  Password: String,
  Comment: String,
  Email: String,
  Mobile: String,
  Discord: String,
  Address:{
    City: String,
    Postcode: String,
    Street: String,
    Floor: Number,
    Door: Number
  },
  Debit_Card:{
    Card_num: String,
    cvc: String,
    Owner: String,
    Valid_date: String
  }
}

interface Ihead{
  Cookie: String
}

export {
  Ibody,
  Ihead
}