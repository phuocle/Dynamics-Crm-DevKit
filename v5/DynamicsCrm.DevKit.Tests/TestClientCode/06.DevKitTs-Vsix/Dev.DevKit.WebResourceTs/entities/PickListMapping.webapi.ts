/**
 * PickListMapping.webapi.ts - PickListMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PickListMapping
 * All fields return string representation of their values
 */
export interface IPickListMappingFormattedValue {
	readonly ColumnMappingId: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly PickListMappingId: string;
	readonly PickListMappingIdUnique: string;
	readonly ProcessCode: string;
	readonly SolutionId: string;
	readonly SourceValue: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SupportingSolutionId: string;
	readonly TargetValue: string;
}

/**
 * PickListMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPickListMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPickListMappingFormattedValue;
	/** Unique identifier of the column mapping with which this list value mapping is associated. */
	ColumnMappingId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the list value mapping. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the list value mapping was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the picklistmapping. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the list value mapping. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the list value mapping was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the picklistmapping. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the picklist mapping. */
	PickListMappingId: DevKit.Guid | null;
	/** Unique identifier of the Pick List Mapping. */
	readonly PickListMappingIdUnique: DevKit.Guid | null;
	/** Information about whether the list value mapping needs to be processed. */
	ProcessCode: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Source value to be replaced. */
	SourceValue: string | null;
	/** Status of the picklist mapping. */
	readonly StateCode: number | null;
	/** Reason for the status of the picklist mapping. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Microsoft Dynamics 365 list value with which to replace the source value. */
	TargetValue: number | null;
}

const PickListMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ColumnMappingId: { schemaName: 'ColumnMappingId', logicalName: '_columnmappingid_value', entityCollectionName: 'columnmappings', entityLogicalName: 'columnmapping' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PickListMappingId: { logicalName: 'picklistmappingid' },
	PickListMappingIdUnique: { logicalName: 'picklistmappingidunique', readOnly: true },
	ProcessCode: { logicalName: 'processcode', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SourceValue: { logicalName: 'sourcevalue' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TargetValue: { logicalName: 'targetvalue', type: 'Integer' },
};

/**
 * PickListMapping WebApi class for early-bound style coding
 * Usage: const pickListMapping = new PickListMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PickListMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPickListMappingApi>(entity, 'picklistmapping', 'picklistmappings', PickListMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PickListMappingApi extends IPickListMappingApi { }
