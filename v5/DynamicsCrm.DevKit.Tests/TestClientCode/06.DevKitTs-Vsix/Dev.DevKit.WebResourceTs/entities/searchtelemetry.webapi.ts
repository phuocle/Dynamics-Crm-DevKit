/**
 * searchtelemetry.webapi.ts - searchtelemetry WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for searchtelemetry
 * All fields return string representation of their values
 */
export interface IsearchtelemetryFormattedValue {
	readonly CorrelationId: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly EyesOnAnalyticsAllowed: string;
	readonly FeedbackData: string;
	readonly PartitionId: string;
	readonly RequestId: string;
	readonly ScenarioName: string;
	readonly searchtelemetryId: string;
	readonly SessionId: string;
	readonly TTLInSeconds: string;
	readonly UserQuery: string;
	readonly versionnumber: string;
}

/**
 * searchtelemetry WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsearchtelemetryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IsearchtelemetryFormattedValue;
	/** CorrelationId for the search */
	CorrelationId: string | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** If customer is allow our engineer to eye on */
	EyesOnAnalyticsAllowed: boolean | null;
	/** Feedback data for the search */
	FeedbackData: string | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** RequestId for the search */
	RequestId: string | null;
	/** ScenarioName for the search, current will be one of RelevanceSearch/Marketing/Cxp */
	ScenarioName: string | null;
	/** Unique identifier for entity instances */
	searchtelemetryId: DevKit.Guid | null;
	/** SessionId for the search */
	SessionId: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** User Query */
	UserQuery: string | null;
	/** Version number of SearchTelemetry. */
	readonly versionnumber: number | null;
}

const searchtelemetryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CorrelationId: { logicalName: 'correlationid' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	EyesOnAnalyticsAllowed: { logicalName: 'eyesonanalyticsallowed', type: 'Boolean' },
	FeedbackData: { logicalName: 'feedbackdata' },
	PartitionId: { logicalName: 'partitionid' },
	RequestId: { logicalName: 'requestid' },
	ScenarioName: { logicalName: 'scenarioname' },
	searchtelemetryId: { logicalName: 'searchtelemetryid' },
	SessionId: { logicalName: 'sessionid' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	UserQuery: { logicalName: 'userquery' },
	versionnumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * searchtelemetry WebApi class for early-bound style coding
 * Usage: const searchtelemetry = new searchtelemetryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class searchtelemetryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsearchtelemetryApi>(entity, 'searchtelemetry', 'searchtelemetries', searchtelemetryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface searchtelemetryApi extends IsearchtelemetryApi { }
