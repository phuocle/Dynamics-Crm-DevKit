/**
 * msdyn_analysiscomponent.webapi.ts - msdyn_analysiscomponent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_analysiscomponent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_analysiscomponentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_analysiscomponentApi, 'FormattedValue'>]: string };
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
	msdyn_analysiscomponentId: DevKit.Guid | null;
	/** Analysis Component Type */
	msdyn_AnalysisComponentType: number | null;
	/** The parent Analysis Job that analyzed this particular Analysis Component. */
	msdyn_AnalysisJobId: DevKit.Guid | null;
	/** Component Id */
	msdyn_ComponentId: string | null;
	/** Component Name */
	msdyn_ComponentName: string | null;
	/** Component Type */
	msdyn_ComponentType: number | null;
	/** Component Version */
	msdyn_ComponentVersion: string | null;
	/** Error Count */
	msdyn_ErrorCount: number | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Retry Count */
	msdyn_RetryCount: number | null;
	/** Rule Fail Count */
	msdyn_RuleFailCount: number | null;
	/** Rule Pass Count */
	msdyn_RulePassCount: number | null;
	/** Rule Pass Rate */
	msdyn_RulePassRate: number | null;
	/** Critical Severity Count */
	msdyn_sevcriticalcount: number | null;
	/** High Severity Count */
	msdyn_sevhighcount: number | null;
	/** Low Severity Count */
	msdyn_sevlowcount: number | null;
	/** Medium Severity Count */
	msdyn_sevmediumcount: number | null;
	/** The Solution Health Rule Set for which this is analysis component is for. */
	msdyn_SolutionHealthRuleSetId: DevKit.Guid | null;
	/** Suggestion Count */
	msdyn_SuggestionCount: number | null;
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
	/** Status of the Analysis Component */
	statecode: number | null;
	/** Reason for the status of the Analysis Component */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_analysiscomponentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_analysiscomponentId: { logicalName: 'msdyn_analysiscomponentid' },
	msdyn_AnalysisComponentType: { logicalName: 'msdyn_analysiscomponenttype', type: 'Integer' },
	msdyn_AnalysisJobId: { schemaName: 'msdyn_AnalysisJobId', logicalName: '_msdyn_analysisjobid_value', entityCollectionName: 'msdyn_analysisjobs', entityLogicalName: 'msdyn_analysisjob' },
	msdyn_ComponentId: { logicalName: 'msdyn_componentid' },
	msdyn_ComponentName: { logicalName: 'msdyn_componentname' },
	msdyn_ComponentType: { logicalName: 'msdyn_componenttype', type: 'Integer' },
	msdyn_ComponentVersion: { logicalName: 'msdyn_componentversion' },
	msdyn_ErrorCount: { logicalName: 'msdyn_errorcount', type: 'Integer' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_RetryCount: { logicalName: 'msdyn_retrycount', type: 'Integer' },
	msdyn_RuleFailCount: { logicalName: 'msdyn_rulefailcount', type: 'Integer' },
	msdyn_RulePassCount: { logicalName: 'msdyn_rulepasscount', type: 'Integer' },
	msdyn_RulePassRate: { logicalName: 'msdyn_rulepassrate', type: 'Integer' },
	msdyn_sevcriticalcount: { logicalName: 'msdyn_sevcriticalcount', type: 'Integer' },
	msdyn_sevhighcount: { logicalName: 'msdyn_sevhighcount', type: 'Integer' },
	msdyn_sevlowcount: { logicalName: 'msdyn_sevlowcount', type: 'Integer' },
	msdyn_sevmediumcount: { logicalName: 'msdyn_sevmediumcount', type: 'Integer' },
	msdyn_SolutionHealthRuleSetId: { schemaName: 'msdyn_SolutionHealthRuleSetId', logicalName: '_msdyn_solutionhealthrulesetid_value', entityCollectionName: 'msdyn_solutionhealthrulesets', entityLogicalName: 'msdyn_solutionhealthruleset' },
	msdyn_SuggestionCount: { logicalName: 'msdyn_suggestioncount', type: 'Integer' },
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
 * msdyn_analysiscomponent WebApi class for early-bound style coding
 * Usage: const msdyn_analysiscomponent = new msdyn_analysiscomponentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_analysiscomponentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_analysiscomponentApi>(entity, 'msdyn_analysiscomponent', 'msdyn_analysiscomponents', msdyn_analysiscomponentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_analysiscomponentApi extends Imsdyn_analysiscomponentApi { }
