/**
 * LookUpMapping.webapi.ts - LookUpMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for LookUpMapping
 * All fields return string representation of their values
 */
export interface ILookUpMappingFormattedValue {
	readonly ColumnMappingId: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly LookUpAttributeName: string;
	readonly LookUpEntityName: string;
	readonly LookUpMappingId: string;
	readonly LookUpMappingIdUnique: string;
	readonly LookUpSourceCode: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly ProcessCode: string;
	readonly SolutionId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SupportingSolutionId: string;
	readonly TransformationParameterMappingId: string;
}

/**
 * LookUpMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ILookUpMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ILookUpMappingFormattedValue;
	/** Unique identifier of the column mapping with which this lookup mapping is associated. */
	ColumnMappingId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the lookup mapping. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the lookup mapping was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the lookupmapping. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Name of the field with which the lookup is associated. */
	LookUpAttributeName: string | null;
	/** Name of the entity with which the lookup is associated. */
	LookUpEntityName: string | null;
	/** Unique identifier of the lookup mapping. */
	LookUpMappingId: DevKit.Guid | null;
	/** Unique identifier of the LookUp Mapping. */
	readonly LookUpMappingIdUnique: DevKit.Guid | null;
	/** Lookup source code for lookup mapping. */
	LookUpSourceCode: number | null;
	/** Unique identifier of the user who last modified the lookup mapping. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the lookup mapping was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the lookupmapping. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Information about whether the lookup mapping has to be processed. */
	ProcessCode: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the lookup mapping. */
	readonly StateCode: number | null;
	/** Reason for the status of the lookup mapping. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier of the transformation parameter mapping with which this lookup mapping is associated. */
	TransformationParameterMappingId: DevKit.Guid | null;
}

const LookUpMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ColumnMappingId: { schemaName: 'ColumnMappingId', logicalName: '_columnmappingid_value', entityCollectionName: 'columnmappings', entityLogicalName: 'columnmapping' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	LookUpAttributeName: { logicalName: 'lookupattributename' },
	LookUpEntityName: { logicalName: 'lookupentityname' },
	LookUpMappingId: { logicalName: 'lookupmappingid' },
	LookUpMappingIdUnique: { logicalName: 'lookupmappingidunique', readOnly: true },
	LookUpSourceCode: { logicalName: 'lookupsourcecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ProcessCode: { logicalName: 'processcode', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TransformationParameterMappingId: { schemaName: 'TransformationParameterMappingId', logicalName: '_transformationparametermappingid_value', entityCollectionName: 'transformationparametermappings', entityLogicalName: 'transformationparametermapping' },
};

/**
 * LookUpMapping WebApi class for early-bound style coding
 * Usage: const lookUpMapping = new LookUpMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class LookUpMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ILookUpMappingApi>(entity, 'lookupmapping', 'lookupmappings', LookUpMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface LookUpMappingApi extends ILookUpMappingApi { }
