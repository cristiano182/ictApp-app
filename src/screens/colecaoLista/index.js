
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'


class colecaoLista extends Component {
    render() {
        const infos = this.props.navigation.state.params.info
        const { _id, name } = this.props.navigation.state.params
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#5E34C2' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Upload', { _id, name })} style={{ marginVertical: 7, width: '60%', height: 40, backgroundColor: 'green', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}> Adicione um arquivo a esta coleção</Text>
                </TouchableOpacity>

                <ScrollView style={{ borderColor: '#ddd', borderTopWidth: 1, width: '100%', flex: 1, backgroundColor: '#5E34C2', borderRadius: 20, paddingTop: 10, paddingHorizontal: 15 }}>
                    {infos.map(info => {
                        return (
                            <View key={info._id} style={{
                                width: '100%', borderTopRightRadius: 20, minHeight: 65,
                                paddingVertical: 10, paddingHorizontal: 10,
                                borderTopLeftRadius: 20, borderBottomLeftRadius: 20,
                                backgroundColor: '#85C6F2', justifyContent: 'space-between',
                                marginVertical: 5
                            }}>
                                <View style={{}}>
                                    <Text style={{ color: 'white' }}>
                                        - {info.descricao}
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }} >
                                    <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 20, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'white' }} >
                                            Ver
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        )
                    })
                    }
                </ScrollView>
            </View>
        );
    }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps)(colecaoLista)