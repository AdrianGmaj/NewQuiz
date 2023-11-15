import { Injectable } from '@angular/core';
import { Question } from './question';
import { RandomGeneratorService } from './randomGenerator.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions: Array<Question> = [
    {
      id: 1,
      categoryId: 1,
      description: "Z ilu posłów składa się w Polsce Sejm?",
      answers: [
        {
          id: 1,
          label: '420',
          correct: false
        },
        {
          id: 2,
          label: '460',
          correct: true
        },
        {
          id: 3,
          label: '400',
          correct: false
        },
        {
          id: 4,
          label: '380',
          correct: false
        },

      ]
    },
    {
      id: 2,
      categoryId: 1,
      description: "Kto nie był prezydentem Polski?",
      answers: [
        {
          id: 1,
          label: 'Bronisław Komorowski',
          correct: false
        },
        {
          id: 2,
          label: 'Lech Kaczyński',
          correct: false
        },
        {
          id: 3,
          label: 'Włodzimierz Czarzasty',
          correct: true
        },
        {
          id: 4,
          label: 'Aleksander Kwaśniewski',
          correct: false
        },

      ]
    },
    {
      id: 3,
      categoryId: 1,
      description: "W którym roku Polska przystąpiła do Unii Europejskiej?",
      answers: [
        {
          id: 1,
          label: '1999',
          correct: false
        },
        {
          id: 2,
          label: '2001',
          correct: false
        },
        {
          id: 3,
          label: '2002',
          correct: false
        },
        {
          id: 4,
          label: '2004',
          correct: true
        },

      ]
    },
    {
      id: 4,
      categoryId: 1,
      description: "W wyborach do Sejmu koalicja wyborcza musi przekroczyć próg...",
      answers: [
        {
          id: 1,
          label: '3 proc',
          correct: false
        },
        {
          id: 2,
          label: '5 proc',
          correct: false
        },
        {
          id: 3,
          label: '8 proc',
          correct: true
        },
        {
          id: 4,
          label: '10 proc',
          correct: false
        },

      ]
    },
    {
      id: 5,
      categoryId: 1,
      description: 'Kto w 2003 r. wypowiedział w stronę ówczesnego posła Zbigniewa Ziobro słowa: Pan jest zerem, panie pośle',
      answers: [
        {
          id: 1,
          label: 'Aleksander Kwaśniewski',
          correct: false
        },
        {
          id: 2,
          label: 'Lech Kaczyński',
          correct: false
        },
        {
          id: 3,
          label: 'Leszek Miller',
          correct: true
        },
        {
          id: 4,
          label: 'Barbara Nowacka',
          correct: false
        },

      ]
    },
    {
      id: 6,
      categoryId: 1,
      description: 'Polska dołączyła do Sojuszu Północnoatlantyckiego po wieloletnich staraniach. Polska jest członkiem nato od roku..',
      answers: [
        {
          id: 1,
          label: '1999',
          correct: true
        },
        {
          id: 2,
          label: '2000',
          correct: false
        },
        {
          id: 3,
          label: '2003',
          correct: false
        },
        {
          id: 4,
          label: '2011',
          correct: false
        },

      ]
    },
    {
      id: 7,
      categoryId: 1,
      description: 'Ilu seantorów zasiada w polskim Senacie?',
      answers: [
        {
          id: 1,
          label: '60',
          correct: false
        },
        {
          id: 2,
          label: '80',
          correct: false
        },
        {
          id: 3,
          label: '100',
          correct: true
        },
        {
          id: 4,
          label: '120',
          correct: false
        },

      ]
    },
    {
      id: 8,
      categoryId: 1,
      description: 'Ile lat skończyć musi w Polsce kandydat na prezydenta kraju?',
      answers: [
        {
          id: 1,
          label: '25',
          correct: false
        },
        {
          id: 2,
          label: '30',
          correct: false
        },
        {
          id: 3,
          label: '35',
          correct: true
        },
        {
          id: 4,
          label: '40',
          correct: false
        },

      ]
    },
    {
      id: 9,
      categoryId: 1,
      description: 'Ile lat skończyć musi w Polsce kandydat na prezydenta kraju?',
      answers: [
        {
          id: 1,
          label: '25',
          correct: false
        },
        {
          id: 2,
          label: '30',
          correct: false
        },
        {
          id: 3,
          label: '35',
          correct: true
        },
        {
          id: 4,
          label: '40',
          correct: false
        },

      ]
    },
    {
      id: 10,
      categoryId: 1,
      description: 'Obecnie obowiązująca w Polsce Konstytucja została uchwalona w roku? ',
      answers: [
        {
          id: 1,
          label: '1995',
          correct: false
        },
        {
          id: 2,
          label: '1997',
          correct: true
        },
        {
          id: 3,
          label: '1999',
          correct: false
        },
        {
          id: 4,
          label: '2000',
          correct: false
        },

      ]
    },

  ]
  constructor(private random: RandomGeneratorService) { }

  getQuestions(): Array<Question> {
    return this.questions
  }
  getQuestionsByCategory(categoryId: number): Array<Question> {
    return this.questions.filter((question) => question.categoryId == categoryId)
  }

  getRandomQuestionByCategory(categoryId: number): Question {
    let questionsByCategory = this.getQuestionsByCategory(categoryId)
    let randomIndex = this.random.getRandom(questionsByCategory.length)

    return questionsByCategory.at(randomIndex)

  }

  getLength(): number {
    return this.questions.length
  }

}


