import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../store/langSlice.js';
import { setCursor } from '../../../store/cursorSlice.js';
export const Header = () => {
    const langstate = useSelector(state => state.language.value);
    const dispatch = useDispatch();

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
                    style={{ opacity: langstate === 1 ? 0.5 : 1 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleLanguageClick(1)}
                >
                    eng
                </p>
                <p>/</p>
                <p
                    style={{ opacity: langstate === 0 ? 0.5 : 1 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleLanguageClick(0)}
                >
                    ua
                </p>
            </div>
            <span className={styles.rowHeader}>
                <p
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {langstate === 1 ? 'about me.' : 'Про мене.'}
                </p>
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
