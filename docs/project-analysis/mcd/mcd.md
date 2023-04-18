# Modèle Conceptuel de Données (MCD)

**Modèle** => rendre compte de la réalité. ==> Souvent plusieurs solutions au même problème ! 

## MCD 

C'est un exercice très académique (très français), très normé en terme de syntaxe et de vocabulaire

Ok de rédiger en français. 

Vocabulaire : 
- **entité** (❌ table = relation)
- **association** et de **cardinalité** (❌ relation)
- **attributs** (❌ column, champ)
- **instance du modèle** (❌ enregistrement)


Attention, dans un MCD, on ne met pas d'`ID`. Les ID c'est "technique".

En revanche, nous avons besoin d'un **discriminant** : un attribut qui caractèrise de manière **unique** une instance du modèle


## MCD & MLD & MPD 

- MCD (Modèle Conceptuel de donnée) : pour les investisseurs / pour mamie
- MLD (Modèle Logique de donnée) : pour les techos
- MPD (Modèle Physique de donnée) : pour la BDD (fichier SQL)

## MCD de Oquiz

- Premiére étape : **définir et décrire nos entités** 

```
Utilisateur : prénom, nom, email, mot de passe (, est administrateur)

Quiz : description, wiki

Theme/Catégorie : name

Question : description, 

Niveau : name

Proposition/Réponse : description
```

### Outils

- Papier et crayon
- tldraw
- `draw.io` 


## Cardinalité 

- Le choix 0 ou 1 ? 
  - est-ce qu'on peut créer un niveau sans l'assigner directement à une question ? 
    - OUI ? -> `0` (un niveau peut avoir 0 question assignée)
    - NON ? -> `1` (un niveau doit être assigné obligatoirement à une question minimum !)

  - pourquoi un niveau sans question ? 
    - parceque, rien qu'en état transitif (je créé le niveau PUIS je créé la question), on a un niveau qui n'a pas encore de question. 


