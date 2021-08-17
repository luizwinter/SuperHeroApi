import styled from 'styled-components';

const Footer = () =>{
    return(
        <>
            <Container>
                <Content><h2>This aplication was made with:</h2></Content>
                <AppDiv>
                    <Img src="https://axios-http.com/assets/logo.svg"/>
                    <Img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"/>
                    <Img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"/>
                </AppDiv>
            </Container>
        </>    
    )   
};


export default Footer;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Content = styled.div`
    font-size: 2rem;
    font-family: 'Permanent Marker', cursive;
    text-shadow: 15px 15px 8px rgba(204, 150, 150, 1);
    margin-top: 200px;

`;

const AppDiv = styled.div`
    display: flex;
    justify-content: center;
    
`;

const Img = styled.img`
    border-radius: 10px;
    margin-left: 50px;
    height: 200px;
    width: 200px;
`;
