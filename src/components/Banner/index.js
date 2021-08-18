import styled from 'styled-components';
import BG from './bannerbg.png'

const Banner = () =>{
    return(
        <>
        <Box>
        <Img src={BG} />
        <Content>
            <H2>Super Hero API</H2>
            <P>Look his stats and compare to another one! </P>
            <P>Who's the must stronger or powerfull? Let's find it! </P>

        </Content>
        </Box>

        </>
    )
};

export default Banner;

const Box = styled.div`
height: 100vh;
width: 100vw;
display: flex;
text-align: center;
justify-content: center;
`;

const Content = styled.div`
    font-size: 3rem;
    position: absolute;
    font-family: 'Permanent Marker', cursive;
    margin-top: 20%;
    text-shadow: 15px 15px 8px rgba(204, 150, 150, 1);
`;

const P = styled.p`
    font-size: 2rem;
    line-height: 1rem;
    opacity: 0.5;
`;

const H2 = styled.h2`
    line-height: 1rem;
`;

const Img = styled.img`
    filter: brightness(0.30);
    position: absolute;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    border-bottom: 5px inset red;

    `;