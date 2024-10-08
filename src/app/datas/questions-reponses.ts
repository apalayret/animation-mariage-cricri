export type QuestionAnswers = {
  id: number;
  question: string;
  answers: Answer[];
  alternativeAnswers?: string[];
  nextQuestion?: number;
}

export type Answer = {
  answer: string;
  percentage: number;
}

export type Errors = [boolean, boolean, boolean];

export const datas: QuestionAnswers[] = [
  {
    id: 1,
    question: 'Qu\'est-ce qu\'une bonne soirée pour les Cricris ?',
    answers: [
      {
        answer: 'Des amis',
        percentage: 22
      },
      {
        answer: 'À boire',
        percentage: 20
      },
      {
        answer: 'À manger',
        percentage: 16
      },
      {
        answer: 'Jouer',
        percentage: 15
      },
      {
        answer: 'Du sport',
        percentage: 9
      }
    ],
    alternativeAnswers: [
      'Danser, de la musique, discuter'
    ],
    nextQuestion: 3
  },
  {
    id: 2,
    question: 'Un mot pour décrire les vacances idéales de Christine  ?',
    answers: [
      {
        answer: 'Calendriers de l\'avent',
        percentage: 56
      },
      {
        answer: 'Chaussures',
        percentage: 18
      },
      {
        answer: 'Peluches',
        percentage: 15
      },
      {
        answer: 'Tasses',
        percentage: 7
      },
      {
        answer: 'Cailloux / coquillages',
        percentage: 4
      }
    ],
    alternativeAnswers: [
      'Jouets pour adultes',
      'Poches',
      'Culottes',
      'Bouteilles Pierre Fabre',
      'Jouets Kinder',
      'Stylos'
    ],
    nextQuestion: 3
  },
  {
    id: 3,
    question: 'Un mot pour décrire les vacances idéales de Christian ?',
    answers: [
      {
        answer: 'Tranquilles',
        percentage: 26
      },
      {
        answer: 'Sportives (vélo, baignade, danse...)',
        percentage: 14
      },
      {
        answer: 'Bricoleuses',
        percentage: 12
      },
      {
        answer: 'Alcoolisées',
        percentage: 11
      },
      {
        answer: 'Reposantes',
        percentage: 5
      }
    ],
    alternativeAnswers: [
      'Avec les amis, sans sable, guitare, avec Christine...'
    ],
    nextQuestion: 6
  },
  {
    id: 4,
    question: 'Qu\'est-ce qui définit le mieux le caractère de Christine ?',
    answers: [
      {
        answer: 'Patience / Bienveillance / Douceur / Gentillesse',
        percentage: 39
      },
      {
        answer: 'Son caractère',
        percentage: 29
      },
      {
        answer: 'Ténacité / Résilience',
        percentage: 16
      },
      {
        answer: 'Ses collections',
        percentage: 11
      },
      {
        answer: 'Joueuse / Clown',
        percentage: 5
      }
    ],
    alternativeAnswers: [
      'Talent de cuisinière',
      'Dynamisme',
      'Tout'
    ],
    nextQuestion: 5

  },
  {
    id: 5,
    question: 'Qu\'est-ce qui définit le mieux le caractère de Christian ?',
    answers: [
      {
        answer: 'De tout garder',
        percentage: 46
      },
      {
        answer: 'Rien',
        percentage: 24
      },
      {
        answer: 'De toujours vouloir avoir raison',
        percentage: 15
      },
      {
        answer: 'De se moquer de lui',
        percentage: 9
      },
      {
        answer: 'De chanter faux sous la douche',
        percentage: 6
      }
    ],
    alternativeAnswers: [
      'Son indécision',
      'De ne pas se poser',
      'D\'aimer la routine',
      'De ramener trop de produits Pierre Fabre'
    ],
    nextQuestion: 6
  },
  {
    id: 6,
    question: 'Si Christine était un animal, lequel serait-elle ?',
    answers: [
      {
        answer: 'Singe',
        percentage: 27
      },
      {
        answer: 'Animal sauteur (marsupilami, kangourou, sauterelle, puce...',
        percentage: 26
      },
      {
        answer: 'Chien, louve',
        percentage: 25
      },
      {
        answer: 'Animal volant (oiseau, coccinelle...)',
        percentage: 10
      }
    ],
    alternativeAnswers: [
      'Gazelle, panthère, écureuil'
    ],
    nextQuestion: 8
  },
  {
    id: 7,
    question: 'Si Christian était un animal, lequel serait-il ?',
    answers: [
      {
        answer: 'Emission de sport',
        percentage: 31
      },
      {
        answer: 'Jeu télévisé',
        percentage: 23
      },
      {
        answer: 'Jeux d\'aventure',
        percentage: 21
      },
      {
        answer: 'Téléréalité romantique',
        percentage: 15
      },
      {
        answer: 'Emission de construction / bricolage',
        percentage: 10
      }
    ],
    alternativeAnswers: [
      'Emission de chinage',
      'Tintin'
    ],
    nextQuestion: 8
  },
  {
    id: 8,
    question: 'Quelle est la 1e chose que Christine met dans sa valise, avant de partir en vacances ?',
    answers: [
      {
        answer: 'Affaires de sport',
        percentage: 45
      },
      {
        answer: 'Sex toy, jeux',
        percentage: 15
      },
      {
        answer: 'De quoi tenir le coup (alcool, produits dopants, nourriture...)',
        percentage: 13
      },
      {
        answer: 'Le programme des vacances, guide du routard...',
        percentage: 9
      },
      {
        answer: 'Rien (trop en retard)',
        percentage: 4
      }
    ],
    alternativeAnswers: [
      'Pyjama qui couvre le bidon'
    ],
    nextQuestion: 11
  },
  {
    id: 9,
    question: 'Quelle est la 1e chose que Christian met dans sa valise, avant de partir en vacances ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 10
  },
  {
    id: 10,
    question: 'Si Christine était un plat, lequel serait-elle ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 11
  },
  {
    id: 11,
    question: 'Si Christian était un plat, lequel serait-il ?',
    answers: [
      {
        answer: 'Plat régional (gâteau nantais, choucroûte...)',
        percentage: 35
      },
      {
        answer: 'Lapin au whisky',
        percentage: 20
      },
      {
        answer: 'Lasagnes',
        percentage: 12
      },
      {
        answer: 'Un bon dessert',
        percentage: 11
      },
      {
        answer: 'Pas du fromage ! (sauf la raclette)',
        percentage: 10
      }
    ],
    alternativeAnswers: [
      'Tous car il cuisine très bien !, une bonne tartine de beurre'
    ],
    nextQuestion: 14
  },
  {
    id: 12,
    question: 'Quelle est la prochaine destination de vacances à l\'étranger des Cricris ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 13
  },
  {
    id: 13,
    question: 'Où a-t-on le plus de chance de rencontrer les Cricris ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 14
  },
  {
    id: 14,
    question: 'Que préfère Christine chez Christian ?',
    answers: [
      {
        answer: 'Son calme, sa patience, sa retenue',
        percentage: 26
      },
      {
        answer: 'Le kiki de Cricri',
        percentage: 15
      },
      {
        answer: 'Sa cuisine',
        percentage: 15
      },
      {
        answer: 'Sa sagesse, sa douceur, son réconfort',
        percentage: 11
      },
      {
        answer: 'Lui tout entier',
        percentage: 5
      }
    ],
    alternativeAnswers: [
      'Ce qu\'elle n\'a pas, qu\'il la supporte, son amour...'
    ],
    nextQuestion: 15
  },
  {
    id: 15,
    question: 'Que préfère Christian chez Christine ?',
    answers: [
      {
        answer: 'Son énergie',
        percentage: 41
      },
      {
        answer: 'Les tétines à Christine',
        percentage: 16
      },
      {
        answer: 'Sa folie, ses gaffes',
        percentage: 10
      },
      {
        answer: 'Elle toute entière',
        percentage: 8
      },
      {
        answer: 'Quand elle ne colle pas ses pieds froids contre lui',
        percentage: 5
      }
    ],
    alternativeAnswers: [
      'Ce qu\'il n\'a pas, son amour, son absence de la maison (pour être un peu tranquille)'
    ],
    nextQuestion: 17
  },
  {
    id: 16,
    question: 'Depuis combien de temps les Cricris sont-ils réellement mariés ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 17
  },
  {
    id: 17,
    question: 'Si Christine était un personnage de dessin animé ou de BD, lequel serait-elle ?',
    answers: [
      {
        answer: 'Dora l\'exploratrice',
        percentage: 22
      },
      {
        answer: 'Bécassine',
        percentage: 16
      },
      {
        answer: 'Une bestiole jaune et survoltée (minion, Marsupilami...)',
        percentage: 15
      },
      {
        answer: 'Gaston Lagaffe',
        percentage: 11
      },
      {
        answer: 'Une super-héroïne (Ladybug, Catwoman...)',
        percentage: 10
      }
    ],
    alternativeAnswers: [
      'Betty Boop, Martine, Speedy Gonzales...'
    ],
    nextQuestion: 24
  },
  {
    id: 18,
    question: 'Si Christian était un personnage de dessin animé ou de BD, lequel serait-il ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 19
  },
  {
    id: 19,
    question: 'Quelle chanson ressemble le plus à Christine ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 20
  },
  {
    id: 20,
    question: 'Quelle chanson ressemble le plus à Christian ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 21
  },
  {
    id: 21,
    question: 'Que reproche le plus Christine à Christian ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 22
  },
  {
    id: 22,
    question: 'Que reproche le plus Christian à Christine ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 23
  },
  {
    id: 23,
    question: 'Quel mot décrit le mieux les Cricris ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 24
  },
  {
    id: 24,
    question: 'Quelle est l\'activité qu\'ils préfèrent faire à 2 ?',
    answers: [
      {
        answer: 'Ceci ne nous regarde pas',
        percentage: 30
      },
      {
        answer: 'Du vélo',
        percentage: 25
      },
      {
        answer: 'Des jeux, danser, sortir',
        percentage: 20
      },
      {
        answer: 'Des travaux',
        percentage: 10
      },
      {
        answer: 'Vivre ensemble, tout simplement !',
        percentage: 5
      }
    ],
    alternativeAnswers: [
      'Voyager, faire des projets'
    ],
    nextQuestion: 27
  },
  {
    id: 25,
    question: 'Où les Cricris devaient-ils faire leur voyage de noce, initialement ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 26
  },
  {
    id: 26,
    question: 'Si Christine pouvait choisir un super pouvoir, lequel serait-ce ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 27
  },
  {
    id: 27,
    question: 'Si Christian pouvait choisir un super pouvoir, lequel serait-ce ?',
    answers: [
      {
        answer: 'Être Superman, voler',
        percentage: 26
      },
      {
        answer: 'Transformer Christine en Serena Williams',
        percentage: 21
      },
      {
        answer: 'Ralentir le temps, procrastiner',
        percentage: 12
      },
      {
        answer: 'Être dans le top 10 au golf',
        percentage: 11
      },
      {
        answer: 'Être pilote de ligne',
        percentage: 10
      }
    ],
    alternativeAnswers: [
      'Intégrer un jeu de société, se téléporter, devenir invisible...'
    ]
  },
  {
    id: 28,
    question: 'Selon-vous, combien de temps Christine peut-elle survivre sans bouger sur un canapé ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 29
  },
  {
    id: 29,
    question: 'Selon vous, combien de temps Christian peut-il survivre sans ordinateur ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 30
  },
  {
    id: 30,
    question: 'Qu\'aime faire Christine le dimanche matin ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 31
  },
  {
    id: 31,
    question: 'Qu\'aime faire Christian le dimanche matin ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ],
    nextQuestion: 32
  },
  {
    id: 32,
    question: 'Un mot ou une phrase qui vous rappelle une anecdote avec les Cricris ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ]
  }
]
