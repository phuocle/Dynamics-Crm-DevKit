/**
 * botcomponent.webapi.ts - botcomponent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * botcomponent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IbotcomponentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IbotcomponentApi, 'FormattedValue'>]: string };
	/** Accent Color for this re-usable component */
	AccentColor: string | null;
	/** Unique identifier for entity instances */
	botcomponentId: DevKit.Guid | null;
	/** canmodifystate */
	canmodifystate: boolean | null;
	/** The category of Copilot component. */
	Category: string | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** The sub type of Copilot component. */
	ComponentType: number | null;
	/** The content or metadata of the Bot Component that defines its structure and properties. */
	Content: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The content of the Bot Component in OBI format */
	Data: string | null;
	/** Used to store dependencies between bots. */
	Dependencies: string | null;
	/** Contains searchable text for the bot component */
	Description: string | null;
	/** This is a file type attribute to store File attachments. */
	readonly FileData_name: string | null;
	/** Link to learn More about this component */
	HelpLink: string | null;
	/** Icon Url for this component */
	IconUrl: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Language of the copilot component */
	Language: number | null;
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
	/** Unique identifier for Copilot component collection associated with Copilot component. */
	ParentBotComponentCollectionId: DevKit.Guid | null;
	/** Unique identifier for Copilot component associated with Copilot component. */
	ParentBotComponentId: DevKit.Guid | null;
	/** Unique identifier for Bot associated with the Component. */
	ParentBotId: DevKit.Guid | null;
	/** Reuse Policy for the copilot component */
	ReusePolicy: number | null;
	/** SchemaName */
	SchemaName: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the BotComponent */
	statecode: number | null;
	/** Reason for the status of the BotComponent */
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

const botcomponentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccentColor: { logicalName: 'accentcolor' },
	botcomponentId: { logicalName: 'botcomponentid' },
	canmodifystate: { logicalName: 'canmodifystate', type: 'Boolean' },
	Category: { logicalName: 'category' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ComponentType: { logicalName: 'componenttype', type: 'Integer' },
	Content: { logicalName: 'content' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	Dependencies: { logicalName: 'dependencies' },
	Description: { logicalName: 'description' },
	FileData_name: { logicalName: 'filedata', readOnly: true },
	HelpLink: { logicalName: 'helplink' },
	IconUrl: { logicalName: 'iconurl' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Language: { logicalName: 'language', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentBotComponentCollectionId: { schemaName: 'ParentBotComponentCollectionId', logicalName: '_parentbotcomponentcollectionid_value', entityCollectionName: 'botcomponentcollections', entityLogicalName: 'botcomponentcollection' },
	ParentBotComponentId: { schemaName: 'ParentBotComponentId', logicalName: '_parentbotcomponentid_value', entityCollectionName: 'botcomponents', entityLogicalName: 'botcomponent' },
	ParentBotId: { schemaName: 'ParentBotId', logicalName: '_parentbotid_value', entityCollectionName: 'bots', entityLogicalName: 'bot' },
	ReusePolicy: { logicalName: 'reusepolicy', type: 'Integer' },
	SchemaName: { logicalName: 'schemaname' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * botcomponent WebApi class for early-bound style coding
 * Usage: const botcomponent = new botcomponentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class botcomponentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IbotcomponentApi>(entity, 'botcomponent', 'botcomponents', botcomponentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface botcomponentApi extends IbotcomponentApi { }
