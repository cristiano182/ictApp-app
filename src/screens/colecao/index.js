import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'

class Colecao extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#5E34C2', borderRadius: 20, paddingTop: 5, paddingHorizontal: 15 }}>
                {
                    this.props.files.map(file => {

                        return (
                            <TouchableOpacity key={file._id} onPress={() => navigate('ColecaoLista', file)} style={{ backgroundColor: "#85C6F2", borderRadius: 20, marginVertical: 5 }} >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, height: 30 }}>
                                    <Text style={{ color: 'white' }}> {file.name} </Text>
                                    <Text style={{ color: 'white' }}> ({file.info.length})</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        );
    }
}
const mapStateToProps = state => ({ files: state.files })
export default connect(mapStateToProps)(Colecao)