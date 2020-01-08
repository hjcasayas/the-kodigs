import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button } from 'antd';

class TodoForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: ''
    };
  }

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  render() {
    const { getFieldDecorator, setFieldsValue } = this.props.form;
    return (
      <Form
        layout='inline'
        onSubmit={event => {
          this.props.addTodo(event, this.state.newTodo);
          this.setState({ newTodo: '' }, () => {
            setFieldsValue({ todo: this.state.newTodo });
          });
        }}
      >
        <Form.Item>
          {getFieldDecorator('todo', {
            rules: [
              {
                required: true,
                message: 'Please input todo item'
              }
            ]
          })(
            <Input
              prefix={
                <Icon
                  type='ordered-list'
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              }
              placeholder='Add Todo'
              size='large'
              onChange={this.handleChange}
            />
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24, offset: 0 }}>
          <Button
            type='primary'
            htmlType='submit'
            size='large'
            icon='plus-circle'
          >
            TODO
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'todo_form' })(TodoForm);
