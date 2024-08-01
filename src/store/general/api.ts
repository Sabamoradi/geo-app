import { httpService } from '../../services';

export const getSearchIp = (ip:string) => {
    return httpService.get(`/ipgeo?apiKey=e8032497750049e9af56973740ba691e&ip=${ip}&fields=geo`);
};
;