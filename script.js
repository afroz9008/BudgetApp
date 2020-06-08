let budget=0,balance=0,expense=0,firstExpens=true;
let str="";
let count=0;
let expenseName='';
let expenseForDetail=[],expenseNameForDetail=[];

function calculateBtn(){
    document.getElementById("error").style="dispaly:none";
     budget=parseInt(document.getElementById("inputBudget").value);
    if(budget < 1 || isNaN(budget)){
        document.getElementById("error").style="display:block";
        document.getElementById("error").innerHTML="Please Enter Valid Budget Amount";
        budget=0,balance=0,expense=0;
        document.getElementById("currentBudget").innerHTML="Rs. 0";
        document.getElementById("currentBalance").innerHTML="Rs. 0";
        document.getElementById("currentExpense").innerHTML="Rs. 0";
    }
    else{
         balance=budget;
         balance-=expense;
        document.getElementById("currentBudget").innerHTML="Rs. "+budget;
        document.getElementById("currentBalance").innerHTML="Rs. "+balance;
    }
}

function addExpense(){
    expenseName=document.getElementById("inputExpName").value;
    document.getElementById("error").style="dispaly:none";
     expense+=parseInt(document.getElementById("inputExpAmount").value);
     expenseForDetail[count]=parseInt(document.getElementById("inputExpAmount").value);
     expenseNameForDetail[count]=document.getElementById("inputExpName").value;
    if(expense < 1 || isNaN(expense) || expense>budget || expenseName.length <2){
        if(expense>budget || firstExpens){
            document.getElementById("error").innerHTML="Your Expense is > Budget";
            document.getElementById("error").style="display:block";
            firstExpens=false;
            expense=0;  
          
        }
        else if(expenseName.length <2){
            document.getElementById("error").innerHTML="Please Enter Expense Name";
            document.getElementById("error").style="display:block";
            expense=0;  
        }
        else{
            document.getElementById("error").style="display:block";
            document.getElementById("error").innerHTML="Please Enter Valid Expense Amount";
            document.getElementById("currentExpense").innerHTML="Rs. 0";
        }
    }
    else{
        balance=budget;
        balance-=expense;
        document.getElementById("currentExpense").innerHTML="Rs. "+expense;
        document.getElementById("currentBalance").innerHTML="Rs. "+balance;
        document.getElementById("data").innerHTML=print();
        count++;
    }
}
function print(){
    let printstr='';
    for(let i=0;i<expenseForDetail.length;i++){
    printstr+= `<tr><th>${expenseNameForDetail[i]}</th><td>${expenseForDetail[i]}</td><td><button onclick=edit('${i}')>Edit</button></td><td><button onclick='deleteRecord(${i})'>Delete</button></td><tr>`;
    }
    return printstr;
}
function edit(a){
    if(naamount=prompt("Enter New Amount : ")){
    tempAmount=naamount-expenseForDetail[a];
    expenseForDetail[a]=naamount;
    expense+=tempAmount;
    balance=budget-expense;
    document.getElementById("data").innerHTML=print();
    document.getElementById("currentExpense").innerHTML="Rs. "+expense;
    document.getElementById("currentBalance").innerHTML="Rs. "+balance;
    }
    else{
        alert("you have no change");
    }
}

function deleteRecord(a){
    if(confirm(`Do You Want To Delete This Record ! \n\n${expenseNameForDetail[a]} ${expenseForDetail[a]}`)){
        expenseNameForDetail.splice(a,1);
        tempAmount=expenseForDetail.splice(a,1);
        expense-=tempAmount;
        balance=budget-expense;
        count--;
        document.getElementById("data").innerHTML=print();
        document.getElementById("currentExpense").innerHTML="Rs. "+expense;
        document.getElementById("currentBalance").innerHTML="Rs. "+balance;
    }
    else{
        alert("You have no change");
    }
}