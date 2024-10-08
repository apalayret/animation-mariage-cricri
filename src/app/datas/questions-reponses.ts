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
      'Danser, de la musique',
      'Discuter'
    ],
    nextQuestion: 2
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
        answer: 'calme / patience',
        percentage: 47
      },
      {
        answer: 'Gentillesse / Prévenance / Ecoute',
        percentage: 25
      },
      {
        answer: 'Organisation',
        percentage: 13
      },
      {
        answer: 'Perfection / Génialitude',
        percentage: 9
      },
      {
        answer: 'Talent de cuisinier',
        percentage: 6
      }
    ],
    alternativeAnswers: [
      'Sa culture',
      'Son éducation',
      'Son humour'
    ],
    nextQuestion: 4
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
        answer: 'Oublis / Manque d\'attention',
        percentage: 34
      },
      {
        answer: 'Maladresses / boulettes',
        percentage: 25
      },
      {
        answer: 'Tâches ménagères (notamment laisser traîner ses chaussettes)',
        percentage: 23
      },
      {
        answer: 'Rien (il paraît qu\'il est parfait)',
        percentage: 11
      },
      {
        answer: 'Râler',
        percentage: 7
      }
    ],
    alternativeAnswers: [
      'Ne pas savoir tenir un secret',
      'Pas assez combatif',
      'Ne pas la comprendre',
      ' Tout'
    ],
    nextQuestion: 7
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
    nextQuestion: 9
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
    nextQuestion: 12
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
    nextQuestion: 15
  },
  {
    id: 15,
    question: 'Que préfère Christian chez Christine ?',
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
    nextQuestion: 16
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
    nextQuestion: 18
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
    nextQuestion: 25
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
    nextQuestion: 28
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
