function calculateTip(event) {
    event.preventDefault() //Não deixa recarregar a página
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if (bill == "" | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQual) / numOfPeople
    total = total.toFixed(2) // Definir o numero de casas depois da virgula
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
   // alert('hahahah')
}

document.getElementById('totalTip').style.display = "none"; //Faz o texto sumir
document.getElementById('each').style.display = "none"; 

document.getElementById('tipsForm').addEventListener('submit',calculateTip); //adiciona um evento no botão 