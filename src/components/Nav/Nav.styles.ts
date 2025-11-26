import styled from "styled-components";
import { defaultTheme } from "../../theme/theme";

export const NavBar = styled.div<{ $isExpanded: boolean }>`
    min-width: 64px;
    /* max-width: 256px; */
    height: 100vh;

    width: ${props => props.$isExpanded ? 256 : 64}px;

    flex: 1;
    flex-direction: column;
    flex-grow: 1;

    column-gap: 30px;

    overflow-x: hidden;
    overflow-y: auto;

    background-color: ${defaultTheme.background_dark};

    transition: all 200ms ease-in-out;
`;

export const NavItemStyled = styled.div`
    margin: auto;
    padding: 10px;

    flex: 1;
    flex-direction: row;
    flex-grow: 1;
`;

export const NavControlStyled = styled.div`
    margin: auto;
    padding: 10px;

    flex: 1;
    flex-direction: row;
    flex-grow: 1;

    user-select: none;
`;