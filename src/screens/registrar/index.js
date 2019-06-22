import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux'
import axios from 'axios'
import { setUser } from '../../redux/actions/index'
import { SERVER_URL } from 'react.native-dotenv'
class Registrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            emptyEmail: false,
            emptyPassword: false,
            emptyPassword2: false,
            error: false,
        }
    }
    _onPress = async () => {
        this.setState({ emptyPassword: false, emptyEmail: false, error: false, emptyPassword2: false })
        if (this.state.email && this.state.password && this.state.confirmPassword) {
            if (this.state.password === this.state.confirmPassword) {
                this.props.navigation.navigate('Init')
                const { email, password } = this.state
                const user = { email, password }
                const res = await axios.post(SERVER_URL + '/user/register', user)
                if (res.status === 201) {
                    this.props.dispatch(setUser(res.data))
                    this.props.navigation.navigate('App')
                }
                else
                    this.setState({ error: res.data })
            }
            else
                this.setState({ error: 'Passwords diferentes' })
        }
        else {
            if (!this.state.email)
                this.setState({ emptyEmail: true })
            if (!this.state.password)
                this.setState({ emptyPassword: true })
            if (!this.state.confirmPassword)
                this.setState({ emptyPassword2: true })
        }
    }

    render() {
        return (
            <ImageBackground source={require("../../assets/drawable-hdpi/registrar.png")} style={styles.container}>
                <View style={styles.view}>

                    {this.state.error && <Text style={{ marginBottom: 20, color: 'red' }}> {this.state.error}  </Text>}


                    <Text style={{ color: '#ddd', marginBottom: 5 }} >  Qual seu Email? </Text>
                    <TextInput value={this.state.email} onChangeText={text => this.setState({ email: text })} style={this.state.emptyEmail ? styles.inputEmptyEmail : styles.inputEmail} />


                    <Text style={{ color: '#ddd', marginBottom: 5 }} >  Escolha uma senha</Text>
                    <TextInput value={this.state.password} onChangeText={text => this.setState({ password: text })} secureTextEntry style={this.state.emptyPassword ? styles.inputEmptyPassword : styles.inputPassword} />


                    <Text style={{ color: '#ddd', marginBottom: 5 }} >  Confirme sua senha </Text>
                    <TextInput value={this.state.confirmPassword} onChangeText={text => this.setState({ confirmPassword: text })} secureTextEntry style={this.state.emptyPassword2 ? styles.inputEmptyPassword2 : styles.inputPassword2} />


                    <TouchableOpacity onPress={this._onPress} style={styles.button}>
                        <Text style={{ color: '#ddd' }}>
                            Ok
                         </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps)(Registrar)
