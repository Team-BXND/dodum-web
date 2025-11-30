import styled from "styled-components";
import { path } from "@/constants/path.constants";

const Text = styled.h1`
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -5%;
`;

const Path = styled.span`
    font-size: 20px;
    letter-spacing: -5%;
    color: ${(props) => props.theme.textSecondary};
`

const Container = styled.div<{line: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    border-bottom: ${(props) => props.line ? '2.5px dotted rgba(0, 0, 0, 0.2)' : 0} ;
`;

interface PageTitleInterface {
    text: string,
    path?: string | null,
    line?: boolean,
}

const PageTitle = ({ text, path: pathKey, line = false }: PageTitleInterface) => {
    return (
        <Container line={line}>
            <Text>{text}</Text>
            {path && path[pathKey as keyof typeof path] && (
                <Path>
                아카이브 &gt; {path[pathKey as keyof typeof path].text}
                </Path>
            )}
        </Container>
    )
}

export default PageTitle;