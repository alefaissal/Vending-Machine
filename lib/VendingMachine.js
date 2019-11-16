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
  findQtybyCode(code) {
    return this.inventory.items.find(item => item.id === code).current;
  }

  returnChangeString(price, money) {
    let coins = this.inventory.coins;
    let changeAmount = 0;
    let changeString = "";
    let finalString = "";
    let change = [
      {
        name: "nickel",
        value: 0.05,
        qty: 0
      },
      {
        name: "dime",
        value: 0.1,
        qty: 0
      },
      {
        name: "quarter",
        value: 0.25,
        qty: 0
      },
      {
        name: "50-cent",
        value: 0.5,
        qty: 0
      },
      {
        name: "loonie",
        value: 1.0,
        qty: 0
      },
      {
        name: "toonie",
        value: 2.0,
        qty: 0
      }
    ];

    money - price > 0
      ? (changeAmount = Math.round((money - price) * 100) / 100)
      : (finalString = "no change.");

    while (changeAmount > 0) {
      for (let i = coins.length - 1; i >= 0; i--) {
        while (changeAmount >= coins[i].value) {
          changeAmount =
            Math.round((changeAmount - coins[i].value) * 100) / 100;
          change[i].qty++;
          coins[i].current--;
        }
      }
    }
    let arrayChange = [];
    for (let i = change.length - 1; i >= 0; i--) {
      if (change[i].qty === 1) {
        arrayChange.push(change[i].qty);
        arrayChange.push(change[i].name);
      } else if (change[i].qty > 1) {
        arrayChange.push(change[i].qty);
        arrayChange.push(change[i].name + "s");
      }
    }
    if (arrayChange.length === 2) {
      changeString = arrayChange[0] + " " + arrayChange[1] + ".";
      finalString = "for change " + changeString;
    } else if (arrayChange.length === 4) {
      changeString =
        arrayChange[0] +
        " " +
        arrayChange[1] +
        " and " +
        arrayChange[2] +
        " " +
        arrayChange[3] +
        ".";
      finalString = "for change " + changeString;
    } else if (arrayChange.length > 4) {
      const l = arrayChange.length;
      for (let i = 0; i < l - 2; i = i + 2) {
        changeString =
          changeString + arrayChange[i] + " " + arrayChange[i + 1] + ", ";
      }
      changeString =
        changeString +
        " and " +
        arrayChange[l - 2] +
        " " +
        arrayChange[l - 1] +
        ".";
      finalString = "for change " + changeString;
    }
    return finalString;
  }

  order(code, money) {
    let itemName = this.findItemNameByCode(code);
    let itemPrice = this.findPriceByCode(code);
    let itemQty = this.findQtybyCode(code);
    let changeString = this.returnChangeString(itemPrice, money);

    if (itemQty < 1) {
      return (
        itemName +
        " is not available, get your " +
        money.toFixed(2) +
        " dolars back"
      );
    }

    if (money < itemPrice) {
      throw "Still missing " +
        (itemPrice - money) +
        " dollars for your " +
        itemName;
    } else {
      return itemName + " and " + changeString;
    }
  }
  printInventory() {
    console.log(this.inventory);
  }

  refilInventory() {
    return this.inventory;
  }

  refilCoins() {}
  dispenseItem(code) {
    return item.name;
  }
}

module.exports = VendingMachine;
