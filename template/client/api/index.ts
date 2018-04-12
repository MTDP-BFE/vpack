import * as request from './interface';

export const getCityWeather = async (param: { city: string }) => {
    return request.get('/weatherApi', param);
};
