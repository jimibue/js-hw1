// variables, let, const, var
// for let(new prefered) and var are the same (there are differences)
// const is variable that can't change


let age = 21
let names = ['tony', 'liz']
let bob = { name:'Bob', age:21, hasFelony:false}
let jon = { name:'Jon', age:21, hasFelony:true}
let sally = { name:'Sally', age:17, hasFelony:false}

function canVote(person){
    if(person.age >= 18 && !person.hasFelony){
        return `${person.name} can vote`
    } else{
        return `${person.name} can not vote`
    }
}

const aboutPerson = (person)=>{
    // as if else
    // let felonyAbout;
    // if(person.hasFelony){
    //     felonyAbout= 'has felony'
    // } else{
    //     felonyAbout= 'does not have felony'
    // }
    // as ternary
    // let someVar = condition ? 'return if condition is truthy': 'return if falsey'
    let felonyAbout = person.hasFelony ? "has felony" : "does not have felony"
    return `${person.name} is ${person.age} years old and ${felonyAbout}`
}
// ${person.name} is ${person.age} years old and ${felonyAbout} + can/cant vote
const aboutPersonWithVoteStatus = (person) =>{
    let personString = aboutPerson(person)
    let voteString = canVote(person)
  
    return `${personString}, ${voteString}`
}

 console.log('----- before aboutPersonWithVoteStatus')
let aboutSallyVoteStatus = aboutPersonWithVoteStatus(sally)
console.log(aboutSallyVoteStatus)


// console.log('----- before aboutPerson')
// let aboutSally = aboutPerson(sally)
// console.log(aboutSally)
// console.log('----- after aboutPerson')



// conditions
// if(jon.age >= 18 && !jon.hasFelony){
//     console.log(`${jon.name} can vote`)
// } else{
//     console.log(`${jon.name} can not vote`)
// }

// if(bob.age >= 18 && !bob.hasFelony){
//     console.log(`${bob.name} can vote`)
// } else{
//     console.log(`${bob.name} can not vote`)
// }

// this i am expecting person to be an
// object {name:string,age:number,hasFelony:boolean}


// canVote(bob)
// canVote(jon)
// canVote(sally)
















