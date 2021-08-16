import styled from 'styled-components';

const Button = ()=>{
    return(
        <ButtonClick>Next</ButtonClick>
    )
};

export default Button;

const ButtonClick = styled.button`
&{    background: rgb(131,58,180);
    background: linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,190,29,1) 0%, rgba(252,176,69,1) 100%);   border: none;
    color: white;
    padding: 20px 60px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    margin-top: 10px;}
    &:hover{
        cursor: pointer;
    }
    

`;