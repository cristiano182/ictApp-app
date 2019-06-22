import { urlEncodedData, config } from './configJWTGoogle';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import { apiGoogleDrive } from './api'

import RNFetchBlob from 'rn-fetch-blob'
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs

const pastaPublica = "1BMmVZwOAc7GVEGBGB1oxegy2O3tbNgh0"

export default getTokenDrive = async (user) => {
    await axios
        .post(
            "https://www.googleapis.com/oauth2/v3/token",
            urlEncodedData,
            config
        )
        .then(p => {
            AsyncStorage.setItem('@storage_Key', p.data.access_token)
        })
        .catch(err => { });

    let metadata = {
        name: 'minha_pasta',
        mimeType: "application/vnd.google-apps.folder",
        parents: [pastaPublica]
    };

    let form = new FormData();

    form.append('metadata', await Blob.build([JSON.stringify(metadata)], { type: "application/json" }))

    await apiGoogleDrive
        .post("", form)
        .then(res => {
            AsyncStorage.setItem('@pastaFileCurrent', res.data.id)
            const current = AsyncStorage.getItem('@pastaFileCurrent')
        })
        .catch(err => { });



};

