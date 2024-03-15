let card = document.querySelectorAll(".card");

card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards);

        let div = document.createElement("div")
        div.classList.add("cartlist");
        div.innerHTML = `
        <img src = ${card.firstElementChild.src}>
        <p>$199</p>
        `

        document.querySelector(".cartitem").appendChild(div);
    
        
    })

});