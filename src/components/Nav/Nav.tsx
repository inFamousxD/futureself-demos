import React from "react";
import { NavBar, NavControlStyled } from "./Nav.styles"
import NavItem from "./NavItem"

const Nav = () => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    return (
        <NavBar $isExpanded={isExpanded}>
            <NavControlStyled onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? '◀' : '▶'}
            </NavControlStyled>
            <NavItem to="/" label="Dashboard" isExpanded={isExpanded} />
            <NavItem to="/meditation" label="Meditation" isExpanded={isExpanded} />
        </NavBar>
    )
}

export default Nav