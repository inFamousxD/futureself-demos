import styled from "styled-components";
import { defaultTheme } from "../../theme/theme";

export const NavBar = styled.div<{ $isExpanded: boolean }>`
    min-width: 64px;
    height: 100vh;

    width: ${props => props.$isExpanded ? 128 : 64}px;

    display: flex;
    flex-direction: column;

    overflow-x: hidden;
    overflow-y: auto;

    background-color: ${defaultTheme.background_dark};

    transition: all 200ms ease-in-out;
`;

export const NavItemStyled = styled.div`
    padding: 15px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    user-select: none;

    color: white;
    font-size: 14px;

    transition: background-color 150ms ease-in-out;

    &:hover {
        background-color: ${defaultTheme.accent};
    }
`;

export const NavControlStyled = styled.div`
    padding: 15px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    user-select: none;

    color: white;
    font-size: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    transition: background-color 150ms ease-in-out;

    &:hover {
        background-color: ${defaultTheme.accent};
    }
`;