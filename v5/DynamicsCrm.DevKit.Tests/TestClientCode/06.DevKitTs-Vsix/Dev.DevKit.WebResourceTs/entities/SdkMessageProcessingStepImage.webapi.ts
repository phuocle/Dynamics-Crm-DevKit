/**
 * SdkMessageProcessingStepImage.webapi.ts - SdkMessageProcessingStepImage WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SdkMessageProcessingStepImage
 * All fields return string representation of their values
 */
export interface ISdkMessageProcessingStepImageFormattedValue {
	readonly Attributes: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomizationLevel: string;
	readonly Description: string;
	readonly EntityAlias: string;
	readonly ImageType: string;
	readonly IntroducedVersion: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly MessagePropertyName: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly RelatedAttributeName: string;
	readonly SdkMessageProcessingStepId: string;
	readonly SdkMessageProcessingStepImageId: string;
	readonly SdkMessageProcessingStepImageIdUnique: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * SdkMessageProcessingStepImage WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISdkMessageProcessingStepImageApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISdkMessageProcessingStepImageFormattedValue;
	/** Comma-separated list of attributes that are to be passed into the SDK message processing step image. */
	Attributes: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the SDK message processing step image. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SDK message processing step image was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sdkmessageprocessingstepimage. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Customization level of the SDK message processing step image. */
	readonly CustomizationLevel: number | null;
	/** Description of the SDK message processing step image. */
	Description: string | null;
	/** Key name used to access the pre-image or post-image property bags in a step. */
	EntityAlias: string | null;
	/** Type of image requested. */
	ImageType: number | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	readonly IsManaged: boolean | null;
	/** Name of the property on the Request message. */
	MessagePropertyName: string | null;
	/** Unique identifier of the user who last modified the SDK message processing step. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SDK message processing step was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepimage. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of SdkMessage processing step image. */
	Name: string | null;
	/** Unique identifier of the organization with which the SDK message processing step is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Name of the related entity. */
	RelatedAttributeName: string | null;
	/** Unique identifier of the SDK message processing step. */
	SdkMessageProcessingStepId: DevKit.Guid | null;
	/** Unique identifier of the SDK message processing step image entity. */
	SdkMessageProcessingStepImageId: DevKit.Guid | null;
	/** Unique identifier of the SDK message processing step image. */
	readonly SdkMessageProcessingStepImageIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Number that identifies a specific revision of the step image.  */
	readonly VersionNumber: number | null;
}

const SdkMessageProcessingStepImageFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Attributes: { logicalName: 'attributes' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	Description: { logicalName: 'description' },
	EntityAlias: { logicalName: 'entityalias' },
	ImageType: { logicalName: 'imagetype', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	MessagePropertyName: { logicalName: 'messagepropertyname' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RelatedAttributeName: { logicalName: 'relatedattributename' },
	SdkMessageProcessingStepId: { schemaName: 'SdkMessageProcessingStepId', logicalName: '_sdkmessageprocessingstepid_value', entityCollectionName: 'sdkmessageprocessingsteps', entityLogicalName: 'sdkmessageprocessingstep' },
	SdkMessageProcessingStepImageId: { logicalName: 'sdkmessageprocessingstepimageid' },
	SdkMessageProcessingStepImageIdUnique: { logicalName: 'sdkmessageprocessingstepimageidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SdkMessageProcessingStepImage WebApi class for early-bound style coding
 * Usage: const sdkMessageProcessingStepImage = new SdkMessageProcessingStepImageApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SdkMessageProcessingStepImageApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISdkMessageProcessingStepImageApi>(entity, 'sdkmessageprocessingstepimage', 'sdkmessageprocessingstepimages', SdkMessageProcessingStepImageFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SdkMessageProcessingStepImageApi extends ISdkMessageProcessingStepImageApi { }
