import { ActionType, StandartItem, ActionTypes, ActionsStateType } from '../types/types';
import { items } from './items';

const initialState: ActionsStateType = { items };

export default function (state = initialState, action: ActionType): ActionsStateType {
  switch (action.type) {
  case ActionTypes.CHECK_ITEM: {
    const newItems: StandartItem[] = state.items.map((item: StandartItem) => {
      if (item.id === action.payload) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    return { ...state, items: newItems };
  }
  case ActionTypes.CHECK_ALL_ITEMS: {
    const newItems: StandartItem[] = state.items.map((item: StandartItem) => {
      item.isChecked = !action.payload;
      return item;
    });
    return { ...state, items: newItems };
  }
  case ActionTypes.DELETE_ITEM: {
    const newItems: StandartItem[] = state.items.filter((item: StandartItem) => item.id !== action.payload);
    return { ...state, items: newItems };
  }
  case ActionTypes.DELETE_ALL_ITEMS: {
    const newItems: StandartItem[] = [];
    return { ...state, items: newItems };
  }
  default:
    return state;
  }
}
