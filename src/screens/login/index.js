import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux'
import axios from 'axios'
import { setUser } from '../../redux/actions/index'
import SplashScreen from 'react-native-splash-screen'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emptyEmail: false,
      emptyPassword: false,
      error: ''
    }
  }
  componentWillMount() {
    if (this.props.user.token)
      this.props.navigation.navigate('App')
    SplashScreen.hide();
  }
  _onPress = async () => {
    this.setState({ emptyPassword: false, emptyEmail: false, error: '' })

    if (this.state.email && this.state.password) {

      const { email, password } = this.state
      const user = { email, password }
      const res = await axios.post('http://192.168.100.15:3000/user/login', user)
      if (res.status === 201) {
        this.props.dispatch(setUser(res.data))
        this.props.navigation.navigate('App')
      }
      else {
        this.setState({ error: res.data })
      }
    }
    else {
      if (!this.state.email)
        this.setState({ emptyEmail: true })
      if (!this.state.password)
        this.setState({ emptyPassword: true })
    }
  }
  render() {
    return (
      <ImageBackground source={require("../../assets/drawable-hdpi/login.png")} style={styles.container}>

        <View style={styles.view}>

          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
            <Text style={{ color: 'red' }}>
              {this.state.error}
            </Text>
          </View>

          <View style={styles.email}>
            <Image source={require('../../assets/drawable-hdpi/email.png')} style={{ width: 30, height: 30 }} />
            <TextInput value={this.state.email} onChangeText={text => this.setState({ email: text })} style={this.state.emptyEmail ? styles.inputEmailEmpty : styles.inputEmail} />
          </View>


          <View style={styles.password}>
            <Image source={require('../../assets/drawable-hdpi/chave.png')} style={{ width: 30, height: 30 }} />
            <TextInput value={this.state.password} onChangeText={text => this.setState({ password: text })} secureTextEntry style={this.state.emptyPassword ? styles.inputPasswordEmpty : styles.inputPassword} />
          </View>


          <View style={styles.label}>
            <Switch onValueChange={() => { }} trackColor='blue' value={true} thumbColor='green' />
            <Text style={{ color: 'gray', fontSize: 11 }}> Manter-se logado</Text>
          </View>


          <View style={styles.label2}>

            <TouchableOpacity onPress={this._onPress}
              elevator='5'
              style={styles.entrar}>
              <Text style={{ color: '#ddd' }}> Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Registrar')}
              style={styles.registrar} >
              <Text style={{ color: '#ddd' }}> Registrar</Text>
            </TouchableOpacity>

          </View>


        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps)(Login)