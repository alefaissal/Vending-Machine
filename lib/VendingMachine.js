class VendingMachine {
  constructor(inventory) {
    super();
    this.inventory = inventory;
  }

  order = (code, money) => {};

  printInventory = () => {
    console.log(this.inventory);
  };

  refilInventory = () => {};

  refilCoins = () => {};
  dispenseItem = code => {
    return item.name;
  };
  returnChange = (price, money) => {};
  calculateChange = (price, money) => {};
  findItemNameByCode = code => {
    return this.inventory.items.find(item => item.code === code).name;
  };
}

module.exports = VendingMachine;
