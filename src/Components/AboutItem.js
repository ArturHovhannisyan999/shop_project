import {useDispatch} from "react-redux";
import {changeAboutItem} from "../store/MenuSlicer";

const AboutItem = ({ nameProd }) => {
    const dispatch = useDispatch();
    const handleCloseAboutItem = () => {
        dispatch(changeAboutItem())
    }

    return (
        <div className={'about_item'}>
            <h2>Table Name</h2>
            <p>{nameProd} изготовлен в 1999 году в Чехии</p>
            <button onClick={() => handleCloseAboutItem()}>Close About Item</button>
        </div>
    );
};

export default AboutItem;