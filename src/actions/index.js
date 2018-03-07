import { SET_TOKEN, UP_SUCCEEDED, UP_VIDEO, SET_ACCOUNT, SET_LOGOUT, UP_PROGRESS, SET_NULL, CREATE_FOLDER,
  GET_FOLDER } from './actionTypes'
import Reactotron from 'reactotron-react-native'

export const setToken = () => {
  return {
    type: SET_TOKEN
  }
}
export const setAccount = (account) => {
  return {
    type: SET_ACCOUNT,
    account
  }
}
export const setLogout = () => {
  return {
    type: SET_LOGOUT
  }
}
export const setNull = () => {
  return {
    type: SET_NULL
  }
}

export const upLoadVideo = (token, video, videoName, fileType) => {
  return {
    type: UP_VIDEO,
    token,
    video,
    videoName,
    fileType
  }
}

export const upVideoSuccessAction = (video) => {
  return {
    type: UP_SUCCEEDED,
    video
  }
}

export const createFolder = (token, folderName) => {
  return {
    type: CREATE_FOLDER,
    token,
    folderName
  }
}

export const getFolder = (token) => {
  return {
    type: GET_FOLDER,
    token
  }
}
