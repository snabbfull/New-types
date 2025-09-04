import ForWatching from "./ForWatching";

export default class Movie implements ForWatching {
    constructor (
        readonly name: string,
        readonly country: string,
        readonly slogan?: string,
        readonly genre: string,
        readonly duration: string
    ) {}
}