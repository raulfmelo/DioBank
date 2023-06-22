export abstract class DioAccount {
    private name: string;
    private readonly accountNumber: number;
    protected balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    public setName = (name: string): void => {
        this.name = name;
    };
    public getName = (): string => {
        return this.name;
    };
    public getAccountNumber = (): number => {
        return this.accountNumber;
    };
    public deposit = (value: number): void => {
        if (this.validateAccount()) {
            this.balance += value;
            console.log(
                `Foi depositado ${value} na conta ${this.accountNumber} Titular: ${this.name}`
            );
        }
    };
    public withdrawn = (value: number): void => {
        if (this.validateAccount()) {
            if (this.balance >= value) {
                this.balance -= value;
                console.log(
                    `Foi sacado ${value} da conta ${this.accountNumber} Titular: ${this.name}`
                );
            } else {
                console.log(
                    `Seu saldo é de ${this.getBalance()}, e você esta tentando sacar ${value}, por favor revise a operação!`
                );
            }
        }
    };

    public getBalance = (): number => {
        return this.balance;
    };
    protected validateAccount = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error("Conta Invalida!");
    };
}
