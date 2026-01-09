/**
 * PrivilegesRemovalSetting.webapi.ts - PrivilegesRemovalSetting WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PrivilegesRemovalSetting WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrivilegesRemovalSettingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPrivilegesRemovalSettingApi, 'FormattedValue'>]: string };
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
	/** Unique identifier of the Entity record. */
	ExtensionOfRecordId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Not Supported */
	IsAppendRemoved: boolean | null;
	/** Not Supported */
	IsAppendToRemoved: boolean | null;
	/** Not Supported */
	IsAssignRemoved: boolean | null;
	/** Skip Create Privilege Check for the Entity, which means all authenticated users could create entity records */
	IsCreateRemoved: boolean | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Skip Delete Privilege Check for the Entity, which means all authenticated users could delete entity records */
	IsDeleteRemoved: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Skip Read Privilege Check for the Entity, which means all authenticated users could read all entity records */
	IsReadRemoved: boolean | null;
	/** Skip Write Privilege Check for the Entity, which means all authenticated users could write to any entity records */
	IsWriteRemoved: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier for entity instances */
	PrivilegesRemovalSettingId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const PrivilegesRemovalSettingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExtensionOfRecordId: { schemaName: 'ExtensionOfRecordId', logicalName: '_extensionofrecordid_value', entityCollectionName: 'entities', entityLogicalName: 'entity' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsAppendRemoved: { logicalName: 'isappendremoved', type: 'Boolean' },
	IsAppendToRemoved: { logicalName: 'isappendtoremoved', type: 'Boolean' },
	IsAssignRemoved: { logicalName: 'isassignremoved', type: 'Boolean' },
	IsCreateRemoved: { logicalName: 'iscreateremoved', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsDeleteRemoved: { logicalName: 'isdeleteremoved', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsReadRemoved: { logicalName: 'isreadremoved', type: 'Boolean' },
	IsWriteRemoved: { logicalName: 'iswriteremoved', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PrivilegesRemovalSettingId: { logicalName: 'privilegesremovalsettingid' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PrivilegesRemovalSetting WebApi class for early-bound style coding
 * Usage: const privilegesRemovalSetting = new PrivilegesRemovalSettingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrivilegesRemovalSettingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrivilegesRemovalSettingApi>(entity, 'privilegesremovalsetting', 'privilegesremovalsettings', PrivilegesRemovalSettingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrivilegesRemovalSettingApi extends IPrivilegesRemovalSettingApi { }
