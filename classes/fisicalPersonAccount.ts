import { DioAccount } from "./myBankAccounts";

export class FisicalPersonAccount extends DioAccount {
    private doc_id: number;
    constructor(name: string, accountNumber: number, doc_id: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}
