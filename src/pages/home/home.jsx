import React, { Component } from 'react';
import mixin, { padStr } from '@/utils/mixin';
import { is, fromJS } from 'immutable';

@mixin({padStr})
class Home extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    render() {
        return (
            <div>
                这是首页
                {this.props.children}
            </div>
        )
    }
}
export default Home