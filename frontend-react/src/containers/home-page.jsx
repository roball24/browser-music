import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components';

import { routes } from '../constants';
import { Sidebar, ContentBar, SongList } from '../components';

const Container = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    overflow: hidden;
    height: 100%;
`;

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(push(routes.HOME));
    }

    render() {
        return (
            <Container>
                <Sidebar />
                <MainWrapper>
                    <ContentBar />
                    <SongList />
                </MainWrapper>
            </Container>
        );
    }
}

function select(state) {
    return {
        currentRoute: state.currentRoute
    };
}

export default connect(select)(HomePage);
