/**
 * SavedOrgInsightsConfiguration.webapi.ts - SavedOrgInsightsConfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SavedOrgInsightsConfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISavedOrgInsightsConfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISavedOrgInsightsConfigurationApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the saved organization insights configuration */
	Description: string | null;
	/** Indicates whether this saved organization insights configuration is the default config */
	IsDefault: boolean | null;
	/** Indicates whether this configuration indicates a drilldown chart */
	IsDrilldown: boolean | null;
	/** Metrics Data in Json format for those metrics defined in parameters */
	readonly JsonData: string | null;
	/** End Time */
	readonly JsonDataEndTime_UtcDateAndTime: Date | null;
	/** Start Time */
	readonly JsonDataStartTime_UtcDateAndTime: Date | null;
	/** Lookback period */
	Lookback: number | null;
	/** Type of the metric */
	MetricType: number | null;
	/** Unique identifier of the user who modified the record */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Display name */
	Name: string | null;
	/** Unique identifier of the organization associated with the solution */
	readonly OrganizationId: DevKit.Guid | null;
	/** Parameters needed for data retrieval */
	Parameters: string | null;
	/** Plot Option */
	PlotOption: number | null;
	/** Shows the ID of the Saved Organization Insights Configuration */
	SavedOrgInsightsConfigurationId: DevKit.Guid | null;
}

const SavedOrgInsightsConfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsDrilldown: { logicalName: 'isdrilldown', type: 'Boolean' },
	JsonData: { logicalName: 'jsondata', readOnly: true },
	JsonDataEndTime_UtcDateAndTime: { logicalName: 'jsondataendtime', readOnly: true, type: 'DateTime' },
	JsonDataStartTime_UtcDateAndTime: { logicalName: 'jsondatastarttime', readOnly: true, type: 'DateTime' },
	Lookback: { logicalName: 'lookback', type: 'Integer' },
	MetricType: { logicalName: 'metrictype', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	Parameters: { logicalName: 'parameters' },
	PlotOption: { logicalName: 'plotoption', type: 'Integer' },
	SavedOrgInsightsConfigurationId: { logicalName: 'savedorginsightsconfigurationid' },
};

/**
 * SavedOrgInsightsConfiguration WebApi class for early-bound style coding
 * Usage: const savedOrgInsightsConfiguration = new SavedOrgInsightsConfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SavedOrgInsightsConfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISavedOrgInsightsConfigurationApi>(entity, 'savedorginsightsconfiguration', 'savedorginsightsconfigurations', SavedOrgInsightsConfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SavedOrgInsightsConfigurationApi extends ISavedOrgInsightsConfigurationApi { }
