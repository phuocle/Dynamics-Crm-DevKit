/**
 * TransformationParameterMapping.webapi.ts - TransformationParameterMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TransformationParameterMapping
 * All fields return string representation of their values
 */
export interface ITransformationParameterMappingFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Data: string;
	readonly DataTypeCode: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly ParameterArrayIndex: string;
	readonly ParameterSequence: string;
	readonly ParameterTypeCode: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly TransformationMappingId: string;
	readonly TransformationParameterMappingId: string;
	readonly TransformationParameterMappingIdUnique: string;
}

/**
 * TransformationParameterMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITransformationParameterMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITransformationParameterMappingFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the parameter mapping. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the transformation parameter mapping was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the transformationparametermapping. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Transformation data for transformation parameter */
	Data: string | null;
	/** Data type of the transformation parameter. */
	DataTypeCode: number | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the transformation parameter mapping. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the transformation parameter mapping was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the transformationparametermapping. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Index of the array if the input parameter is an array. */
	ParameterArrayIndex: number | null;
	/** Parameter sequence number. */
	ParameterSequence: number | null;
	/** Type of transformation parameter. */
	ParameterTypeCode: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier of the transformation with which the parameter is associated. */
	TransformationMappingId: DevKit.Guid | null;
	/** Unique identifier of the transformation parameter mapping. */
	TransformationParameterMappingId: DevKit.Guid | null;
	/** Unique identifier of the Transformation Parameter Mapping. */
	readonly TransformationParameterMappingIdUnique: DevKit.Guid | null;
}

const TransformationParameterMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	DataTypeCode: { logicalName: 'datatypecode', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParameterArrayIndex: { logicalName: 'parameterarrayindex', type: 'Integer' },
	ParameterSequence: { logicalName: 'parametersequence', type: 'Integer' },
	ParameterTypeCode: { logicalName: 'parametertypecode', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TransformationMappingId: { schemaName: 'TransformationMappingId', logicalName: '_transformationmappingid_value', entityCollectionName: 'transformationmappings', entityLogicalName: 'transformationmapping' },
	TransformationParameterMappingId: { logicalName: 'transformationparametermappingid' },
	TransformationParameterMappingIdUnique: { logicalName: 'transformationparametermappingidunique', readOnly: true },
};

/**
 * TransformationParameterMapping WebApi class for early-bound style coding
 * Usage: const transformationParameterMapping = new TransformationParameterMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TransformationParameterMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITransformationParameterMappingApi>(entity, 'transformationparametermapping', 'transformationparametermappings', TransformationParameterMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TransformationParameterMappingApi extends ITransformationParameterMappingApi { }
