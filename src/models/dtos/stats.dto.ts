export default class UpdateStatsDto {
    private idAttribute: string;
    private value: number;

    constructor(idAttribute: string, value: number) {
        this.idAttribute = idAttribute;
        this.value = value;
    }

    public getIdAttribute = () => this.idAttribute;
    public getValue = () => this.value;
}