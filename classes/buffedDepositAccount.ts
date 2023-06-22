import { DioAccount } from "./myBankAccounts";

export class BuffedDepositAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    public deposit = (value: number): void => {
        if (this.validateAccount()) {
            this.balance += value + 10;
            console.log(`Foi depositado ${value} na conta ${this.getAccountNumber()} Titular: ${this.getName()} 
            Você depositou ${value}, mas obteve um bonus de 10 reais totalizando ${
                value + 10
            }`);
        }
    };
}
