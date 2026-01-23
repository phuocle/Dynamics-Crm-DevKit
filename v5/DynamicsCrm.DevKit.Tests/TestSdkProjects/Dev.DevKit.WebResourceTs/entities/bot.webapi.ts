/**
 * bot.webapi.ts - bot WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * bot WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IbotApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IbotApi, 'FormattedValue'>]: string };
	/** Defines which users may interact with the bot. */
	accesscontrolpolicy: number | null;
	/** Stores information with application manifest data such as Teams application information. */
	applicationmanifestinformation: string | null;
	/** Stores information for the authentication configuration. */
	authenticationconfiguration: string | null;
	/** Defines how the bot should be authenticated to the user. */
	authenticationmode: number | null;
	/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
	authenticationtrigger: number | null;
	/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
	authorizedsecuritygroupids: string | null;
	/** Unique identifier of the Copilot. */
	botId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Used to store content of bot configuration data. */
	Configuration: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 100KB in size. This value can be changed at any time. */
	iconbase64: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** The language identifier (LCID) of this Copilot. */
	Language: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The display name of the Copilot. */
	name: string | null;
	/** Used to identify the origin used to create the bot. */
	Origin: string | null;
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
	/** Unique identifier for Connection Reference associated with Copilot. */
	ProviderConnectionReferenceId: DevKit.Guid | null;
	/** Unique identifier of the user who last published the bot. */
	publishedby: DevKit.Guid | null;
	/** Date and time when the Copilot was last published */
	publishedon_UtcDateAndTime: Date | null;
	/** Runtime provider */
	RuntimeProvider: number | null;
	/** Unique name identifying the Copilot. */
	SchemaName: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Copilot */
	statecode: number | null;
	/** Reason for the status of the Copilot */
	statuscode: number | null;
	/** The list of supported languages by this bot */
	SupportedLanguages: Array<number> | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Used to store information about the synchronization operations of the bot */
	SynchronizationStatus: string | null;
	/** Used to identify the template and version used for the bot default content */
	Template: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const botFieldConfig: DevKit.IWebApiFieldConfigMap = {
	accesscontrolpolicy: { logicalName: 'accesscontrolpolicy', type: 'Integer' },
	applicationmanifestinformation: { logicalName: 'applicationmanifestinformation' },
	authenticationconfiguration: { logicalName: 'authenticationconfiguration' },
	authenticationmode: { logicalName: 'authenticationmode', type: 'Integer' },
	authenticationtrigger: { logicalName: 'authenticationtrigger', type: 'Integer' },
	authorizedsecuritygroupids: { logicalName: 'authorizedsecuritygroupids' },
	botId: { logicalName: 'botid' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Configuration: { logicalName: 'configuration' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	iconbase64: { logicalName: 'iconbase64' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Language: { logicalName: 'language', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	Origin: { logicalName: 'origin' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ProviderConnectionReferenceId: { schemaName: 'ProviderConnectionReferenceId', logicalName: '_providerconnectionreferenceid_value', entityCollectionName: 'connectionreferences', entityLogicalName: 'connectionreference' },
	publishedby: { schemaName: 'publishedby', logicalName: '_publishedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	publishedon_UtcDateAndTime: { logicalName: 'publishedon', type: 'DateTime' },
	RuntimeProvider: { logicalName: 'runtimeprovider', type: 'Integer' },
	SchemaName: { logicalName: 'schemaname' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportedLanguages: { logicalName: 'supportedlanguages', type: 'MultiOptionSet' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	SynchronizationStatus: { logicalName: 'synchronizationstatus' },
	Template: { logicalName: 'template' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * bot WebApi class for early-bound style coding
 * Usage: const bot = new botApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class botApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IbotApi>(entity, 'bot', 'bots', botFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface botApi extends IbotApi { }
