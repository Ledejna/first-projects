const bill = document.getElementById('Bill');
const people = document.getElementById('PeopleAmount');
let serviceQual = document.getElementById('ServiceQuality');
const result = document.getElementById('Result');
const calculate = document.getElementById('Calculate');

result.style.display = 'none';
calculate.addEventListener('click', calculateTip);

function calculateTip(){
    if(bill.value === "" || serviceQual === 0){
        alert("Please enter a value");
        return;
    }
    if(people.value === "" || people.value < 1){
        people.value = 1;
        result.style.display = 'none';
    }else{
        result.style.display = 'block';
    }

    
    let totalTip = bill.value * serviceQual.value;

    let totalBill = totalTip + parseInt(bill.value);

    let divTip = totalTip / people.value;

    let divBillTip = totalBill / people.value;

    document.getElementById('Result').style.display = 'block';

    document.getElementById('Tip').innerText = "$" + totalTip.toFixed(2);
    document.getElementById('Total-bill-tip').innerText = "$" + totalBill.toFixed(2);
    document.getElementById('Tip-person').innerText = "$" + divTip.toFixed(2);
    document.getElementById('Total-tip-person').innerText = "$" + divBillTip.toFixed(2);

    

}