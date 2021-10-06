let year,birthMonthMap;
let birthYearMap = new Map();

birthYearMap.set(1992,new Map());
birthYearMap.set(1993,new Map());

for(let index=1;index<=50;index++){
    let year = Math.floor(Math.random() * 10) % 2;
    if(year == 0)
        year = 1992;
    else 
        year = 1993;

    birthMonthMap = birthYearMap.get(year);

    let birthMonth = (Math.floor(Math.random() * 100) % 12)+1;


    if(birthMonthMap.has(birthMonth)){
        let PeopleWihtSameDOBArray = birthMonthMap.get(birthMonth);
        PeopleWihtSameDOBArray.push(index);
        birthMonthMap.set(birthMonth, PeopleWihtSameDOBArray);
    }
    else {
        let PeopleWihtSameDOBArray = new Array();
        PeopleWihtSameDOBArray.push(index);
        birthMonthMap.set(birthMonth, PeopleWihtSameDOBArray);
    }

    birthYearMap.set(year, birthMonthMap);
}

console.log("Map that shows people born in same month: ");
console.log(birthYearMap)