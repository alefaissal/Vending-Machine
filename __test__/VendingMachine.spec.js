const VendingMachine = require("../lib/VendingMachine");
const inventory = require("../inventory");
const inventoryOriginal = require("../inventory");

describe("Vending Machine", () => {
  beforeEach(() => {
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    return inventory.clear().then(() => {
      //TODO understand how this part works
      return inventory.insert({ testData: inventoryOriginal });
    });
  });
  describe("when user input order with code and correct amount of money", () => {
    it("should return corret product by code", () => {
      expect(VendingMachine.order("B3", 2.3)).toBe("Ruffles BBQ");
    });
  });
  describe("when user input order without correct amount of money", () => {
    test("should return error message asking for amount of money missing", () => {
      expect(() => VendingMachine.order("A1", 0.5)).toThrowError(
        "Still missing 0.8 cents"
      );
    });
  });
  describe("", () => {});
  describe("", () => {});
  describe("", () => {});
  describe("", () => {});
  describe("", () => {});
  describe("", () => {});
  describe("", () => {});
  describe("", () => {});
});
