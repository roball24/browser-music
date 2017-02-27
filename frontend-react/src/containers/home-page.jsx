import React from 'react';
import { connect } from 'react-redux';
import { RouteActions } from '../actions';
import { routes } from '../constants';
import { Sidebar } from '../components';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
`

const MainWrapper = styled.div`
    display: flex;
    flex: 3;
    overflow-y: scroll;
    height: 100%;
`

class HomePage extends React.Component {

    componentWillMount(){
        this.props.dispatch(RouteActions.setAppRoute(routes.HOME));
    }

    render () {
        return (
            <Container>
                <Sidebar />
                <MainWrapper>
                </MainWrapper>
            </Container>
        );
    }
}

function select(state){
    return {
        currentRoute: state.currentRoute
    }
}

export default connect(select)(HomePage);
