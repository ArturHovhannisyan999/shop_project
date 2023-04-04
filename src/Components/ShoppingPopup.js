import {useDispatch, useSelector} from "react-redux";
import {
    changeAboutItem,
    changeFavouriteItem,
    changeIsLike,
    changeShoppingPopup, selectAboutItem,
    selectFavouriteItems,
} from "../store/MenuSlicer";
import {useState} from "react";
import AboutItem from "./AboutItem";

const ShoppingPopup = () => {
    const favouriteItems = useSelector(selectFavouriteItems);
    const aboutItem = useSelector(selectAboutItem);
    const dispatch = useDispatch();
    const [nameProd, setNameProd] = useState('');
    const handleChangeShoppingPopup = () => {
        dispatch(changeShoppingPopup())
    }

    const handleRemoveShoppingCard = (id, isLike) => {
        dispatch(changeIsLike({id, isLike}))
        dispatch(changeFavouriteItem())
    }

    const handleAddMore = (name) => {
        setNameProd(name)
        dispatch(changeAboutItem())
    }

    return (
        <div className={'shopping_popup'}>
                {favouriteItems.length > 0 ?
                    favouriteItems.map(item =>
                    <div className={'favourite_item'} key={item.id}>
                        <div>
                            <img src={item.imgProd} alt="" />
                        </div>
                        <h2>{item.nameProd}</h2>
                        <h3>{item.priceProd}</h3>
                        <h4>{item.saleProd}</h4>
                        <button onClick={() => handleAddMore(item.nameProd)} className={'card_button'}>{item.addMore}</button>
                        <button onClick={() => handleRemoveShoppingCard(item.id, item.isLike)}>Убрать из корзинки</button>
                    </div>
                    )
                    :
                    <h2 className={'shop_card_def'}>You don't have any favourite cards</h2>
                }
            <button className={'shop_products_close'} onClick={() => handleChangeShoppingPopup()}>X</button>
            {aboutItem && <AboutItem nameProd={nameProd}/>}
        </div>
    );
};

export default ShoppingPopup;