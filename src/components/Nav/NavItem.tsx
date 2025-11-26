import { Link } from "react-router"
import { NavItemStyled } from "./Nav.styles"

interface NavItemProps {
    to: string;
    label: string;
    isExpanded: boolean;
}

const NavItem = ({ to, label, isExpanded }: NavItemProps) => {
    return (
        <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <NavItemStyled>
                {isExpanded ? label : label.charAt(0)}
            </NavItemStyled>
        </Link>
    )
}

export default NavItem