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
    question: 'Quel est le talent caché de Pierre-Yves ?',
    answers: [
      {
        answer: 'Musique',
        percentage: 42
      },
      {
        answer: 'Sports extrêmes (plongeon et ski essentiellement)',
        percentage: 21
      },
      {
        answer: 'Photobooth',
        percentage: 17
      },
      {
        answer: 'Cuisine',
        percentage: 12
      },
      {
        answer: 'Danse',
        percentage: 8
      }
    ],
    alternativeAnswers: [
      'Eleveur de cafards',
      'Capacité à se lancer malgré la peur'
    ],
    nextQuestion: 2
  },
  {
    id: 2,
    question: 'Quel est l\'objet dont Céline possède le plus d\'exemplaires  ?',
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
    question: 'Quelle est la qualité préférée de Céline chez Pierre-Yves ?',
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
    question: 'Quelle est la qualité préférée de Pierre-Yves chez Céline ?',
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
    question: 'Qu\'est-ce que Pierre-Yves reproche le plus souvent à Céline ?',
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
    question: 'Qu\'est-ce que Céline reproche le plus souvent à Pierre-Yves ?',
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
    question: 'Si Céline était une émission de télévision, laquelle serait-elle ?',
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
    question: 'Si Pierre-Yves était un film, lequel serait-il ?',
    answers: [
      {
        answer: 'Comédie',
        percentage: 40
      },
      {
        answer: 'Aventure Fantasy',
        percentage: 22
      },
      {
        answer: 'Science-fiction',
        percentage: 19
      },
      {
        answer: 'Thriller',
        percentage: 11
      },
      {
        answer: 'Comédie dramatique',
        percentage: 8
      }
    ],
    alternativeAnswers: [
      'Aventure dramatique'
    ]
  }
]
