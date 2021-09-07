import { ActionType, StandartItem, ActionTypes, ActionsStateType, Filters } from '../types/types';
import { items } from './items';

const initialState: ActionsStateType = {
  items,
  filter: Filters.ALL,
};

export default function (state = initialState, action: ActionType): ActionsStateType {
  switch (action.type) {
  case ActionTypes.CHECK_ITEM: {
    const newItems = [...state.items];
    const itemIndex = newItems.findIndex((item) => item.id === action.payload);
    if (itemIndex !== -1) {
      newItems[itemIndex].isChecked = !newItems[itemIndex].isChecked;
    }
    console.log(newItems);
    return { ...state, items: newItems };
  }
  case ActionTypes.CHECK_ALL_ITEMS: {
    const newItems = state.items.map((item) => {
      item.isChecked = !action.payload;
      return item;
    });
    return { ...state, items: newItems };
  }
  case ActionTypes.DELETE_ITEM: {
    const newItems = state.items.filter((item) => item.id !== action.payload);
    return { ...state, items: newItems };
  }
  case ActionTypes.DELETE_ALL_ITEMS: {
    return { ...state, items: [] };
  }
  case ActionTypes.ADD_NEW_ITEM: {
    const newItem: StandartItem = {
      text: action.payload,
      isChecked: false,
      id: (Math.random() + 1).toString(36).substring(7),
    };
    const newItems = [...state.items];
    newItems.push(newItem);
    return { ...state, items: newItems };
  }
  case ActionTypes.FILTER_ITEMS: {
    return { ...state, filter: action.payload };
  }
  default:
    return state;
  }
}
