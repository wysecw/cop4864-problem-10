export class User {
    public username: string;
    public displayName: string;
    public photoURL: string;

    constructor(
        username, 
        displayName, 
        photoURL = "/assets/img/no-user-pic.png") { // Default value if no avatar
            this.username = username;
            this.displayName = displayName;
            this.photoURL = photoURL;
    }
}
