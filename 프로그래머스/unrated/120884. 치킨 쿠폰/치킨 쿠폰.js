const solution = (chicken) => {
  let coupon = chicken;
  
  let serviceChicken = 0;
  
  while(coupon >= 10) {
    serviceChicken = serviceChicken + Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10) + coupon % 10;
  }
  
  return serviceChicken
}