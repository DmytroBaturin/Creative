import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {setComplete, setLanguage} from '../../../store/langSlice.js';
import { setCursor } from '../../../store/cursorSlice.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [locate, setLocate] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const langstate = useSelector((state) => state.language.value);
    const dispatch = useDispatch();
    const complete = useSelector(state => state.language.complete)
    const handleMouseEnter = () => {
        dispatch(setCursor({ value: 1 }));
    };
    const handleMouseLeave = () => {
        dispatch(setCursor({ value: 0 }));
    };

    const handleLanguageClick = (value) => {
        dispatch(setLanguage({ value }));
    };
    const buttonstyle = {
        color: 'white',
        textDecoration: 'none',
    }
    useEffect(() => {
        if (!location) {
            setLocate(window.location.pathname);
        } else {
            setLocate(location.pathname);
        }
    }, [location]);
    return (
        <div className={styles.header}>
            <div className={styles.rowHeader}>
                <p
                    style={{color: 'white', opacity: langstate === 1 ? 0.5 : 1 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                        if(complete){
                            handleLanguageClick(1)
                        }
                    }}
                >
                    eng
                </p>
                <p style={{ color: 'white' }}>/</p>
                <p
                    style={{color: 'white', opacity: langstate === 0 ? 0.5 : 1 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                        if(complete){
                            handleLanguageClick(0)
                        }
                    }}
                >
                    ua
                </p>
            </div>
            <span className={styles.rowHeader}>
        <Link
            onClick={() => {
                dispatch(setComplete(
                    {
                        complete: true
                    }
                ))
                if (locate === '/') {
                    return 0;
                } else {
                    navigate(-1);
                }
            }}
            style={
                locate === '/about'
                    ? {
                        ...buttonstyle,
                        opacity: 0.5
                    }
                    : {
                    ...buttonstyle
                    }
            }
            to="/about"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          {langstate === 1 ? 'about me.' : 'Про мене.'}
        </Link>
        <p
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          {langstate === 1 ? 'contact.' : 'Контакт.'}
        </p>
        <p
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          {langstate === 1 ? 'works.' : 'Роботи.'}
        </p>
      </span>
        </div>
    );
};
