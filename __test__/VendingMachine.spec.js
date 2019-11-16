const VendingMachine = require("../lib/VendingMachine");
const inventory = require("../inventory");
let vendingMachine = null;

describe("Vending Machine", () => {
  beforeEach(() => {
    vendingMachine = new VendingMachine(inventory);
  });
  describe("when user input order with code and correct amount of money", () => {
    it("should return corret product by code", () => {
      expect(vendingMachine.order("B3", 2.3)).toMatch(
        "Ruffles BBQ and no change"
      );
    });
  });
  describe("when user input order with code and correct amount of money", () => {
    it("should return corret product by code", () => {
      expect(vendingMachine.order("C2", 2.6)).toMatch(
        "Lays Bacon and no change"
      );
    });
  });
  describe("when user input order without correct amount of money", () => {
    test("should return error message asking for amount of money missing", () => {
      expect(() => vendingMachine.order("A1", 0.5)).toThrowError(
        "Still missing 0.8 dollars for your Doritos Nachos"
      );
    });
  });
  describe("when user input order without extra amount of money", () => {
    test("should return product and the amount of change", () => {
      expect(vendingMachine.order("B3", 3.5)).toMatch(
        "Ruffles BBQ and 1 loonie, 2 dimes, "
      );
    });
  });
  //   describe("", () => {});
  //   describe("", () => {});
  //   describe("", () => {});
  //   describe("", () => {});
  //   describe("", () => {});
  //   describe("", () => {});
  //   describe("", () => {});
});

// describe("Vending Machine without product", () => {
//   beforeEach(() => {
//     newInventory = inventory;
//     //for id = "A1"
//     newInventory.items[0].current = 0;
//     //for id ="B1"
//     newInventory.items[4].current = 0;
//     vendingMachine = new VendingMachine(newInventory);
//   });

//   describe("When user input order and there is no product left", () => {
//     it("should return No product available, and return money", () => {
//       expect(() => vendingMachine.order("A1", 2.0)).toThrowError(
//         "Doritos Nachos is not available, get your 2.0 dolars back"
//       );
//     });
//   });
//   describe("When user input order and there is no product left", () => {
//     it("should return No product available, and return money", () => {
//       expect(() => vendingMachine.order("B1", 3.0)).toThrowError(
//         "Ruffles Regular is not available, get your 3.0 dolars back"
//       );
//     });
//   });
// });

// describe("Vending Machine without coins", () => {
//   beforeEach(() => {
//     newInventory = inventory;
//     //for id = "A1"
//     newInventory.items[0].current = 0;
//     //for id ="B1"
//     newInventory.items[4].current = 0;
//     vendingMachine = new VendingMachine(newInventory);
//   });

//   describe("When user input order and there is no product left", () => {
//     it("should return No product available, and return money", () => {
//       expect(() => vendingMachine.order("A1", 2.0)).toThrowError(
//         "Doritos Nachos is not available, get your 2.0 dolars back"
//       );
//     });
//   });
//   describe("When user input order and there is no product left", () => {
//     it("should return No product available, and return money", () => {
//       expect(() => vendingMachine.order("B1", 3.0)).toThrowError(
//         "Ruffles Regular is not available, get your 3.0 dolars back"
//       );
//     });
//   });
// });

// describe("Refill Vending Machine", () => {
//   inventoryEmpty = inventory;
//   inventoryEmpty.items[2].current = 0;
//   inventoryEmpty.items[3].current = 0;
//   inventoryEmpty.items[7].current = 0;

//   describe("When user called this function ", () => {
//     it("should refill the vending machine with products", () => {
//       expect(vendingMachine.refilInventory(inventoryEmpty)).toBe(inventory);
//     });
//   });
// });
// describe("Refill Vending Machine", () => {
//   inventoryEmpty = inventory;
//   inventoryEmpty.coins[1].current = 0;
//   inventoryEmpty.coins[3].current = 0;
//   inventoryEmpty.coins[5].current = 0;

//   describe("When user called this function ", () => {
//     it("should refill the vending machine with coins", () => {
//       expect(vendingMachine.refilCoins(inventoryEmpty)).toBe(inventory);
//     });
//   });
// });
