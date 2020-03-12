import titles from './string';
import {ROUTE} from './settings';
import {images} from './image';

export const arrayListOne = [
  {
    img: images.img1,
    onClick: ROUTE.MovieScreen,
    title: titles.INFO_TITLE_ONE,
    freeText: titles.INFO_HEADER_FREE,
    subTitle: titles.INFO_SUBTITLE_ONE,
  },
  {
    img: images.img2,
    onClick: ROUTE.MovieScreen,
    title: titles.INFO_TITLE_TWO,
    freeText: titles.INFO_HEADER_FREE,
    subTitle: titles.INFO_SUBTITLE_TWO,
  },
];

export const arrayListTwo = [
  {
    img: images.img3,
    onClick: ROUTE.MovieScreen,
    title: titles.INFO_TITLE_THREE,
    freeText: titles.INFO_HEADER_FREE,
    subTitle: titles.INFO_SUBTITLE_THREE,
  },
];
