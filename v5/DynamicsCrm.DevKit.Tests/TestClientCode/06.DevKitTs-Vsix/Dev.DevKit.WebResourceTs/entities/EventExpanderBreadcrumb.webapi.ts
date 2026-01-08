/**
 * EventExpanderBreadcrumb.webapi.ts - EventExpanderBreadcrumb WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * EventExpanderBreadcrumb WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEventExpanderBreadcrumbApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IEventExpanderBreadcrumbApi, 'FormattedValue'>]: string };
	/** Date and time when the event expander breadcrumb was completed. */
	CompletedOn_UtcDateAndTime: Date | null;
	/** Unique identifier used to correlate. */
	CorrelationId: string | null;
	/** Unique identifier of the user who created the record. */
	CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The event payload. */
	Data: string | null;
	/** File Id for the blob url used for file storage. */
	DataBlobId: string | null;
	/** The error code of error for event expander breadcrumb in case of failure. */
	ErrorCode: number | null;
	/** Unique identifier for  entity instances. */
	EventExpanderBreadcrumbId: DevKit.Guid | null;
	/** The datetime when the Expander pipeline started. */
	ExpanderStartTime_UtcDateAndTime: Date | null;
	/** The friendly message for end user. */
	FriendlyMessage: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who last modified the record. */
	ModifiedBy: DevKit.Guid | null;
	/** Date and time when the event expander breadcrumb was last modified. */
	ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the event expander breadcrumb. */
	Name: string | null;
	/** The number of times breadcrumb has been retried. */
	OperationType: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Indicates whether the event should run only after the specified date and time. */
	PostponeUntil_UtcDateAndTime: Date | null;
	/** The number of times breadcrumb has been retried. */
	RetryCount: number | null;
	/** Date and time when the event expander breadcrumb was started. */
	StartedOn_UtcDateAndTime: Date | null;
	/** The status of event expander breadcrumb. */
	StateCode: number | null;
	/** The status reason for event expander breadcrumb. */
	StatusCode: number | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** The name of the workload. */
	Workload: string | null;
}

const EventExpanderBreadcrumbFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CompletedOn_UtcDateAndTime: { logicalName: 'completedon', type: 'DateTime' },
	CorrelationId: { logicalName: 'correlationid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	DataBlobId: { logicalName: 'datablobid' },
	ErrorCode: { logicalName: 'errorcode', type: 'Integer' },
	EventExpanderBreadcrumbId: { logicalName: 'eventexpanderbreadcrumbid' },
	ExpanderStartTime_UtcDateAndTime: { logicalName: 'expanderstarttime', type: 'DateTime' },
	FriendlyMessage: { logicalName: 'friendlymessage' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OperationType: { logicalName: 'operationtype', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	PostponeUntil_UtcDateAndTime: { logicalName: 'postponeuntil', type: 'DateTime' },
	RetryCount: { logicalName: 'retrycount', type: 'Integer' },
	StartedOn_UtcDateAndTime: { logicalName: 'startedon', type: 'DateTime' },
	StateCode: { logicalName: 'breadcrumbstatecode', type: 'Integer' },
	StatusCode: { logicalName: 'breadcrumbstatuscode', type: 'Integer' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	Workload: { logicalName: 'workload' },
};

/**
 * EventExpanderBreadcrumb WebApi class for early-bound style coding
 * Usage: const eventExpanderBreadcrumb = new EventExpanderBreadcrumbApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EventExpanderBreadcrumbApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEventExpanderBreadcrumbApi>(entity, 'eventexpanderbreadcrumb', 'eventexpanderbreadcrumbs', EventExpanderBreadcrumbFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EventExpanderBreadcrumbApi extends IEventExpanderBreadcrumbApi { }
