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

//console.log(compilator(league[league.length-1].points));

function printCompilator(){
    console.log(compilator(league[0].points));
};

printCompilator();

league.forEach(function(val1){
    printCompilator(val1.points);
});


let company = {
    name:"kpk limited",
    status:"pending",
}
Object.freeze(company)

console.log(Object.isFrozen(company));
company.name = "opp incoporation";
console.log(company.name)

console.log(Object.keys(company).includes("status"));

Array.from(league);
Array.isArray(company);


//normal foreach method to loop through
let bookList = ["novels", "newspaper", "magazines" ,"dicitonary"]

bookList.forEach(function(item){
    return item
});

console.log(bookList)
//callback methods ie it can called back to loop through other arrays

function getBooks(item){
    console.log(item)
}

 bookList.forEach(getBooks);



//figures

let runner = [2,3,4,5,6,]

let speculators =  runner.map(function(number){
    return number*2
})
console.log(speculators)


function multiplyby3(numbers){
    return (numbers * 3)    
}

let triple = runner.map(multiplyby3)
console.log(triple)