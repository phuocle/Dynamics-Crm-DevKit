/**
 * SdkMessageRequest.webapi.ts - SdkMessageRequest WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SdkMessageRequest
 * All fields return string representation of their values
 */
export interface ISdkMessageRequestFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomizationLevel: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SdkMessagePairId: string;
	readonly SdkMessageRequestId: string;
	readonly SdkMessageRequestIdUnique: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * SdkMessageRequest WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISdkMessageRequestApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISdkMessageRequestFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the SDK message request. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SDK message request was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sdkmessagerequest. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Customization level of the SDK message request. */
	readonly CustomizationLevel: number | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the SDK message request. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SDK message request was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sdkmessagerequest. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the SDK message request. */
	Name: string | null;
	/** Unique identifier of the organization with which the SDK message request is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the message pair with which the SDK message request is associated. */
	readonly SdkMessagePairId: DevKit.Guid | null;
	/** Unique identifier of the SDK message request entity. */
	SdkMessageRequestId: DevKit.Guid | null;
	/** Unique identifier of the SDK message request. */
	readonly SdkMessageRequestIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SdkMessageRequestFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SdkMessagePairId: { schemaName: 'SdkMessagePairId', logicalName: '_sdkmessagepairid_value', readOnly: true, entityCollectionName: 'sdkmessagepairs', entityLogicalName: 'sdkmessagepair' },
	SdkMessageRequestId: { logicalName: 'sdkmessagerequestid' },
	SdkMessageRequestIdUnique: { logicalName: 'sdkmessagerequestidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SdkMessageRequest WebApi class for early-bound style coding
 * Usage: const sdkMessageRequest = new SdkMessageRequestApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SdkMessageRequestApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISdkMessageRequestApi>(entity, 'sdkmessagerequest', 'sdkmessagerequests', SdkMessageRequestFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SdkMessageRequestApi extends ISdkMessageRequestApi { }
