import {createSlice} from "@reduxjs/toolkit";
import menuItem from "../Components/menuItem";

const initialState = {
    menu : [...menuItem],
    filteredMenu : [...menuItem],
    favouriteItems : [],
    squareChecked : true,
    circleChecked : true,
    popupIsVisible : false,
    shoppingPopup : false,
    aboutItemIsVisible : false
}

export const MenuSlicer = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.menu = [action.payload, ...state.menu];
            state.filteredMenu = [action.payload, ...state.filteredMenu]
        },
        removeItem: (state, action) => {
            state.filteredMenu = state.menu.filter(item => item.id !== action.payload)
            state.menu = state.menu.filter(item => item.id !== action.payload)
        },
        editName: (state, action) => {
            const { value, id } = action.payload;
            state.filteredMenu = state.menu.map(item =>
                item.id === id
                ?
                    {...item, nameProd: value}
                :
                    {...item}
            )
        },
        changeSquare: (state, action) => {
            state.squareChecked = action.payload.target.checked
        },
        changeCircle: (state, action) => {
            state.circleChecked = action.payload.target.checked
        },
        changeFilter: (state) => {
            if (state.squareChecked && state.circleChecked) {
                state.filteredMenu = state.menu.filter(item => item)
            } else if (state.squareChecked) {
                state.filteredMenu = state.menu.filter(item => item.category === 'squareTable')
            } else if (state.circleChecked) {
                state.filteredMenu = state.menu.filter(item => item.category === 'circleTable')
            } else {
                state.filteredMenu = state.menu.filter(item => !item)
            }
        },
        changePopup: (state) => {
            state.popupIsVisible = !state.popupIsVisible
        },
        searchFilterChange: (state, action) => {
            state.filteredMenu = [...action.payload]
        },
        changeShoppingPopup: (state) => {
            state.shoppingPopup = !state.shoppingPopup
        },
        changeIsLike: (state, action) => {
            const { id, isLike } = action.payload;

            state.menu = state.menu.map(item =>
                item.id === id
                ?
                    {...item, isLike : !isLike}
                :
                    {...item}
            )
        },
        changeFavouriteItem: (state) => {
            state.favouriteItems = state.menu.filter(item => item.isLike)
        },
        changeAboutItem: (state) => {
            state.aboutItemIsVisible = !state.aboutItemIsVisible
        }
    }
})

export const {
    addItem, removeItem, editName, changeIsLike,
    changeCircle, changeSquare, changeShoppingPopup,
    changeFilter, changePopup, searchFilterChange,
    changeFavouriteItem, changeAboutItem
} = MenuSlicer.actions;
export const selectMenu = state => state.menu.menu;
export const selectFilteredMenu = state => state.menu.filteredMenu;
export const selectShoppingPopup = state => state.menu.shoppingPopup;
export const selectPopupVisible = state => state.menu.popupIsVisible;
export const selectFavouriteItems = state => state.menu.favouriteItems;
export const selectAboutItem = state => state.menu.aboutItemIsVisible;
export const MenuReducer = MenuSlicer.reducer;