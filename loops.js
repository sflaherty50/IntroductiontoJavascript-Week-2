//6
let g = 0;

while ( g <= 100) {
    console.log(g);
    g += 2;
}

let p = 100;

while ( p > 0) {
    console.log(p);
    p = p-3;
}

for (let t = 1; t <= 100; t++) {
    if( t % 2 == 1) {
        console.log(t);
    }
}

for  (z = 0; z <= 100; z++) 
    {
    if (z % 3 == 0 && z % 5 == 0)
     {
        console.log("HelloWorld"); 
        }
    else if (z % 3 == 0)
         {
        console.log("Hello");
         }
    else if (z % 5 == 0)
         {
        console.log('World');
         }
     else 
    {
        console.log(z);
    }
}

