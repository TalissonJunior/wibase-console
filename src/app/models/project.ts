export class Project {
    id: number;
    name: string;
    categories_id: Array<string>;
    create_date: string;
    update_date: string;

    constructor() {
        this.categories_id = new Array<string>();
    }
}
