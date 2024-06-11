import { ReactNode } from "react";
import styled from "styled-components";

const CustomTime = styled.time`
    font-weight: 700;
`;

interface WorkExperienceDateProps {
    datetime: string;
    children: ReactNode;
}

export const WorkExperienceDate = ({ datetime, children }: WorkExperienceDateProps) => <CustomTime dateTime={datetime}>
    {children}
</CustomTime>;
