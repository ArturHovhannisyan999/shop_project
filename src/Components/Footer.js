import { FaFacebookF,FaTelegramPlane } from 'react-icons/fa'
import {AiOutlineInstagram,AiFillGithub} from 'react-icons/ai'
import {SiFreelancer} from 'react-icons/si'

export default function Footer() {
    return(
        <footer>
            <div className="content_footer">
                <h2>О компанни</h2>
                <ul>
                    <li><a href="#">Наш адрес </a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Гарантии</a></li>
                    <li><a href="#">Материалы</a></li>
                </ul>

            </div>
            <div className="content_footer">
                <h2>Услуги</h2>
                <ul>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Порядок оплаты</a></li>
                    <li><a href="#">Кредит</a></li>
                    <li><a href="#">Заказ</a></li>
                </ul>
            </div>
            <div className="content_footer">
                <h2>Каталог</h2>
                <ul>
                    <li><a href="#">Столы Сведение</a></li>
                    <li><a href="#">Столы кофейные</a></li>
                    <li><a href="#">Столы журналные</a></li>
                    <li><a href="#">Столы письменные</a></li>
                </ul>
            </div>
            <div className="content_footer">
                <h2>Контакты</h2>
                <ul>
                    <li><a href="#">Мы в социальные сети</a></li>
                    <li className='icons_contact'><a href="#">
                            <FaFacebookF />
                            <AiOutlineInstagram />
                            <AiFillGithub />
                            <SiFreelancer />
                            <FaTelegramPlane />
                        </a></li>
                    <li><a href="#">
                            +37444498969
                        </a></li>
                    <li><a href="#">
                            Ежедневно с 09:00 до 20:00
                        </a></li>
                </ul>
            </div>
        </footer>
    )
}