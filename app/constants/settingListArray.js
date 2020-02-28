import {colors} from './colorConstans';

export const headers = {
  UPGRADES: 'Обновление',
  SETTING: 'Настройки',
  OPTIONS: 'Изменить опции',
  ABOUT: 'О Приложении',
  DEVELOP: 'Разработчик Emin Zeynalov',
  VERSION: 'Версия: 1.12.10',
};

export const settingListArrayOne = [
  {
    itemName: 'Вам понравилось?',
    itemSubtitle: 'Оцените в Play Store',
    color: colors.GREEN,
    num: 1,
  },
  {
    itemName: 'Вам не понравилось?',
    itemSubtitle: 'Скажите, как нам стать лучше',
    color: colors.CARROT,
    num: 2,
  },
  {
    itemName: 'Посетите наш веб-сайт',
    itemSubtitle: 'Чтобы сказать привет...',
    num: 3,
  },
  {
    itemName: 'Мы в Facebook, присоединяйтесь',
    itemSubtitle: 'Советы, истории, привет...',
    num: 4,
  },
];

export const settingListArrayTwo = [
  {
    itemName: 'Управлять своей подпиской',
    itemSubtitle: 'Урок от google',
  },
  {
    itemName: 'Что в полной версии?',
  },
];

export const settingListArrayThree = [
  {
    itemName: 'Изменить опции',
    itemSubtitle: null,
  },
];

export const settingListArrayFour = [
  {
    itemName: 'О Приложении',
    itemSubtitle: 'Несколько слов от создателей',
  },
  {
    itemName: 'FAQ',
    itemSubtitle: 'Все что вы хотели знать...',
  },
  {
    itemName: 'Приложение в действии',
    itemSubtitle: 'В главной роли наша новорожденная дочь',
  },
  {
    itemName: 'Помогите друзьям выспаться',
    itemSubtitle: 'Расскажите им о Баю-Бай по почте',
  },
];
