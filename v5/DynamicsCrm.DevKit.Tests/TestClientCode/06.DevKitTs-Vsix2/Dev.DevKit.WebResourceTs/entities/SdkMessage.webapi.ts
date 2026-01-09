/**
 * SdkMessage.webapi.ts - SdkMessage WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SdkMessage WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISdkMessageApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISdkMessageApi, 'FormattedValue'>]: string };
	/** Information about whether the SDK message is automatically transacted. */
	AutoTransact: boolean | null;
	/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
	Availability: number | null;
	/** If this is a categorized method, this is the name, otherwise None. */
	CategoryName: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the SDK message. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SDK message was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sdkmessage. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Customization level of the SDK message. */
	readonly CustomizationLevel: number | null;
	/** Name of the privilege that allows execution of the SDK message */
	ExecutePrivilegeName: string | null;
	/** Indicates whether the SDK message should have its requests expanded per primary entity defined in its filters. */
	Expand: boolean | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information about whether the SDK message is active. */
	IsActive: boolean | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Indicates whether the SDK message is private. */
	IsPrivate: boolean | null;
	/** Identifies whether an SDK message will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly . */
	IsReadOnly: boolean | null;
	/** For internal use only. */
	readonly IsValidForExecuteAsync: boolean | null;
	/** Unique identifier of the user who last modified the SDK message. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SDK message was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sdkmessage. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the SDK message. */
	Name: string | null;
	/** Unique identifier of the organization with which the SDK message is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the SDK message entity. */
	SdkMessageId: DevKit.Guid | null;
	/** Unique identifier of the SDK message. */
	readonly SdkMessageIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Indicates whether the SDK message is a template. */
	Template: boolean | null;
	/** For internal use only. */
	readonly ThrottleSettings: string | null;
	/** Number that identifies a specific revision of the SDK message.  */
	readonly VersionNumber: number | null;
	/** Whether or not the SDK message can be called from a workflow. */
	readonly WorkflowSdkStepEnabled: boolean | null;
}

const SdkMessageFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AutoTransact: { logicalName: 'autotransact', type: 'Boolean' },
	Availability: { logicalName: 'availability', type: 'Integer' },
	CategoryName: { logicalName: 'categoryname' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	ExecutePrivilegeName: { logicalName: 'executeprivilegename' },
	Expand: { logicalName: 'expand', type: 'Boolean' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsActive: { logicalName: 'isactive', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsPrivate: { logicalName: 'isprivate', type: 'Boolean' },
	IsReadOnly: { logicalName: 'isreadonly', type: 'Boolean' },
	IsValidForExecuteAsync: { logicalName: 'isvalidforexecuteasync', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SdkMessageId: { logicalName: 'sdkmessageid' },
	SdkMessageIdUnique: { logicalName: 'sdkmessageidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Template: { logicalName: 'template', type: 'Boolean' },
	ThrottleSettings: { logicalName: 'throttlesettings', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowSdkStepEnabled: { logicalName: 'workflowsdkstepenabled', readOnly: true, type: 'Boolean' },
};

/**
 * SdkMessage WebApi class for early-bound style coding
 * Usage: const sdkMessage = new SdkMessageApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SdkMessageApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISdkMessageApi>(entity, 'sdkmessage', 'sdkmessages', SdkMessageFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SdkMessageApi extends ISdkMessageApi { }
