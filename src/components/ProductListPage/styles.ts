import styled from "styled-components";

interface ProductPriceprops{
    precio?:number;
}

const ProductosSection = styled.section`
    padding  :20px;
    display  : white;
    font-size: 16px;
    background-color: #ecdb8f;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 2fr));
    gap: 20px;
    width: 100%;
    padding: 15px;
    align-items: first baseline;
    justify-content: center;
    box-sizing: border-box;
`;
const ProductElement = styled.article `
    background-color: ${(props) => props.theme.colors?.background};
    border-radius: 8px;
    box-shadow:0 2px 4px #000000;
    overflow: hidden;
    padding: 5px;
    box-sizing: border-box;
    transition: all .25s liner;
    &:hover {
        transform: scale(1.03);
    }
`;

const ProductImage = styled.img `
    width: 100px;
    height:100px;
`;
const ProductTitle = styled.h3 `
    margin: 10px 0;
    font-size: 19px;
    text-align: center;
    font-wight: 600;
`;

const ProductInfo = styled.p`
    margin: 5px 0;
    font-wight: 600;
`;

const ProductPrice = styled.h5<ProductPriceprops>`
    margin: 5px 0;
    font-wight: 600;
    color: ${props => {
        const precio = props.precio ?? 0;
        if (precio >= 100) return'green';
        if (precio >= 50 ) return'golden';
        if (precio > 0  ) return 'blue';
    }};
    span {
        font-weight: 600;
    }
`;

const HeaderPrincipal = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
`;


const PlHeader = styled.header `
    padding     : 5px;
    margin      : auto;
    font-size   : 25px;
    font-weight : 800;
    text-align  : center;
`
const PlHeader1 = styled.header `
    padding     : 2px;
    margin      : 0 0 0 65%;
    font-size   : 15px;
    font-weight : 600;
    text-align  : left;
`

const DetailPrincipal = styled.section`
    font-size: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1.5fr));
    gap: 20px;
    width    :100%;
    padding: 15px;
    align-items: first baseline;
    justify-content: center;
    box-sizing: border-box;
`;

const DetailSectionHp = styled.section`
    box-sizing: border-box;
    padding  :20px;
    background-color:#76cfdf;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const DetailButton = styled.button`
    margin-left : 65%;
    width: 120px;
`;

const LinkPath = styled.div`
    display       : flex;
    flex-direction: row;
    margin        : auto;
    text-align    : center;
    gap           : 3%;
    width         : 35%;
    margin-left   : 36%;
`;

const DivSection = styled.div`
    font-size: 16px;
    background-color  : #ecdb8f;
    margin: 5% 0 20% 30%;
    width: 30%;
    gap: 5px;
    padding: 15px;
    align-items: center;
    box-sizing: border-box;
    display:flex;
`;


const FormBody = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FormTitle = styled.p`
    text-align: center;
    width: 40vw;
    background-color: #bea4d6;
    padding: 2vw 1vw;
    border-radius: 10px 10px 0 0;
    font-size: 2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const FormApp =styled.form`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 40vw;
    padding: 2vw 1vw;
    background-color: #fac2c2;
    border-radius: 0 0 10px 10px;
`;

const FormInput =styled.input`
    border: 1px solid #acabab;
    border-radius: 10px;
    width: 20vw;
    padding: .5 .5vw;
    outline: none;
    margin: 1vw 0;
`;

const FormSelect =styled.select`
    border: 1px solid #acabab;
    border-radius: 10px;
    width: 20vw;
    padding: .5 .5vw;
    outline: none;
    margin: 1vw 0;
`;

const FormText =styled.p`
    width: 9vw;
    padding: 1vw 1vw;
    outline: none;
    margin: .8vw 0vw;
    text-align: left;
`;


const FormLabel =styled.label`
    border: 1px solid #acabab;
    display: flex;
    text-align: left;
    flex-direction: row;
    gap: .5vw;
    padding: .25vw .25vw;
    margin: .25vw .5px;
`;


const FormInputSub =styled.input`
    border: 1px solid #acabab;
    border-radius: 10px;
    width: 10vw;
    padding: 1vw 1vw;
    outline: none;
    margin: 1vw 1vw;
`;

const FormInputClk =styled.button`
    border: 1px solid #acabab;
    border-radius: 10px;
    width: 10vw;
    padding: 1vw 1vw;
    outline: none;
    margin: 1vw 1vw;
`;

const FormInputSubEx =styled.div`
    width: 38vw;
    text-align: right;
    flex-direction: row;
`;

const ConfirmPrincipal = styled.section`
    padding        :20px;
    font-size      : 16px;
    display        : flex;
    flex-direction : Column;
    margin         : 0 15%;
    box-sizing     : border-box;
    background-color: #ecdb8f;
    width          : 70vw;
    aling-items    : center;
`;

const HeaderDescription =styled.section`
    display       : flex;
    gap           : 5vw;
    width         : 60vw;
    margin        : 0 5%;
    flex-direction: row;
    font-size      : 17px;
    font-weight     : 600;
`;

const DataSection =styled.section`
    border                : 1px solid #acabab;
    margin                : 0 5%;
    font-size             : 15px;
    width                 : 60vw;
    display               : grid;
    grid-template-columns : 30% 30% 30%;
    padding               : .3vw .3vw;
`;
//  
const DataRight =styled.div`
    text-align : right;
    width      : 23vw;
`;

const DataLeft =styled.div`
    text-align : left;
    width      : 15vw;
`;

const HeaderRight =styled.div`
    text-align : right;
    width      : 25vw;
`;

const HeaderLeft =styled.div`
    text-align : left;
    width      : 40vw;
`;

const BoxButton=styled.div`
    display       : flex;
    flex-direction: row;
    width         : 49%;
    gap           : 15%;
    margin        : 1% 48%;
`;
const GroupButton = styled.button`
    border: 1px solid #ae99ca;
    border-radius: 5px;
    width: 15vw;
    padding: .5vw .5vw;
    outline: none;
    margin: .5vw .5vw;
    background-color: #deeeec;
`;

const Totales=styled.div`
    width         : 49%;
    margin        : 2% 48%;
`;

export { ProductosSection, ProductElement, ProductImage, ProductTitle, ProductInfo, ProductPrice, HeaderPrincipal, PlHeader, PlHeader1,
         DetailPrincipal, DetailSectionHp, DetailButton, LinkPath, DivSection, FormBody, FormTitle, FormApp, FormInput, FormInputSub,
         FormLabel, FormText, FormInputSubEx, FormInputClk, FormSelect, HeaderDescription, HeaderLeft, HeaderRight, 
         DataSection, DataLeft, DataRight, ConfirmPrincipal, BoxButton, GroupButton, Totales }