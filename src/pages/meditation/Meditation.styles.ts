import styled from "styled-components";
import { defaultTheme } from "../../theme/theme";

export const PageStyled = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${defaultTheme.background};
    padding: 30px;
`;

export const PageTitle = styled.h1`
    color: ${defaultTheme.accent};
    font-size: 32px;
    margin: 0;
    padding: 0;
`;