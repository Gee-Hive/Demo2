console.log("Hello World")

let school = []

let commonEntrance = [
    
    {
        id:1,
        studentName:"nelson",
        examScore:60,
        
    },
    {
        id:2,
        studentName:"kate",
        examScore:50,
        
    },
    {
        id:3,
        studentName:"racheal",
        examScore:80,
        
    },
    {
        id:4,
        studentName:"paul",
        examScore:40,
        
    },
    {
        id:5,
        studentName:"patrick",
        examScore:70,

    },
]

function printSchool(){
    console.log(school)
}

function admission(){
        school = commonEntrance

}

function findStudent(id){
    let studentFinder = school.find(function(value){
        return value.id === id
    })
    return studentFinder
}

function findByLetter(letter){
    let letterFinder = school.filter(function(values){
        return values.studentName.includes(letter)
    })
    return letterFinder
}

function expelStudent(id){
    let expeller =  school.splice(id, 1)
   
    console.log(expeller)
}

function updateScore(id){
    let updater = findStudent(id)
    updater.examScore = updater.examScore * 2
    console.log(updater) 
}


let varA = 1;
let varB = 2;

varA = varB;




printSchool()
admission()
printSchool()
console.log(findStudent(3))
console.log(findByLetter(("t")))
//expelStudent(1)
printSchool()
updateScore(4)