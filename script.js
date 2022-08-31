const player = {};

player.name = 'Sjakib';
player.age = '35';
player.format = function () {
    console.log('Allrounder');
}

// console.log(player)

const newTeam = {name:'BAN', format:'ODI'}

const team =  Object.create(newTeam);
// console.log(team.name)

class  NewSquad {
    name = 'Tamim';
    captain = true;
    address = 'chatagong';
    constructor(came){
        this.came = came
    }
}

// console.log(new NewSquad(2002).came)

class MakeNew {
    constructor(totalTeam, vanue, host){
        this.mainTeam = totalTeam;
        this.vanue = vanue;
        this.host = host;
    };

}

// console.log(new MakeNew(8, 5,'Bangladesh'));

class Exam {
    name = 'mid tarm';
    duration = '10 Days';
    constructor(first, second, third){
        this.firstSubject = first;
        this.secondSubject = second;
        this.thirdSubject = third;
    }
    perSubjectDay = function(var1,var2){
       
       function variable(variable1){
        const variable = variable1 * 10;
        return variable;
       }
       const total = variable(var1) + var2;
       return total;
    }

}

console.log(new Exam('English', 'Bangla', 'Math').perSubjectDay(10,10))