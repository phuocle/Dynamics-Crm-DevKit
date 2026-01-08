/**
 * Team.webapi.ts - Team WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Team
 * All fields return string representation of their values
 */
export interface ITeamFormattedValue {
	readonly AdministratorId: string;
	readonly AzureActiveDirectoryObjectId: string;
	readonly BusinessUnitId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DelegatedAuthorizationId: string;
	readonly Description: string;
	readonly EMailAddress: string;
	readonly ExchangeRate: string;
	readonly ImportSequenceNumber: string;
	readonly IsDefault: string;
	readonly IsSasTokenSet: string;
	readonly MembershipType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ProcessId: string;
	readonly QueueId: string;
	readonly RegardingObjectId: string;
	readonly SasToken: string;
	readonly ShareLinkQualifier: string;
	readonly StageId: string;
	readonly SystemManaged: string;
	readonly TeamId: string;
	readonly TeamTemplateId: string;
	readonly TeamType: string;
	readonly TransactionCurrencyId: string;
	readonly TraversedPath: string;
	readonly VersionNumber: string;
	readonly YomiName: string;
}

/**
 * Team WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITeamApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITeamFormattedValue;
	/** Unique identifier of the user primary responsible for the team. */
	AdministratorId: DevKit.Guid | null;
	/** The object Id for a group. */
	AzureActiveDirectoryObjectId: DevKit.Guid | null;
	/** Unique identifier of the business unit with which the team is associated. */
	BusinessUnitId: DevKit.Guid | null;
	/** Unique identifier of the user who created the team. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the team was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the team. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The delegated authorization context for the team. */
	DelegatedAuthorizationId: DevKit.Guid | null;
	/** Description of the team. */
	Description: string | null;
	/** Email address for the team. */
	EMailAddress: string | null;
	/** Exchange rate for the currency associated with the team with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Information about whether the team is a default business unit team. */
	readonly IsDefault: boolean | null;
	readonly IsSasTokenSet: boolean | null;
	/** Membership Type */
	MembershipType: number | null;
	/** Unique identifier of the user who last modified the team. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the team was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the team. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the team. */
	Name: string | null;
	/** Unique identifier of the organization associated with the team. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Unique identifier of the default queue for the team. */
	QueueId: DevKit.Guid | null;
	/** Choose the record that the team relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Sas Token for Team. */
	readonly SasToken: string | null;
	/** For internal use only. */
	readonly ShareLinkQualifier: string | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** Select whether the team will be managed by the system. */
	readonly SystemManaged: boolean | null;
	/** Unique identifier for the team. */
	TeamId: DevKit.Guid | null;
	/** Shows the team template that is associated with the team. */
	TeamTemplateId: DevKit.Guid | null;
	/** Select the team type. */
	TeamType: number | null;
	/** Unique identifier of the currency associated with the team. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Version number of the team. */
	readonly VersionNumber: number | null;
	/** Pronunciation of the full name of the team, written in phonetic hiragana or katakana characters. */
	YomiName: string | null;
}

const TeamFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdministratorId: { schemaName: 'AdministratorId', logicalName: '_administratorid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	AzureActiveDirectoryObjectId: { logicalName: 'azureactivedirectoryobjectid' },
	BusinessUnitId: { schemaName: 'BusinessUnitId', logicalName: '_businessunitid_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DelegatedAuthorizationId: { schemaName: 'DelegatedAuthorizationId', logicalName: '_delegatedauthorizationid_value', entityCollectionName: 'delegatedauthorizations', entityLogicalName: 'delegatedauthorization' },
	Description: { logicalName: 'description' },
	EMailAddress: { logicalName: 'emailaddress' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsDefault: { logicalName: 'isdefault', readOnly: true, type: 'Boolean' },
	IsSasTokenSet: { logicalName: 'issastokenset', readOnly: true, type: 'Boolean' },
	MembershipType: { logicalName: 'membershiptype', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ProcessId: { logicalName: 'processid' },
	QueueId: { schemaName: 'QueueId', logicalName: '_queueid_value', entityCollectionName: 'queues', entityLogicalName: 'queue' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'knowledgearticles', entityLogicalName: 'knowledgearticle' },
	SasToken: { logicalName: 'sastoken', readOnly: true },
	ShareLinkQualifier: { logicalName: 'sharelinkqualifier', readOnly: true },
	StageId: { logicalName: 'stageid' },
	SystemManaged: { logicalName: 'systemmanaged', readOnly: true, type: 'Boolean' },
	TeamId: { logicalName: 'teamid' },
	TeamTemplateId: { schemaName: 'TeamTemplateId', logicalName: '_teamtemplateid_value', entityCollectionName: 'teamtemplates', entityLogicalName: 'teamtemplate' },
	TeamType: { logicalName: 'teamtype', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	YomiName: { logicalName: 'yominame' },
};

/**
 * Team WebApi class for early-bound style coding
 * Usage: const team = new TeamApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TeamApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITeamApi>(entity, 'team', 'teams', TeamFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TeamApi extends ITeamApi { }
