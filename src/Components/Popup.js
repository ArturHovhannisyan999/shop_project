import {useState} from "react";
import {useDispatch} from "react-redux";
import {addItem, changePopup} from "../store/MenuSlicer";

const tables = [
    {src : 'img/1.jpg', category: 'circleTable'}, {src : 'img/2.jpg', category: 'circleTable'},
    {src : 'img/3.jpg', category: 'circleTable'}, {src : 'img/4.jpg', category: 'circleTable'},
    {src : 'img/5.jpg', category: 'circleTable'}, {src : 'img/6.jpg', category: 'circleTable'},
    {src : 'img/7.jpg', category: 'circleTable'}, {src : 'img/8.jpg', category: 'squareTable'},
    {src : 'img/9.jpg', category: 'squareTable'}, {src : 'img/10.jpg', category: 'squareTable'},
    {src : 'img/11.jpg', category: 'squareTable'}, {src : 'img/12.jpg', category: 'squareTable'},
    {src : 'img/13.jpg', category: 'squareTable'}, {src : 'img/14.jpg', category: 'squareTable'},
    {src : 'img/15.jpg', category: 'squareTable'}, {src : 'img/16.jpg', category: 'squareTable'},
    {src : 'img/17.jpg', category: 'squareTable'}, {src : 'img/18.jpg', category: 'squareTable'}
]

const Popup = () => {
    const [tableName, setTableName] = useState('');
    const [priceBefore, setPriceBefore] = useState('');
    const [salePrice, setSalePrice] = useState('');

    const dispatch = useDispatch();

    const handleChangeName = (e) => {
        setTableName(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPriceBefore(e.target.value)
    }

    const handleChangeSalePrice = (e) => {
        setSalePrice(e.target.value)
    }

    const checkingValidForm = () => {
        if (!isNaN(tableName * 10)) {
            return false
        } else if (isNaN(priceBefore * 10) || isNaN(salePrice * 10)) {
            return false
        } else if (priceBefore <= salePrice) {
            return false
        }

        return  true
    }

    const handleAddUser = () => {
        if (checkingValidForm()) {
            const randomItem = Math.floor(Math.random() * 18)
            const person = {
                id : Math.random(),
                imgProd : tables[randomItem].src,
                nameProd : tableName,
                priceProd : salePrice + ' грн',
                saleProd : priceBefore + ' грн',
                addMore : 'Подробнее',
                category : tables[randomItem].category
            }
            dispatch(addItem(person))
            dispatch(changePopup())
        } else {
            alert('Something gone wrong')
            dispatch(changePopup())
        }
    }

    return (
        <div className={'popup'}>
            <input onChange={(e) => handleChangeName(e)} value={tableName} placeholder={'Table Name'}/>
            <input onChange={(e) => handleChangePrice(e)} value={priceBefore} placeholder={'Price'}/>
            <input onChange={(e) => handleChangeSalePrice(e)} value={salePrice} placeholder={'Sale Price'}/>
            <button onClick={(e) => handleAddUser()}>Confirm</button>
        </div>
    );
};

export default Popup;