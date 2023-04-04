
import { BsFillTelephoneFill,BsPerson } from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi';
import { AiOutlineSearch,AiOutlineShoppingCart,AiOutlineHeart } from 'react-icons/ai'
import {useDispatch, useSelector} from "react-redux";
import {
    changeShoppingPopup,
    searchFilterChange,
    selectMenu
} from "../store/MenuSlicer";
import {useState} from "react";
export default function Header() {
    const menu = useSelector(selectMenu);
    const [timerSec, setTimerSec] = useState(null);
    const dispatch = useDispatch();
    const handleSearchTables = (e) => {
        if (timerSec) {
            clearTimeout(timerSec)
        }
        setTimerSec(setTimeout(() => {
            let searchFilter = menu.filter(item => item.nameProd.toLowerCase().includes(e.target.value))
             setTimerSec(timerSec)
             dispatch(searchFilterChange(searchFilter))
        }, 1000))
    }

    const handleShowShoppingCard = () => {
        dispatch(changeShoppingPopup())
    }

    return (
        <header>
            <div className="left_header">
                    <BsFillTelephoneFill />
                    <p>+37444498966</p>
                    <HiLocationMarker />
                    <p>Yerevan</p>
            </div>
            <div className="right_header">
                <p>Search</p>
                <input onChange={(e) => handleSearchTables(e)} type="search" />
                <AiOutlineSearch />
                <div className='icons'>
                    <BsPerson />
                    <AiOutlineHeart />
                    <AiOutlineShoppingCart onClick={() => handleShowShoppingCard()}/>
                </div>
            </div>
        </header>
    )
}