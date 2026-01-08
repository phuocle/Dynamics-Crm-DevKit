/**
 * msdyn_solutionhealthrule.webapi.ts - msdyn_solutionhealthrule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_solutionhealthrule
 * All fields return string representation of their values
 */
export interface Imsdyn_solutionhealthruleFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_ComponentType: string;
	readonly msdyn_Description: string;
	readonly msdyn_name: string;
	readonly msdyn_OwningSolutionId: string;
	readonly msdyn_ResolutionAction: string;
	readonly msdyn_resolutionmessage: string;
	readonly msdyn_ResolutionType: string;
	readonly msdyn_solutionhealthruleId: string;
	readonly msdyn_solutionhealthrulesetId: string;
	readonly msdyn_uniquename: string;
	readonly msdyn_Workflow: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_solutionhealthrule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_solutionhealthruleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_solutionhealthruleFormattedValue;
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
	/** Type of the Component being diagnosed like appmodule, sitemap, systemform etc. */
	msdyn_ComponentType: string | null;
	/** Rule description. */
	msdyn_Description: string | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** OwningSolutionId */
	msdyn_OwningSolutionId: string | null;
	/** ResolutionAction */
	msdyn_ResolutionAction: DevKit.Guid | null;
	/** This message will be visible to end use when he/she tried to resolve rule failure. */
	msdyn_resolutionmessage: string | null;
	/** Type of Resolution action. */
	msdyn_ResolutionType: number | null;
	/** Unique identifier for entity instances */
	msdyn_solutionhealthruleId: DevKit.Guid | null;
	/** Rule set to which the rule belongs to. */
	msdyn_solutionhealthrulesetId: DevKit.Guid | null;
	/** Unique Name */
	msdyn_uniquename: string | null;
	/** Workflow */
	msdyn_Workflow: DevKit.Guid | null;
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
	/** Status of the Solution Health Rule */
	statecode: number | null;
	/** Reason for the status of the Solution Health Rule */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_solutionhealthruleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_ComponentType: { logicalName: 'msdyn_componenttype' },
	msdyn_Description: { logicalName: 'msdyn_description' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_OwningSolutionId: { logicalName: 'msdyn_owningsolutionid' },
	msdyn_ResolutionAction: { schemaName: 'msdyn_ResolutionAction', logicalName: '_msdyn_resolutionaction_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	msdyn_resolutionmessage: { logicalName: 'msdyn_resolutionmessage' },
	msdyn_ResolutionType: { logicalName: 'msdyn_resolutiontype', type: 'Integer' },
	msdyn_solutionhealthruleId: { logicalName: 'msdyn_solutionhealthruleid' },
	msdyn_solutionhealthrulesetId: { schemaName: 'msdyn_solutionhealthrulesetId', logicalName: '_msdyn_solutionhealthrulesetid_value', entityCollectionName: 'msdyn_solutionhealthrulesets', entityLogicalName: 'msdyn_solutionhealthruleset' },
	msdyn_uniquename: { logicalName: 'msdyn_uniquename' },
	msdyn_Workflow: { schemaName: 'msdyn_Workflow', logicalName: '_msdyn_workflow_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
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
 * msdyn_solutionhealthrule WebApi class for early-bound style coding
 * Usage: const msdyn_solutionhealthrule = new msdyn_solutionhealthruleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_solutionhealthruleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_solutionhealthruleApi>(entity, 'msdyn_solutionhealthrule', 'msdyn_solutionhealthrules', msdyn_solutionhealthruleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_solutionhealthruleApi extends Imsdyn_solutionhealthruleApi { }
