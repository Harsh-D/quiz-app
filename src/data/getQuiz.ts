import { Quiz } from "./quiz.types";

const quizOne: Quiz = {
  quiz_id: 1,
  quizName: "Perfumery",
  playTime: "10 minutes",
  totalQuestions: 15,
  questions: [
    {
      question_id: 1,
      question:
        "What perfume is considered to be the first 'oriental'?",
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: " Poison (Dior)",
          isRight: false,
        },
        {
          text: "Shalimar (Guerlain)",
          isRight: true,
        },
        {
          text: "Arpege (Lanvin)",
          isRight: false,
        },
        {
          text: "Opium (Y.S.Laurent)",
          isRight: false,
        },
      ],
    },
    {
      question_id: 2,
      question:
        "Who was the first female to produce a designer perfume?",
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "Coco Chanel",
          isRight: true,
        },
        {
          text: "Estee Lauder",
          isRight: false,
        },
        {
          text: "Jeanne Lanvin",
          isRight: false,
        },
        {
          text: "Elizabeth Arden",
          isRight: false,
        },
      ],
    },
    {
      question_id: 3,
      question: "What is the so-called capital of world perfumery?",
      points: 5,
      negativePoint: 3,
      options: [
        {
          text: "Paris",
          isRight: false,
        },
        {
          text: "New York",
          isRight: false,
        },
        {
          text: "Milan",
          isRight: false,
        },
        {
          text: " Grasse",
          isRight: true,
        },
      ],
    },
    {
      question_id: 4 ,
      question: "Which one of these is not a French perfume house?",
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "Nina Ricci",
          isRight: false,
        },
        {
          text: "Caron",
          isRight: false,
        },
        {
          text: "Laura Biagiotti",
          isRight: true,
        },
        {
          text: "Loris Azzaro",
          isRight: false,
        },
      ],
    },
    {
      question_id: 5 ,
      question: "What are the aldehydes?",
      points: 5,
      negativePoint: 1,
      options: [
        {
          text: "tropical flowers",
          isRight: false,
        },
        {
          text: "animal ingredients",
          isRight: false,
        },
        {
          text: "resins",
          isRight: false,
        },
        {
          text: "organic chemicals",
          isRight: true,
        },
      ],
    },
    {
      question_id: 6 ,
      question: "Which famous actress was in the ads for Chanel N 5?",
      points: 5,
      negativePoint: 1,
      options: [
        {
          text: "Sharon Stone",
          isRight: false,
        },
        {
          text: "Sophie Marceau",
          isRight: false,
        },
        {
          text: "Catherine Deneuve",
          isRight: true,
        },
        {
          text: "Audrey Hepburn",
          isRight: false,
        },
      ],
    },
    {
      question_id: 7 ,
      question: "What popular perfume has a star-shaped flacon?",
      points: 5,
      negativePoint: 0,
      options: [
        {
          text: "Coco",
          isRight: false,
        },
        {
          text: "Obsession",
          isRight: false,
        },
        {
          text: "Angel",
          isRight: true,
        },
        {
          text: "Diorissimo",
          isRight: false,
        },
      ],
    },
    {
      question_id: 8 ,
      question: "What was the first jewelry company to introduce a brand name fragrance?",
      points: 5,
      negativePoint: 1,
      options: [
        {
          text: "Bulgari",
          isRight: false,
        },
        {
          text: "Cartier",
          isRight: false,
        },
        {
          text: "Van Cleef and Arpels",
          isRight: true,
        },
        {
          text: "Boucheron",
          isRight: false,
        },
      ],
    },
    {
      question_id: 9 ,
      question: "What was the first Dior fragrance ?",
      points: 5,
      negativePoint: 1,
      options: [
        {
          text: "Diorella",
          isRight: false,
        },
        {
          text: "Miss Dior",
          isRight: true,
        },
        {
          text: "Diorissimo",
          isRight: false,
        },
        {
          text: "Dioressence",
          isRight: false,
        },
      ],
    },
    {
      question_id: 10 ,
      question: "Essences of which flowers are the most commonly used in perfumery?",
      points: 5,
      negativePoint: 0,
      options: [
        {
          text: "rose and lily of the valley",
          isRight: false,
        },
        {
          text: "jasmin and freesia",
          isRight: false,
        },
        {
          text: "rose and peony",
          isRight: false,
        },
        {
          text: "rose and jasmin",
          isRight: true,
        },
      ],
    },
    {
      question_id: 11 ,
      question: "Which of these perfume houses is not American?",
      points: 5,
      negativePoint: 1,
      options: [
        {
          text: "Clinique",
          isRight: false,
        },
        {
          text: "Tommy Hilfiger",
          isRight: false,
        },
        {
          text: "Shiseido",
          isRight: true,
        },
        {
          text: "Elizabeth Arden",
          isRight: false,
        },
      ],
    },
    {
      question_id: 12 ,
      question: "The first eau de cologne was made in ...?",
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "Cologne",
          isRight: true,
        },
        {
          text: "Milan",
          isRight: false,
        },
        {
          text: "Berlin",
          isRight: false,
        },
        {
          text: "Paris",
          isRight: false,
        },
      ],
    },
    {
      question_id: 13 ,
      question: " What is best fragrance option for hot summer days?",
      points: 5,
      negativePoint: 1,
      options: [
        {
          text: "a citrus or an aquatic fragrance",
          isRight: true,
        },
        {
          text: " a floral fragrance",
          isRight: false,
        },
        {
          text: "a chypre fragrance",
          isRight: false,
        },
        {
          text: "an oriental fragrance",
          isRight: false,
        },
      ],
    },
    {
      question_id: 14 ,
      question: "How many ingredients might a modern perfume contain?",
      points: 5,
      negativePoint: 1,
      options: [
        {
          text: "up to 50",
          isRight: false,
        },
        {
          text: "up to 200",
          isRight: false,
        },
        {
          text: "up to 1000",
          isRight: false,
        },
        {
          text: "more than 1000",
          isRight: true,
        },
      ],
    },
    {
      question_id: 15 ,
      question: "What famous perfume bottle is topped by two doves?",
      points: 5,
      negativePoint: 3,
      options: [
        {
          text: "Madame Rochas",
          isRight: false,
        },
        {
          text: "L'Air du Temps",
          isRight: true,
        },
        {
          text: "Byzance",
          isRight: false,
        },
        {
          text: "Contradiction",
          isRight: false,
        },
      ],
    },   
  ],
};

//console.log(quizOne.questions[2].negativePoint);

export { quizOne };
