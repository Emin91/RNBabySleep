import { colors } from "./colorConstans"

export const headers = {
    UPGRADES: 'Обновление',
    SETTING: 'Настройки',
    OPTIONS: 'Изменить опции',
    ABOUT: 'О Приложении',
    DEVELOP: 'Разрабочик Emin Zeynalov',
    VERSION: 'Версия: 1.12.10',
}

export const settingListArray = [
    {
        itemName: 'Вам понравилось?',
        itemSubtitle: 'Оцените в Play Store',
        color: colors.GREEN,
        link: "market://details?id=by.si.soundsleeper.free",
        url: 'https://www.google.ru',
    },
    {
        itemName: 'Вам не понравилось?',
        itemSubtitle: 'Скажите, как нам стать лучше',
        color: colors.CARROT,
        link: "market://details?id=com.adobe.reader",
        onClick: (navigation) => {

        }
    },
    {
        itemName: 'Посетите наш веб-сайт',
        itemSubtitle: 'Чтобы сказать привет...',
        color: colors.WHITE,
        link: "market://details?id=com.lingodeer",
        url: 'https://www.google.ru',
    },
    {
        itemName: 'Мы в Facebook, присоединяйтесь',
        itemSubtitle: 'Советы, истории, привет...',
        color: colors.WHITE,
        link: "market://details?id=net.relaxio.sleepo",
        url: 'https://www.google.ru',

    },
]

export const settingListArrayTwo = [
    {
        itemName: 'Управлять своей подпиской',
        itemSubtitle: 'Урок от google',
    },
    {
        itemName: 'Что в полной версии?',
        itemSubtitle: null,
    },
]

export const settingListArrayThree = [
    {
        itemName: 'Изменить опции',
        itemSubtitle: null,
    },
]

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
]