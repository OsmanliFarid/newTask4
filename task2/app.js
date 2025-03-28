/*2. size bir obyekt veriləcək.Həmin obyekti referansı ilə birlikdə 
kopyalayıb ikinci obyektə mənimsədin.İkinci obyektin name xüsusiyyətini,
birinci obyektin username xüsusiyyətini dəyişin.Baş verən dəyişikliklər barədə öz fikirlərinizi yazın
const user1 = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    } */

      const user1 = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        }
    }
    
    const user2 = user1
    user2.name = user1.username
    console.log(user2);
    console.log(user2.name);
    console.log(user1.name);
    
    
    