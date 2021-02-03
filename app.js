console.log("Hello World");

let league =[
    {
        clubName:"manchester united",
        coach:"ole",
        points:50,
    },
    {
        clubName:"chelsea",
        coach:"lampard",
        points:45,
    },
    {
        clubName:"barca",
        coach:"benson",
        points:20,
    },
    {
        clubName:"real madrid",
        coach:"kante",
        points:40,
    },
    {
        clubName:"napoli",
        coach:"john",
        points:30,
    },

]

let company = {
    name:"kpk limited",
    status:"pending",
}
Object.freeze(company)

console.log(Object.isFrozen(company));
company.name = "opp incoporation";
console.log(company.name)

console.log(Object.keys(company).includes("status"))






function compilator(leaguePoint){
    const averagePoint = 30;
    if(averagePoint > leaguePoint){
        return "top four";
    }else if (averagePoint < leaguePoint){
        return "relegate";
    }else if(averagePoint === leaguePoint){
        return "tie";
    }else{
        return "invalid";
    }
};

console.log(compilator(league[league.length-1].points));

league.forEach(function(val1){
    
    printCompilator(val1.points);

    
});

function printCompilator(leaguePoint){
    console.log(compilator(leaguePoint));
};
    











