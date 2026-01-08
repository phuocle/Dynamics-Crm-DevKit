/**
 * FieldPermission.webapi.ts - FieldPermission WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * FieldPermission WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IFieldPermissionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IFieldPermissionApi, 'FormattedValue'>]: string };
	/** Attribute Name. */
	AttributeLogicalName: string | null;
	/** Can this Profile create the attribute */
	CanCreate: number | null;
	/** Can this Profile read the attribute */
	CanRead: number | null;
	/** Can this profile read unmasked value of attribute */
	CanReadUnMasked: number | null;
	/** Can this Profile update the attribute */
	CanUpdate: number | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the Field Permission. */
	FieldPermissionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly FieldPermissionIdUnique: DevKit.Guid | null;
	/** Unique identifier of profile to which this privilege belongs. */
	FieldSecurityProfileId: DevKit.Guid | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const FieldPermissionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeLogicalName: { logicalName: 'attributelogicalname' },
	CanCreate: { logicalName: 'cancreate', type: 'Integer' },
	CanRead: { logicalName: 'canread', type: 'Integer' },
	CanReadUnMasked: { logicalName: 'canreadunmasked', type: 'Integer' },
	CanUpdate: { logicalName: 'canupdate', type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	FieldPermissionId: { logicalName: 'fieldpermissionid' },
	FieldPermissionIdUnique: { logicalName: 'fieldpermissionidunique', readOnly: true },
	FieldSecurityProfileId: { schemaName: 'FieldSecurityProfileId', logicalName: '_fieldsecurityprofileid_value', entityCollectionName: 'fieldsecurityprofiles', entityLogicalName: 'fieldsecurityprofile' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * FieldPermission WebApi class for early-bound style coding
 * Usage: const fieldPermission = new FieldPermissionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class FieldPermissionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IFieldPermissionApi>(entity, 'fieldpermission', 'fieldpermissions', FieldPermissionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface FieldPermissionApi extends IFieldPermissionApi { }
