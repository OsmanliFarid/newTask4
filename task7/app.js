/*7. existsAndTruthy() adinda funksiya yaradin. 2 ədəd argument alır: 
obyekt(obj) ve string (propertyName). Eger hemin obyektden o adda property varsa ve 
truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes:
existsAndTruthy({a:1,b:2,c:3},'b') // true

existsAndTruthy({x:'a',y:null,z:'c'},'y') // false (obyektde 'y' var amma falsy-di ona gore false)
existsAndTruthy({x:'a',b:'b',z:undefined},'z') // false (obyektde 'z' yoxdu ona gore false) */

function existsAndTruthy(obj,propertyName){
        for(let i in obj){
            
            if(obj[i] === null){
                return false

                
                
                
            }else if(obj[i] === undefined){
                return false
            }else if(i === propertyName){
                return true
            }
            
        }
        return false
        
}
const a = existsAndTruthy({x:'a',y:null,b: "b"},'b')
console.log(a);


