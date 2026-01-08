/**
 * SdkMessageResponseField.webapi.ts - SdkMessageResponseField WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SdkMessageResponseField
 * All fields return string representation of their values
 */
export interface ISdkMessageResponseFieldFormattedValue {
	readonly ClrFormatter: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomizationLevel: string;
	readonly Formatter: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly ParameterBindingInformation: string;
	readonly Position: string;
	readonly PublicName: string;
	readonly SdkMessageResponseFieldId: string;
	readonly SdkMessageResponseFieldIdUnique: string;
	readonly SdkMessageResponseId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly Value: string;
	readonly VersionNumber: string;
}

/**
 * SdkMessageResponseField WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISdkMessageResponseFieldApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISdkMessageResponseFieldFormattedValue;
	/** Common language runtime (CLR)-based formatter of the SDK message response field. */
	ClrFormatter: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the SDK message response field. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SDK message response field was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sdkmessageresponsefield. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Customization level of the SDK message response field. */
	readonly CustomizationLevel: number | null;
	/** Formatter for the SDK message response field. */
	Formatter: string | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the SDK message response field. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SDK message response field was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sdkmessageresponsefield. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the SDK message response field. */
	Name: string | null;
	/** Unique identifier of the organization with which the SDK message response field is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	ParameterBindingInformation: string | null;
	/** Position of the Sdk message response field */
	readonly Position: number | null;
	/** Public name of the SDK message response field. */
	PublicName: string | null;
	/** Unique identifier of the SDK message response field entity. */
	SdkMessageResponseFieldId: DevKit.Guid | null;
	/** Unique identifier of the SDK message response field. */
	readonly SdkMessageResponseFieldIdUnique: DevKit.Guid | null;
	/** Unique identifier of the message response with which the SDK message response field is associated. */
	readonly SdkMessageResponseId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Actual value of the SDK message response field. */
	Value: string | null;
	/** For internal use only. */
	readonly VersionNumber: number | null;
}

const SdkMessageResponseFieldFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClrFormatter: { logicalName: 'clrformatter' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	Formatter: { logicalName: 'formatter' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParameterBindingInformation: { logicalName: 'parameterbindinginformation' },
	Position: { logicalName: 'position', readOnly: true, type: 'Integer' },
	PublicName: { logicalName: 'publicname' },
	SdkMessageResponseFieldId: { logicalName: 'sdkmessageresponsefieldid' },
	SdkMessageResponseFieldIdUnique: { logicalName: 'sdkmessageresponsefieldidunique', readOnly: true },
	SdkMessageResponseId: { schemaName: 'SdkMessageResponseId', logicalName: '_sdkmessageresponseid_value', readOnly: true, entityCollectionName: 'sdkmessageresponses', entityLogicalName: 'sdkmessageresponse' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Value: { logicalName: 'value' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SdkMessageResponseField WebApi class for early-bound style coding
 * Usage: const sdkMessageResponseField = new SdkMessageResponseFieldApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SdkMessageResponseFieldApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISdkMessageResponseFieldApi>(entity, 'sdkmessageresponsefield', 'sdkmessageresponsefields', SdkMessageResponseFieldFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SdkMessageResponseFieldApi extends ISdkMessageResponseFieldApi { }
