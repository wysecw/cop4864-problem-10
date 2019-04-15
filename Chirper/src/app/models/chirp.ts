import { User } from './user';
import * as moment from 'moment';

export class Chirp {
    public username: string;
    public text: string;
    public time: Date;

    constructor(username, text, time) {
        this.username = username;
        this.text = text;
        this.time = time;
    }

    /**
     * Returns the time of the chirp in moment's "fromNow" format
     */
    get timeFromNow() {
        return moment(this.time).fromNow();
    }
}
