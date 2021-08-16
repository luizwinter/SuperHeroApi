import React from 'react';
import axios from 'axios';
import Card from './components/Card'
import styled from 'styled-components';
import Banner from './components/Banner'
import Button from './components/Button'

const baseURL = 'https://www.superheroapi.com/api.php/10226445205696427/'

var count = 1;

export default function App(){

  const [hero, setHero] = React.useState(null);

  React.useEffect(()=>{
    axios.get(`${baseURL}${count}`).then((response) =>{
      setHero(response.data);
    });
  }, [changeHero]);

    if(!hero) return null;
    console.log(hero);
    
    function changeHero(){
      count += 1;      
    }



    return(
      <>
      <Box>
        <Banner />
        <Container>
        <Card img={hero.image.url}
          name={hero.name}
          bio={hero.work.occupation}
          int={hero.powerstats.intelligence} 
          str={hero.powerstats.strength} 
          speed={hero.powerstats.speed} 
          dur={hero.powerstats.durability} 
          power={hero.powerstats.power} 
          combat={hero.powerstats.combat}/>
          <Button onClick={changeHero}/>
          </Container>
        </Box>
        
      </>
  )


};

const Box = styled.div`
display: flex;
height: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
background: rgb(63,94,251);
background: linear-gradient(0deg, rgba(63,94,251,1) 0%, rgba(77,14,14,1) 100%);
`;

const Container = styled.div`
  height: 100vh;
  text-align: center;

`;