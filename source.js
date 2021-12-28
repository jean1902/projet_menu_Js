//  let bouton2 = document.querySelector('.btn2');
//  let bouton1 = document.querySelector('.btn1');
//  let bouton3 = document.querySelector('.btn3');
//  let bouton4 = document.querySelector('.btn4');
let bouton =document.querySelectorAll('.btn');
 let playersCard =document.querySelector('.player_card');
 let players =document.querySelector('.joueur2');
 let text =document.querySelector('.text-card');
 let tab = 
 [" Lionel Messi naît le 24 juin 1987 à Rosario en Argentine. Dès l'âge de 5 ans, il joue au football dans un petit club de sa ville. Auteur de 400 buts, Lionel Messi est le seul joueur du monde à être quintuple ballon d'or et il est le premier buteur de l'Argentine.",
 "Cristiano Ronaldo dos Santos Aveiro, couramment appelé Ronaldo ou Cristiano Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal, est un footballeur international portugais qui évolue au poste d'attaquant à Manchester United.",
 "Ronaldo de Assis Moreira, né le 21 mars 1980 à Porto Alegre au Brésil, plus communément connu sous le pseudonyme de Ronaldinho Gaúcho ou tout simplement Ronaldinho, est un footballeur international brésilien. ... Ronaldinho est considéré comme l'un des meilleurs joueurs de football de tous les temps." ,
"Kylian Mbappé Lottin [kiljan m͡bape lɔtɛ̃], né le 20 décembre 1998 à Paris, est un footballeur international français qui évolue au poste d'attaquant au Paris Saint-Germain, en Ligue 1. ... Buteur à quatre reprises, il est désigné meilleur jeune joueur de la compétition par la FIFA."];
 
 bouton[0].addEventListener('click',()=>{
    document.querySelector('.img_joueur').src="image/ronaldo.png";
    text.textContent= tab[1];
  
 })
 bouton[1].addEventListener('click',()=>{
    document.querySelector('.img_joueur').src="image/messi.png";
    text.textContent= tab[0];
 })
 bouton[2].addEventListener('click',()=>{
    document.querySelector('.img_joueur').src="image/dino.png";
    text.textContent= tab[2];
 })
 bouton[3].addEventListener('click',()=>{
    document.querySelector('.img_joueur').src="image/mbappe.png";
    text.textContent= tab[3];
 })
 


bouton.forEach