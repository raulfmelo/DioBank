import { DioAccount } from "./myBankAccounts";

export class LegalPersonAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    public getLoan = (value: number): void => {
        if (this.validateAccount()) {
            this.balance += value;
            console.log(
                `Foi depositado na conta do titular ${this.getName()}, o valor de ${value}`
            );
        }
    };
}
