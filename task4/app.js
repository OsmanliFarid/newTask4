/*4. Sprear və rest operatorları arasındakı fərqi izah edin.Hər ikisinin istifadəsinə aid nümunələr yaın */



const a = [1,2,3]
const b = [3,2,1]
const c = [...a,...b]
console.log(c);


const a1 = {
    a: 1,
    b: 2,
    c: 3,
}
const b1 = {
    a2: 3,
    b2: 2,
    c2: 1,
}
const c1 = {
    a3: 4,
    b3: 5,
    c3: 6,
}
const f = {...a1,...b1,...c1}
console.log(f);

//rest

function num (...numbr){
    let cem = 0
     for(let i = 0;i<numbr.length;i++){
        cem += numbr[i]
     }
     console.log(cem);
}


num(1,5,4)


function str (...strin){
    let cem = ""
    for(let i = 0;i<strin.length;i++){
       cem += strin[i]
    }
    console.log(cem);
    
}
str("Salam","-Dunya")




