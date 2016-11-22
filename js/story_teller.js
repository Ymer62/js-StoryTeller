








var hist = document.getElementById('texte');

var sexe = prompt("quel est ton sexe?");
var prenom = prompt("quel est ton prenom?");
var age = prompt("quel est ton age?");
var ville = prompt("quel est ta ville?");
var arme = prompt("quel est ton arme a feu favori?");

if(sexe == "femme"){
  hist.innerHTML = "salut " + prenom + " tu est une " + sexe + " et tu es l\'une des quelques survivantes que l'humanite a bien voulu laisser vivre....Mais pour combien de temps.Tu est age de " + age + " ans tu ere pres de " + ville + " ou tu as un petit abri avec quelques provisions tu es poser sur ton lit ou tu t'endort peu a peu en ecoutant le bruit de ta ville delabree avec les taules qui claque les tempetes aux loin et le sifflement incessant du vent s'engoufrant entre les bricks des derniers building encore sur pied.Soudain vous etes reveille en surssaut, vous entendez du bruit a l'exterieurde votre abri, vous prenez alors votre " + arme + " et sortez de la.Devant vous 3 possibilite s'offre a vous : tout droit, a gauche, a droite.Ecouter votre instinc et peut etre restere vous en vie";
}

else if(sexe == "homme"){
  hist.innerHTML = "salut " + prenom + " tu est un " + sexe + " et tu es l\'un des quelques survivants que l'humanite a bien voulu laisser vivre....Mais pour combien de temps.Tu est age de " + age + " ans tu ere pres de " + ville + " ou tu as un petit abri avec quelques provisions tu es poser sur ton lit ou tu t'endort peu a peu en ecoutant le bruit de ta ville delabree avec les taules qui claque, les tempetes aux loin et le sifflement incessant du vent s'engoufrant entre les bricks des derniers building encore sur pied.Soudain vous etes reveille en surssaut, vous entendez du bruit a l'exterieurde votre abri, vous prenez alors votre " + arme + " et sortez de la.Devant vous 3 possibilite s'offre a vous : tout droit, a gauche, a droite.Ecouter votre instinc et peut etre restere vous en vie";
}

else{
alert("ta tout faux cousin homme ou femme!!!");
}

var position = setTimeout(changeDirection, 15000);

function changeDirection()
{
  var direction = prompt ("quel direction???");

  if(direction == "tout droit"){
    hist.innerHTML = hist.innerHTML + " Vous allez tout droit marchez directement sur un piege a ours poser quelque temps avant par des bandits, le piege se referme sur votre jambe et vos cries rameutes les bandits vers vous, et malheuresement pour vous ils sont cannibales ils vous tue pour abreger vos soufrances et feront avec vous un banquet et donnerons vos reste aux chiens!!!RIP";
  }

  if(direction == "a gauche"){
    hist.innerHTML = hist.innerHTML + " Vous contournez votre abris sur la gauche vous marcher plusieurs metres sur des branchages et taules ondule malheuresement pour vous a cause de cela vous avez fait enormement de bruit est quelques secondes plus tard vous vous retrouvez avec un fusil sur la tampe, cette personne vous demanderas de prononcer vos derniere paroles et vous tueras de sang froid quelques secondes apres!!!RIP";
  }

  if(direction == "a droite"){
    hist.innerHTML = hist.innerHTML + " Vous contournez par la droite dans une allée obscur au font de cette aller une porte entre ouverte ou en sort une musique qui en ce lieux parrait irreel vous passer votre tete et voyer une jeune femme qui pleure de solitude c'est la femme d'un oligarche Russe son mari vient de mourrir et cette femme chercher de l'aide a l'entrer de son bunker elle vous invite a rentrer ferme la porte derriere vous, et vous passerais le restant de vos jours dans un endroit remplie de chose extraordinaire vous tomberais amoureux de cette Russe et vous aurais beaucoup d'enfant....  :-) ";
  }
}
