function car()
{
    let milesdriven = 0;
    let speed = 0;

    this.accelerate = (velocity,distance) =>{
        milesdriven += distance;
        speed += velocity;
    }
    this.getmilesdriven = () => milesdriven;
    this.getspeed = () => speed;
}
const carmodule = new car();
console.log('miles:'+ carmodule.getmilesdriven());
console.log('speed:'+ carmodule.getspeed());

carmodule.speed = 100;
carmodule.milesdriven = 10;
console.log('miles:'+ carmodule.getmilesdriven());
console.log('speed:'+ carmodule.getspeed());

carmodule.accelerate(100,40);
console.log('miles:'+ carmodule.getmilesdriven());
console.log('speed:'+ carmodule.getspeed());