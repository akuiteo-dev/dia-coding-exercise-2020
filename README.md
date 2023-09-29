# Test technique de recrutement orienté Angular

Ce test technique a pour objectif de valider les compétences du Candidat dans le domaine du front, Angular compris.

## Présentation de l'exercice

Ce test se présente sous la forme d'une application simple, permettant de générer un ensemble d'identités de personnes. À partir d'une base applicative, vous devez comprendre le fonctionnement de l'application, compléter les parties demandées et vous assurer du fonctionnement de celle-ci (tests compris).

## Consignes de l'exercice

1. S'assurer du fonctionnement des tests unitaires
1. Dans la zone de génération, des critères de sélection sont affichés, implémenter le choix de ces critères pour la génération (valider la génération au moyen des tests unitaires)
1. Dans le formulaire de critères, ne pas permettre :
	* de saisir une valeur négative ou supérieure à 1000 ;
	* de ne saisir aucun choix de genre.
1. Dans le tableau de résultats, ne plus afficher Male / Female, mais Homme / Femme (par exemple en utilisant un `Pipe`).
1. Le bouton « À propos » ne fonctionne pas, implémenter sa navigation.
1. Si le coeur vous en dit, vous pouvez essayer d'améliorer l'ergonomie (UX et ou /UI) du site sur un aspect de votre choix.

_Il est demandé en outre que le code produit soit industriel, c'est-à-dire qu'il respecte les conventions de code et que les tests unitaires n'échouent pas.
N'hésitez pas à utiliser vos bonnes pratiques habituelles ... à améliorer le code en terme de lisibilité et même en terme de performance.

## Démarrage de l'application 

Il est possible d'utiliser les scripts préconfigurés `npm` pour démarrer l'application et lancer les tests unitaires.
* `yarn run build` pour compiler le projet
* `yarn run test` pour lancer les tests unitaires
* `yarn run start` pour démarrer l'application
* `yarn run lint` pour s'assurer que le code respecte les conventions de code


_Ce projet a été généré au moyen d'[Angular CLI](https://github.com/angular/angular-cli) version 7.2.1._
