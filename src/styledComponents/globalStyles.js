import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after, 
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        height: 100vh;
        width: 100%;
        
        font-size: 62.5%;
    }
    
    body {
        height: 100%;
        width: 100%;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }
    
    
`;

export default GlobalStyles;
