const {Bowman,Swordsman,Daemon,Magician,Undead,Zombie,} = require('./gameclasses.js')

const olegN = new Magician('Oleg','Magician')

console.log(olegN)
olegN.levelUp()
console.log('после levelUp',olegN)
olegN.damage(10)
console.log('после damage',olegN)

const Bond = new Bowman('Old','Bowman',50,1)
console.log (Bond)