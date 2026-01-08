/**
 * SdkMessagePair.webapi.ts - SdkMessagePair WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SdkMessagePair WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISdkMessagePairApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISdkMessagePairApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the SDK message pair. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SDK message pair was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sdkmessagepair. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Customization level of the SDK message filter. */
	readonly CustomizationLevel: number | null;
	/** Version in which the component is deprecated. */
	DeprecatedVersion: string | null;
	/** Endpoint that the message pair is associated with. */
	Endpoint: string | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the SDK message pair. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SDK message pair was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sdkmessagepair. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Namespace that the message pair is associated with. */
	Namespace: string | null;
	/** Unique identifier of the organization with which the SDK message pair is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** SDK Message Binding Information */
	SdkMessageBindingInformation: string | null;
	/** Unique identifier of the message with which the SDK message pair is associated. */
	readonly SdkMessageId: DevKit.Guid | null;
	/** Unique identifier of the SDK message pair entity. */
	SdkMessagePairId: DevKit.Guid | null;
	/** Unique identifier of the SDK message pair. */
	readonly SdkMessagePairIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly VersionNumber: number | null;
}

const SdkMessagePairFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	DeprecatedVersion: { logicalName: 'deprecatedversion' },
	Endpoint: { logicalName: 'endpoint' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Namespace: { logicalName: 'namespace' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SdkMessageBindingInformation: { logicalName: 'sdkmessagebindinginformation' },
	SdkMessageId: { schemaName: 'SdkMessageId', logicalName: '_sdkmessageid_value', readOnly: true, entityCollectionName: 'sdkmessages', entityLogicalName: 'sdkmessage' },
	SdkMessagePairId: { logicalName: 'sdkmessagepairid' },
	SdkMessagePairIdUnique: { logicalName: 'sdkmessagepairidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SdkMessagePair WebApi class for early-bound style coding
 * Usage: const sdkMessagePair = new SdkMessagePairApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SdkMessagePairApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISdkMessagePairApi>(entity, 'sdkmessagepair', 'sdkmessagepairs', SdkMessagePairFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SdkMessagePairApi extends ISdkMessagePairApi { }
