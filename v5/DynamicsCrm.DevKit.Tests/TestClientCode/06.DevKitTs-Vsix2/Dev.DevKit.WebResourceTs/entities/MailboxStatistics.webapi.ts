/**
 * MailboxStatistics.webapi.ts - MailboxStatistics WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * MailboxStatistics WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMailboxStatisticsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IMailboxStatisticsApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly AsyncEventId: DevKit.Guid | null;
	/** Items remaining in CRM to process after this synchronization cycle. */
	readonly CrmItemsBacklog: number | null;
	/** Time each exchange sync step is taking */
	readonly IndividualStepDurations: string | null;
	/** Number of items processed unsuccessfully. */
	readonly ItemsFailed: number | null;
	/** Number of items processed. */
	readonly ItemsProcessed: number | null;
	/** Name of Machine on which mailbox was processed */
	readonly MachineName: string | null;
	/** Regarding Mailbox. */
	readonly MailboxId: DevKit.Guid | null;
	/** Completion time of the synchronization cycle. */
	readonly MailboxProcessCompletedOn_UtcDateAndTime: Date | null;
	/** Scheduled time of the synchronization cycle. */
	readonly MailboxProcessScheduledOn_UtcDateAndTime: Date | null;
	/** Start time of the synchronization cycle. */
	readonly MailboxProcessStartedOn_UtcDateAndTime: Date | null;
	readonly MailboxStatisticsId: DevKit.Guid | null;
	/** Type of the mailbox operation */
	readonly OperationTypeId: number | null;
	/** Unique identifier of the organization associated with the record. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Result of Mailbox processing cycle */
	readonly ProcessResult: boolean | null;
	/** Time it took to process the mailbox. */
	readonly ProcessTimeIntervalInMinutes: number | null;
	/** Time it took from the scheduled time to the actual start time to process the mailbox. */
	readonly ScheduledTimeIntervalInMinutes: number | null;
}

const MailboxStatisticsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AsyncEventId: { logicalName: 'asynceventid', readOnly: true },
	CrmItemsBacklog: { logicalName: 'crmitemsbacklog', readOnly: true, type: 'Integer' },
	IndividualStepDurations: { logicalName: 'individualstepdurations', readOnly: true },
	ItemsFailed: { logicalName: 'itemsfailed', readOnly: true, type: 'Integer' },
	ItemsProcessed: { logicalName: 'itemsprocessed', readOnly: true, type: 'Integer' },
	MachineName: { logicalName: 'machinename', readOnly: true },
	MailboxId: { schemaName: 'MailboxId', logicalName: '_mailboxid_value', readOnly: true, entityCollectionName: 'mailboxes', entityLogicalName: 'mailbox' },
	MailboxProcessCompletedOn_UtcDateAndTime: { logicalName: 'mailboxprocesscompletedon', readOnly: true, type: 'DateTime' },
	MailboxProcessScheduledOn_UtcDateAndTime: { logicalName: 'mailboxprocessscheduledon', readOnly: true, type: 'DateTime' },
	MailboxProcessStartedOn_UtcDateAndTime: { logicalName: 'mailboxprocessstartedon', readOnly: true, type: 'DateTime' },
	MailboxStatisticsId: { logicalName: 'mailboxstatisticsid', readOnly: true },
	OperationTypeId: { logicalName: 'operationtypeid', readOnly: true, type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	ProcessResult: { logicalName: 'processresult', readOnly: true, type: 'Boolean' },
	ProcessTimeIntervalInMinutes: { logicalName: 'processtimeintervalinminutes', readOnly: true, type: 'Integer' },
	ScheduledTimeIntervalInMinutes: { logicalName: 'scheduledtimeintervalinminutes', readOnly: true, type: 'Integer' },
};

/**
 * MailboxStatistics WebApi class for early-bound style coding
 * Usage: const mailboxStatistics = new MailboxStatisticsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MailboxStatisticsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMailboxStatisticsApi>(entity, 'mailboxstatistics', 'mailboxstatistics', MailboxStatisticsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MailboxStatisticsApi extends IMailboxStatisticsApi { }
