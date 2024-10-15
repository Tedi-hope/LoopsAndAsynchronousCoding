let arrnum=[2,4,6,8,10,12];
let doubledArr=[];

/*function numarrayDoubled(arrelement){
  return arrelement*2;
}

let doubledNum=arrnum.map(numarrayDoubled);//callback to numarrayDoubled

doubledNum.forEach(printElements);//callback to printelements

function printElements(el){
    console.log(el);
}*/

numarrayDoubled(arrnum);

function numarrayDoubled(arrnum){
    for(let arrele of arrnum){
        doubledArr.push(arrele*2);
    }
    for(let ele of doubledArr){
        console.log(ele);
    }
}

