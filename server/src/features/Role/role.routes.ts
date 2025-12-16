import { Router } from "express";
let router: Router = Router()

import { requireAuth } from "../../middlewares/auth.middleware";
import { RoleController } from "./role.controller";
import { checkPermission } from "../../middlewares/checkPermission.middleware";
import { Permission } from "../Permission/permission.types";

router.use(requireAuth);

router.get('/permissions', RoleController.getAvailablePermissions);
router.get('/', RoleController.getAllRoles);
router.get('/:id', RoleController.getRole);
router.get('/:id/permissions', RoleController.getRolePermissions);

router.post('/', checkPermission(Permission.USER_CREATE), RoleController.createRole);
router.post('/sync', checkPermission(Permission.USER_EDIT), RoleController.syncPermissions);

router.patch('/:id/name', checkPermission(Permission.USER_EDIT), RoleController.updateRoleName);
router.patch('/:id/permissions', checkPermission(Permission.USER_EDIT), RoleController.updateRolePermissions);

router.put('/:id/permissions', checkPermission(Permission.USER_EDIT), RoleController.setAllRolePermissions);

router.delete('/:id', checkPermission(Permission.USER_DELETE), RoleController.deleteRole);

export default router;
