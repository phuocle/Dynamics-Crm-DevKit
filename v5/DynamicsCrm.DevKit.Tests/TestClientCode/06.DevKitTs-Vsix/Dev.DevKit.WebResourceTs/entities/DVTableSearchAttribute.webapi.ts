/**
 * DVTableSearchAttribute.webapi.ts - DVTableSearchAttribute WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for DVTableSearchAttribute
 * All fields return string representation of their values
 */
export interface IDVTableSearchAttributeFormattedValue {
	readonly attribute: string;
	readonly AttributeLogicalName: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DVTableSearchAttributeId: string;
	readonly dvtablesearchentity: string;
	readonly ImportSequenceNumber: string;
	readonly IsAttributeEnabledForVectorSearch: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly IsRetrievable: string;
	readonly IsSearchable: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
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
 * DVTableSearchAttribute WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDVTableSearchAttributeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IDVTableSearchAttributeFormattedValue;
	/** Unique identifier for Attribute associated with DVTableSearchAttribute. */
	attribute: DevKit.Guid | null;
	/** AttributeLogicalName */
	AttributeLogicalName: string | null;
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
	/** Unique identifier for entity instances */
	DVTableSearchAttributeId: DevKit.Guid | null;
	/** Unique identifier for DVTableSearchEntity associated with DVTableSearchAttribute. */
	dvtablesearchentity: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Is Attribute Enabled for Vector Search */
	IsAttributeEnabledForVectorSearch: boolean | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Is Retrievable */
	IsRetrievable: boolean | null;
	/** Is Searchable */
	IsSearchable: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
	Name: string | null;
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
	/** Status of the DVTableSearchAttribute */
	statecode: number | null;
	/** Reason for the status of the DVTableSearchAttribute */
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

const DVTableSearchAttributeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	attribute: { schemaName: 'attribute', logicalName: '_attribute_value', entityCollectionName: 'attributes', entityLogicalName: 'attribute' },
	AttributeLogicalName: { logicalName: 'attributelogicalname' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DVTableSearchAttributeId: { logicalName: 'dvtablesearchattributeid' },
	dvtablesearchentity: { schemaName: 'dvtablesearchentity', logicalName: '_dvtablesearchentity_value', entityCollectionName: 'dvtablesearchentities', entityLogicalName: 'dvtablesearchentity' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsAttributeEnabledForVectorSearch: { logicalName: 'isattributeenabledforvectorsearch', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsRetrievable: { logicalName: 'isretrievable', type: 'Boolean' },
	IsSearchable: { logicalName: 'issearchable', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
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
 * DVTableSearchAttribute WebApi class for early-bound style coding
 * Usage: const dVTableSearchAttribute = new DVTableSearchAttributeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DVTableSearchAttributeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDVTableSearchAttributeApi>(entity, 'dvtablesearchattribute', 'dvtablesearchattributes', DVTableSearchAttributeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DVTableSearchAttributeApi extends IDVTableSearchAttributeApi { }
