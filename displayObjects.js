
empObject={name:'Nahom',id:'emp101',gender:'Male',country:'Eritrea',field:'Computer Engineer',role:'programmer',
    salary:'$50000'
}

EmpInfo(empObject);

function EmpInfo(empObject){
    for(emin in empObject){
     console.log(`${emin}: ${empObject[emin]}`);
    }
}