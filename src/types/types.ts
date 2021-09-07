import React from 'react';

export interface StandartItem {
  text: string;
  isChecked: boolean;
  id: string;
}

export interface ActionsStateType {
  items: StandartItem[];
  filteredItems: StandartItem[];
}

export interface ReducersType {
  items: StandartItem[],
  actions: ActionsStateType,
}

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  CHECK_ITEM = 'CHECK_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  CHECK_ALL_ITEMS = 'CHECK_ALL_ITEMS',
  DELETE_ALL_ITEMS = 'DELETE_ALL_ITEMS',
  FILTER_ITEMS = 'FILTER_ITEMS',
}

interface CheckItemActionType {
  type: ActionTypes.CHECK_ITEM;
  payload: string;
}

interface CheckAllItemsActionType {
  type: ActionTypes.CHECK_ALL_ITEMS;
  payload: boolean;
}

interface deleteItemActionType {
  type: ActionTypes.DELETE_ITEM;
  payload: string;
}

interface deleteAllItemsActionType {
  type: ActionTypes.DELETE_ALL_ITEMS;
}

interface addNewItemActionType {
  type: ActionTypes.ADD_NEW_ITEM;
  payload: string;
}

interface filterActionType {
  type: ActionTypes.FILTER_ITEMS;
  payload: string;
}

export type ActionType = CheckItemActionType
                      | CheckAllItemsActionType
                      | deleteItemActionType
                      | deleteAllItemsActionType
                      | addNewItemActionType
                      | filterActionType

export type PropsType = {
  checkAll: boolean;
  setCheckAll:  React.Dispatch<React.SetStateAction<boolean>>;
}

export type ItemListPropsType = {
  setCheckAll:  React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ItemPropsType extends StandartItem {
  setCheckAll:  React.Dispatch<React.SetStateAction<boolean>>;
}
