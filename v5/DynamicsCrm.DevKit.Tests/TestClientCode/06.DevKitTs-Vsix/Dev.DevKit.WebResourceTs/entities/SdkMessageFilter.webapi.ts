/**
 * SdkMessageFilter.webapi.ts - SdkMessageFilter WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SdkMessageFilter WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISdkMessageFilterApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISdkMessageFilterApi, 'FormattedValue'>]: string };
	/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
	Availability: number | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the SDK message filter. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SDK message filter was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sdkmessagefilter. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Customization level of the SDK message filter. */
	readonly CustomizationLevel: number | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Indicates whether a custom SDK message processing step is allowed. */
	IsCustomProcessingStepAllowed: boolean | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Indicates whether the filter should be visible. */
	readonly IsVisible: boolean | null;
	/** Unique identifier of the user who last modified the SDK message filter. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SDK message filter was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sdkmessagefilter. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the SDK message filter. */
	Name: string | null;
	/** Unique identifier of the organization with which the SDK message filter is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** For internal use only. */
	RestrictionLevel: number | null;
	/** Unique identifier of the SDK message filter entity. */
	SdkMessageFilterId: DevKit.Guid | null;
	/** Unique identifier of the SDK message filter. */
	readonly SdkMessageFilterIdUnique: DevKit.Guid | null;
	/** Unique identifier of the related SDK message. */
	SdkMessageId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
	/** Whether or not the SDK message can be called from a workflow. */
	readonly WorkflowSdkStepEnabled: boolean | null;
}

const SdkMessageFilterFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Availability: { logicalName: 'availability', type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomProcessingStepAllowed: { logicalName: 'iscustomprocessingstepallowed', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsVisible: { logicalName: 'isvisible', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RestrictionLevel: { logicalName: 'restrictionlevel', type: 'Integer' },
	SdkMessageFilterId: { logicalName: 'sdkmessagefilterid' },
	SdkMessageFilterIdUnique: { logicalName: 'sdkmessagefilteridunique', readOnly: true },
	SdkMessageId: { schemaName: 'SdkMessageId', logicalName: '_sdkmessageid_value', entityCollectionName: 'sdkmessages', entityLogicalName: 'sdkmessage' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowSdkStepEnabled: { logicalName: 'workflowsdkstepenabled', readOnly: true, type: 'Boolean' },
};

/**
 * SdkMessageFilter WebApi class for early-bound style coding
 * Usage: const sdkMessageFilter = new SdkMessageFilterApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SdkMessageFilterApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISdkMessageFilterApi>(entity, 'sdkmessagefilter', 'sdkmessagefilters', SdkMessageFilterFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SdkMessageFilterApi extends ISdkMessageFilterApi { }
