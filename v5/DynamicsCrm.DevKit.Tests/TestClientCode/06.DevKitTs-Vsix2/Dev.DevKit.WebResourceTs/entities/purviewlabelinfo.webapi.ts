/**
 * purviewlabelinfo.webapi.ts - purviewlabelinfo WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * purviewlabelinfo WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IpurviewlabelinfoApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IpurviewlabelinfoApi, 'FormattedValue'>]: string };
	/** Applicable To */
	ApplicableTo: string | null;
	/** Application Mode */
	ApplicationMode: string | null;
	/** Color */
	Color: string | null;
	/** Content Formats */
	ContentFormats: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** GUID of the Sub Label */
	DefaultSubLabelId: DevKit.Guid | null;
	/** Description of the label Priority (sensitivity) */
	Description: string | null;
	/** Has Protection */
	HasProtection: boolean | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Is Active */
	IsActive: boolean | null;
	/** Is Appliable */
	IsApplicable: boolean | null;
	/** Is Dataverse Protected */
	IsDataverseProtected: boolean | null;
	/** Is Default */
	IsDefault: boolean | null;
	/** Is Enabled */
	IsEnabled: boolean | null;
	/** Is Endpoint Protection Enabled */
	IsEndpointProtectionEnabled: boolean | null;
	/** Is Parent */
	IsParent: boolean | null;
	/** Is SMIME Encrypt Enabled */
	IsSmimeEncryptEnabled: boolean | null;
	/** Is SMIME Sign Enabled */
	IsSmimeSignEnabled: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier for Purview Label Info associated with Purview Label Info. */
	ParentLabelId: DevKit.Guid | null;
	/** Priority */
	Priority: number | null;
	/** Unique identifier for entity instances */
	purviewlabelinfoId: DevKit.Guid | null;
	/** Status of the PurviewLabelInfo */
	statecode: number | null;
	/** Reason for the status of the PurviewLabelInfo */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Tooltip */
	Tooltip: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const purviewlabelinfoFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ApplicableTo: { logicalName: 'applicableto' },
	ApplicationMode: { logicalName: 'applicationmode' },
	Color: { logicalName: 'color' },
	ContentFormats: { logicalName: 'contentformats' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DefaultSubLabelId: { logicalName: 'defaultsublabelid' },
	Description: { logicalName: 'description' },
	HasProtection: { logicalName: 'hasprotection', type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsActive: { logicalName: 'isactive', type: 'Boolean' },
	IsApplicable: { logicalName: 'isapplicable', type: 'Boolean' },
	IsDataverseProtected: { logicalName: 'isdataverseprotected', type: 'Boolean' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsEnabled: { logicalName: 'isenabled', type: 'Boolean' },
	IsEndpointProtectionEnabled: { logicalName: 'isendpointprotectionenabled', type: 'Boolean' },
	IsParent: { logicalName: 'isparent', type: 'Boolean' },
	IsSmimeEncryptEnabled: { logicalName: 'issmimeencryptenabled', type: 'Boolean' },
	IsSmimeSignEnabled: { logicalName: 'issmimesignenabled', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ParentLabelId: { schemaName: 'ParentLabelId', logicalName: '_parentlabelid_value', entityCollectionName: 'purviewlabelinfos', entityLogicalName: 'purviewlabelinfo' },
	Priority: { logicalName: 'priority', type: 'Integer' },
	purviewlabelinfoId: { logicalName: 'purviewlabelinfoid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Tooltip: { logicalName: 'tooltip' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * purviewlabelinfo WebApi class for early-bound style coding
 * Usage: const purviewlabelinfo = new purviewlabelinfoApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class purviewlabelinfoApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IpurviewlabelinfoApi>(entity, 'purviewlabelinfo', 'purviewlabelinfos', purviewlabelinfoFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface purviewlabelinfoApi extends IpurviewlabelinfoApi { }
