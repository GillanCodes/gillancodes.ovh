export enum Permission {
        TECH_GET = "tech_get",
        TECH_CREATE = 'tech_create',
        TECH_EDIT = 'tech_edit',
        TECH_DELETE = 'tech_delete',

        USER_GET = 'user_get',
        USER_CREATE = 'user_create',
        USER_EDIT = 'user_edit',
        USER_DELETE = 'user_delete',
}

export const ALL_PERMISSIONS = Object.values(Permission);
