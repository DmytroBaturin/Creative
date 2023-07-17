import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../store/langSlice.js';
import { setCursor } from '../../../store/cursorSlice.js';
import {Link, useLocation, useNavigate} from "react-router-dom";
export const Header = () => {

    const navigate = useNavigate()
    const langstate = useSelector(state => state.language.value);
    const dispatch = useDispatch();
    const location = useLocation()

    const linkStyle = location.pathname !== '/' ? {
            color: 'black',
            textDecoration: 'none'
        }:
        {
            color: 'white',
            textDecoration: 'none'
        }
    const handleMouseEnter = () => {
        dispatch(setCursor({ value: 1 }));
    };

    const handleMouseLeave = () => {
        dispatch(setCursor({ value: 0 }));
    };

    const handleLanguageClick = (value) => {
        dispatch(setLanguage({ value }));
    };

    return (
        <div className={styles.header}>
            <div className={styles.rowHeader}>
                <p
                    style={
                    { opacity: langstate === 1 ? 0.5 : 1 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleLanguageClick(1)}
                >
                    eng
                </p>
                <p>/</p>
                <p
                    style={{opacity: langstate === 0 ? 0.5 : 1 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleLanguageClick(0)}
                >
                    ua
                </p>
            </div>
            <span className={styles.rowHeader}>
                <Link
                    onClick={() => {
                        if(location.pathname === '/'){
                            document.body.style.background = 'white'
                            return 0
                        }
                        else {
                            document.body.style.background = 'black'
                            navigate(-1)
                        }

                    }}
                    style={location.pathname === '/about' ? {
                        ...linkStyle,
                        opacity: 0.5
                    }: {
                        ...linkStyle,
                    }}
                    to='about'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {langstate === 1 ? 'about me.' : 'Про мене.'}
                </Link>
                <p style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {langstate === 1 ? 'contact.' : 'Контакт.'}
                </p>
                <p style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {langstate === 1 ? 'works.' : 'Роботи.'}
                </p>
            </span>
        </div>
    );
};
