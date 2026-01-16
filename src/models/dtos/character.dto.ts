export default class CharacterDto {
    private name: string
    private surname: string
    private background: string
    private userId: string
    private xp: number = 0

    constructor(name: string, surname: string, background: string, userId: string) {
        this.name = name
        this.surname = surname
        this.background = background
        this.userId = userId
    }

    public getName = (): string => this.name
    public getSurname = (): string => this.surname
    public getBackground = (): string => this.background
    public getUserId = (): string => this.userId
    public getXp = (): number => this.xp

    public setName(name: string): void {
        this.name = name
    }
    public setSurname(surname: string): void {
        this.surname = surname
    }
    public setBackground(background: string): void {
        this.background = background
    }
    public setXp(xp: number): void {
        this.xp = xp
    }
}