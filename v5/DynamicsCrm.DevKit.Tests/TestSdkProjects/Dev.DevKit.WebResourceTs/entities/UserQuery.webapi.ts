/**
 * UserQuery.webapi.ts - UserQuery WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * UserQuery WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUserQueryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IUserQueryApi, 'FormattedValue'>]: string };
	/** Type the column name that will be used to group the results from the data collected across multiple records from a user view. */
	AdvancedGroupBy: string | null;
	/** Shows the columns and sorting criteria for the saved view, stored in XML format. */
	ColumnSetXml: string | null;
	/** Type information about how the items in the user view are formatted. */
	ConditionalFormatting: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the saved view, such as the filter criteria or intended results set. */
	Description: string | null;
	/** Tells whether the view can retrieve data from all cluster partitions. */
	EnableCrossPartition: boolean | null;
	/** Contains the Fetch XML query that defines the entities and attributes included in the saved view. */
	FetchXml: string | null;
	/** Layout data in JSON format. */
	LayoutJson: string | null;
	/** For internal use only. */
	LayoutXml: string | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a descriptive name for the saved view. */
	Name: string | null;
	/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
	OfflineSqlQuery: string | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the record owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns this saved view. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns this saved view. */
	readonly OwningUser: DevKit.Guid | null;
	/** Choose the ID of the saved query that the record was created from. */
	ParentQueryId: DevKit.Guid | null;
	/** Shows the code for the query type to indicate whether the saved view is an address book filter, advanced search, or other view. */
	QueryType: number | null;
	/** Shows whether the saved view is active or inactive. */
	StateCode: number | null;
	/** Select the item's status. */
	StatusCode: number | null;
	/** Unique identifier of the saved view. */
	UserQueryId: DevKit.Guid | null;
	/** Version number of the saved view. */
	readonly VersionNumber: number | null;
}

const UserQueryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdvancedGroupBy: { logicalName: 'advancedgroupby' },
	ColumnSetXml: { logicalName: 'columnsetxml' },
	ConditionalFormatting: { logicalName: 'conditionalformatting' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	EnableCrossPartition: { logicalName: 'enablecrosspartition', type: 'Boolean' },
	FetchXml: { logicalName: 'fetchxml' },
	LayoutJson: { logicalName: 'layoutjson' },
	LayoutXml: { logicalName: 'layoutxml' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OfflineSqlQuery: { logicalName: 'offlinesqlquery' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentQueryId: { logicalName: 'parentqueryid' },
	QueryType: { logicalName: 'querytype', type: 'Integer' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	UserQueryId: { logicalName: 'userqueryid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * UserQuery WebApi class for early-bound style coding
 * Usage: const userQuery = new UserQueryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UserQueryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUserQueryApi>(entity, 'userquery', 'userqueries', UserQueryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UserQueryApi extends IUserQueryApi { }
