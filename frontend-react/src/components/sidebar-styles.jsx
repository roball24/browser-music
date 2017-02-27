import styled from 'styled-components';

const Item = styled.div`
    background-color: ${props => props.theme.Background1};
    width: 100%;
    height: 70px;
    margin: 3px 0px;
    vertical-align: middle;
    position: relative;

    &:hover {
        filter: brightness(150%);
    }
`

const ItemImage = styled.div`
    position: relative;
    left: 5px;
    top: 5px;
    width: 60px;
    height: 60px;
    background-color: ${props => props.theme.Secondary3};
    display: inline-block;
`

const ItemContent = styled.div`
    display: inline-block;
    position: relative;
    top: -22px;
    padding-left: 20px;
    font-size: 20px;
`

export { Item, ItemImage, ItemContent }