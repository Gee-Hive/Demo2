let store = []

let newStock = [
    {
        id:001,
        designer:"gucci",
        price:5000
    },
    {
        id:002,
        designer:"nike",
        price:4000
    },
    {
        id:003,
        designer:"nike",
        price:5000
    },

    {
        id:004,
        designer:"gucci",
        price:3000
    },

    {
        id:006,
        designer:"addidas",
        price:7000
    },

    {
        id:001,
        designer:"nike",
        price:9000
    }
]

function printStore(){
    console.log(store)
}


function insert() {
   let newStore = newStock.map(function(item){
       return {...item}
   })
   store = newStore 
};

function findOne(id){
    let finder = store.find(function(item){
        return item.id === id
    })
    return finder
}

function findAll(letter){
    let allFinder = store.filter(function(item){
        return item.designer.includes(letter)
    })
    return allFinder
}

function update(id){
    let updater = findOne(id)
 

updater.price = updater.price*2
console.log(updater)
}

function remover(id){
    let unwanted = findIndex(id)

    console.log(unwanted)
     store.splice(unwanted,1)
}

function findIndex(id){
    let finder = store.findIndex(function(item){
        return item.id === id
    })
    return finder
}
    


insert();
console.log(findOne(001));
console.log(findAll("n"))
update(001)
//console.log(findOne(001));
remover(002)

printStore()




