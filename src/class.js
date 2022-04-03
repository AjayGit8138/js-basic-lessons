/* eslint-disable semi */
class Pizza{
    constructor(toppings=[],customer)
    {
        this.toppings = toppings;
        this.customer = customer;
    }
    static extratoppings = ['pineapple','cheese'];
    static sayThankyou()
    {
        console.log('Thankyou');
    }
    slices = 10;
    #money = 100;
    get noofslices()
    {
        return this.slices;
    }
    set noofslices(value)
    {
        this.slices = value;
    }
    getcokeorpepsi()
    {
        console.log('coke');
        console.log('pepsi');
        console.log(this);
    }
    get askbalance()
    {
        return this.#money;
    }
    set setbalance(value)
    {
        this.#money = value;
    }
    eat()
    {
        console.log(this.toppings);
        console.log(this.customer);
    }
}
const food = new Pizza(['onion','pappaya','lemon'],'ajay');
food.eat();
food.toppings = ['carot', 'beans', 'corn'];
console.log(food.toppings);
console.log(Pizza.extratoppings)
Pizza.extratoppings = ['lettuce','greenleves'];
console.log(Pizza.extratoppings);
Pizza.sayThankyou();
console.log(food.noofslices);
food.noofslices = 30;
console.log(food.noofslices);
food.getcokeorpepsi();
food.setbalance = 5000;
console.log(food.askbalance);
// food.#money = 8000;
console.log(food.askbalance)
