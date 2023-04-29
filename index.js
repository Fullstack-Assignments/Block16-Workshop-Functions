/*
You have been hired by a pharmaceutical startup as a junior developer. 
Things are busy and they need you to start right away.
To encourage customer retention, they have been reworking their checkout system 
to include two different types of discounts.

Using the following criteria, your first assignment is to create the logic for 
their checkout system that returns the total cost of all refills including if 
the customer has a subscription and/or a coupon.

If a customer has a subscription, the customer will receive a 25% discount after 
the refill total has been calculated.
If the customer has a coupon, the customer will receive a $10 discount after 
the subscription discount has been calculated.
At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 
*/

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};
// declarations & initialization
let RefillCost = 0;
let subscriberDiscount = 0.75; // 25% subscriber discount
let couponDiscount = 10; // $10 coupon discount

// function call
refillTotal(timmy, subscriberDiscount, couponDiscount);
refillTotal(sarah, subscriberDiscount, couponDiscount);
refillTotal(rocky, subscriberDiscount, couponDiscount);

// function to calculate total refill cost
function refillTotal(customer, subscriberDiscount, couponDiscount) {
  let RefillCost = customer.pricePerRefill * customer.refills;
  if (customer.subscription) {
    // 25% subscription discont
    RefillCost = RefillCost * subscriberDiscount;
  }
  if (customer.coupon) {
    // if subscriber has coupon additional $10 after 25% discount
    RefillCost = RefillCost - couponDiscount;
  }
  console.log("Your grand total is", "$" + RefillCost);
  return RefillCost;
}

// arrow function
const customerTotal = (aCustomer, sDiscount, cDiscount) => {
  baseCost = aCustomer.refills * aCustomer.pricePerRefill;
  if (aCustomer.subscription) {
    baseCost = baseCost * sDiscount;
  }
  if (aCustomer.coupon) {
    baseCost = baseCost - cDiscount;
  }
  return baseCost;
};
console.log(
  "Arrow - Your grand total is",
  "$" + customerTotal(timmy, subscriberDiscount, couponDiscount)
);
console.log(
  "Arrow - Your grand total is",
  "$" + customerTotal(sarah, subscriberDiscount, couponDiscount)
);
console.log(
  "Arrow - Your grand total is",
  "$" + customerTotal(rocky, subscriberDiscount, couponDiscount)
);
