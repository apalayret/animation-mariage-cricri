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
    nextQuestion: 11
  },
  {
    id: 8,
    question: 'Quelle est la 1e chose que Christine met dans sa valise,\navant de partir en vacances ?',
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
    nextQuestion: 14
  },
  {
    id: 11,
    question: 'Si Christian était un plat, lequel serait-il ?',
    answers: [
      {
        answer: 'Plat régional (gâteau nantais, choucroute...)',
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
    nextQuestion: 8
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
        percentage: 16
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
    id: 17,
    question: 'Si Christine était un personnage de dessin animé ou de BD,\nlequel serait-elle ?',
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
        answer: 'Une bestiole jaune et survoltée (minion, marsupilami...)',
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
    nextQuestion: 27
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
    ]
  },
  {
    id: 27,
    question: 'Si Christian pouvait choisir un super pouvoir,\nlequel serait-ce ?',
    answers: [
      {
        answer: 'Être Superman (voler, super-force)',
        percentage: 26
      },
      {
        answer: 'Transformer Christine en Serena Williams',
        percentage: 21
      },
      {
        answer: 'Ralentir le temps, procrastiner à volonté',
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
    ],
    nextQuestion: 24
  }
]
