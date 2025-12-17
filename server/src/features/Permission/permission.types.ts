export enum Permission {
        TECH_GET = "tech_get",
        TECH_CREATE = 'tech_create',
        TECH_EDIT = 'tech_edit',
        TECH_DELETE = 'tech_delete',

        USER_GET = 'user_get',
        USER_CREATE = 'user_create',
        USER_EDIT = 'user_edit',
        USER_DELETE = 'user_delete',

        ROLE_GET = "role_get",
        ROLE_CREATE = "role_create",
        ROLE_EDIT = "role_edit",
        ROLE_DELETE = "role_delete",
        ROLE_SYNC = "role_sync",

        ADMIN_CHANGE_USER_ROLE = 'admin_change_user_role',
        ADMIN_BYPASS = "admin_bypass",

}

export const ALL_PERMISSIONS = Object.values(Permission);
