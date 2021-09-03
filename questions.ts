import AnswerModel from './model/answerModel';
import QuestionModel from './model/questionModel';

export const questions: QuestionModel[] = [
  new QuestionModel(301, 'Qual inseto transmite a doença de Chagas?', [
    AnswerModel.isTheWrongOne('Abelha'),
    AnswerModel.isTheWrongOne('Pato'),
    AnswerModel.isTheWrongOne('Rato'),
    AnswerModel.isTheRightOne('Mosquito')
  ]),
  new QuestionModel(302, 'Qual estado é conhecido por fazer pão de queijo?', [
    AnswerModel.isTheWrongOne('São Paulo'),
    AnswerModel.isTheWrongOne('Amazonas'),
    AnswerModel.isTheRightOne('Minas Gerais'),
    AnswerModel.isTheWrongOne('Rio Grande do Sul')
  ])
];