function outer()
{
    var value = 100;
    function inner(name)
    {
        value+=value;
        console.log(`${value}`+`${name}`);
    }
    return inner;
}

var myfunc = outer();
myfunc("ajay");