import styled from "styled-components";
import { breakpoints } from "../styles";

export const HeadlineGrid = styled.section`
    @media (min-width: ${breakpoints.mobileBreakpoint}) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;