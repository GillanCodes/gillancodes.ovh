import { Model, model, Schema } from "mongoose";
import { ALL_PERMISSIONS } from "../Permission/permission.types";
import { Role } from "@this/common/class/Role";

export interface RoleModel extends Model<Role> {
    syncAllRolesPermissions(): Promise<Role>;
}

const roleSchema = new Schema<Role>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    permissions: {
      type: Map,
      of: Boolean,
      default: () => {
        // Initialize all permissions to false
        const perms = new Map<string, boolean>();
        ALL_PERMISSIONS.forEach(perm => {
          perms.set(perm, false);
        });
        return perms;
      },
    },
  },
  {
    timestamps: true,
  }
);

// Method to ensure all permissions exist
roleSchema.methods.syncPermissions = function() {
  ALL_PERMISSIONS.forEach(perm => {
    if (!this.permissions.has(perm)) {
      this.permissions.set(perm, false);
    }
  });
};

// Static method to sync all roles with new permissions
roleSchema.statics.syncAllRolesPermissions = async function() {
  const roles = await this.find();
  
  for (const role of roles) {
    let needsUpdate = false;
    
    ALL_PERMISSIONS.forEach(perm => {
      if (!role.permissions.has(perm)) {
        role.permissions.set(perm, false);
        needsUpdate = true;
      }
    });
    
    if (needsUpdate) {
      await role.save();
    }
  }
};

const roleModel = model<Role, RoleModel>('role', roleSchema);
export default roleModel;
