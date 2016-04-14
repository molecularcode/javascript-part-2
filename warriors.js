function Warrior(name, gender, level, weapon, power) {
    this.name = name;
    this.gender = gender;
    this.level = level;
    this.weapon = weapon;
    this.power = power;
}

Warrior.prototype = {
    fight: function() {
        console.log(this.name + " rushes to the arena, " + this.weapon + " in hand");
    },
    faceoff: function(opponent) {
        if(this.power > opponent.power) {
            console.log("After an epic battle, " + this.name + " overpowers " + opponent.name + "\n");
        }
        else if(this.power < opponent.power) {
            console.log("After an epic battle, " + this.name + " is overpowered by " + opponent.name + "\n");
        }
        else {
            console.log("After an epic battle, " + this.name + " " + opponent.name + " are evenly matched and agree to withdraw" + "\n");
        }
    }
};

var bask = new Warrior("Basiliska", "female", 6, "fireballs", Math.floor(Math.random() * 100) + 1);
var beast = new Warrior("Beastly", "male", 9, "AK47", Math.floor(Math.random() * 100) + 1);
var bard = new Warrior("Bardweller", "male", 8, "battle axe", Math.floor(Math.random() * 100) + 1);
var mark = new Warrior("Markum", "male", 5, "sword", Math.floor(Math.random() * 100) + 1);

console.log(bask, beast, bard, mark);
beast.fight();
beast.faceoff(bard);
bask.fight();
bask.faceoff(mark);
bard.fight();
bard.faceoff(bask);
mark.fight();
mark.faceoff(beast);