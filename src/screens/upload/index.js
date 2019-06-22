import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { uniqueId } from "lodash";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux'
import GDrive from "react-native-google-drive-api-wrapper";
import AsyncStorage from '@react-native-community/async-storage';
import getTokenDrive from '../../services/createPasteGDrive'

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFiles: [],
            descricao: "",
            user:this.props.user,
            error: "",
            pastaFileCurrent: "",
            id_uc: "",
            name_uc: "",
            userSendFile: false
        }
    }

    async componentDidMount() {
        getTokenDrive()
      const pasta = AsyncStorage.getItem('@pastaFileCurrent')
       // alert(JSON.stringify(pasta))
        this.setState({ pastaFileCurrent: pasta })
        this.setState({
            id_uc: this.props.navigation.state.params._id,
            name_uc: this.props.navigation.state.params.name
        });
    }


    deletePaste = async e => {
       GDrive.files.delete(this.state.pastaFileCurrent);
        this.setState({ userSendFile: true });
    };

    handleUpload = async files => {
        if (files) {
            const uploadedFiles = files.map(file => ({
                file: file.path,
                name: uniqueId(),
                type: file.mime,
                id: uniqueId(),
                readableSize: file.size,
                progress: 0,
                uploaded: false,
                error: false
            }));
            this.setState({
                uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
            });
        }
        this.setState({ error: "" });
    };

    _sendData = async () => {
        await this.state.uploadedFiles.forEach(this.processUpload);
    }



    processUpload = uploadedFile => {
        var metadata = {
            name: uploadedFile.name,
            mimeType: uploadedFile.type,
            parents: [this.state.pastaFileCurrent]
        };
        var data = new FormData();
        data.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
        data.append("file", new Blob([uploadedFile.file]), uploadedFile.name);

        apiGoogleDrive.post("", data, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total));
                this.updateFile(uploadedFile.id, { progress });
            }
        })
            .then(response => {
                this.updateFile(uploadedFile.id, {
                    uploaded: true,
                    id: response.data.id
                });
            })
            .catch(() => {
                this.updateFile(uploadedFile.id, { error: true });
            });
    };

    updateFile = (id, data) => {
        this.setState({
            uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
                return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile;
            })
        });
    };


    handleDelete = async id => {
        // await apiGoogleDrive.delete(
        //  `https://www.googleapis.com/drive/v3/files/${id}`
        // );
        this.setState({ uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id) });
    };



    onClickSendFiles = async e => {
        const infos = {
            autor: this.state.user.userID.toString(),
            link: this.state.pastaFileCurrent,
            descricao: this.state.descricao,
        };
        await api.put("/files/" + this.state.id_uc, infos)
            .catch(err => console.log(err));
        this.setState({ userSendFile: true });

    };

    _onPressFolder = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(files => {
            this.handleUpload(files)
        });
    }

    _onPressCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
        }).then(photo => {
            this.handleUpload(photo)
        }).catch(error => alert(JSON.stringify(error)))
    }

    _onPressVideo = () => {
        ImagePicker.openCamera({
            mediaType: 'video',
        }).then(video => {
            this.handleUpload(video)
        });
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.textInputView}>
                    <TextInput editable={true} textAlignVertical='top' maxLength={200} multiline={true} style={styles.textInput}>
                    </TextInput>
                </View>


                <View style={styles.buttons} >
                    <TouchableOpacity onPress={this._onPressFolder} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="folder-open" size={25} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressCamera} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="camera" size={25} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressVideo} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="play" size={25} color='white' />
                    </TouchableOpacity>
                </View>



                <ScrollView>
                    {!!this.state.uploadedFiles.length && (
                        <View style={{ flex: 1 }}>
                            {this.state.uploadedFiles.map(uploadedFile => (
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10 }} key={uploadedFile.id}>

                                    <View style={{ textAlign: "left", flexDirection: 'row' }}>

                                        <Text style={{ color: 'white' }} >{uploadedFile.name} - </Text>
                                        <Text style={{ color: 'white' }} > {uploadedFile.readableSize}kb</Text>

                                        { /*!uploadedFile.uploaded && (
                                            <button
                                                title='excluir'
                                                onClick={() => this.handleDelete(uploadedFile.id)}
                                            >
                                            </button>
                                        ) */}
                                    </View>

                                    <View>
                                        {!uploadedFile.uploaded && !uploadedFile.error && (
                                            <AnimatedCircularProgress
                                                size={25}
                                                width={2}
                                                fill={uploadedFile.progress ? uploadedFile.progress : 40}
                                                tintColor="#00e0ff"
                                                onAnimationComplete={() => { }}
                                                backgroundColor="#3d5875" />
                                        )}

                                        <View>
                                            {uploadedFile.uploaded && (<Icon name="check-circle" size={24} color="#78e5d5" />)}
                                            {uploadedFile.error && <Icon name="exclamation-circle" size={24} color="#e57878" />}
                                        </View>

                                    </View>

                                </View>
                            ))}

                        </View>

                    )}





                </ScrollView>

                <View style={styles.buttons2}>

                    <TouchableOpacity style={{ widht: 70, backgroundColor: 'red', borderRadius: 15 }}>
                        <Text style={{ color: '#ddd' }}> Agora não :( </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={ this._sendData } style={{ widht: 70, backgroundColor: 'green', borderRadius: 15 }}>
                        <Text style={{ color: '#ddd' }}>  Quero enviar :) </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
const mapStateToProps = state => ({ user: state.user.email })
export default connect(mapStateToProps)(Upload)