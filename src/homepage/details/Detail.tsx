import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const DetailParagraph = styled.p`
    margin: 0px;
`;

interface DetailProps {
    children: ReactNode;
}

export const Detail: FunctionComponent<DetailProps> = ({ children }) => <DetailParagraph>
    <small>
        {children}
    </small>
</DetailParagraph>;