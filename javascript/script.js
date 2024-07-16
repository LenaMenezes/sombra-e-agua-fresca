function toggleContent() {
    var moreCards = document.querySelector("#servicos-ocultos");
    var btn = document.getElementById("button-ler-mais");

    if (moreCards.style.display === "none" || moreCards.style.display === "") {
        moreCards.style.display = "flex";
        btn.textContent = "Ler Menos";
    } else {
        moreCards.style.display = "none";
        btn.textContent = "Ler Mais";
    }
}
function toggleCard(button) {
    var card = button.closest('.servicos-card, .duvidas-card');
    card.classList.toggle('expanded');
    
    if (card.classList.contains('expanded')) {
        button.textContent = '-';
    } else {
        button.textContent = '+';
    }
}

$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');        
    });
});

function toggleCard2(button) {
    var card = button.closest('.servicos-card-1, .duvidas-card-1');
    card.classList.toggle('expanded');
    
    if (card.classList.contains('expanded')) {
        button.textContent = '+';
    } else {
        button.textContent = '-';
    }
}