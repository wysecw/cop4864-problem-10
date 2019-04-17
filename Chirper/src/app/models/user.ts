export class User {

    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    myCustomData?: string;

    constructor(
        uid, 
        displayName, 
        photoURL = "/assets/img/no-user-pic.png") { // Default value if no avatar
            this.uid = uid;
            this.displayName = displayName;
            this.photoURL = photoURL;
    }
}
