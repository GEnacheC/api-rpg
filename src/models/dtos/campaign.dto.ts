export default class CreateCreateCampaignDto {
    private name: string;
    private master: string;
    private background: string;

    constructor(name: string, master: string, background: string) {
        this.name = name;
        this.master = master;
        this.background = background;
    }

    public getName = (): string => this.name;
    public getMaster = (): string => this.master;
    public getBackground = (): string => this.background;

    public setName(name: string): void {
        this.name = name;
    }
    public setMaster(master: string): void {
        this.master = master;
    }
    public setBackground(background: string): void {
        this.background = background;
    }
}