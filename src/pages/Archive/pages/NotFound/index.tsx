import Title from "@/components/Text/Title"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

function NotFound() {
    return (
        <Container>
            <Title>게시글 정보가 없습니다.</Title>
        </Container>
    )
}

export default NotFound;