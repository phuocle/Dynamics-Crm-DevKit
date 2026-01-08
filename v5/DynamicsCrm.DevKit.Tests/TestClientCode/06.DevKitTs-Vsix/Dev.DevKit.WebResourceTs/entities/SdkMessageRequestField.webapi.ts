/**
 * SdkMessageRequestField.webapi.ts - SdkMessageRequestField WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SdkMessageRequestField
 * All fields return string representation of their values
 */
export interface ISdkMessageRequestFieldFormattedValue {
	readonly ClrParser: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomizationLevel: string;
	readonly FieldMask: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly Optional: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly ParameterBindingInformation: string;
	readonly Parser: string;
	readonly Position: string;
	readonly PublicName: string;
	readonly SdkMessageRequestFieldId: string;
	readonly SdkMessageRequestFieldIdUnique: string;
	readonly SdkMessageRequestId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * SdkMessageRequestField WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISdkMessageRequestFieldApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISdkMessageRequestFieldFormattedValue;
	/** Common language runtime (CLR)-based parser for the SDK message request field. */
	ClrParser: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the SDK message request field. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SDK message request field was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sdkmessagerequestfield. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Customization level of the SDK message request field. */
	readonly CustomizationLevel: number | null;
	/** Indicates how field contents are used during message processing. 1 - Primary entity, 2- Secondary entity */
	readonly FieldMask: number | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the SDK message request field. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SDK message request field was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sdkmessagerequestfield. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the SDK message request field. */
	Name: string | null;
	/** Information about whether SDK message request field is optional. */
	Optional: boolean | null;
	/** Unique identifier of the organization with which the SDK message request field is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	ParameterBindingInformation: string | null;
	/** Parser for the SDK message request field. */
	Parser: string | null;
	/** Position of the Sdk message request field */
	readonly Position: number | null;
	/** Public name of the SDK message request field. */
	PublicName: string | null;
	/** Unique identifier of the SDK message request field entity. */
	SdkMessageRequestFieldId: DevKit.Guid | null;
	/** Entity identifier of the SDK message request field. */
	readonly SdkMessageRequestFieldIdUnique: DevKit.Guid | null;
	/** Unique identifier of the message request with which the SDK message request field is associated. */
	readonly SdkMessageRequestId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly VersionNumber: number | null;
}

const SdkMessageRequestFieldFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClrParser: { logicalName: 'clrparser' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	FieldMask: { logicalName: 'fieldmask', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	Optional: { logicalName: 'optional', type: 'Boolean' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParameterBindingInformation: { logicalName: 'parameterbindinginformation' },
	Parser: { logicalName: 'parser' },
	Position: { logicalName: 'position', readOnly: true, type: 'Integer' },
	PublicName: { logicalName: 'publicname' },
	SdkMessageRequestFieldId: { logicalName: 'sdkmessagerequestfieldid' },
	SdkMessageRequestFieldIdUnique: { logicalName: 'sdkmessagerequestfieldidunique', readOnly: true },
	SdkMessageRequestId: { schemaName: 'SdkMessageRequestId', logicalName: '_sdkmessagerequestid_value', readOnly: true, entityCollectionName: 'sdkmessagerequests', entityLogicalName: 'sdkmessagerequest' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SdkMessageRequestField WebApi class for early-bound style coding
 * Usage: const sdkMessageRequestField = new SdkMessageRequestFieldApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SdkMessageRequestFieldApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISdkMessageRequestFieldApi>(entity, 'sdkmessagerequestfield', 'sdkmessagerequestfields', SdkMessageRequestFieldFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SdkMessageRequestFieldApi extends ISdkMessageRequestFieldApi { }
