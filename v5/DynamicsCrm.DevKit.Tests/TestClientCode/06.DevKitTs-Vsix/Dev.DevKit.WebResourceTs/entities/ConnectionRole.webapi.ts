/**
 * ConnectionRole.webapi.ts - ConnectionRole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ConnectionRole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IConnectionRoleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IConnectionRoleApi, 'FormattedValue'>]: string };
	/** Categories for connection roles. */
	Category: number | null;
	/** State of the component. */
	readonly ComponentState: number | null;
	/** Unique identifier of the connection role. */
	ConnectionRoleId: DevKit.Guid | null;
	/** Unique identifier of the published or unpublished connection role record. */
	readonly ConnectionRoleIdUnique: DevKit.Guid | null;
	/** Unique identifier of the user who created the relationship role. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the connection role was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the relationship role. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the connection role. */
	Description: string | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the connection role. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the connection role was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the relationship role. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the connection role. */
	Name: string | null;
	/** Unique identifier of the organization that this connection role belongs to. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time when the record was last overwritten. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the connection role. */
	StateCode: number | null;
	/** Reason for the status of the connection role. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of the connection role. */
	readonly VersionNumber: number | null;
}

const ConnectionRoleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Category: { logicalName: 'category', type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionRoleId: { logicalName: 'connectionroleid' },
	ConnectionRoleIdUnique: { logicalName: 'connectionroleidunique', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ConnectionRole WebApi class for early-bound style coding
 * Usage: const connectionRole = new ConnectionRoleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ConnectionRoleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IConnectionRoleApi>(entity, 'connectionrole', 'connectionroles', ConnectionRoleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ConnectionRoleApi extends IConnectionRoleApi { }
