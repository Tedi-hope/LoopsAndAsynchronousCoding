
let strcities=['Addis','Asmara','Nairobi','Kartoum','Rabat','Aljers','Dakar','St.Luis'];

displayCities(strcities);

function displayCities(strcities){
    let count=1;
    for(let strvalue of strcities){
    //console.log(strvalue);
    setTimeout(()=>console.log(strvalue),count*1000);
    count++;
  
    } 
}
