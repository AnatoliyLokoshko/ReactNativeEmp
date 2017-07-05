import React, { Component } from 'react';
import { Text } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChange, passwordChange, loginuser } from '../actions'
import { connect } from 'react-redux'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChange(text)
  }

  onPasswordChange(text) {
    this.props.passwordChange(text)
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginuser({ email, password })
  }

  renderButton() {
    console.log(this.props.loading)
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  render() {
    return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        </CardSection>

      <CardSection>
        <Input
          secure
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>
        {this.props.error}
      </Text>

      <CardSection>
        {this.renderButton()}
      </CardSection>
    </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading }
};

export default connect (mapStateToProps, {
  emailChange, passwordChange, loginuser
})(LoginForm)