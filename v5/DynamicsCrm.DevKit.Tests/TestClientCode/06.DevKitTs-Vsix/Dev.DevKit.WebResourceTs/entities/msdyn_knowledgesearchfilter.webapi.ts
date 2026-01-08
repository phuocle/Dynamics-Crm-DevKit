/**
 * msdyn_knowledgesearchfilter.webapi.ts - msdyn_knowledgesearchfilter WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_knowledgesearchfilter WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_knowledgesearchfilterApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_knowledgesearchfilterApi, 'FormattedValue'>]: string };
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
	/** Attribute name of filter. */
	msdyn_AttributeName: string | null;
	/** Allows you to choose default values based on which articles are displayed to users in the knowledge control and knowledge search page. */
	msdyn_DefaultValues: string | null;
	/** Indicates whether the filter is activated or not. */
	msdyn_Enabled: boolean | null;
	/** Entity name of the filter. */
	msdyn_EntityName: string | null;
	/** Is Custom */
	msdyn_IsCustom: boolean | null;
	/** Unique identifier for entity instances */
	msdyn_knowledgesearchfilterId: DevKit.Guid | null;
	/** The name of the knowledge search filter. */
	msdyn_name: string | null;
	/** Order of filter. */
	msdyn_OrderId: number | null;
	/** Allows you to choose values that will be displayed for the users in the knowledge control and knowledge search page. */
	msdyn_SelectedValues: string | null;
	/** Unique name of the knowledge search filter. */
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
	/** Status of the Knowledge search filter */
	statecode: number | null;
	/** Reason for the status of the Knowledge search filter */
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

const msdyn_knowledgesearchfilterFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_AttributeName: { logicalName: 'msdyn_attributename' },
	msdyn_DefaultValues: { logicalName: 'msdyn_defaultvalues' },
	msdyn_Enabled: { logicalName: 'msdyn_enabled', type: 'Boolean' },
	msdyn_EntityName: { logicalName: 'msdyn_entityname' },
	msdyn_IsCustom: { logicalName: 'msdyn_iscustom', type: 'Boolean' },
	msdyn_knowledgesearchfilterId: { logicalName: 'msdyn_knowledgesearchfilterid' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_OrderId: { logicalName: 'msdyn_orderid', type: 'Integer' },
	msdyn_SelectedValues: { logicalName: 'msdyn_selectedvalues' },
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
 * msdyn_knowledgesearchfilter WebApi class for early-bound style coding
 * Usage: const msdyn_knowledgesearchfilter = new msdyn_knowledgesearchfilterApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_knowledgesearchfilterApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_knowledgesearchfilterApi>(entity, 'msdyn_knowledgesearchfilter', 'msdyn_knowledgesearchfilters', msdyn_knowledgesearchfilterFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_knowledgesearchfilterApi extends Imsdyn_knowledgesearchfilterApi { }
