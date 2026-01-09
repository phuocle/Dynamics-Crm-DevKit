/**
 * ConnectionRoleAssociation.webapi.ts - ConnectionRoleAssociation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ConnectionRoleAssociation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IConnectionRoleAssociationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IConnectionRoleAssociationApi, 'FormattedValue'>]: string };
	AssociatedConnectionRoleId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the connection role association. */
	ConnectionRoleAssociationId: DevKit.Guid | null;
	ConnectionRoleId: DevKit.Guid | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const ConnectionRoleAssociationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AssociatedConnectionRoleId: { logicalName: 'associatedconnectionroleid' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionRoleAssociationId: { logicalName: 'connectionroleassociationid' },
	ConnectionRoleId: { logicalName: 'connectionroleid' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ConnectionRoleAssociation WebApi class for early-bound style coding
 * Usage: const connectionRoleAssociation = new ConnectionRoleAssociationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ConnectionRoleAssociationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IConnectionRoleAssociationApi>(entity, 'connectionroleassociation', '', ConnectionRoleAssociationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ConnectionRoleAssociationApi extends IConnectionRoleAssociationApi { }
