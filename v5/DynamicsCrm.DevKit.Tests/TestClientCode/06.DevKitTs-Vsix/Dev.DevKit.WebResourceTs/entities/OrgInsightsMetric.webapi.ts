/**
 * OrgInsightsMetric.webapi.ts - OrgInsightsMetric WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for OrgInsightsMetric
 * All fields return string representation of their values
 */
export interface IOrgInsightsMetricFormattedValue {
	readonly CreatedOn_UtcDateAndTime: string;
	readonly InternalName: string;
	readonly MetricType: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OrgInsightsMetricId: string;
}

/**
 * OrgInsightsMetric WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOrgInsightsMetricApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IOrgInsightsMetricFormattedValue;
	/** Date and time when the organization insights metric was created */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Name of the metric which is used for retrieving the data */
	InternalName: string | null;
	/** Type of the metric */
	MetricType: number | null;
	/** Legend Name used while displaying the metric */
	Name: string | null;
	/** Unique identifier of the organization associated with the record */
	readonly OrganizationId: DevKit.Guid | null;
	OrgInsightsMetricId: DevKit.Guid | null;
}

const OrgInsightsMetricFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	InternalName: { logicalName: 'internalname' },
	MetricType: { logicalName: 'metrictype', type: 'Integer' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OrgInsightsMetricId: { logicalName: 'orginsightsmetricid' },
};

/**
 * OrgInsightsMetric WebApi class for early-bound style coding
 * Usage: const orgInsightsMetric = new OrgInsightsMetricApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OrgInsightsMetricApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOrgInsightsMetricApi>(entity, 'orginsightsmetric', 'orginsightsmetrics', OrgInsightsMetricFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OrgInsightsMetricApi extends IOrgInsightsMetricApi { }
