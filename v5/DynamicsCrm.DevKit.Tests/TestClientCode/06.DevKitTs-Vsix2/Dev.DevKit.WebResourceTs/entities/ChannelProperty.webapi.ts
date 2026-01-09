/**
 * ChannelProperty.webapi.ts - ChannelProperty WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ChannelProperty WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IChannelPropertyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IChannelPropertyApi, 'FormattedValue'>]: string };
	/** Type the name of the application that the property is associated with. */
	Applicationsource: string | null;
	/** Unique identifier of the channel property */
	ChannelPropertyId: DevKit.Guid | null;
	/** For Internal Use Only */
	readonly ChannelPropertyIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enter the data type for the property. */
	DataType: number | null;
	/** Description of property */
	Description: string | null;
	/** Unique identifier of the data import or data migration that created this property. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type the name of the property as received in the information provided by the external application. */
	Name: string | null;
	/** Unique identifier of the organization associated with the channel property. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the attribute was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Properties contained with a particular bag. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** State of the channel property */
	statecode: number | null;
	/** Status of the channel property */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of the channel property. */
	readonly VersionNumber: number | null;
}

const ChannelPropertyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Applicationsource: { logicalName: 'applicationsource' },
	ChannelPropertyId: { logicalName: 'channelpropertyid' },
	ChannelPropertyIdUnique: { logicalName: 'channelpropertyidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DataType: { logicalName: 'datatype', type: 'Integer' },
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
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'channelpropertygroups', entityLogicalName: 'channelpropertygroup' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ChannelProperty WebApi class for early-bound style coding
 * Usage: const channelProperty = new ChannelPropertyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ChannelPropertyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IChannelPropertyApi>(entity, 'channelproperty', 'channelproperties', ChannelPropertyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ChannelPropertyApi extends IChannelPropertyApi { }
