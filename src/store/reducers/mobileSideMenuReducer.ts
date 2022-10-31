
const defaultState:{isOpen: boolean} = {isOpen: false};

const TOGGLE_SIDE_MENU:string = "TOGGLE_SIDE_MENU";

export const mobileSideMenuReducer = (state=defaultState, action:{type: string}) => {
    if(action.type === TOGGLE_SIDE_MENU) {
        return {isOpen: !state.isOpen};
    }
    return state;
}

export const toggleMenuAction = () => ({type: TOGGLE_SIDE_MENU});

