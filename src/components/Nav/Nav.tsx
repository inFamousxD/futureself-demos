import React from "react";
import { NavBar, NavControlStyled } from "./Nav.styles"
import NavItem from "./NavItem"

const Nav = () => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    return (
        <NavBar $isExpanded={isExpanded}>
            <NavControlStyled onClick={() => setIsExpanded(!isExpanded)}>
                Cont
            </NavControlStyled>
            <NavItem />
            <NavItem />
            <NavItem />
        </NavBar>
    )
}

export default Nav