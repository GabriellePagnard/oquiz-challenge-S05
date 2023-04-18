USER (
  id: INT             -- clé primaire
  firstname: TEXT
  lastname: TEXT
  email: TEXT
  password: TEXT d'une longueur max de 255 caractères
)

QUIZ (
  id: INT                -- clé primaire
  title: TEXT
  description: TEXT
  author_id: #ID(->USER)     -- Clé étrangère
)

THEME (
    tag_id : INT       -- clé primaire
    name : TEXT
)

DEF_QUIZ (
    quiz_id : #ID(->QUIZ)            -- clé primaire
    tag_id : #TAG_ID(->THEME)        -- clé primaire
)

LEVEL (
    level_id : INT                   -- clé primaire 
    name : TEXT
)

QUESTION (
    question_id : INT                -- clé primaire
    description : TEXT
    wiki : TEXT
    anecdote : TEXT
    level_id : #LEVEL_ID(->LEVEL)     -- clé étrangère
    quiz_id : #ID(->QUIZ)             -- clé étrangère
    proposal_id : #PROPOSAL_ID(->PROPOSAL)   -- clé étrangère
)

PROPOSAL(
    proposal_id : INT                 -- clé primaire
    description : TEXT
    question_id : #QUESTION_ID(->QUESTION)     -- clé étrangère
)