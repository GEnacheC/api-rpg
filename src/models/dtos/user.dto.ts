export default class UserDto {
    private username: string;
    private password: string;
    private protocol: string;

    constructor(username: string, password: string, protocol: string) {
        this.username = username;
        this.password = password;
        this.protocol = protocol;
    }

    public getUsername = (): string => this.username;
    public getPassword = (): string => this.password;
    public getProtocol = (): string => this.protocol;

    public setUsername(username: string): void {
        this.username = username;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
    public setProtocol(protocol: string): void {
        this.protocol = protocol;
    }

}