/**
 * DelegatedAuthorization.webapi.ts - DelegatedAuthorization WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for DelegatedAuthorization
 * All fields return string representation of their values
 */
export interface IDelegatedAuthorizationFormattedValue {
	readonly BotId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DelegatedAuthorizationId: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ProviderType: string;
	readonly RoadmapProjectId: string;
	readonly SharePointListId: string;
	readonly SharePointSite: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * DelegatedAuthorization WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDelegatedAuthorizationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IDelegatedAuthorizationFormattedValue;
	/** Identifier for MCS Bot */
	BotId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	DelegatedAuthorizationId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of delegated authorization (generally unused) */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Type of provider. */
	ProviderType: number | null;
	/** Identifier for Project Roadmap */
	RoadmapProjectId: DevKit.Guid | null;
	/** Identifier for SharePoint list */
	SharePointListId: DevKit.Guid | null;
	/** SharePoint site (URL) */
	SharePointSite: string | null;
	/** Status of the DelegatedAuthorization */
	statecode: number | null;
	/** Reason for the status of the DelegatedAuthorization */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const DelegatedAuthorizationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BotId: { logicalName: 'botid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DelegatedAuthorizationId: { logicalName: 'delegatedauthorizationid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ProviderType: { logicalName: 'providertype', type: 'Integer' },
	RoadmapProjectId: { logicalName: 'roadmapprojectid' },
	SharePointListId: { logicalName: 'sharepointlistid' },
	SharePointSite: { logicalName: 'sharepointsite' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * DelegatedAuthorization WebApi class for early-bound style coding
 * Usage: const delegatedAuthorization = new DelegatedAuthorizationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DelegatedAuthorizationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDelegatedAuthorizationApi>(entity, 'delegatedauthorization', 'delegatedauthorizations', DelegatedAuthorizationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DelegatedAuthorizationApi extends IDelegatedAuthorizationApi { }
