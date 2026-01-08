/**
 * msdyn_pmtemplate.webapi.ts - msdyn_pmtemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_pmtemplate
 * All fields return string representation of their values
 */
export interface Imsdyn_pmtemplateFormattedValue {
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
	readonly msdyn_author: string;
	readonly msdyn_category: string;
	readonly msdyn_configuration: string;
	readonly msdyn_description: string;
	readonly msdyn_icon: string;
	readonly msdyn_iconname: string;
	readonly msdyn_isprivatetemplate: string;
	readonly msdyn_locale: string;
	readonly msdyn_mashupscript: string;
	readonly msdyn_name: string;
	readonly msdyn_pmtemplateId: string;
	readonly msdyn_subcategory: string;
	readonly msdyn_templategroupid: string;
	readonly msdyn_templateversion: string;
	readonly msdyn_type: string;
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
 * msdyn_pmtemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_pmtemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_pmtemplateFormattedValue;
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
	/** Author */
	msdyn_author: string | null;
	/** Category */
	msdyn_category: string | null;
	/** Configuration */
	msdyn_configuration: string | null;
	/** Description */
	msdyn_description: string | null;
	/** Icon */
	msdyn_icon: string | null;
	/** Icon name */
	msdyn_iconname: string | null;
	/** Indicates if this is a private template */
	msdyn_isprivatetemplate: boolean | null;
	/** locale */
	msdyn_locale: string | null;
	/** Mashupscript */
	msdyn_mashupscript: string | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Unique identifier for entity instances */
	msdyn_pmtemplateId: DevKit.Guid | null;
	/** Sub Category */
	msdyn_subcategory: string | null;
	/** Template group Id */
	msdyn_templategroupid: string | null;
	/** Template Version */
	msdyn_templateversion: string | null;
	/** Type */
	msdyn_type: string | null;
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
	/** Status of the PM Template */
	statecode: number | null;
	/** Reason for the status of the PM Template */
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

const msdyn_pmtemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_author: { logicalName: 'msdyn_author' },
	msdyn_category: { logicalName: 'msdyn_category' },
	msdyn_configuration: { logicalName: 'msdyn_configuration' },
	msdyn_description: { logicalName: 'msdyn_description' },
	msdyn_icon: { logicalName: 'msdyn_icon' },
	msdyn_iconname: { logicalName: 'msdyn_iconname' },
	msdyn_isprivatetemplate: { logicalName: 'msdyn_isprivatetemplate', type: 'Boolean' },
	msdyn_locale: { logicalName: 'msdyn_locale' },
	msdyn_mashupscript: { logicalName: 'msdyn_mashupscript' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_pmtemplateId: { logicalName: 'msdyn_pmtemplateid' },
	msdyn_subcategory: { logicalName: 'msdyn_subcategory' },
	msdyn_templategroupid: { logicalName: 'msdyn_templategroupid' },
	msdyn_templateversion: { logicalName: 'msdyn_templateversion' },
	msdyn_type: { logicalName: 'msdyn_type' },
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
 * msdyn_pmtemplate WebApi class for early-bound style coding
 * Usage: const msdyn_pmtemplate = new msdyn_pmtemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_pmtemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_pmtemplateApi>(entity, 'msdyn_pmtemplate', 'msdyn_pmtemplates', msdyn_pmtemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_pmtemplateApi extends Imsdyn_pmtemplateApi { }
