import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { ThemeThunks } from '../actions';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

class Navigator extends React.Component {
    componentWillMount() {
        this.props.dispatch(ThemeThunks.getTheme());
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Wrapper>
                    {this.props.children}
                </Wrapper>
            </ThemeProvider>
        );
    }
}

function select(state) {
    return {
        currentRoute: state.currentRoute,
        theme: state.theme.data
    };
}

export default connect(select)(Navigator);
