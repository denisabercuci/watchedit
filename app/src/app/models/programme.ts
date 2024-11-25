interface IProgramme {
    id?: number;
    art?: string;
    name: string;
    genre: string;
    rating: number;
    comments: string;
}

export class Programme {
    id?: number;
    art?: string;
    name: string;
    genre: string;
    rating: number;
    comments: string;

    constructor(programme: IProgramme) {
        this.id = programme.id;
        this.name = programme.name;
        this.art = programme.art;
        this.genre = programme.genre;
        this.rating = programme.rating;
        this.comments = programme.comments;
    }
}
