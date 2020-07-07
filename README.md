# BomberParty (FrontEnd)

**A Multiplayer Browser Game**

# Presentation 

Un projet créé en parallèle de ma formation **Développeur FullStack JS** chez O'Clock durant 6 mois. 

Pour le moment le projet est en javascript vanilla, j'utiliserais React une fois que j'aurais commencé à l'apprendre pendant ma formation.

Je tiens à préciser que le code est fait au long de ma formation c'est pour cela qu'il n'est surement pas assez propre ni même organiser comme il le faut. Une refactorisation sera faite lorsque je pourrais sortir une V1 qui fonctionne.

Vous pouvez trouver le code du BackEnd (NodeJS) : 

[Repo du BackEnd]()

La première version : (Avril 2020) :

[Repo 1ere version](https://github.com/GautierCo/BombParty)

# Logique 

## Création du salon

- Un nouveau joueur arrive sur la page pour créer un salon entre amis
- Il entre son pseudo (Voir pour ajouter un pseudo random + tard)
- Le nom du salon
- Sélectionne les options (temps de timer entre chaque question, nbr de joueurs (2 joueurs minimum).
- Le joueur créer son salon "privé".
- Un lien est créé automatiquement avec le nom du salon dans l'url. 
- Pour eviter que le salon a déjà été créé sous le même nom alors rajouter dans l'url une serie de chiffre automatiquement dans chaque salon.
- Le joueur est rediriger, et il peut partager facilement l'url à ses amis.

## La partie peut commencer :

- Un bouton "Commencer" || "Start" s'affiche à la place de la bombe.
- Il est non cliquable tant que les joueurs n'ont pas indiquez qu'ils sont prêt à jouer.
- On vérifie que chaque joueur à indiquer être prêt pour commencer.
- Le bouton est à présent cliquable.
- Une fois cliquer sur le bouton start, la partie commence.

## Déroulant de la partie

- En cour..

## Idées :

- Création d'un compte
- Ajout d'un avatar
- Ajouter des "catégories" de questions pour laisser le choix aux joueurs de choisir le type de question sur différents sujets.

___

## Update sur le projet : 07.07.2020 :

- Ajout d'un chat avec SocketIO.
    - Fonctionnel. Besoin d'améliorations sur les vérifications lors de l'envoie de message, ajout du pseudo, etc.
    
![](https://i.imgur.com/kHFL68N.gif)

- Ajout de nouveau joueur (Non terminé)
    - Problème pour afficher les joueurs actuels lorsqu'un nouveau joueur rejoint la partie.
    - Utilisation d'un bouton pour activer le Switch aléatoire entre chaque joueur (pour le moment pour les tests).

![](https://i.imgur.com/sbvBDXG.gif)

# ToDo : 

- Gestion du compteur.
- Gestion de l'état des joueurs avant de lancer le compteur. Ex: Un bouton prêt pour indiquer que l'on est prêt à lancer la partie.
- Création / Utilisation d'une API pour récuperer les questions + la bonne réponse.
- Vérification de la réponse en temps réelle du joueur sélectionné aléatoirement.
- Gestion de la "vie" du joueur lors d'une mauvaise réponse retirer 1 coeur par exemple.
- Création d'une ROOM par partie.
- Obtenir un lien privé pour inviter des amis à rejoindre la ROOM.
- Obtenir les résultats de la partie pour y afficher un classement.
- La fléche à remplacer par une bombe "animée" avec une fléche
- Ajouter des sons pour les actions ex: Au tour du joueur, lorsque la bombe va exploser, etc..
- Revoir le responsive sur mobile.