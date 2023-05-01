const placeholders = ["Anthony","Arthur ","Bruno ","Camilly","Cauã","Claudia","Dennife","Edson","Gerlânio","Hugo","Jorge","Marcos","Kallyne","Karynne","Kauã","Kennedy","Luciano","Luís","Carina","Clara","Raissa","Wellyka","Maryana","Milleny","Niedson","Nileane","Samira","Samily","Tifane"];

function getPlaceholder() {
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    return placeholders[randomIndex];
}

window.addEventListener("load", function() {
    const input = document.getElementsByClassName('text-bar')[0];
    input.placeholder = `ex: ${getPlaceholder()}`;
});

document.getElementById("submit").onclick = function() {
    if(document.getElementById("feedback").value[0] == undefined || document.getElementById('name').value[0] == undefined) {
        alert("Feedback não enviado!")
    } else {
        alert("Obrigado pelo seu feedback!");
    }
};

