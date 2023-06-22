import { BuffedDepositAccount } from "./classes/buffedDepositAccount";
import { FisicalPersonAccount } from "./classes/fisicalPersonAccount";
import { LegalPersonAccount } from "./classes/legalPersonAccount";

const raulAccount = new FisicalPersonAccount("Raul Melo", 123456, 12345678);
const nikeAccount = new LegalPersonAccount("Nike Company", 10020313);
const bonusAccount = new BuffedDepositAccount("Adalton", 777777777);

console.log("---SALDO-----------------------------------------------");
console.log(
    `Saldo do titular ${raulAccount.getName()} atual é de: ${raulAccount.getBalance()}`
);
console.log(
    `Saldo do titular ${nikeAccount.getName()} atual é de: ${nikeAccount.getBalance()}`
);
console.log(
    `Saldo do titular ${bonusAccount.getName()} atual é de: ${bonusAccount.getBalance()}`
);
console.log("---DEPOSITO-----------------------------------------------");
raulAccount.deposit(10000);
nikeAccount.deposit(12000000);
bonusAccount.deposit(1000);
console.log("---SALDO-----------------------------------------------");
console.log(
    `Saldo do titular ${raulAccount.getName()} atual é de: ${raulAccount.getBalance()}`
);
console.log(
    `Saldo do titular ${nikeAccount.getName()} atual é de: ${nikeAccount.getBalance()}`
);
console.log(
    `Saldo do titular ${bonusAccount.getName()} atual é de: ${bonusAccount.getBalance()}`
);
console.log("---EMPRESTIMO-----------------------------------------------");
nikeAccount.getLoan(200);
console.log("---SALDO-----------------------------------------------");
console.log(
    `Saldo do titular ${nikeAccount.getName()} atual é de: ${nikeAccount.getBalance()}`
);
console.log("---SAQUE-----------------------------------------------");
raulAccount.withdrawn(4000);
nikeAccount.withdrawn(200000000);
bonusAccount.withdrawn(100);
console.log("---SALDO-----------------------------------------------");
console.log(
    `Saldo do titular ${raulAccount.getName()} atual é de: ${raulAccount.getBalance()}`
);
console.log(
    `Saldo do titular ${nikeAccount.getName()} atual é de: ${nikeAccount.getBalance()}`
);
console.log(
    `Saldo do titular ${bonusAccount.getName()} atual é de: ${bonusAccount.getBalance()}`
);
