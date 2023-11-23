import axios, { AxiosResponse } from "axios";

const apiKey = 'api_key=deb760365435e19ca7f148f884c24379'
const language = 'language=pt-BR'

const apiTMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

interface getFilmsResponse {
    results: Array<{}>
}

interface getGenresResponse {
    genres: Array<{
        id: number
        name: string
    }>
}

export function getTrendingFilms(): Promise<AxiosResponse<getFilmsResponse, any>> {
    const url = `trending/all/week?${apiKey}&${language}&page=${1}`

    return apiTMDB.get(url)
}

export function getGenres(): Promise<AxiosResponse<getGenresResponse, any>> {
    const url = `/genre/movie/list?${apiKey}&${language}`

    return apiTMDB.get(url)
}

export function getGenresFilms(genre): Promise<AxiosResponse<getFilmsResponse, any>> {
    const url = `/discover/movie/?${apiKey}&${language}&with_genres=${genre}`

    return apiTMDB.get(url)
}

export function getSearchFilms(research): Promise<AxiosResponse<getFilmsResponse, any>> {
    const url = `/search/movie?query=${research}&${apiKey}&${language}&page=${1}`

    return apiTMDB.get(url)
}
