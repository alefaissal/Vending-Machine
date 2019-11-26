# Vending Machine

Is a Javascript project to simulate a vending machine that only accepts coins as payments and return a string as result for the inputs.
Depending on the amount of money, the product required and its price.

In this project a Test Driven Development (TDD) approach was used.

## Tests used

- No product available
  - Returning message and the money back to user.
- Not enough money to pay for the product
  - Returning the amount of money missing to reach the full price.
- More money than the price of product
  - Returning the product and amount of change
- Exact amount of money for the product requested
  - Returning the product and a message of no change.
- For refilling products
  - Returning quantity of products to the max amount possible in the machine
- For refilling coins
  - Returning quantity of coins to the needed amount defined for the machine

## Installation Instructions

Download the project, save it in your computer and open the VendingMachine folder in terminal.

## To complete instalation run

```console
$ npm init
```

## To run the tests

In the project directory, you can run:>

```console
$ npm test
```

or

```console
$ yarn test
```

## Tests results

<img src="./images/Screen Shot 2019-11-17 at 7.59.16 AM.png" />
