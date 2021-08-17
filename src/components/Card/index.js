import styled from 'styled-components';

const Card = (props)=>{
    return(
        <>
        <Wrap>
        <Img src={props.img} alt="Super Hero Img"/>
        <H2>{props.name}</H2>
        <p>{props.bio}</p>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>Status</td>
                        <td>Value</td>
                    </tr>
                    <tr>
                        <td>Intelligence</td>
                        <td>{props.int}</td>                    
                    </tr>                    
                    <tr>
                        <td>Strenght</td>
                        <td>{props.str}</td>                    
                    </tr>                    
                    <tr>
                        <td>Speed</td>
                        <td>{props.speed}</td>                    
                        </tr>
                    <tr>
                        <td>Durability</td>
                        <td>{props.dur}</td>                    
                    </tr>
                    <tr>
                        <td>Power</td>
                        <td>{props.power}</td>                    
                    </tr>
                    <tr>
                        <td>Combat</td>
                        <td>{props.combat}</td>                    
                    </tr>
                    </tbody>


                </table>
                
            </div>
        </Wrap>
        </>
    )
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    margin-top: 10rem;

`;

const Img = styled.img`
    height: 300px;
    object-fit: cover;
    border-radius: 5%;
    -webkit-box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
`;

const H2 = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0;
`


export default Card;

