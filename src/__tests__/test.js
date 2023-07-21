test('game classes', () => {
    const {Bowman,Swordsman,Daemon,Magician,Undead,Zombie,} = require('../gameclasses.js')
    const received = new Magician('Oleg','Magician')
    received.levelUp()
    received.damage(10)
    expected = {name: 'Oleg', type: 'Magician', health: 94.8, level: 2, attack: 12, defence:48}
    
    expect(received).toEqual(expected)
});