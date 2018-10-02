import { ProjectCategory } from "./project_category";

export class Project {
    id: number;
    name: string;
    public_id: string;
    project_categories: Array<ProjectCategory>;
    update_date: string;
    create_Date: string;
    readonly $table: string = 'project';

    constructor() {
        this.project_categories = new Array<ProjectCategory>();
    }
}
