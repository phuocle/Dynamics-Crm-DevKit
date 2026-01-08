/**
 * msdyn_analysisjob.webapi.ts - msdyn_analysisjob WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_analysisjob WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_analysisjobApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_analysisjobApi, 'FormattedValue'>]: string };
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
	/** Unique identifier for entity instances */
	msdyn_analysisjobId: DevKit.Guid | null;
	/** Analysis job report stored in excel format.  */
	readonly msdyn_AnalysisJobsReport_name: string | null;
	/** Custom Details */
	msdyn_CustomDetails: string | null;
	/** Display Status */
	msdyn_DisplayStatus: string | null;
	/** End Time */
	msdyn_EndTime_UtcDateAndTime: Date | null;
	/** Error Count */
	msdyn_ErrorCount: number | null;
	/** Exception */
	msdyn_Exception: string | null;
	/** Health rule set Failure In App Notification Enabled. */
	msdyn_InAppNotificationEnabled: boolean | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Rule Fail Count */
	msdyn_RuleFailCount: number | null;
	/** Rule Pass Count */
	msdyn_RulePassCount: number | null;
	/** Rule Run Count */
	msdyn_RuleRunCount: number | null;
	/** Run Correlation Id */
	msdyn_RunCorrelationId: string | null;
	/** Critical Severity Count */
	msdyn_sevcriticalcount: number | null;
	/** High Severity Count */
	msdyn_sevhighcount: number | null;
	/** Low Severity Count */
	msdyn_sevlowcount: number | null;
	/** Medium Severity Count */
	msdyn_sevmediumcount: number | null;
	/** Start Time */
	msdyn_StartTime_UtcDateAndTime: Date | null;
	/** Suggestion Count */
	msdyn_SuggestionCount: number | null;
	/** Tenant Id */
	msdyn_TenantId: string | null;
	/** Health rule set Trigger Type. */
	msdyn_TriggerType: string | null;
	/** Warning Count */
	msdyn_WarningCount: number | null;
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
	/** Status of the Analysis Job */
	statecode: number | null;
	/** Reason for the status of the Analysis Job */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_analysisjobFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_analysisjobId: { logicalName: 'msdyn_analysisjobid' },
	msdyn_AnalysisJobsReport_name: { logicalName: 'msdyn_analysisjobsreport', readOnly: true },
	msdyn_CustomDetails: { logicalName: 'msdyn_customdetails' },
	msdyn_DisplayStatus: { logicalName: 'msdyn_displaystatus' },
	msdyn_EndTime_UtcDateAndTime: { logicalName: 'msdyn_endtime', type: 'DateTime' },
	msdyn_ErrorCount: { logicalName: 'msdyn_errorcount', type: 'Integer' },
	msdyn_Exception: { logicalName: 'msdyn_exception' },
	msdyn_InAppNotificationEnabled: { logicalName: 'msdyn_inappnotificationenabled', type: 'Boolean' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_RuleFailCount: { logicalName: 'msdyn_rulefailcount', type: 'Integer' },
	msdyn_RulePassCount: { logicalName: 'msdyn_rulepasscount', type: 'Integer' },
	msdyn_RuleRunCount: { logicalName: 'msdyn_ruleruncount', type: 'Integer' },
	msdyn_RunCorrelationId: { logicalName: 'msdyn_runcorrelationid' },
	msdyn_sevcriticalcount: { logicalName: 'msdyn_sevcriticalcount', type: 'Integer' },
	msdyn_sevhighcount: { logicalName: 'msdyn_sevhighcount', type: 'Integer' },
	msdyn_sevlowcount: { logicalName: 'msdyn_sevlowcount', type: 'Integer' },
	msdyn_sevmediumcount: { logicalName: 'msdyn_sevmediumcount', type: 'Integer' },
	msdyn_StartTime_UtcDateAndTime: { logicalName: 'msdyn_starttime', type: 'DateTime' },
	msdyn_SuggestionCount: { logicalName: 'msdyn_suggestioncount', type: 'Integer' },
	msdyn_TenantId: { logicalName: 'msdyn_tenantid' },
	msdyn_TriggerType: { logicalName: 'msdyn_triggertype' },
	msdyn_WarningCount: { logicalName: 'msdyn_warningcount', type: 'Integer' },
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
 * msdyn_analysisjob WebApi class for early-bound style coding
 * Usage: const msdyn_analysisjob = new msdyn_analysisjobApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_analysisjobApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_analysisjobApi>(entity, 'msdyn_analysisjob', 'msdyn_analysisjobs', msdyn_analysisjobFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_analysisjobApi extends Imsdyn_analysisjobApi { }
