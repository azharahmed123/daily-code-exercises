function* generate() {
    let b = 0;
    console.log('invoked 1st time');
    b = add_number(b); 
    console.log(b);
    yield;
    console.log('invoked 2nd time');
    b =+ add_number(b); 
    console.log(b);
    yield;
    console.log('invoked 3rd time');
    b =+ add_number(b); 
    console.log(b);
    yield;
}
function add_number(a){
    return a+1;
}

let gen = generate();
let result = gen.next();
results = gen.next();
results = gen.next();
console.log(result);