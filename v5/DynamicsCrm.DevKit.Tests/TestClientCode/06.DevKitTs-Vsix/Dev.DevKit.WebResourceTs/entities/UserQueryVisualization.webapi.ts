/**
 * UserQueryVisualization.webapi.ts - UserQueryVisualization WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * UserQueryVisualization WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUserQueryVisualizationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IUserQueryVisualizationApi, 'FormattedValue'>]: string };
	/** Indicates the library used to render the visualization. */
	ChartType: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the fields that are used to display data in a chart, stored in XML format. */
	DataDescription: string | null;
	/** Type additional information to describe the chart, such as the filter criteria or intended audience. */
	Description: string | null;
	/** Tells whether the chart can retrieve data from all cluster partitions. */
	EnableCrossPartition: boolean | null;
	/** Select whether the chart is the default chart for the view that it is associated with. */
	IsDefault: boolean | null;
	/** NL Generated Chart */
	isNLGenerated: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a descriptive name for the chart. */
	Name: string | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the record owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the user chart. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the team who owns the user chart. */
	readonly OwningUser: DevKit.Guid | null;
	/** Contains the chart's formatting details and presentation properties, stored in XML format. */
	PresentationDescription: string | null;
	/** Unique identifier of the user chart. */
	UserQueryVisualizationId: DevKit.Guid | null;
	/** Version number of the user chart. */
	readonly VersionNumber: number | null;
	/** Shows the web resource that will be displayed in the chart to the user. */
	WebResourceId: DevKit.Guid | null;
}

const UserQueryVisualizationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ChartType: { logicalName: 'charttype', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DataDescription: { logicalName: 'datadescription' },
	Description: { logicalName: 'description' },
	EnableCrossPartition: { logicalName: 'enablecrosspartition', type: 'Boolean' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	isNLGenerated: { logicalName: 'isnlgenerated', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PresentationDescription: { logicalName: 'presentationdescription' },
	UserQueryVisualizationId: { logicalName: 'userqueryvisualizationid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebResourceId: { schemaName: 'WebResourceId', logicalName: '_webresourceid_value', entityCollectionName: 'webresources', entityLogicalName: 'webresource' },
};

/**
 * UserQueryVisualization WebApi class for early-bound style coding
 * Usage: const userQueryVisualization = new UserQueryVisualizationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UserQueryVisualizationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUserQueryVisualizationApi>(entity, 'userqueryvisualization', 'userqueryvisualizations', UserQueryVisualizationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UserQueryVisualizationApi extends IUserQueryVisualizationApi { }
