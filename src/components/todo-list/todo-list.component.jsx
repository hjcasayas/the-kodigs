import React, { PureComponent } from 'react';
import { List, Typography, Icon } from 'antd';

import './todo-list.styles.scss';

class TodoList extends PureComponent {
  render() {
    return (
      <List
        bordered
        dataSource={this.props.todos}
        renderItem={item => {
          return (
            <List.Item>
              <div datasource={item.id} className='list-item'>
                <Typography.Text>{item.todo}</Typography.Text>
                <Icon
                  type='delete'
                  onClick={this.props.deleteTodo}
                  data-id={item.id}
                  className='delete-icon'
                />
              </div>
            </List.Item>
          );
        }}
      />
    );
  }
}

export default TodoList;
