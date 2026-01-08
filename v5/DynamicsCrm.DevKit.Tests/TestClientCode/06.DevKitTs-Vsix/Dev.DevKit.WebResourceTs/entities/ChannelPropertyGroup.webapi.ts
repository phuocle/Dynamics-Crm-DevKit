/**
 * ChannelPropertyGroup.webapi.ts - ChannelPropertyGroup WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ChannelPropertyGroup
 * All fields return string representation of their values
 */
export interface IChannelPropertyGroupFormattedValue {
	readonly ChannelPropertyGroupId: string;
	readonly ChannelPropertyGroupIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly ImportSequenceNumber: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly RegardingTypeCode: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * ChannelPropertyGroup WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IChannelPropertyGroupApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IChannelPropertyGroupFormattedValue;
	/** Unique identifier of the channel property group */
	ChannelPropertyGroupId: DevKit.Guid | null;
	/** For Internal Use Only */
	readonly ChannelPropertyGroupIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type a description for the property group. */
	Description: string | null;
	/** Unique identifier of the data import or data migration that created this property. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type the name of the channel property group. */
	Name: string | null;
	/** Unique identifier of the organization associated with the channel property group. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the attribute was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Select the activity that the property group is associated with. */
	RegardingTypeCode: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** State of the channel property group */
	statecode: number | null;
	/** Status of the channel property group */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of the channel property group. */
	readonly VersionNumber: number | null;
}

const ChannelPropertyGroupFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ChannelPropertyGroupId: { logicalName: 'channelpropertygroupid' },
	ChannelPropertyGroupIdUnique: { logicalName: 'channelpropertygroupidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RegardingTypeCode: { logicalName: 'regardingtypecode', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ChannelPropertyGroup WebApi class for early-bound style coding
 * Usage: const channelPropertyGroup = new ChannelPropertyGroupApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ChannelPropertyGroupApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IChannelPropertyGroupApi>(entity, 'channelpropertygroup', 'channelpropertygroups', ChannelPropertyGroupFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ChannelPropertyGroupApi extends IChannelPropertyGroupApi { }
