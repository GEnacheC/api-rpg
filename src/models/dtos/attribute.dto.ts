export default class CreateCreateAttributeDto {
    private name: string;
    private description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    public getName = (): string => this.name
    public getDescription = (): string => this.description

    public setName(name: string): void {
        this.name = name;
    }
    public setDescription(description: string): void {
        this.description = description;
    }
}