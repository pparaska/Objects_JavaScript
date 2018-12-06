
class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;

    }
    deposit(amount) {
        this.accountBalance += parseInt(amount);
    }
    getAccountBalance() {
        console.log(this.accountBalance);
    }

};
class Savings extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, isSalary) {
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
    }
    withdrawl(amount) {
        if (this.accountBalance < parseInt(amount))
            console.log("Insufficient Balance");
        else {
            this.accountBalance -= amount;
        }

    }
};
var savings = new Savings(123654, "Kim", 50000, true);
console.log(savings);
savings.getAccountBalance();
savings.deposit(1000);
savings.getAccountBalance();
savings.withdrawl(500);
savings.getAccountBalance();

class Current extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit) {
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
    }
    withdrawl(amount) {
        if (this.accountBalance + this.odLimit < parseInt(amount))
            console.log("Can't withdraw");
        else {
            this.accountBalance -= amount;

        }
    }
};
var current = new Current(724454, "Jack", 80000, 200000);
console.log(current);
current.getAccountBalance();
current.deposit(1000);
current.getAccountBalance();
current.withdrawl(100000);
current.getAccountBalance();


