import React, { PureComponent } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'react-redux';

import {
  increment,
  decrement,
  reset
} from '../../redux/counter/counter.actions.js';

import './counter.styles.scss';

class Counter extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div className='page counter-page'>
        <Card className='card'>
          <div className='card__count-container'>
            <Button type='circle' icon='minus' onClick={this.props.decrement} />
            <span className='card__count'>{this.props.count}</span>
            <Button type='circle' icon='plus' onClick={this.props.increment} />
          </div>
          <Button type='primary' onClick={this.props.reset} block>
            Reset
          </Button>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({ count: state.count });
const mapDispatchToProps = { increment, decrement, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
