function copyNumber(){

    const number =
    document.getElementById("number").innerText;

    navigator.clipboard.writeText(number);

    alert("Number copied");
}

function verifyTransaction(){

    const trx =
    document.getElementById("trx").value.trim();

    if(trx === ""){
        alert("Please enter Transaction ID");
        return;
    }

    alert("Transaction Submitted: " + trx);
}
