/**
 * OfflineCommandDefinition.webapi.ts - OfflineCommandDefinition WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * OfflineCommandDefinition WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOfflineCommandDefinitionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IOfflineCommandDefinitionApi, 'FormattedValue'>]: string };
	/** Command Definition of Non Crud Command */
	CommandDefinition: string | null;
	/** Unique identifier of the Command Definition for the Microsoft Dynamics 365. */
	CommandDefinitionId: DevKit.Guid | null;
	/** Command Name of Non Crud Command. */
	CommandName: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the non crud command. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Primary Entity Logical Name of entity for which command is used */
	PrimaryEntityLogicalName: string | null;
	/** Unique identifier of the solution. */
	SolutionName: string | null;
	/** Internal use Only */
	readonly VersionNumber: number | null;
}

const OfflineCommandDefinitionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CommandDefinition: { logicalName: 'commanddefinition' },
	CommandDefinitionId: { logicalName: 'commanddefinitionid' },
	CommandName: { logicalName: 'commandname' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PrimaryEntityLogicalName: { logicalName: 'primaryentitylogicalname' },
	SolutionName: { logicalName: 'solutionname' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * OfflineCommandDefinition WebApi class for early-bound style coding
 * Usage: const offlineCommandDefinition = new OfflineCommandDefinitionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OfflineCommandDefinitionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOfflineCommandDefinitionApi>(entity, 'offlinecommanddefinition', 'offlinecommanddefinitions', OfflineCommandDefinitionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OfflineCommandDefinitionApi extends IOfflineCommandDefinitionApi { }
