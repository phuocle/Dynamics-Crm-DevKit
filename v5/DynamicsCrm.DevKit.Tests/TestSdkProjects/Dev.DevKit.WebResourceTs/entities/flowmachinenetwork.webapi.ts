/**
 * flowmachinenetwork.webapi.ts - flowmachinenetwork WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * flowmachinenetwork WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IflowmachinenetworkApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IflowmachinenetworkApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of a Credential entity providing user name and password to be used in hybrid Entra join configurations to join machines to the domain. */
	CredentialId: DevKit.Guid | null;
	/** Description */
	description: string | null;
	/** Deprecated. */
	DomainName: string | null;
	/** Unique identifier for the secret environment variable holding the password used to join machines to the domain in hybrid Entra join configurations. */
	DomainPassword: DevKit.Guid | null;
	/** Unique identifier for the environment variable holding the username used to join machines to the domain in hybrid Entra join configurations. */
	DomainUsername: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	flowmachinenetworkId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Internal Use Only. */
	NetworkMetadata: string | null;
	/** Deprecated. */
	OrganizationalUnit: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** The provisioning state of the flow machine network. */
	ProvisioningState: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Flow Machine Network */
	statecode: number | null;
	/** Reason for the status of the Flow Machine Network */
	statuscode: number | null;
	/** Flow Machine Network Error Message. */
	statuserrormessage: string | null;
	/** The subnet associated to the Flow machine network. */
	subnet: string | null;
	/** The Flow machine network supported scenario. */
	SupportedScenario: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** The Flow machine network type. */
	type: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const flowmachinenetworkFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CredentialId: { schemaName: 'CredentialId', logicalName: '_credentialid_value', entityCollectionName: 'credentials', entityLogicalName: 'credential' },
	description: { logicalName: 'description' },
	DomainName: { logicalName: 'domainname' },
	DomainPassword: { schemaName: 'DomainPassword', logicalName: '_domainpassword_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	DomainUsername: { schemaName: 'DomainUsername', logicalName: '_domainusername_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	flowmachinenetworkId: { logicalName: 'flowmachinenetworkid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	NetworkMetadata: { logicalName: 'networkmetadata' },
	OrganizationalUnit: { logicalName: 'organizationalunit' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ProvisioningState: { logicalName: 'provisioningstate', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	statuserrormessage: { logicalName: 'statuserrormessage' },
	subnet: { logicalName: 'subnet' },
	SupportedScenario: { logicalName: 'supportedscenario', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	type: { logicalName: 'type', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * flowmachinenetwork WebApi class for early-bound style coding
 * Usage: const flowmachinenetwork = new flowmachinenetworkApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class flowmachinenetworkApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IflowmachinenetworkApi>(entity, 'flowmachinenetwork', 'flowmachinenetworks', flowmachinenetworkFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface flowmachinenetworkApi extends IflowmachinenetworkApi { }
