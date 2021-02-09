console.warn("Welcome")

let mySchool = []

let entranceResult = [
    {
        id:001,
        studentName:"helen",
        examPoint: 85
    },
    {
        id:001,
        studentName:"adam",
        examPoint: 60
    },


    {
        id:002,
        studentName:"patrick",
        examPoint: 75
    },
    {
        id:002,
        studentName:"nelson",
        examPoint: 60
    },


    {
        id:003,
        studentName:"wilson",
        examPoint: 65
    },
    {
        id:003,
        studentName:"willian",
        examPoint: 50
    },


    {
        id:004,
        studentName:"olson",
        examPoint: 50
    },
    {
        id:004,
        studentName:"jeffery",
        examPoint: 55
    },

    {
        id:005,
        studentName:"caroline",
        examPoint: 80
    },

    {
        id:006,
        studentName:"qunicy",
        examPoint: 55
    },

    {
        id:007,
        studentName:"catherine",
        examPoint: 70
    },


]

function printMySchool() {
    console.log(mySchool)
}

function admissions(){
    let adminOfficer = entranceResult.filter(function(value){
        return value
    })    
    mySchool = adminOfficer
}

function findStudent(id){
    let studentFinder = mySchool.find(function(value){
        return value.id === id
    })
    return (studentFinder)
}

function findAllStudent(id){
    let allStudentFinder = mySchool.filter(function(value){
        return value.id === id
    })
    console.log(allStudentFinder)
}

function findStudentByLetter(letter){
    let byLetterFinder = mySchool.filter(function(value){
        return value.studentName.includes(letter)
    })
    console.log(byLetterFinder)
}
let t = "t"
let e ="e"
let h ="h"
let i = "i"

function pointUpdater(id){
    let pointUpdate = findStudent(id)
    pointUpdate.examPoint = pointUpdate.examPoint *2
    console.log(pointUpdate)
}

printMySchool()
admissions()
printMySchool()
console.log(findStudent(4))
findAllStudent(4)
findStudentByLetter(i)
pointUpdater(4)