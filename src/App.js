import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card';
import styled from 'styled-components';
import Banner from './components/Banner';
import Button from './components/Button';
import Footer from './components/Footer';

const baseURL = 'https://www.superheroapi.com/api.php/10226445205696427/'

var count = [1, 2, 1, false];
var canchange = true;


export default function App(){



  const [hero, setHero] = useState(null);
  const [previouscard, setPreviousCard] = useState(null)
  const [nextcard, setNextCard] = useState(null)

  

  useEffect(()=>{

    checkChange()

  }, []);

  function checkChange(){
    console.log("chanchenge?");

    if(canchange === true) {

      console.log("yes")

      console.log("enter effect")


      axios.get(`${baseURL}${count[0]}`).then((response) =>{
        setHero(response.data);
  
      });
      axios.get(`${baseURL}${count[1]}`).then((response) =>{
        setNextCard(response.data);
  
      });

      axios.get(`${baseURL}${count[2]}`).then((response) =>{
        setPreviousCard(response.data);
  
      });

        canchange = false;
    }
  }


    if(!hero) return null;    
    if(!nextcard) return null;    
    if(!previouscard) return null;    


    function nextHero(){

      if(count[3] === false){
        count[0] += 1;  
        count[1] += 1;  

        count[3] = true;
      }if(count[1] === 732){
        count[0] += 1;  
        count[2] += 1;  
      } else{
        count[0] += 1;  
        count[1] += 1;  
        count[2] += 1;  
      };

      canchange = true;

      console.log(count)  
        
      checkChange()
    };

    function previousHero(){
      if(count[0] - 1 === 0 | count[0] -1 === 1){
        count[0]= 1;
        count[2]= 1;

        count[3] = false;
      }else{
        count[0] += -1;
        count[1] += -1;
        count[2] += -1;

      };

      canchange = true;
      checkChange()
    };

    function randomHero(){
      let x = Math.floor(Math.random() * 732);
      count[0] = x;
      count[1] = x+1;
      count[2] = x-1;

      canchange = true;
      checkChange()
    }
    return(
      <>
      <Box>
        <Banner />
        <Container>
          <Card img={hero.image.url}
                card1={nextcard.image.url}
                card2={previouscard.image.url}
            name={hero.name}
            bio={hero.work.occupation}
            int={hero.powerstats.intelligence} 
            str={hero.powerstats.strength} 
            speed={hero.powerstats.speed} 
            dur={hero.powerstats.durability} 
            power={hero.powerstats.power} 
            combat={hero.powerstats.combat}/>
            <ButtonsDiv>
              <Button content={"Back"} onClick={previousHero}/>
              <Button content={"Next"} onClick={nextHero}/>
            </ButtonsDiv>
            <Button content={"Random"} onClick={randomHero}/>
          </Container>
          <Footer />
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
  margin-bottom: 5rem;

`;

const ButtonsDiv = styled.div`
  display: flex ;
  justify-content: center;
  align-items: center;

`;
