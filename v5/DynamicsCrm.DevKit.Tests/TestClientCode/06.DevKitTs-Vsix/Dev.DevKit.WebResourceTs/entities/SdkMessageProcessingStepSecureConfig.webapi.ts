/**
 * SdkMessageProcessingStepSecureConfig.webapi.ts - SdkMessageProcessingStepSecureConfig WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SdkMessageProcessingStepSecureConfig
 * All fields return string representation of their values
 */
export interface ISdkMessageProcessingStepSecureConfigFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomizationLevel: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly SdkMessageProcessingStepSecureConfigId: string;
	readonly SdkMessageProcessingStepSecureConfigIdUnique: string;
	readonly SecureConfig: string;
}

/**
 * SdkMessageProcessingStepSecureConfig WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISdkMessageProcessingStepSecureConfigApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISdkMessageProcessingStepSecureConfigFormattedValue;
	/** Unique identifier of the user who created the SDK message processing step. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SDK message processing step was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sdkmessageprocessingstepsecureconfig. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Customization level of the SDK message processing step secure configuration. */
	readonly CustomizationLevel: number | null;
	/** Unique identifier of the user who last modified the SDK message processing step. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SDK message processing step was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepsecureconfig. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization with which the SDK message processing step is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the SDK message processing step secure configuration. */
	SdkMessageProcessingStepSecureConfigId: DevKit.Guid | null;
	/** Unique identifier of the SDK message processing step. */
	readonly SdkMessageProcessingStepSecureConfigIdUnique: DevKit.Guid | null;
	/** Secure step-specific configuration for the plug-in type that is passed to the plug-in's constructor at run time. */
	SecureConfig: string | null;
}

const SdkMessageProcessingStepSecureConfigFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	SdkMessageProcessingStepSecureConfigId: { logicalName: 'sdkmessageprocessingstepsecureconfigid' },
	SdkMessageProcessingStepSecureConfigIdUnique: { logicalName: 'sdkmessageprocessingstepsecureconfigidunique', readOnly: true },
	SecureConfig: { logicalName: 'secureconfig' },
};

/**
 * SdkMessageProcessingStepSecureConfig WebApi class for early-bound style coding
 * Usage: const sdkMessageProcessingStepSecureConfig = new SdkMessageProcessingStepSecureConfigApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SdkMessageProcessingStepSecureConfigApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISdkMessageProcessingStepSecureConfigApi>(entity, 'sdkmessageprocessingstepsecureconfig', 'sdkmessageprocessingstepsecureconfigs', SdkMessageProcessingStepSecureConfigFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SdkMessageProcessingStepSecureConfigApi extends ISdkMessageProcessingStepSecureConfigApi { }
