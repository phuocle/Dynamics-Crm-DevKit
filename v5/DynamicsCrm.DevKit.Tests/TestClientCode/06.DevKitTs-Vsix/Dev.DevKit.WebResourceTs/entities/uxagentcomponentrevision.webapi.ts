/**
 * uxagentcomponentrevision.webapi.ts - uxagentcomponentrevision WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * uxagentcomponentrevision WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IuxagentcomponentrevisionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IuxagentcomponentrevisionApi, 'FormattedValue'>]: string };
	/** Agent Message */
	AgentMessage: string | null;
	/** Agent Message Time */
	AgentMessageTime_TimezoneDateAndTime: Date | null;
	/** Component Id */
	ComponentId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
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
	/** Revision Compiled Code */
	readonly RevisionCompiledCode_name: string | null;
	/** Revision Compiled Code String */
	RevisionCompiledCodeString: string | null;
	/** Revision Generated Code */
	RevisionGeneratedCode: string | null;
	/** Revision Manifest */
	RevisionManifest: string | null;
	/** Status of the UX Agent Component Revision */
	statecode: number | null;
	/** Reason for the status of the UX Agent Component Revision */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** User Attachment */
	readonly UserAttachment_name: string | null;
	/** User Message */
	UserMessage: string | null;
	/** User Message Time */
	UserMessageTime_TimezoneDateAndTime: Date | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Unique identifier for entity instances */
	uxagentcomponentrevisionId: DevKit.Guid | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const uxagentcomponentrevisionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AgentMessage: { logicalName: 'agentmessage' },
	AgentMessageTime_TimezoneDateAndTime: { logicalName: 'agentmessagetime', type: 'DateTime' },
	ComponentId: { schemaName: 'ComponentId', logicalName: '_componentid_value', entityCollectionName: 'uxagentcomponents', entityLogicalName: 'uxagentcomponent' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RevisionCompiledCode_name: { logicalName: 'revisioncompiledcode', readOnly: true },
	RevisionCompiledCodeString: { logicalName: 'revisioncompiledcodestring' },
	RevisionGeneratedCode: { logicalName: 'revisiongeneratedcode' },
	RevisionManifest: { logicalName: 'revisionmanifest' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UserAttachment_name: { logicalName: 'userattachment', readOnly: true },
	UserMessage: { logicalName: 'usermessage' },
	UserMessageTime_TimezoneDateAndTime: { logicalName: 'usermessagetime', type: 'DateTime' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	uxagentcomponentrevisionId: { logicalName: 'uxagentcomponentrevisionid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * uxagentcomponentrevision WebApi class for early-bound style coding
 * Usage: const uxagentcomponentrevision = new uxagentcomponentrevisionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class uxagentcomponentrevisionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IuxagentcomponentrevisionApi>(entity, 'uxagentcomponentrevision', 'uxagentcomponentrevisions', uxagentcomponentrevisionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface uxagentcomponentrevisionApi extends IuxagentcomponentrevisionApi { }
