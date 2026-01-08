/**
 * SharePointData.webapi.ts - SharePointData WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SharePointData
 * All fields return string representation of their values
 */
export interface ISharePointDataFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Data: string;
	readonly IsValid: string;
	readonly Location: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly NextPageToken: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly PageNumber: string;
	readonly PreviousPageToken: string;
	readonly RegardingObjectId: string;
	readonly SharePointDataId: string;
	readonly UserId: string;
}

/**
 * SharePointData WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISharePointDataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISharePointDataFormattedValue;
	/** Unique identifier of the user who created the SharePoint Data. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SharePoint Data was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the SharePoint Data. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** SharePoint Data Serialized */
	Data: string | null;
	/** Is valid */
	readonly IsValid: boolean | null;
	/** Unique identifier of the user who created the SharePoint Data. */
	readonly Location: DevKit.Guid | null;
	/** Unique identifier of the user who last modified the SharePoint Data. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the Sharepoint Data was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the SharePoint Data. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Next Page Token of the SharePoint document. */
	readonly NextPageToken: string | null;
	/** Unique identifier of the organization associated with the SharePoint Data. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	readonly PageNumber: number | null;
	/** Previous Page Token of the SharePoint document. */
	readonly PreviousPageToken: string | null;
	/** Regarding Object Id. */
	readonly RegardingObjectId: string | null;
	/** Unique identifier of the SharePoint data record. */
	SharePointDataId: DevKit.Guid | null;
	/** Unique identifier of the user who created the SharePoint data. */
	readonly UserId: DevKit.Guid | null;
}

const SharePointDataFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	IsValid: { logicalName: 'isvalid', readOnly: true, type: 'Boolean' },
	Location: { schemaName: 'Location', logicalName: '_location_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	NextPageToken: { logicalName: 'nextpagetoken', readOnly: true },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PageNumber: { logicalName: 'pagenumber', readOnly: true, type: 'Integer' },
	PreviousPageToken: { logicalName: 'previouspagetoken', readOnly: true },
	RegardingObjectId: { logicalName: 'regardingobjectid', readOnly: true },
	SharePointDataId: { logicalName: 'sharepointdataid' },
	UserId: { schemaName: 'UserId', logicalName: '_userid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
};

/**
 * SharePointData WebApi class for early-bound style coding
 * Usage: const sharePointData = new SharePointDataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SharePointDataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISharePointDataApi>(entity, 'sharepointdata', 'sharepointdatacollection', SharePointDataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SharePointDataApi extends ISharePointDataApi { }
