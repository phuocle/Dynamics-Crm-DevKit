/**
 * msdyn_knowledgemanagementsetting.webapi.ts - msdyn_knowledgemanagementsetting WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_knowledgemanagementsetting
 * All fields return string representation of their values
 */
export interface Imsdyn_knowledgemanagementsettingFormattedValue {
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
	readonly msdyn_actionlist: string;
	readonly msdyn_autosuggestionfield: string;
	readonly msdyn_defaultemailrecipient: string;
	readonly msdyn_entityname: string;
	readonly msdyn_isautosuggestionsenabled: string;
	readonly msdyn_knowledgemanagementsettingId: string;
	readonly msdyn_showcontextualactions: string;
	readonly msdyn_status: string;
	readonly msdyn_UniqueName: string;
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
 * msdyn_knowledgemanagementsetting WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_knowledgemanagementsettingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_knowledgemanagementsettingFormattedValue;
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
	/** msdyn_actionlist */
	msdyn_actionlist: Array<number> | null;
	/** msdyn_autosuggestionfield */
	msdyn_autosuggestionfield: string | null;
	/** msdyn_defaultemailrecipient */
	msdyn_defaultemailrecipient: string | null;
	/** Logical Name of the Entity for which Knowledge Management is being enabled. */
	msdyn_entityname: string | null;
	/** msdyn_isautosuggestionsenabled */
	msdyn_isautosuggestionsenabled: boolean | null;
	/** Unique identifier for entity instances */
	msdyn_knowledgemanagementsettingId: DevKit.Guid | null;
	/** msdyn_showcontextualactions */
	msdyn_showcontextualactions: boolean | null;
	/** msdyn_status */
	msdyn_status: number | null;
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
	/** Status of the KnowledgeManagementSetting */
	statecode: number | null;
	/** Reason for the status of the KnowledgeManagementSetting */
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

const msdyn_knowledgemanagementsettingFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_actionlist: { logicalName: 'msdyn_actionlist', type: 'MultiOptionSet' },
	msdyn_autosuggestionfield: { logicalName: 'msdyn_autosuggestionfield' },
	msdyn_defaultemailrecipient: { logicalName: 'msdyn_defaultemailrecipient' },
	msdyn_entityname: { logicalName: 'msdyn_entityname' },
	msdyn_isautosuggestionsenabled: { logicalName: 'msdyn_isautosuggestionsenabled', type: 'Boolean' },
	msdyn_knowledgemanagementsettingId: { logicalName: 'msdyn_knowledgemanagementsettingid' },
	msdyn_showcontextualactions: { logicalName: 'msdyn_showcontextualactions', type: 'Boolean' },
	msdyn_status: { logicalName: 'msdyn_status', type: 'Integer' },
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
 * msdyn_knowledgemanagementsetting WebApi class for early-bound style coding
 * Usage: const msdyn_knowledgemanagementsetting = new msdyn_knowledgemanagementsettingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_knowledgemanagementsettingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_knowledgemanagementsettingApi>(entity, 'msdyn_knowledgemanagementsetting', 'msdyn_knowledgemanagementsettings', msdyn_knowledgemanagementsettingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_knowledgemanagementsettingApi extends Imsdyn_knowledgemanagementsettingApi { }
