/**
 * ConnectionRoleObjectTypeCode.webapi.ts - ConnectionRoleObjectTypeCode WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ConnectionRoleObjectTypeCode WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IConnectionRoleObjectTypeCodeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IConnectionRoleObjectTypeCodeApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the connection role associated with the Connection Role Object Type Code. */
	ConnectionRoleId: DevKit.Guid | null;
	/** Unique identifier of the connection role object type association. */
	ConnectionRoleObjectTypeCodeId: DevKit.Guid | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the organization associated with the connectionroleobjecttypecode. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const ConnectionRoleObjectTypeCodeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionRoleId: { schemaName: 'ConnectionRoleId', logicalName: '_connectionroleid_value', entityCollectionName: 'connectionroles', entityLogicalName: 'connectionrole' },
	ConnectionRoleObjectTypeCodeId: { logicalName: 'connectionroleobjecttypecodeid' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ConnectionRoleObjectTypeCode WebApi class for early-bound style coding
 * Usage: const connectionRoleObjectTypeCode = new ConnectionRoleObjectTypeCodeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ConnectionRoleObjectTypeCodeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IConnectionRoleObjectTypeCodeApi>(entity, 'connectionroleobjecttypecode', 'connectionroleobjecttypecodes', ConnectionRoleObjectTypeCodeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ConnectionRoleObjectTypeCodeApi extends IConnectionRoleObjectTypeCodeApi { }
