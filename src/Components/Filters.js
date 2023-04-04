import {useDispatch, useSelector} from "react-redux";
import {
    changeCircle,
    changeFilter, changePopup,
    changeSquare,
    selectMenu, selectPopupVisible,
} from "../store/MenuSlicer";
import { useState } from "react";
import Popup from "./Popup";

export default function Filters() {
    const [square, setSquare] = useState(true);
    const [circle, setCircle] = useState(true);
    const popupIsVisible = useSelector(selectPopupVisible);
    const menu = useSelector(selectMenu);
    const dispatch = useDispatch();

    const handleChangeSquare = (e) => {
            setSquare(prev => !prev)
            dispatch(changeSquare(e))
            dispatch(changeFilter())
    }

    const handleChangeCircle = (e) => {
            setCircle(prev => !prev)
            dispatch(changeCircle(e))
            dispatch(changeFilter())
    }

    const handleChangeVisible = () => {
        dispatch(changePopup())
    }

    const allCategories = menu.length;

    const squareCategories = menu.filter(item => item.category === 'squareTable').length;

    const circleCategories = menu.filter(item => item.category === 'circleTable').length;

    return(
        <div className="filters">
            <div>
                <input checked={!!square} onChange={(e) => handleChangeSquare(e)} type={'checkbox'}/>
                <span>SquareTables</span>
                <span>({squareCategories})</span>
            </div>
            <div>
                <input checked={!!circle} onChange={(e) => handleChangeCircle(e)} type={'checkbox'}/>
                <span>CircleTables</span>
                <span>({circleCategories})</span>
            </div>
            <div>
                <span>All ({allCategories})</span>
            </div>
            {
                popupIsVisible ?
                <>
                    <Popup />
                    <button onClick={() => handleChangeVisible()} className={'close-button'}>X</button>
                </>
                    :
                    <div>
                        <button onClick={() => handleChangeVisible()}>Add New Table</button>
                    </div>
            }
        </div>
    )
}