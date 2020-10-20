import * as actionType from './actionType'

export const toggleFavourite=(id)=>{
    return {
        type:actionType.TOGGLE_FAVOURITE,
        id:id
    }
}

export const filter=(filter)=>{
    return{
        type:actionType.FILTER,
        filter:filter
    }
}