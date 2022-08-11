export class User{
    username!:string;
    password!:string;
    
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUser(): string{
          return this.username;
    }

    getPassword(): string{
        return this.password;
     }
}