class Character {

  constructor(name, lifePoints, attackPoints) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.attackPoints = attackPoints;

  }
  attack = function(opponent,item) {
    let newlifePoints = opponent.lifePoints - item.attackPointsItem;
    opponent.lifePoints=newlifePoints;
    if (opponent.lifePoints <= 0) {
      update();
      document.getElementById('console').innerHTML = `<p> ${this.name}
      Wins!!......<br>`;
    }
    if (opponent.lifePoints <= 0) {
      update();
      location.reload(true);
    }

    else {
      update();
      document.getElementById('console').innerHTML = `<p> ${this.name}
      attacking with ${item.img} !`;


    }

  }




  print = function() {
    document.getElementById(this.name).innerHTML = `<h4>Name: ${this.name}
  <br> Life Points: ${this.lifePoints} <br> </h4>`;

  }

}

const toad = new Character('Toad', 100, 10);
const yoshi = new Character('Yoshi', 100, 20);

function update() {
  toad.print(toad);
  yoshi.print(yoshi);

}

update();

function Item(name, attackPointsItem, img) {
  this.name = name;
  this.attackPointsItem = attackPointsItem;
  this.img = img;

}
const item1 = new Item('Goomba', 10, '<img src="goomba.png" width="5%">');
const item2 = new Item('Green Shell', 15, '<img src="shell.png" width="5%">');
const item3 = new Item('Banana', 5, '<img src="banana.png" width="5%">');
const item4 = new Item('Spiny Shell', 20, '<img src="sshell.png" width="5%">');
const item5 = new Item('Bob-omb', 30, '<img src="bomb.png" width="5%">');

const items = [item1, item2, item3, item4, item5];

function selectItem() {
  let x = Math.floor(Math.random() * items.length);
  return items[x];

}
selectItem();
