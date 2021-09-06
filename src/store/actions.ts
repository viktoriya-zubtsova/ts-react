import { ActionType, ActionTypes } from '../types/types';

export const checkItemCreator = (id: number): ActionType => {
  return {
    type: ActionTypes.CHECK_ITEM,
    payload: id,
  };
};

export const checkAllItemsCreator = (checkAll: boolean): ActionType => {
  return {
    type: ActionTypes.CHECK_ALL_ITEMS,
    payload: checkAll,
  };
};

export const deleteItemCreator = (id: number): ActionType => {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: id,
  };
};

export const deleteAllItemsCreator = (): ActionType => {
  return {
    type: ActionTypes.DELETE_ALL_ITEMS,
  };
};
