/**
 * conversationtranscript.webapi.ts - conversationtranscript WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * conversationtranscript WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IconversationtranscriptApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IconversationtranscriptApi, 'FormattedValue'>]: string };
	/** Conversation Transcripts related to customer interactions with a Bot */
	bot_conversationtranscriptId: DevKit.Guid | null;
	/** Content of the conversation */
	Content: string | null;
	/** The actual start time of the conversation (not the time it was written to the data store) */
	ConversationStartTime_UtcDateAndTime: Date | null;
	/** Unique identifier for entity instances */
	conversationtranscriptId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Any metadata about the conversation being captured such as the schema version, state, agents, participants, etc if applicable. */
	metadata: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** This defines the type of schema used for the conversation based on format used by the application writing this conversation (PVA, Omni-Channel, OBI, etc) */
	SchemaType: string | null;
	/** The version of the conversation transcript content schema that is used. */
	SchemaVersion: string | null;
	/** Status of the conversationtranscript */
	statecode: number | null;
	/** Reason for the status of the conversationtranscript */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const conversationtranscriptFieldConfig: DevKit.IWebApiFieldConfigMap = {
	bot_conversationtranscriptId: { schemaName: 'bot_conversationtranscriptId', logicalName: '_bot_conversationtranscriptid_value', entityCollectionName: 'bots', entityLogicalName: 'bot' },
	Content: { logicalName: 'content' },
	ConversationStartTime_UtcDateAndTime: { logicalName: 'conversationstarttime', type: 'DateTime' },
	conversationtranscriptId: { logicalName: 'conversationtranscriptid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	metadata: { logicalName: 'metadata' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SchemaType: { logicalName: 'schematype' },
	SchemaVersion: { logicalName: 'schemaversion' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * conversationtranscript WebApi class for early-bound style coding
 * Usage: const conversationtranscript = new conversationtranscriptApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class conversationtranscriptApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IconversationtranscriptApi>(entity, 'conversationtranscript', 'conversationtranscripts', conversationtranscriptFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface conversationtranscriptApi extends IconversationtranscriptApi { }
