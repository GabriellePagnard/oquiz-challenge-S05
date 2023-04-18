# Modèle Logique de données (MLD)

Objectif, à partir d'un MCD : 
- préparer à l'insertion en BDD. 
- préciser les **noms** exacts des futures **tables** et **champs**
- traduire les **associations** sous forme de : 
  - nouveau champ dans la table
  - clé primaire/clé étrangère
  - table de liaison


Le formalisme d'un MLD est bien moins rigoureux que celui du MCD. 

On peut "rédigé" sous format écrit ce MLD ou bien "schematisé"

Mieux en anglais vu qu'on va insérer les données en anglais in fine dans la BDD.

Les "types" de données qu'on choisit ne sont pas figés dans le marbre (pourquoi ? parce qu'on a pas encore choisit notre SGBD)

## MLD Oquiz


```
USER (
  id: INT             -- clé primaire
  firstname: TEXT
  lastname: TEXT
  email: TEXT
  password: TEXT d'une longueur max de 255 caractères
)

QUIZ (
  id: INT,
  title: TEXT
  description: TEXT
  author_id: #ID(->USER)     -- Clé étrangère
)

```


## Cardinalité - démarche

On prend le max de chaque côté de la relation : 

```
UTILISATEUR <---- 0:N   -----> CREE <----- 1:1   ------> QUIZ

max(0,N) --> N
max(1,1) --> 1

===> 1-N ===> One-To-Many
```

Règle : 
- `One-to-One` : 
  - on rajoute un champ dans la table
  - on fait comme en One-to-Many

- `One-to-Many`
  - il suffit de rajouter une clé étrangère dans une table qui pointe vers l'autre table

- `Many-To-Many`
  - on rajoute une table de liaison qui porte les 2 références (clé étrnagères) vers les 2 tables initiales.

