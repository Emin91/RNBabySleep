import {colors} from '../../constants/color';

const initialState = {
  bgColor: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case colors.LIMEADE:
      return {
        ...state,
        bgColor: action.payload,
      };
    default:
      return state;
  }
};
