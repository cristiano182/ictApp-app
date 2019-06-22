import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

export const apiGoogleDrive = axios.create({
  baseURL:
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id"
});



apiGoogleDrive.interceptors.request.use( async config => {
  const token = await AsyncStorage.getItem('@storage_Key')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

