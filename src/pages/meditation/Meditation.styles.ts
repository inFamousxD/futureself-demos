import styled from "styled-components";
import { defaultTheme } from "../../theme/theme";

export const PageStyled = styled.div`
    background-color: ${defaultTheme.background};
    padding: 30px;
    overflow-y: auto;
`;

export const PageTitle = styled.h1`
    color: ${defaultTheme.accent};
    font-size: 32px;
    margin: 0 0 30px 0;
    padding: 0;
`;

export const FormContainer = styled.div`
    max-width: 1000px;
    margin-bottom: 30px;
    margin: auto;
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
`;

export const Label = styled.label`
    display: block;
    color: ${defaultTheme.background_dark};
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 2px solid ${defaultTheme.accent};
    border-radius: 4px;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;

    &:focus {
        outline: none;
        border-color: ${defaultTheme.background_dark};
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 2px solid ${defaultTheme.accent};
    border-radius: 4px;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
    resize: vertical;
    min-height: 150px;

    &:focus {
        outline: none;
        border-color: ${defaultTheme.background_dark};
    }
`;

export const Button = styled.button`
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: ${defaultTheme.background_dark};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    transition: background-color 150ms ease-in-out;

    &:hover {
        background-color: ${defaultTheme.accent};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const ScriptContainer = styled.div`
    max-width: 960px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    border: 2px solid ${defaultTheme.accent};
    
    margin: auto;
    margin-top: 30px;
`;

export const ScriptTitle = styled.h2`
    color: ${defaultTheme.background_dark};
    font-size: 20px;
    margin: 0 0 15px 0;
`;

export const ScriptText = styled.p`
    color: ${defaultTheme.background_dark};
    font-size: 14px;
    line-height: 1.8;
    white-space: pre-wrap;
    margin-bottom: 20px;
`;

export const AudioContainer = styled.div`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid ${defaultTheme.accent};
`;

export const LoadingText = styled.p`
    color: ${defaultTheme.accent};
    font-size: 14px;
    font-style: italic;

    margin: auto;
    text-align: center;

    padding: 30px;
`;