/**
 * solutioncomponentconfiguration.webapi.ts - solutioncomponentconfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * solutioncomponentconfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsolutioncomponentconfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IsolutioncomponentconfigurationApi, 'FormattedValue'>]: string };
	/** Boolean that indicates if an export key without a prefix is allowed. */
	AllowExportKeyWithoutPrefix: boolean | null;
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
	/** Comma separated list of required components not supported for automatic dependency removal */
	DependencyRemovalDisabledForComponents: string | null;
	/** Unique identifier for Entity associated with Solution Component Configuration. */
	EntityId: DevKit.Guid | null;
	/** File Format */
	FileFormat: number | null;
	/** File Scope */
	FileScope: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Boolean that indicates if invoke substitution API will be used on component on template mode import */
	InvokeSubstitution: boolean | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Boolean that indicates if the component has user interface enabled. */
	isdisplayable: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Boolean that indicates if the component is 1-1 child component. */
	IsOneToOneChildComponent: boolean | null;
	/** IsSoftDeleteEnabled */
	IsSoftDeleteEnabled: boolean | null;
	/** Boolean that indicates if the component should be versioned. */
	IsVersioningEnabled: boolean | null;
	/** Boolean that indicates if the component should retain its unmanaged customization after conversion. */
	KeepActiveCustomizationAfterConversion: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier for entity instances */
	solutioncomponentconfigurationId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Solution Component Configuration */
	statecode: number | null;
	/** Reason for the status of the Solution Component Configuration */
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

const solutioncomponentconfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowExportKeyWithoutPrefix: { logicalName: 'allowexportkeywithoutprefix', type: 'Boolean' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DependencyRemovalDisabledForComponents: { logicalName: 'dependencyremovaldisabledforcomponents' },
	EntityId: { schemaName: 'EntityId', logicalName: '_entityid_value', entityCollectionName: 'entities', entityLogicalName: 'entity' },
	FileFormat: { logicalName: 'fileformat', type: 'Integer' },
	FileScope: { logicalName: 'filescope', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InvokeSubstitution: { logicalName: 'invokesubstitution', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	isdisplayable: { logicalName: 'isdisplayable', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsOneToOneChildComponent: { logicalName: 'isonetoonechildcomponent', type: 'Boolean' },
	IsSoftDeleteEnabled: { logicalName: 'issoftdeleteenabled', type: 'Boolean' },
	IsVersioningEnabled: { logicalName: 'isversioningenabled', type: 'Boolean' },
	KeepActiveCustomizationAfterConversion: { logicalName: 'keepactivecustomizationafterconversion', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	solutioncomponentconfigurationId: { logicalName: 'solutioncomponentconfigurationid' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * solutioncomponentconfiguration WebApi class for early-bound style coding
 * Usage: const solutioncomponentconfiguration = new solutioncomponentconfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class solutioncomponentconfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsolutioncomponentconfigurationApi>(entity, 'solutioncomponentconfiguration', 'solutioncomponentconfigurations', solutioncomponentconfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface solutioncomponentconfigurationApi extends IsolutioncomponentconfigurationApi { }
