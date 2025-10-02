import styled from "styled-components";
import { path } from "@/constants/path.constants";

const Text = styled.h1`
    font-size: 32px;
    letter-spacing: -5%;
`;

const Path = styled.span`
    font-size: 20px;
    letter-spacing: -5%;
    color: ${(props) => props.theme.textSecondary};
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    border-bottom: 2.5px dotted rgba(0, 0, 0, 0.2);
`;

interface PageTitleInterface {
    text: string,
    path?: string
}

const PageTitle = (props: PageTitleInterface) => {
    return (
        <Container>
            <Text>{props.text}</Text>
            {props.path && path[props.path as keyof typeof path] && (
                <Path>
                아카이브 &gt; {path[props.path as keyof typeof path].text}
                </Path>
            )}
        </Container>
    )
}

export default PageTitle;