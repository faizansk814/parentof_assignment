let FullName='Faizan Shaikh'
console.log(FullName)
let firstAnswer=FullName.split(" ").reverse().join(" ")

let rev=""
for(let i=FullName.length-1;i>=0;i--){
    rev+=FullName[i]
}
console.log(firstAnswer,rev)

let store=""
for(let i=0;i<FullName.length;i++){
    if(FullName[i]!=="s"&&FullName[i]!=="S"&&FullName[i]!=="n"&&FullName[i]!=="N"){
        store+=FullName[i]
    }
}
console.log(store)