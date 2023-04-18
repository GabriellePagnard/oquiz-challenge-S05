# Clarification du sujet avec Jeff

- Q. Besoin d'une authentification ? 
  - R. Oui ! Le `login` et le `signup`

- Q. Il y a des themes et des categories pour les thèmes ? C'est pas clair ? 
  - R. On garde juste des thèmes (`tag`). Ex : cosmologie, cuisine, sport. Pas de sous-thème. D'ailleurs un `quiz` peut avoir 1 ou plusieurs thèmes, ou ne pas avoir de thème.


- Q. Est-ce qu'on doit utiliser les cookies et les sessions ?
  - R. Il en sait rien. C'est de la technique c'est vous qui gérez

- Q. Est-ce qu'il y a des questions et des thèmes déjà fourni de bases ? 
  - R. Techniquement non, mais si vous voulez pour développer, vous pouvez écrire des "faux quiz" pour avoir de la donnée à manipuler. 

- Q. Qui peut créer les quiz ? 
  - R. Les administrateurs du site. ❌ MAIS dans un premier temps, on le fera pas (trop long)

- Q. Qui peut ajouter un thème dans les listes des thèmes des quiz ? 
  - R. Les administrateurs du site.

- Q. TMJ = Taux moyen journalier = €€€
  - R. c'est pour la gloire

- Q. Choix multiple ??
  - R. Oui, c'est des questions à choix multiple MAIS il n'y a qu'UNE SEULE bonne réponse à chaque fois

- Q. Dans une seule langue ? 
  - R. Oui.

- Q. Le score d'un utilisateur est t il enregistré ? 
  - R. Non. Pas dans un premier temps. 

- Q. est-ce qu'on doit prévoir la création d'un profil utilisateur (login + password) ?
  - R. L'utilisateur lambda peut CREER un compte et se connecter MAIS dans un premier temps, on ne lui fait pas la page de PROFIL ❌ (bonus ?)

- Q. à quoi ça sert de créer un compte si on enregistre pas ses résultats ??
  - R. Seule les membres enregistrés et connectés peuvent REPONDRE aux quiz ! Autrement, ils peuvent voir la liste des quiz, mais ne peuvent pas accéder à un quiz individuel pour y répondre.

- Q. quel est l'objectif de l'obligation de connexion, limité les utilisateurs ?
  - R. (raison pédagogique). Pour que dans second temps on enregistre vraiment les scores. 

- Q. Cb de temps ?
  - Toute la saison. 

- Q. Gérer le responsive ? pour le mobile ? 
  - R. Si vous voulez, mais pas obligatoire (dans le cas bien particulier de la S05)
    - Pour l'intégration, j'ai déjà vu avec un professionnel ! => intégration fournie

- Q. Les questions sont elles mélangés par niveau de difficulté ? 
  - R. Si on choisit un quiz (ex: Comment faire une bonne tartiflette), il y a 5 questions dedans avec potentiellement des niveau de difficultés différentes. 
  - **Un quiz plusieurs questions chacune ayant une difficulté fixée**
  - Un quiz n'a pas de difficulté, c'est les questions qui ont une difficulté

## Données ? Entités ?

- `Quiz` => titre, auteur, date de creation, questions, THEME
- `Question` => description, date de création, NIVEAU
- `Reponse` => description
- `Niveau de difficulté` => nom
- `Auteur` => prénom, nom, email, mot de passe
- `Theme` => nom

