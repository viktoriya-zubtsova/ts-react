export interface StandartItem {
  text: string;
  isChecked: boolean;
  id: number;
}

export interface ActionsStateType {
  items: StandartItem[];
}

export interface ReducersType {
  items: StandartItem[],
  actions: ActionsStateType,
}

export enum ActionTypes {
  CHECK_ITEM = 'CHECK_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  CHECK_ALL_ITEMS = 'CHECK_ALL_ITEMS',
  DELETE_ALL_ITEMS = 'DELETE_ALL_ITEMS',
}

interface CheckItemActionType {
  type: ActionTypes.CHECK_ITEM;
  payload: number;
}

interface CheckAllItemsActionType {
  type: ActionTypes.CHECK_ALL_ITEMS;
  payload: boolean;
}

interface deleteItemActionType {
  type: ActionTypes.DELETE_ITEM;
  payload: number;
}

interface deleteAllItemsActionType {
  type: ActionTypes.DELETE_ALL_ITEMS;
}

export type ActionType = CheckItemActionType | CheckAllItemsActionType | deleteItemActionType | deleteAllItemsActionType
