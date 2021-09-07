import { ActionType, StandartItem, ActionTypes, ActionsStateType } from '../types/types';
import { items } from './items';

const initialState: ActionsStateType = {
  items,
  filteredItems: items,
};

export default function (state = initialState, action: ActionType): ActionsStateType {
  switch (action.type) {
  case ActionTypes.CHECK_ITEM: {
    const newItems = state.items.map((item) => {
      if (item.id === action.payload) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
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
    let newItems;
    switch (action.payload) {
    case 'all':
      newItems = state.items;
      break;
    case 'done':
      newItems = state.items.filter(item => item.isChecked);
      break;
    case 'active':
      newItems = state.items.filter(item => !item.isChecked);
      break;
    default:
      newItems = state.items;
    }
    return { ...state, filteredItems: newItems };
  }
  default:
    return state;
  }
}
