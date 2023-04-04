import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import {
    changeAboutItem,
    changeFavouriteItem,
    changeIsLike,
    editName,
    removeItem,
    selectAboutItem,
    selectFilteredMenu
} from "../store/MenuSlicer";
import {useState} from "react";
import AboutItem from "./AboutItem";


export default function Products() {
    const filteredMenu = useSelector(selectFilteredMenu);
    const aboutItem = useSelector(selectAboutItem);
    const dispatch = useDispatch();
    const [nameProd, setNameProd] = useState('');

    const handleRemoveCard = (id) => {
        dispatch(removeItem(id))
    }

    const handleEditName = (id) => {
        const value = prompt()
        if (isNaN(value * 10)) {
            dispatch(editName({ value, id }))
        } else {
            alert("Name can't have a number")
        }
    }

    const handleChangeLike = (id, isLike) => {
        dispatch(changeIsLike({id, isLike}))
        dispatch(changeFavouriteItem())
    }

    const handleAddMore = (name) => {
        setNameProd(name)
        dispatch(changeAboutItem())
    }

    return (
        <div className="container_products">
            {filteredMenu.map(item => <div className='products' key={item.id}>
                <div className='prod_top'>
                    <span>В Избранное</span>
                    {item.isLike
                        ?
                        <AiFillHeart onClick={() => handleChangeLike(item.id, item.isLike)}/>
                        :
                        <AiOutlineHeart onClick={() => handleChangeLike(item.id, item.isLike)}/>
                    }
                </div>
                <img src={item.imgProd} alt="" />
                <h2>{item.nameProd}</h2>
                <h3>{item.priceProd}</h3>
                <h4>{item.saleProd}</h4>
                <button onClick={() => handleAddMore(item.nameProd)} className={'card_button'}>{item.addMore}</button>
                <button className={'card_button'} onClick={() => handleRemoveCard(item.id)}>Remove Card</button>
                <button className={'card_button'} onClick={() => handleEditName(item.id)}>Edit Name</button>
            </div>)}
            {aboutItem && <AboutItem nameProd={nameProd}/>}
        </div>
    )
}