# TP Contact

Ce TP à pour objectif de voir tout les sujets abordés lors de la présentation théorique

## Pour commencer

Le TP sera progréssif. Le fil rouge de ce dernier sera la gestion des contacts

### Pré requis

Que devez-vous devez installer pour le bon déroulement de ce TP : 

```
 * node js 
 * git 
 * (Utilisation de votre IDE favori)  --> VS Code est tout même recommandé
```

### Travail à faire
```
Etape 1 : Création d'un tableau contenant deux contacts. Ces derniers seront représentés sous des objets littéraux. 

```
Les propriétés obligatoires d'un contact sont : 

- le nom 
- le prénom 
- numéro de téléphone 
- adresse mail 

Les propriétés facultatives sont :  

- informations tierces
- signe astrologique
 
    Points abordés : Utilisation des types, déclaration d'un tableau. Utilisation d'objet littéral

```

Etape 2 : Création de fonction

```
1°)	- Une fonction de recherche d'utilisateur par son nom et prénom. Si l'utilisateur recherché est introuvable un message d'information "Aucun résultat" apparaît à l'utilisateur.

2°) Une fonction d'insertion de contact dans le tableau. Ce dernier ne doit pas être enregistré deux fois ! 
Plusieurs contacts, peuvent avoir le même nom ou le même prénom, mais pas les deux ! 
Si le cas se présente, veuillez notifier l'utilisateur de changer la combinaison

3°) Une fonction de mise à jour du contact. Rechercher un utilisateur au préalable par son nom et prénom par exemple.

4°) Une fonction de suppression d'un contact 

5°) Créer une fonction permettant de retourner la chaîne ci-contre : "Le nombre de contacts dans mon répertoire est de" : (le nombre). Pour faire cela, aucune variable globable "Top level" doit être utilisée. 

    Points abordés : Utilisation des fonctions, portée, closure, concaténation de chaine

```

Etape 3 : Affichage

```
 - Création d'une fonction d'affichage de tous les utilisateurs dans le tableau

    Point abordés : Utilisation de boucle.
```

Etape 4 : On change tout !

```
*sauvegarder ce que vous avez réalisé précédemment dans un dossier.

 - Transformer tout ce que l'on a fait en objet. Mise en place d'objet Contact fortement typé.

```

Etape 5 : Et si on héritait ? 

```

Créer deux types de contact (Personnel et Professionnel). Ces types hériteront de Contact

```

```

Etape 6 : Retour vers le futur 

```

 - Modification de la méthode de création de contact :
    * Ajouter un type en paramètre d'entrée(chaîne ou résultat d'un énum) 
    * Si le type correspond au type Personnel créer un contact de type "Contact Personnel" 
    * Idem pour Professionnel

- Modification de la méthode d'affichage des contacts :
    * Si le contact est de type personnel afficher les informations du contact et en tout fin "Attention, c'est un intime..." 
    * Idem pour le type professionnel sauf que le message de toute fin doit être : "Après le boulot je le connais plus"
    
```

```

Etape 7 : Retour vers le futur ++ 

```
Création d'une page HTML (5) faisant office de menu :
    - Télécharger la dernière version de jQuery et insérer la ainsi que votre fichier js précédemment composé dans les étapes précédentes 
    
    - Sur cette page, dernière afficher un tableau contenant tous les contacts
    
    - En dessous de ce tableau, ajouter les boutons :
        * Ajouter 
        * Modifier
        * Supprimer

```

```

Etape 8 : Les choses sérieuses commencent 

```

Ajouter un nouveau fichier HTML (5) contenant des champs de saisies pour toutes les propriétés du contact (obligatoire et non obligatoire), puis un bouton valider. Cette page permettra d'ajouter des contacts.
  - Lorsque l'utilisateur clique sur valider, le contact sera ajouté au tableau

 **Attention certaines règles doivent être vérifiées avant l'insertion**

    - Le nom et le prénom ne doit pas dépasser 25 caractères 
    - Le numéro de téléphone doit être uniquement composé de chiffre et ne doit pas éxéder plus de  10 caractères
    - l'adresse mail doit être valide (utilise uniquement les expressions régulières)
    - Si les informations sont saisies, ils ne doivent pas dépaser 100 caractères 
    - Si le signe astrologique est saisie, il ne doit pas dépasser 15 caractères 

Si ces règles sont respectées, le contact peut être enregistré 
    ** Ne pas oublier qu'un utilisateur ne peut pas avoir le même nom et prénom

Revenez sur la page ou tout les utilisateurs sont affichés. Est-ce que vous voyez votre utilisateur ? et si non pourquoi ? 

Trouver un moyen pour les garder en mémoire. Astuce : "Viens du côté obscur, nous avons des cookies"


```

Etape 9 : On repase en modification 

```
Ajouter un nouveau fichier HTML (5), permettant la modification d'un contact.
  - Pour cela, il faut modifier le tableau d'affichage des contacts et ajouter une case à cocher à la fin de chaque ligne
  - Le bouton "Modifier" doit être inactif, lorsque l'utilisateur sélectionne un contact, le bouton devient actif 
  - Tout comme le formulaire d'ajout, il faut que ce formulaire dispose des mêmes zones de saisies et des mêmes règles

```

```

Etape 10 : Vous ne passerez pas ! enfin si c'est demandé gentiment

```
Le bouton "supprimer" est inactif pour le moment sauf si l'utilisateur sélectionne un contact cf. modification 
  - Avant la suppression, demander la confirmation à l'utilisateur par une boite de dialogue.     

```

```
## Authors

* **Geoffrey Parquet** - *Initial work* - [PersonalGit](https://github.com/Gparquet/)

## Acknowledgments

* Types
* Variables (Déclaration, initilisation, utilisation)
* Fonctions (Déclaration, utilisation, portée, closure)
* Objet et Prototype
* Itération (les boucles)
* Manipulation du DOM 
* Utilisation de jQuery