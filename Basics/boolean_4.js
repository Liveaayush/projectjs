let age = 5;
let price = 3000;
if (age < 16) {
    console.log ('You are a child and here is your discounted price = '+ (price * 0.8));
}
else if(age > 50){
    console.log ('You are a old man and here is your discounted price = '+ (price * 0.8));
}

else{
    console.log('Normal Price expected = '+ (price));
}