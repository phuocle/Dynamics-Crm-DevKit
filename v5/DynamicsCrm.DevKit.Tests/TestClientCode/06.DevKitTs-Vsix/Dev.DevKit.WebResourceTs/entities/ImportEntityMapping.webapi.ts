/**
 * ImportEntityMapping.webapi.ts - ImportEntityMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ImportEntityMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IImportEntityMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IImportEntityMappingApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the import entity mapping. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the import entity mapping was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the importentitymapping. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Information about whether the entity needs to be processed to find and delete duplicate records. */
	DeDupe: number | null;
	/** Unique identifier of the import entity mapping. */
	ImportEntityMappingId: DevKit.Guid | null;
	/** Unique identifier of the Import Entity Mapping. */
	readonly ImportEntityMappingIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated data map. */
	ImportMapId: DevKit.Guid | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the import entity mapping. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the import entity mapping was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the importentitymapping. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Information about whether the import entity mapping needs to be processed. */
	ProcessCode: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Name of the source entity. */
	SourceEntityName: string | null;
	/** Status of the import entity mapping. */
	readonly StateCode: number | null;
	/** Reason for the status of the import entity mapping. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Name of the Microsoft Dynamics 365 entity. */
	TargetEntityName: string | null;
}

const ImportEntityMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DeDupe: { logicalName: 'dedupe', type: 'Integer' },
	ImportEntityMappingId: { logicalName: 'importentitymappingid' },
	ImportEntityMappingIdUnique: { logicalName: 'importentitymappingidunique', readOnly: true },
	ImportMapId: { schemaName: 'ImportMapId', logicalName: '_importmapid_value', entityCollectionName: 'importmaps', entityLogicalName: 'importmap' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ProcessCode: { logicalName: 'processcode', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SourceEntityName: { logicalName: 'sourceentityname' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TargetEntityName: { logicalName: 'targetentityname' },
};

/**
 * ImportEntityMapping WebApi class for early-bound style coding
 * Usage: const importEntityMapping = new ImportEntityMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ImportEntityMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IImportEntityMappingApi>(entity, 'importentitymapping', 'importentitymappings', ImportEntityMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ImportEntityMappingApi extends IImportEntityMappingApi { }
