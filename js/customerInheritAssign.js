class Customer{
    id;
    name;
    account; 
    constructor(id,name,account)
    {
        this.id=id;
        this.name=name;
        this.account=account;
    }
    toString()
    {
        let text=this.id+" name: "+this.name+" account: "+this.account;
        return text;
    }
}
class Account{
    balance;
    constructor(balance)
    {
        this.balance=balance;
    }
    toString()
    {
        let text=" balance: "+this.balance;
        return text;
    }
    
} 
class PrimeAccount extends Account{
        supercoins;
        constructor(balance,coins)
        {
            super(balance);
            this.supercoins=coins;
        }
        toString()
        {
            let text=" balance: "+this.balance+" supercoins: "+this.supercoins;
            return text;
        }     
}
let account1=new Account(400);
let customer1=new Customer(1,'saiteja',account1);

let account2=new Account(500);
let customer2=new Customer(2,'bharath',account2);

let primeAccount1=new PrimeAccount(600,100);
let customer3=new Customer(3,'uday',primeAccount1);

let primeAccount2=new PrimeAccount(7500,150);
let customer4=new Customer(4,'vineet',primeAccount2);


let customers=[customer1,customer2,customer3,customer4];

for(let i=0;i<customers.length;i++)
{
    console.log(customers[i].toString());
}

