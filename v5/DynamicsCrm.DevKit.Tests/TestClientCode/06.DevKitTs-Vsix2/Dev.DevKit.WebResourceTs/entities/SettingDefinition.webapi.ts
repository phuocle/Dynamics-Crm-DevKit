/**
 * SettingDefinition.webapi.ts - SettingDefinition WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SettingDefinition WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISettingDefinitionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISettingDefinitionApi, 'FormattedValue'>]: string };
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
	/** Data type of Setting Definition. */
	DataType: number | null;
	/** Default value to be used, if there is no associated App Setting Value. */
	DefaultValue: string | null;
	/** The description of the Setting Definition. */
	Description: string | null;
	/** Display name of the Setting Definition. */
	DisplayName: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Specifies information url of the setting. */
	InformationUrl: string | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Specifies whether settings is hidden from ui designer. */
	IsHidden: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Specifies whether settings can be overridden at an app or org level by other publishers. */
	IsOverridable: boolean | null;
	/** Specifies whether setting is a internal platform setting. */
	IsPlatform: boolean | null;
	/** Specifies whether settings controls the flighting a preview feature. */
	readonly IsPreview: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Overridable Level of Setting Definition. */
	OverridableLevel: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Specifies settings release level. */
	ReleaseLevel: number | null;
	/** Unique identifier for entity instances */
	SettingDefinitionId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the SettingDefinition */
	statecode: number | null;
	/** Reason for the status of the SettingDefinition */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique name of the Setting Definition. */
	UniqueName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const SettingDefinitionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DataType: { logicalName: 'datatype', type: 'Integer' },
	DefaultValue: { logicalName: 'defaultvalue' },
	Description: { logicalName: 'description' },
	DisplayName: { logicalName: 'displayname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InformationUrl: { logicalName: 'informationurl' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsHidden: { logicalName: 'ishidden', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsOverridable: { logicalName: 'isoverridable', type: 'Boolean' },
	IsPlatform: { logicalName: 'isplatform', type: 'Boolean' },
	IsPreview: { logicalName: 'ispreview', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverridableLevel: { logicalName: 'overridablelevel', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ReleaseLevel: { logicalName: 'releaselevel', type: 'Integer' },
	SettingDefinitionId: { logicalName: 'settingdefinitionid' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SettingDefinition WebApi class for early-bound style coding
 * Usage: const settingDefinition = new SettingDefinitionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SettingDefinitionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISettingDefinitionApi>(entity, 'settingdefinition', 'settingdefinitions', SettingDefinitionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SettingDefinitionApi extends ISettingDefinitionApi { }
