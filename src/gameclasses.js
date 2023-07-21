const Character = require('./character.js')

class Bowman extends Character {
    constructor(name,type) {
    super(name,type); //  вызов конструктора родителя
    this.health = 100
    this.level = 1
    this.attack = 25
    this.defence = 25
    }
}
class Swordsman extends Character {
    constructor(name,type) {
    super(name,type); 
    this.health = 100
    this.level = 1
    this.attack = 40
    this.defence = 10
    }
}
class Magician extends Character {
    constructor(name,type) {
    super(name,type); //  вызов конструктора родителя
    this.health = 100
    this.level = 1
    this.attack = 10
    this.defence = 40
    }
}
class Daemon extends Character {
    constructor(name,type) {
    super(name,type); //  вызов конструктора родителя
    this.health = 100
    this.level = 1
    this.attack = 10
    this.defence = 40
    }
}
class Undead extends Character {
    constructor(name,type) {
    super(name,type); //  вызов конструктора родителя
    this.health = 100
    this.level = 1
    this.attack = 25
    this.defence = 25
    }
}
class Zombie extends Character {
    constructor(name,type) {
    super(name,type); //  вызов конструктора родителя
    this.health = 100
    this.level = 1
    this.attack = 40
    this.defence = 10
    }
}
module.exports = {
    Bowman,
    Swordsman,
    Magician,
    Daemon,
    Undead,
    Zombie,
}
