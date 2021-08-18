import styled from 'styled-components';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () =>{
    return(
        <>
            <Container>
                <Content><h2>This aplication was made with:</h2></Content>
                <AppDiv>
                    <Img src="https://axios-http.com/assets/logo.svg"/>
                    <Img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"/>
                    <Img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"/>
                    <Img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"/>
                </AppDiv>
            </Container>
            <FooterPage>
            <Icon href="https://github.com/luizwinter"><AiFillGithub/></Icon>
            <Icon href="https://www.linkedin.com/in/luizwinter/"><AiOutlineLinkedin /></Icon>
            <P>Copyright © 2021 | Created and developed by Luiz Winter</P>
            </FooterPage>
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
&{  border-radius: 10px;
    margin-left: 50px;
    height: 200px;
    width: 200px;
    background: white;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, -50px -50px 0px -30px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, -50px -50px 0px -30px rgba(0,0,0,0);}
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.2);
    }
`;

const P = styled.p`
    font-size: 0.8rem;
    opacity: 0.5;
`;

const FooterPage = styled.footer`
    text-align: center;
`;

const Icon = styled.a`
&{  font-size: 2rem;
    margin: 20px;
    color: white;
}
    &:hover{
        cursor: pointer;
    }
`;