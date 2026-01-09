/**
 * msdyn_analysisresult.webapi.ts - msdyn_analysisresult WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_analysisresult WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_analysisresultApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_analysisresultApi, 'FormattedValue'>]: string };
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
	/** The associated Analysis Component that contains the issue described by the Analysis Result. */
	msdyn_AnalysisComponentId: DevKit.Guid | null;
	/** AnalysisComponentType */
	msdyn_AnalysisComponentType: number | null;
	/** The parent Analysis Job that produced the Analysis Result */
	msdyn_AnalysisJobId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_analysisresultId: DevKit.Guid | null;
	/** Category */
	msdyn_Category: number | null;
	/** Component Type */
	msdyn_ComponentType: number | null;
	/** Entity Name */
	msdyn_EntityName: string | null;
	/** File Uri */
	msdyn_FileUri: string | null;
	/** HasResolution */
	msdyn_HasResolution: boolean | null;
	/** Help Link */
	msdyn_helplink: string | null;
	/** Level */
	msdyn_Level: number | null;
	/** Line */
	msdyn_Line: number | null;
	/** Member */
	msdyn_Member: string | null;
	/** Message */
	msdyn_Message: string | null;
	/** Message Arguments */
	msdyn_MessageArguments: string | null;
	/** Message Id */
	msdyn_MessageId: string | null;
	/** Module */
	msdyn_Module: string | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Type of issue that needs to be repaired. Same as IssueType Input Parameter for Solution Health Rule. */
	msdyn_RepairIssueType: string | null;
	/** The return status of a rule run: pass, fail, or configuration error */
	msdyn_ReturnStatus: number | null;
	/** Rule Id */
	msdyn_RuleId: string | null;
	/** Rule Reference Uri */
	msdyn_RuleReferenceUri: string | null;
	/** Severity */
	msdyn_Severity: number | null;
	/** Snippet */
	msdyn_Snippet: string | null;
	/** Message */
	msdyn_SolutionHealthMessage: string | null;
	/** Type */
	msdyn_Type: string | null;
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
	/** Status of the Analysis Result */
	statecode: number | null;
	/** Reason for the status of the Analysis Result */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_analysisresultFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AnalysisComponentId: { schemaName: 'msdyn_AnalysisComponentId', logicalName: '_msdyn_analysiscomponentid_value', entityCollectionName: 'msdyn_analysiscomponents', entityLogicalName: 'msdyn_analysiscomponent' },
	msdyn_AnalysisComponentType: { logicalName: 'msdyn_analysiscomponenttype', type: 'Integer' },
	msdyn_AnalysisJobId: { schemaName: 'msdyn_AnalysisJobId', logicalName: '_msdyn_analysisjobid_value', entityCollectionName: 'msdyn_analysisjobs', entityLogicalName: 'msdyn_analysisjob' },
	msdyn_analysisresultId: { logicalName: 'msdyn_analysisresultid' },
	msdyn_Category: { logicalName: 'msdyn_category', type: 'Integer' },
	msdyn_ComponentType: { logicalName: 'msdyn_componenttype', type: 'Integer' },
	msdyn_EntityName: { logicalName: 'msdyn_entityname' },
	msdyn_FileUri: { logicalName: 'msdyn_fileuri' },
	msdyn_HasResolution: { logicalName: 'msdyn_hasresolution', type: 'Boolean' },
	msdyn_helplink: { logicalName: 'msdyn_helplink' },
	msdyn_Level: { logicalName: 'msdyn_level', type: 'Integer' },
	msdyn_Line: { logicalName: 'msdyn_line', type: 'Integer' },
	msdyn_Member: { logicalName: 'msdyn_member' },
	msdyn_Message: { logicalName: 'msdyn_message' },
	msdyn_MessageArguments: { logicalName: 'msdyn_messagearguments' },
	msdyn_MessageId: { logicalName: 'msdyn_messageid' },
	msdyn_Module: { logicalName: 'msdyn_module' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_RepairIssueType: { logicalName: 'msdyn_repairissuetype' },
	msdyn_ReturnStatus: { logicalName: 'msdyn_returnstatus', type: 'Integer' },
	msdyn_RuleId: { logicalName: 'msdyn_ruleid' },
	msdyn_RuleReferenceUri: { logicalName: 'msdyn_rulereferenceuri' },
	msdyn_Severity: { logicalName: 'msdyn_severity', type: 'Integer' },
	msdyn_Snippet: { logicalName: 'msdyn_snippet' },
	msdyn_SolutionHealthMessage: { logicalName: 'msdyn_solutionhealthmessage' },
	msdyn_Type: { logicalName: 'msdyn_type' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_analysisresult WebApi class for early-bound style coding
 * Usage: const msdyn_analysisresult = new msdyn_analysisresultApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_analysisresultApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_analysisresultApi>(entity, 'msdyn_analysisresult', 'msdyn_analysisresults', msdyn_analysisresultFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_analysisresultApi extends Imsdyn_analysisresultApi { }
