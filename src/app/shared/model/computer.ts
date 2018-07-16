import { Screen } from './screen';

export interface Computer {
    id?: Number;
    snr: String;
    name: String;
    modelname: String;
    anlagennr: String;
    owner: String;
    room?: String;
    screens?: Screen[];
}
