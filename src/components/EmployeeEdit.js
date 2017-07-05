import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import { Card, CardSection, Button, Confirm } from './common';
import Communications from 'react-native-communications'

class EmployeeEdit extends Component {

  state={ showModal: false};

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onAccept() {
    const { uid } = this.props.employee

    this.props.employeeDelete({ uid })
  }

  onDecline() {
    this.setState({ showModal: false })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text
          </Button>
          </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are u sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeDelete, employeeUpdate, employeeSave })(EmployeeEdit)