/**
 * SavedQuery.webapi.ts - SavedQuery WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SavedQuery
 * All fields return string representation of their values
 */
export interface ISavedQueryFormattedValue {
	readonly AdvancedGroupBy: string;
	readonly CanBeDeleted: string;
	readonly ColumnSetXml: string;
	readonly ComponentState: string;
	readonly ConditionalFormatting: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly EnableCrossPartition: string;
	readonly FetchXml: string;
	readonly IntroducedVersion: string;
	readonly IsCustom: string;
	readonly IsCustomizable: string;
	readonly IsDefault: string;
	readonly IsManaged: string;
	readonly IsPrivate: string;
	readonly IsQuickFindQuery: string;
	readonly IsUserDefined: string;
	readonly LayoutJson: string;
	readonly LayoutXml: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OfflineSqlQuery: string;
	readonly OrganizationId: string;
	readonly OrganizationTabOrder: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly QueryAPI: string;
	readonly QueryAppUsage: string;
	readonly QueryType: string;
	readonly RoleDisplayConditionsXml: string;
	readonly SavedQueryId: string;
	readonly SavedQueryIdUnique: string;
	readonly SolutionId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * SavedQuery WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISavedQueryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISavedQueryFormattedValue;
	/** Type the column name that will be used to group the results from the data collected across multiple records from a system view. */
	AdvancedGroupBy: string | null;
	/** Tells whether the view can be deleted. */
	CanBeDeleted: string | null;
	/** Contains the columns and sorting criteria for the view, stored in XML format. */
	ColumnSetXml: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Type information about how the items in the system view are formatted. */
	ConditionalFormatting: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the view, such as the filter criteria or intended results set. */
	Description: string | null;
	/** Tells whether the view can retrieve data from all cluster partitions. */
	EnableCrossPartition: boolean | null;
	/** String specifying the query in Fetch XML language. */
	FetchXml: string | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Tells whether a user created the view. */
	readonly IsCustom: boolean | null;
	/** Tells whether the component can be customized. */
	IsCustomizable: string | null;
	/** Tells whether the view is the default view for the specified record type (entity). */
	IsDefault: boolean | null;
	/** Tells whether the record is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Indicates whether or not this is viewable by the entire organization. */
	readonly IsPrivate: boolean | null;
	/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
	IsQuickFindQuery: boolean | null;
	/** Tells whether the view was created by a user. */
	readonly IsUserDefined: boolean | null;
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
	/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
	Name: string | null;
	/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
	OfflineSqlQuery: string | null;
	/** Choose the ID of the organization that the record is associated with. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For the organization, type the tab order to determine how users navigate through the screen using only the Tab key. */
	readonly OrganizationTabOrder: number | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly QueryAPI: string | null;
	/** For internal use only. */
	QueryAppUsage: number | null;
	/** Shows the type of the query. */
	QueryType: number | null;
	/** Contains the role display conditions for the SavedQuery. */
	RoleDisplayConditionsXml: string | null;
	/** Unique identifier of the view. */
	SavedQueryId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SavedQueryIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Shows the status of the view. */
	StateCode: number | null;
	/** Shows the reason code that explains the status of the record. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of the view. */
	readonly VersionNumber: number | null;
}

const SavedQueryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdvancedGroupBy: { logicalName: 'advancedgroupby' },
	CanBeDeleted: { logicalName: 'canbedeleted' },
	ColumnSetXml: { logicalName: 'columnsetxml' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConditionalFormatting: { logicalName: 'conditionalformatting' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	EnableCrossPartition: { logicalName: 'enablecrosspartition', type: 'Boolean' },
	FetchXml: { logicalName: 'fetchxml' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustom: { logicalName: 'iscustom', readOnly: true, type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsPrivate: { logicalName: 'isprivate', readOnly: true, type: 'Boolean' },
	IsQuickFindQuery: { logicalName: 'isquickfindquery', type: 'Boolean' },
	IsUserDefined: { logicalName: 'isuserdefined', readOnly: true, type: 'Boolean' },
	LayoutJson: { logicalName: 'layoutjson' },
	LayoutXml: { logicalName: 'layoutxml' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OfflineSqlQuery: { logicalName: 'offlinesqlquery' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OrganizationTabOrder: { logicalName: 'organizationtaborder', readOnly: true, type: 'Integer' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	QueryAPI: { logicalName: 'queryapi', readOnly: true },
	QueryAppUsage: { logicalName: 'queryappusage', type: 'Integer' },
	QueryType: { logicalName: 'querytype', type: 'Integer' },
	RoleDisplayConditionsXml: { logicalName: 'roledisplayconditionsxml' },
	SavedQueryId: { logicalName: 'savedqueryid' },
	SavedQueryIdUnique: { logicalName: 'savedqueryidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SavedQuery WebApi class for early-bound style coding
 * Usage: const savedQuery = new SavedQueryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SavedQueryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISavedQueryApi>(entity, 'savedquery', 'savedqueries', SavedQueryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SavedQueryApi extends ISavedQueryApi { }
