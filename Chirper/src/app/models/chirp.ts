import * as moment from 'moment';

export class Chirp {
    public uid: string;
    public text: string;
    public time: string;

    constructor(chirpObj) {
        this.uid = chirpObj.uid;
        this.text = chirpObj.text;
        this.time = chirpObj.date || new Date().toISOString()
    }

    /**
     * Returns the time of the chirp in moment's "fromNow" format
     */
    get timeFromNow() {
        return moment( new Date(this.time) ).fromNow();
    }
}
