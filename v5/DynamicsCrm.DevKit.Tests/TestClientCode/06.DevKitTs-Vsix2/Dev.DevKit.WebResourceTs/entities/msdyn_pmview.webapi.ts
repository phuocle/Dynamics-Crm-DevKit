/**
 * msdyn_pmview.webapi.ts - msdyn_pmview WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_pmview WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_pmviewApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_pmviewApi, 'FormattedValue'>]: string };
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
	/** Configurations */
	msdyn_configuration: string | null;
	/** Is Private */
	msdyn_isprivate: boolean | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** JSON property bag for view specific output data. */
	msdyn_outputdata: string | null;
	/** Unique identifier for PM View associated with PM View. */
	msdyn_parentpmviewid: DevKit.Guid | null;
	/** Unique identifier for PM Calendar Version associated with PM View. */
	msdyn_pmcalendarversionid: DevKit.Guid | null;
	/** Unique identifier for PM Process Extended Metadata Version associated with PM View. */
	msdyn_pmprocessextendedmetadataversionid: DevKit.Guid | null;
	/** Unique identifier for PM Process Version associated with PM View. */
	msdyn_pmprocessversionid: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_pmviewId: DevKit.Guid | null;
	/** The type of the view. */
	msdyn_type: number | null;
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
	/** Status of the PM View */
	statecode: number | null;
	/** Reason for the status of the PM View */
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

const msdyn_pmviewFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_configuration: { logicalName: 'msdyn_configuration' },
	msdyn_isprivate: { logicalName: 'msdyn_isprivate', type: 'Boolean' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_outputdata: { logicalName: 'msdyn_outputdata' },
	msdyn_parentpmviewid: { schemaName: 'msdyn_parentpmviewid', logicalName: '_msdyn_parentpmviewid_value', entityCollectionName: 'msdyn_pmviews', entityLogicalName: 'msdyn_pmview' },
	msdyn_pmcalendarversionid: { schemaName: 'msdyn_pmcalendarversionid', logicalName: '_msdyn_pmcalendarversionid_value', entityCollectionName: 'msdyn_pmcalendarversions', entityLogicalName: 'msdyn_pmcalendarversion' },
	msdyn_pmprocessextendedmetadataversionid: { schemaName: 'msdyn_pmprocessextendedmetadataversionid', logicalName: '_msdyn_pmprocessextendedmetadataversionid_value', entityCollectionName: 'msdyn_pmprocessextendedmetadataversions', entityLogicalName: 'msdyn_pmprocessextendedmetadataversion' },
	msdyn_pmprocessversionid: { schemaName: 'msdyn_pmprocessversionid', logicalName: '_msdyn_pmprocessversionid_value', entityCollectionName: 'msdyn_pmprocessversions', entityLogicalName: 'msdyn_pmprocessversion' },
	msdyn_pmviewId: { logicalName: 'msdyn_pmviewid' },
	msdyn_type: { logicalName: 'msdyn_type', type: 'Integer' },
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
 * msdyn_pmview WebApi class for early-bound style coding
 * Usage: const msdyn_pmview = new msdyn_pmviewApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_pmviewApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_pmviewApi>(entity, 'msdyn_pmview', 'msdyn_pmviews', msdyn_pmviewFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_pmviewApi extends Imsdyn_pmviewApi { }
