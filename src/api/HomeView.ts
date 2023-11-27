import axios from 'axios'
import type { iAdvert } from '../types/HomeView'

const getAdvert = () => {
  return axios.get(`http://localhost:8000/api/advert/`)
}
const createAdvert = (DTO: iAdvert) => {
  return axios.post(`http://localhost:8000/api/advert/create/`, DTO)
}
const updateAdvert = (id: number, DTO: iAdvert) => {
  return axios.put(`http://localhost:8000/api/advert/${id}/update`, DTO)
}
const deleteAdvert = (id: number) => {
  return axios.delete(`http://localhost:8000/api/advert/${id}/`)
}

export const HomePageAPI = {
  getAdvert,
  createAdvert,
  updateAdvert,
  deleteAdvert
}
