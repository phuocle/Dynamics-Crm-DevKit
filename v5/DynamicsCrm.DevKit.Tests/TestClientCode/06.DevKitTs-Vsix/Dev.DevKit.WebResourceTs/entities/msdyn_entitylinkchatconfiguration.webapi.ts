/**
 * msdyn_entitylinkchatconfiguration.webapi.ts - msdyn_entitylinkchatconfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_entitylinkchatconfiguration
 * All fields return string representation of their values
 */
export interface Imsdyn_entitylinkchatconfigurationFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_ContextViewId: string;
	readonly msdyn_EnableAiIntroductionMessage: string;
	readonly msdyn_EnableAiSuggestion: string;
	readonly msdyn_EnableAutoNameChats: string;
	readonly msdyn_EnableKickoffMessage: string;
	readonly msdyn_EnableLogicBasedSuggestion: string;
	readonly msdyn_entitylinkchatconfigurationId: string;
	readonly msdyn_EntityType: string;
	readonly msdyn_filteringAttributes: string;
	readonly msdyn_isEnabledForBot: string;
	readonly msdyn_Name: string;
	readonly msdyn_RecentChatLinkerCanUnlink: string;
	readonly msdyn_RecordOwnerCanUnlink: string;
	readonly msdyn_UniqueName: string;
	readonly msdyn_UserCanJoinChat: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_entitylinkchatconfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_entitylinkchatconfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_entitylinkchatconfigurationFormattedValue;
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
	/** The view id of the selected context view. */
	msdyn_ContextViewId: string | null;
	/** Value of Enable AI introduction message */
	msdyn_EnableAiIntroductionMessage: boolean | null;
	/** Value of Enable AI suggestion */
	msdyn_EnableAiSuggestion: boolean | null;
	/** Enable auto name chats */
	msdyn_EnableAutoNameChats: boolean | null;
	/** Enable kickoff message */
	msdyn_EnableKickoffMessage: boolean | null;
	/** Enable logic-based suggestion */
	msdyn_EnableLogicBasedSuggestion: boolean | null;
	/** Unique identifier for entity instances */
	msdyn_entitylinkchatconfigurationId: DevKit.Guid | null;
	/** The entity setup for link team configuration. */
	msdyn_EntityType: DevKit.Guid | null;
	/** List of attributes that we want bot event updates on */
	msdyn_filteringAttributes: string | null;
	/** To indicate whether bot event update is enabled for this record */
	msdyn_isEnabledForBot: boolean | null;
	/** The name of link team configuration. */
	msdyn_Name: string | null;
	/** Value of recent chat linker can unlink */
	msdyn_RecentChatLinkerCanUnlink: boolean | null;
	/** Value of record owner can unlink */
	msdyn_RecordOwnerCanUnlink: boolean | null;
	/** Unique Name for the entity. */
	msdyn_UniqueName: string | null;
	/** Value of User can join chat */
	msdyn_UserCanJoinChat: boolean | null;
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
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Entitylink chat configuration */
	statecode: number | null;
	/** Reason for the status of the Entitylink chat configuration */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_entitylinkchatconfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_ContextViewId: { logicalName: 'msdyn_contextviewid' },
	msdyn_EnableAiIntroductionMessage: { logicalName: 'msdyn_enableaiintroductionmessage', type: 'Boolean' },
	msdyn_EnableAiSuggestion: { logicalName: 'msdyn_enableaisuggestion', type: 'Boolean' },
	msdyn_EnableAutoNameChats: { logicalName: 'msdyn_enableautonamechats', type: 'Boolean' },
	msdyn_EnableKickoffMessage: { logicalName: 'msdyn_enablekickoffmessage', type: 'Boolean' },
	msdyn_EnableLogicBasedSuggestion: { logicalName: 'msdyn_enablelogicbasedsuggestion', type: 'Boolean' },
	msdyn_entitylinkchatconfigurationId: { logicalName: 'msdyn_entitylinkchatconfigurationid' },
	msdyn_EntityType: { schemaName: 'msdyn_EntityType', logicalName: '_msdyn_entitytype_value', entityCollectionName: 'entities', entityLogicalName: 'entity' },
	msdyn_filteringAttributes: { logicalName: 'msdyn_filteringattributes' },
	msdyn_isEnabledForBot: { logicalName: 'msdyn_isenabledforbot', type: 'Boolean' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_RecentChatLinkerCanUnlink: { logicalName: 'msdyn_recentchatlinkercanunlink', type: 'Boolean' },
	msdyn_RecordOwnerCanUnlink: { logicalName: 'msdyn_recordownercanunlink', type: 'Boolean' },
	msdyn_UniqueName: { logicalName: 'msdyn_uniquename' },
	msdyn_UserCanJoinChat: { logicalName: 'msdyn_usercanjoinchat', type: 'Boolean' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_entitylinkchatconfiguration WebApi class for early-bound style coding
 * Usage: const msdyn_entitylinkchatconfiguration = new msdyn_entitylinkchatconfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_entitylinkchatconfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_entitylinkchatconfigurationApi>(entity, 'msdyn_entitylinkchatconfiguration', 'msdyn_entitylinkchatconfigurations', msdyn_entitylinkchatconfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_entitylinkchatconfigurationApi extends Imsdyn_entitylinkchatconfigurationApi { }
