import service from './../service/';

export const getCityWeather = async (params: { city: string }) => {
    return service.get('/weatherApi', { params });
};
