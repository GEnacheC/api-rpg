export default class CreateCreateCharacterDto {
    private name: string
    private surname: string
    private background: string
    private userId: string
    private campaignId: string

    constructor(name: string, surname: string, background: string, userId: string, campaignId: string) {
        this.name = name
        this.surname = surname
        this.background = background
        this.userId = userId
        this.campaignId = campaignId
    }

    public getName = (): string => this.name
    public getSurname = (): string => this.surname
    public getBackground = (): string => this.background
    public getUserId = (): string => this.userId
    public getCampaignId = (): string => this.campaignId

    public setName(name: string): void {
        this.name = name
    }
    public setSurname(surname: string): void {
        this.surname = surname
    }
    public setBackground(background: string): void {
        this.background = background
    }
}