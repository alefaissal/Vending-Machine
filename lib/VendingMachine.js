class VendingMachine {
  constructor(inventory) {
    this.inventory = inventory;
  }

  findItemNameByCode(code) {
    return this.inventory.items.find(item => item.id === code).name;
  }
  findPriceByCode(code) {
    return this.inventory.items.find(item => item.id === code).price;
  }
  returnChangeString(price, money) {
    let coins = this.inventory.coins;
    let changeAmount = 0;
    let changeString = "";

    money - price > 0
      ? (changeAmount = Math.round((money - price) * 100) / 100)
      : (changeString = "no change");

    while (changeAmount > 0) {
      for (let i = coins.length - 1; i >= 0; i--) {
        let a = 1;
        // console.log(changeAmount);
        // console.log(coins[i].value);
        while (changeAmount >= coins[i].value) {
          changeAmount =
            Math.round((changeAmount - coins[i].value) * 100) / 100;
          //   console.log(changeAmount);
          let temp = a;
          a = 1
            ? (changeString = temp + " " + coins[i].name)
            : (changeString = temp + " " + coins[i].name + "s, ");
          a++;

          console.log(a);
        }
      }
    }
    return changeString;
  }

  order(code, money) {
    let itemName = this.findItemNameByCode(code);
    let itemPrice = this.findPriceByCode(code);
    let changeString = this.returnChangeString(itemPrice, money);

    if (money < itemPrice) {
      throw "Still missing " +
        (itemPrice - money) +
        " dollars for your " +
        itemName;
    } else {
      return itemName + " and " + changeString;
    }
  }
  ///////////
  ///////////
  ///////////
  ///////////
  ///////////
  ///////////
  ///////////
  ///////////
  ///////////

  printInventory() {
    console.log(this.inventory);
  }

  refilInventory() {}

  refilCoins() {}
  dispenseItem(code) {
    return item.name;
  }
}

module.exports = VendingMachine;
