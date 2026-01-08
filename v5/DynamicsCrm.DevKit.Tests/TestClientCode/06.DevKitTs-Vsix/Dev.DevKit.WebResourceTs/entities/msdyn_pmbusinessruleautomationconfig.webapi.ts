/**
 * msdyn_pmbusinessruleautomationconfig.webapi.ts - msdyn_pmbusinessruleautomationconfig WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_pmbusinessruleautomationconfig WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_pmbusinessruleautomationconfigApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_pmbusinessruleautomationconfigApi, 'FormattedValue'>]: string };
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
	/** Unique identifier for Custom API */
	CustomApiId: DevKit.Guid | null;
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
	/** Business rule identifier on which the trigger enabled from Minit desktop application. */
	msdyn_BusinessRuleId: string | null;
	/** Indicates the toggling behavior of business rule trigger. */
	msdyn_IsEnabled: boolean | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Unique identifier for entity instances */
	msdyn_pmbusinessruleautomationconfigId: DevKit.Guid | null;
	/** Unique identifier of the PM Inferred Task */
	msdyn_PmInferredTaskId: DevKit.Guid | null;
	/** The JSON blob text represents a set of selected attributes, excluding the caseId field, which is automatically provided. */
	msdyn_SelectedCustomAttributes: string | null;
	/** An editable two choice column to support the user to toggle the inclusion of all emitted results from next analysis onwards. */
	msdyn_shouldincludeallemitsinnextrun: boolean | null;
	/** Unique Name for the entity. */
	msdyn_UniqueName: string | null;
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
	/** Status of the PM Business Rule Automation Config */
	statecode: number | null;
	/** Reason for the status of the PM Business Rule Automation Config */
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

const msdyn_pmbusinessruleautomationconfigFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomApiId: { schemaName: 'CustomApiId', logicalName: '_customapiid_value', entityCollectionName: 'customapis', entityLogicalName: 'customapi' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_BusinessRuleId: { logicalName: 'msdyn_businessruleid' },
	msdyn_IsEnabled: { logicalName: 'msdyn_isenabled', type: 'Boolean' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_pmbusinessruleautomationconfigId: { logicalName: 'msdyn_pmbusinessruleautomationconfigid' },
	msdyn_PmInferredTaskId: { schemaName: 'msdyn_PmInferredTaskId', logicalName: '_msdyn_pminferredtaskid_value', entityCollectionName: 'msdyn_pminferredtasks', entityLogicalName: 'msdyn_pminferredtask' },
	msdyn_SelectedCustomAttributes: { logicalName: 'msdyn_selectedcustomattributes' },
	msdyn_shouldincludeallemitsinnextrun: { logicalName: 'msdyn_shouldincludeallemitsinnextrun', type: 'Boolean' },
	msdyn_UniqueName: { logicalName: 'msdyn_uniquename' },
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
 * msdyn_pmbusinessruleautomationconfig WebApi class for early-bound style coding
 * Usage: const msdyn_pmbusinessruleautomationconfig = new msdyn_pmbusinessruleautomationconfigApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_pmbusinessruleautomationconfigApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_pmbusinessruleautomationconfigApi>(entity, 'msdyn_pmbusinessruleautomationconfig', 'msdyn_pmbusinessruleautomationconfigs', msdyn_pmbusinessruleautomationconfigFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_pmbusinessruleautomationconfigApi extends Imsdyn_pmbusinessruleautomationconfigApi { }
