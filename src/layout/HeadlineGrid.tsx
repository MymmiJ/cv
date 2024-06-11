import styled from "styled-components";
import { breakpoints } from "../styles";

export const HeadlineGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    @media (max-width: ${breakpoints.mobileBreakpoint}) {
        display: block; 
    }
`;