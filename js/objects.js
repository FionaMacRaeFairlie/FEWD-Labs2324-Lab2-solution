console.log("Objects exercise using F1 examples");

const team = {
    teamname :"Mercedes",
    base : "Brackley",
    principal : "Toto Wolff"
};

console.log(JSON.stringify(team, null, 4));

team.drivers = [ 
    { name: "Lewis Hamilton", dob: new Date(1985, 1, 7) },
    { name: "George Russell", dob: new Date(1998, 2, 15) }
];

team.drivers[0].points = [25, 18, 0, 25];
team.drivers[1].points = [12, 10, 25, 8];

console.log(JSON.stringify(team, null, 4));

console.log(team.drivers[0].name + ", " + team.drivers[0].dob.toDateString('MMMM ,yyyy'));


team.totalpoints = function () {
    let points = 0;
    for (let d in this.drivers) {
        for (let p in this.drivers[d].points) {
            points += this.drivers[d].points[p]; ;
        }
    }
    return points;
};

console.log("Points: " + team.totalpoints());

team.drivers[0].points.push(25);
team.drivers[1].points.push(10);

console.log("Points: " + team.totalpoints());

let {teamname, base} = team;
console.log(teamname, base);

let {drivers:[,george]} = team;
console.log(george);

let {points:[disqualified,...counted]} = george
let countedpoints = counted.reduce((a, b) => a + b, 0)

// let countedpoints = 0;
// for (let p in counted) {
//     countedpoints += counted[p]; ;
// }

console.log(countedpoints);

console.log("Arrays exercise");

let examplearray = [1,3,1,7,9];

// basic array operations

console.log(examplearray);
console.log(examplearray[1]);
console.log(examplearray.length);

examplearray.sort();
console.log(examplearray);

let index = examplearray.findIndex(x => x==7);
console.log(index);

index = examplearray.indexOf(7);
console.log(index);

examplearray.reverse();
console.log(examplearray);

examplearray.pop();
console.log(examplearray);

index = examplearray.findIndex(x => x==9);
examplearray.splice(index,1);
console.log(examplearray);

// filter, map and reduce

examplearray = [1,3,1,7,9];
console.log(examplearray);

let filtered = examplearray.filter(x => x<6);
console.log(filtered);
console.log(examplearray);
console.log(examplearray.filter(x => x == 1));

let squared = examplearray.map(x => x * x);
console.log(squared);

let add3 = examplearray.map(x => x + 3);
console.log(add3);

let pairs = examplearray.map(x => [x, String.fromCharCode(x + 64)]);
console.log(pairs);

let sumoflist = examplearray.reduce((x,y) => x + y);
console.log(sumoflist);

let productoflist = examplearray.reduce((x,y) => x * y);
console.log(productoflist);

let maxoflist = examplearray.reduce((x,y) => Math.max(x,y));
console.log(maxoflist);

let flat = examplearray.flatMap(x => [x, String.fromCharCode(x + 64)]);
console.log(flat);

// challenge

let coordinates = [[0,1], [3,4], [-5,12], [2,2]];

function distance(x1, y1, x2, y2){
  return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1, 2));
}

let distances = coordinates.map(([x,y]) => distance(0,0,x,y));
console.log(distances);

let average = distances.reduce((x,y) => x + y)/distances.length;
console.log(average);
