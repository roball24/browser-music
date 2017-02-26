import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    overflow-y: scroll;
    width: 500px;
    height: 100%;
    flex: 1;
    background-color: ${props => props.theme.Background2};

    &::-webkit-scrollbar {
        background-color: inherit;
        padding-right: 1px;
    }

    &::-webkit-scrollbar-track {
        border-left: 1px solid ${props => props.theme.Secondary1};
        border-right: 1px solid ${props => props.theme.Secondary1};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: ${props => props.theme.Primary1};

    }
`

const Container = styled.div`
    min-height: 110%;
`

class Sidebar extends React.Component {
    render () {
        return (
            <Wrapper>
                <Container>
                    
                </Container>
            </Wrapper>
        );
    }
}

function select(/*state*/){
    return {
        
    }
}

export default connect(select)(Sidebar);
