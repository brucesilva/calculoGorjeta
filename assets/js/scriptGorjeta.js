function calcularGorjeta(event){
    event.preventDefault();

    // pegado os valores dos inputs
    let bill = document.getElementById('bill').value;
    let numberOfPeople = document.getElementById('numberOfPeople').value;
    let percentChip = document.getElementById('percentChip').value;
    //  alert(percentChip);

    total = (bill * percentChip)/ numberOfPeople;
    total = total.toFixed(2);
 
    if(numberOfPeople <= 1){
         document.getElementById('totalBill').style.display = "none";
         document.getElementById('totalBill').style.display = "block";
         document.getElementById('total').innerHTML = total;
         document.getElementById('each').innerHTML = "";
         
    }else{
        document.getElementById('totalBill').style.display = "block";
        document.getElementById('total').innerHTML = total;
        document.getElementById('each').innerHTML = "p/ cada pessoa";
        
    }
    document.getElementById('totalBill').style.display = "block"; 
   
}
 
// aqui estou passando o evento para a função calcula Gorjeta
document.getElementById('formGorjeta').addEventListener('submit', calcularGorjeta);