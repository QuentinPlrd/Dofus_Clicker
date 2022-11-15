# Dofus_Clicker

Cookie Clicker version dofus.
Objectif atteindre le lvl 200 équivalent à plus de 10 000 000 000 d'éxpérience.
L'expérience correspond au score.

Il est possible de "farmer" les bonus de dégâts (sur la droite) pour augmenter la valeur de son clic et ainsi augmenter son expérience pour atteindre le niveau 200 :
100 expérience = + 1 dégât
500 expérience = + 5 dégâts
1000 expérience  = + 10 dégâts
50 000 expérience = + 500 dégâts
100 000 expérience = + 1 000 dégâts

Si vous avez assez d'expérience pour acheter un bonus, la bordure du bonus apparaît en vert, dans le cas contraire elle sera rouge.

Possibilité d'acheter un auto-clicker, le vitesse du clic sera d'1,8 clic / seconde. Suite à l'achat le prix de l'auto-clicker suivant doublera et la vitesse du clic augmentera de 1,8.

Selon votre niveau (et donc votre expérience) le monstre à affronter change et la panoplie de votre personnage aussi.

Votre niveau n'est pas fixe. En effet si vous achetez des bonus de dégâts ou un autoclick, l'expérience diminue et donc le lvl aussi.

// PROBLEMES //

1 - (Reproductible) : Vitesse autoclick semble diminuer lorsque l'on clic sur les bonus dégats et sur le monstre.
(A tester en "farmant" l'autoclic jusqu'a une vitesse important, sans acheter de bonus et en limitant le combat contre le monstre. Une fois une vitesse élevée atteinte, acheter pleins de bonus dégâts et la vitesse de l'autoclick diminuera)

2 - Refactorer le code pour pour la fonction "level" (à partir de la ligne 240 environ), 2 solutions :
    -Structure de controle conditionnelle (if/else if) et changer valeur de la variable lvl puis afficher cette dernière en dehors de la boucle à la fin de      la fonction avec un inner.HTM
    -Faire un tableau avec valeur de le variable lvl allant de 1 à 200


