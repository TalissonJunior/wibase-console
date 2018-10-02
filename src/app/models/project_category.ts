export class ProjectCategory {
    id: number;
    fk_project_id: number;
    fk_category_id: number;
    create_date: number;
    update_date: number;
    readonly $fk: string = 'fk_project_id';
    readonly $table: string = 'project_category';
}