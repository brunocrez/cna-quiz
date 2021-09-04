import AnswerModel from './model/answerModel';
import QuestionModel from './model/questionModel';

export const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
    AnswerModel.isTheWrongOne('Abelha'),
    AnswerModel.isTheWrongOne('Barata'),
    AnswerModel.isTheWrongOne('Pulga'),
    AnswerModel.isTheRightOne('Barbeiro'),
  ]),
  new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
      AnswerModel.isTheWrongOne('Caju'),
      AnswerModel.isTheWrongOne('Côco'),
      AnswerModel.isTheWrongOne('Chuchu'),
      AnswerModel.isTheRightOne('Abóbora'),
  ]),
  new QuestionModel(203, 'Qual é o coletivo de cães?', [
      AnswerModel.isTheWrongOne('Manada'),
      AnswerModel.isTheWrongOne('Alcateia'),
      AnswerModel.isTheWrongOne('Rebanho'),
      AnswerModel.isTheRightOne('Matilha'),
  ]),
  new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
      AnswerModel.isTheWrongOne('Equilátero'),
      AnswerModel.isTheWrongOne('Isóceles'),
      AnswerModel.isTheWrongOne('Trapézio'),
      AnswerModel.isTheRightOne('Escaleno'),
  ]),
  new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
      AnswerModel.isTheWrongOne('Castro Alves'),
      AnswerModel.isTheWrongOne('Manuel Bandeira'),
      AnswerModel.isTheWrongOne('Carlos Gomes'),
      AnswerModel.isTheRightOne('Dom Pedro I'),
  ]),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
      AnswerModel.isTheWrongOne('Perder'),
      AnswerModel.isTheWrongOne('Fracassar'),
      AnswerModel.isTheWrongOne('Desprezar'),
      AnswerModel.isTheRightOne('Conseguir'),
  ]),
  new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
      AnswerModel.isTheWrongOne('Argentina'),
      AnswerModel.isTheWrongOne('Espanha'),
      AnswerModel.isTheWrongOne('Brasil'),
      AnswerModel.isTheRightOne('Portugal'),
  ]),
  new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
      AnswerModel.isTheWrongOne('Costa e Silva'),
      AnswerModel.isTheWrongOne('Emílio Médici'),
      AnswerModel.isTheWrongOne('Ernesto Geisel'),
      AnswerModel.isTheRightOne('João Figueiredo'),
  ]),
  new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
      AnswerModel.isTheWrongOne('Ás'),
      AnswerModel.isTheWrongOne('Nove'),
      AnswerModel.isTheWrongOne('Rei'),
      AnswerModel.isTheRightOne('Valete'),
  ]),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
      AnswerModel.isTheWrongOne('Vela'),
      AnswerModel.isTheWrongOne('Vento'),
      AnswerModel.isTheWrongOne('Vênia'),
      AnswerModel.isTheRightOne('Veia'),
  ]),
  new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
      AnswerModel.isTheWrongOne('Abrupção'),
      AnswerModel.isTheWrongOne('Abolição'),
      AnswerModel.isTheWrongOne('Abnegação'),
      AnswerModel.isTheRightOne('Ablução'),
  ]),
  new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
      AnswerModel.isTheWrongOne('Monte Branco'),
      AnswerModel.isTheWrongOne('Monte Fuji'),
      AnswerModel.isTheWrongOne('Monte Carlo'),
      AnswerModel.isTheRightOne('Monte Everest'),
  ]),
  new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
      AnswerModel.isTheWrongOne('Estômago'),
      AnswerModel.isTheWrongOne('Pâncreas'),
      AnswerModel.isTheWrongOne('Rim'),
      AnswerModel.isTheRightOne('Pescoço'),
  ]),
  new QuestionModel(214, 'A compensação por perda é chamada de...', [
      AnswerModel.isTheWrongOne('Déficit'),
      AnswerModel.isTheWrongOne('Indexação'),
      AnswerModel.isTheWrongOne('Indébito'),
      AnswerModel.isTheRightOne('Indenização'),
  ]),
  new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
      AnswerModel.isTheWrongOne('Cuca'),
      AnswerModel.isTheWrongOne('Curupira'),
      AnswerModel.isTheWrongOne('Boitatá'),
      AnswerModel.isTheRightOne('Saci-pererê'),
  ]),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
      AnswerModel.isTheWrongOne('Marechal Deodoro'),
      AnswerModel.isTheWrongOne('Barão de Mauá'),
      AnswerModel.isTheWrongOne('Marquês de Pombal'),
      AnswerModel.isTheRightOne('Duque de Caxias'),
  ])
];