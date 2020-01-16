import {ADD_ITEM,DELETE_ITEM,EDIT_ITEM} from './actionsType'
export const addItem=payload=>{
    return {type:ADD_ITEM,payload}
}
export const deleateitem=payload=>{
    return {type:DELETE_ITEM,payload}
}
export const editItem=(id,item)=>{
    return{type:EDIT_ITEM,id,item}
}
