import styled from "styled-components";

const Text = styled.h1`
    font-size: 32px;
    letter-spacing: -5%;
`;

const Container = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

interface PageTitleInterface {
    text: string
}

const PageTitle = (props: PageTitleInterface) => {
    return (
        <Container>
            <Text>{props.text}</Text>
        </Container>
    )
}

export default PageTitle;