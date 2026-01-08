/**
 * AIPluginTitle.webapi.ts - AIPluginTitle WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for AIPluginTitle
 * All fields return string representation of their values
 */
export interface IAIPluginTitleFormattedValue {
	readonly AccentColor: string;
	readonly AIPluginTitleId: string;
	readonly BaseArtifactId: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly DeveloperName: string;
	readonly DisplayName: string;
	readonly Icon: string;
	readonly IconsColorImage: string;
	readonly IconsColorImageId: string;
	readonly IconsOutlineImage: string;
	readonly IconsOutlineImageId: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustom: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly PluginTitleVersion: string;
	readonly PrivacyURL: string;
	readonly ShortDescription: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TermsOfUseUrl: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly WebsiteUrl: string;
}

/**
 * AIPluginTitle WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAIPluginTitleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAIPluginTitleFormattedValue;
	/** Accent Color */
	AccentColor: string | null;
	/** Unique identifier for entity instances */
	AIPluginTitleId: DevKit.Guid | null;
	/** BaseArtifact Id */
	BaseArtifactId: string | null;
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
	/** Description */
	Description: string | null;
	/** Developer Name */
	DeveloperName: string | null;
	/** Display Name */
	DisplayName: string | null;
	/** Icon URI */
	Icon: string | null;
	/** Icons Color Image */
	IconsColorImage: string | null;
	readonly IconsColorImageId: DevKit.Guid | null;
	/** Icons Outline Image */
	IconsOutlineImage: string | null;
	readonly IconsOutlineImageId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** IsCustom */
	IsCustom: boolean | null;
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
	/** Name */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Plugin Title Version */
	PluginTitleVersion: string | null;
	/** Privacy URL */
	PrivacyURL: string | null;
	/** Short Description */
	ShortDescription: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the AIPluginTitle */
	statecode: number | null;
	/** Reason for the status of the AIPluginTitle */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Terms Of Use Url */
	TermsOfUseUrl: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Website Url */
	WebsiteUrl: string | null;
}

const AIPluginTitleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccentColor: { logicalName: 'accentcolor' },
	AIPluginTitleId: { logicalName: 'aiplugintitleid' },
	BaseArtifactId: { logicalName: 'baseartifactid' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	DeveloperName: { logicalName: 'developername' },
	DisplayName: { logicalName: 'displayname' },
	Icon: { logicalName: 'icon' },
	IconsColorImage: { logicalName: 'iconscolorimage' },
	IconsColorImageId: { logicalName: 'iconscolorimageid', readOnly: true },
	IconsOutlineImage: { logicalName: 'iconsoutlineimage' },
	IconsOutlineImageId: { logicalName: 'iconsoutlineimageid', readOnly: true },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustom: { logicalName: 'iscustom', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PluginTitleVersion: { logicalName: 'plugintitleversion' },
	PrivacyURL: { logicalName: 'privacyurl' },
	ShortDescription: { logicalName: 'shortdescription' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TermsOfUseUrl: { logicalName: 'termsofuseurl' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebsiteUrl: { logicalName: 'websiteurl' },
};

/**
 * AIPluginTitle WebApi class for early-bound style coding
 * Usage: const aIPluginTitle = new AIPluginTitleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AIPluginTitleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAIPluginTitleApi>(entity, 'aiplugintitle', 'aiplugintitles', AIPluginTitleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AIPluginTitleApi extends IAIPluginTitleApi { }
