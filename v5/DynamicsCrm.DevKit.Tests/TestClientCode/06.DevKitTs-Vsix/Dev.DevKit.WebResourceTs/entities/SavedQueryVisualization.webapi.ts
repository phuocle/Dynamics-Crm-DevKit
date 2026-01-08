/**
 * SavedQueryVisualization.webapi.ts - SavedQueryVisualization WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SavedQueryVisualization WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISavedQueryVisualizationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISavedQueryVisualizationApi, 'FormattedValue'>]: string };
	/** Tells whether the saved query visualization can be deleted. */
	CanBeDeleted: string | null;
	/** Indicates the library used to render the visualization. */
	ChartType: number | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the system chart. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the system chart was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the system chart. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** XML string used to define the underlying data for the system chart. */
	DataDescription: string | null;
	/** Description of the system chart. */
	Description: string | null;
	/** Tells whether the chart can retrieve data from all cluster partitions. */
	EnableCrossPartition: boolean | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the system chart is the default chart for the entity. */
	IsDefault: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the system chart. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the system chart was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the system chart. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the system chart. */
	Name: string | null;
	/** Unique identifier of the organization associated with the system chart. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** XML string used to define the presentation properties of the system chart. */
	PresentationDescription: string | null;
	/** Unique identifier of the system chart. */
	SavedQueryVisualizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SavedQueryVisualizationIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Specifies where the chart will be used, 0 for data centric as well as interaction centric and 1 for just interaction centric */
	Type: number | null;
	/** Version number of the system chart. */
	readonly VersionNumber: number | null;
	/** Unique identifier of the Web resource that will be displayed in the system chart. */
	WebResourceId: DevKit.Guid | null;
}

const SavedQueryVisualizationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CanBeDeleted: { logicalName: 'canbedeleted' },
	ChartType: { logicalName: 'charttype', type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DataDescription: { logicalName: 'datadescription' },
	Description: { logicalName: 'description' },
	EnableCrossPartition: { logicalName: 'enablecrosspartition', type: 'Boolean' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PresentationDescription: { logicalName: 'presentationdescription' },
	SavedQueryVisualizationId: { logicalName: 'savedqueryvisualizationid' },
	SavedQueryVisualizationIdUnique: { logicalName: 'savedqueryvisualizationidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Type: { logicalName: 'type', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebResourceId: { schemaName: 'WebResourceId', logicalName: '_webresourceid_value', entityCollectionName: 'webresources', entityLogicalName: 'webresource' },
};

/**
 * SavedQueryVisualization WebApi class for early-bound style coding
 * Usage: const savedQueryVisualization = new SavedQueryVisualizationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SavedQueryVisualizationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISavedQueryVisualizationApi>(entity, 'savedqueryvisualization', 'savedqueryvisualizations', SavedQueryVisualizationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SavedQueryVisualizationApi extends ISavedQueryVisualizationApi { }
