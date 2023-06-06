const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const returnDamageDragon = (dragon) => {
  const minDamage = 15;
  const maxDamage = Math.floor(Math.random() * dragon.strength);
  const damageDragon = maxDamage > minDamage ? maxDamage : minDamage;
  return damageDragon;
}

const returnDamageWarrior = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = Math.floor(Math.random() * (minDamage * warrior.weaponDmg));
  const damageWarrior = maxDamage > minDamage ? maxDamage : minDamage;
  return damageWarrior;
}

const returnDamageMage = (mage) => {
  const mana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  const turn = {manaSpent: 0, valueDamage: 'Não possui mana suficiente'};
  if (mana > 15) {
    const damageMage = minDamage < maxDamage ? maxDamage : minDamage;
    turn.manaSpent = 15;
    turn.valueDamage = damageMage;
    return turn;
  }
  return turn;
}

const gameActions = {
  warriorTurn: (returnDamageWarrior) => {
    const warriorDamage = returnDamageWarrior(warrior);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (returnDamageMage) => {
    const mageTurnStats = returnDamageMage(mage);
    const mageDamage = mageTurnStats.valueDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage; 
  },
  dragonTurn: (returnDamageDragon) => {
    const dragonDamage = returnDamageDragon(dragon);
    mage.healthPoints -= dragonDamage;
    warriorDamage.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};
gameActions.warriorTurn(returnDamageWarrior);
gameActions.mageTurn(returnDamageMage);
gameActions.dragonTurn(returnDamageDragon);
console.log(gameActions.turnResults());