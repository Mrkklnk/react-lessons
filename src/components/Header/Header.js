import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css'
const Header = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className={css.Header}>
                <NavLink to={"/users"}>users</NavLink>
                <NavLink to={"/comments"}>comments</NavLink>
            </div>
            <button onClick={() => navigate(-2)}>prev page</button>
            <button onClick={() => navigate(1)}>next page</button>
        </div>
    );
};

export {Header};