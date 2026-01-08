/**
 * PluginTypeStatistic.webapi.ts - PluginTypeStatistic WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PluginTypeStatistic
 * All fields return string representation of their values
 */
export interface IPluginTypeStatisticFormattedValue {
	readonly AverageExecuteTimeInMilliseconds: string;
	readonly CrashContributionPercent: string;
	readonly CrashCount: string;
	readonly CrashPercent: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ExecuteCount: string;
	readonly FailureCount: string;
	readonly FailurePercent: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly PluginTypeId: string;
	readonly PluginTypeStatisticId: string;
	readonly TerminateCpuContributionPercent: string;
	readonly TerminateHandlesContributionPercent: string;
	readonly TerminateMemoryContributionPercent: string;
	readonly TerminateOtherContributionPercent: string;
}

/**
 * PluginTypeStatistic WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPluginTypeStatisticApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPluginTypeStatisticFormattedValue;
	/** The average execution time (in milliseconds) for the plug-in type. */
	readonly AverageExecuteTimeInMilliseconds: number | null;
	/** The plug-in type percentage contribution to crashes. */
	readonly CrashContributionPercent: number | null;
	/** Number of times the plug-in type has crashed. */
	readonly CrashCount: number | null;
	/** Percentage of crashes for the plug-in type. */
	readonly CrashPercent: number | null;
	/** Unique identifier of the user who created the plug-in type statistic. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the plug-in type statistic was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the plug-in type statistic. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Number of times the plug-in type has been executed. */
	readonly ExecuteCount: number | null;
	/** Number of times the plug-in type has failed. */
	readonly FailureCount: number | null;
	/** Percentage of failures for the plug-in type. */
	readonly FailurePercent: number | null;
	/** Unique identifier of the user who last modified the plug-in type statistic. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the plug-in type statistic was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the plug-in type statistic. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization with which the plug-in type statistic is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the plug-in type associated with this plug-in type statistic. */
	readonly PluginTypeId: DevKit.Guid | null;
	/** Unique identifier of the plug-in type statistic. */
	readonly PluginTypeStatisticId: DevKit.Guid | null;
	/** The plug-in type percentage contribution to Worker process termination due to excessive CPU usage. */
	readonly TerminateCpuContributionPercent: number | null;
	/** The plug-in type percentage contribution to Worker process termination due to excessive handle usage. */
	readonly TerminateHandlesContributionPercent: number | null;
	/** The plug-in type percentage contribution to Worker process termination due to excessive memory usage. */
	readonly TerminateMemoryContributionPercent: number | null;
	/** The plug-in type percentage contribution to Worker process termination due to unknown reasons. */
	readonly TerminateOtherContributionPercent: number | null;
}

const PluginTypeStatisticFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AverageExecuteTimeInMilliseconds: { logicalName: 'averageexecutetimeinmilliseconds', readOnly: true, type: 'Integer' },
	CrashContributionPercent: { logicalName: 'crashcontributionpercent', readOnly: true, type: 'Integer' },
	CrashCount: { logicalName: 'crashcount', readOnly: true, type: 'Integer' },
	CrashPercent: { logicalName: 'crashpercent', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExecuteCount: { logicalName: 'executecount', readOnly: true, type: 'Integer' },
	FailureCount: { logicalName: 'failurecount', readOnly: true, type: 'Integer' },
	FailurePercent: { logicalName: 'failurepercent', readOnly: true, type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PluginTypeId: { schemaName: 'PluginTypeId', logicalName: '_plugintypeid_value', readOnly: true, entityCollectionName: 'plugintypes', entityLogicalName: 'plugintype' },
	PluginTypeStatisticId: { logicalName: 'plugintypestatisticid', readOnly: true },
	TerminateCpuContributionPercent: { logicalName: 'terminatecpucontributionpercent', readOnly: true, type: 'Integer' },
	TerminateHandlesContributionPercent: { logicalName: 'terminatehandlescontributionpercent', readOnly: true, type: 'Integer' },
	TerminateMemoryContributionPercent: { logicalName: 'terminatememorycontributionpercent', readOnly: true, type: 'Integer' },
	TerminateOtherContributionPercent: { logicalName: 'terminateothercontributionpercent', readOnly: true, type: 'Integer' },
};

/**
 * PluginTypeStatistic WebApi class for early-bound style coding
 * Usage: const pluginTypeStatistic = new PluginTypeStatisticApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PluginTypeStatisticApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPluginTypeStatisticApi>(entity, 'plugintypestatistic', 'plugintypestatistics', PluginTypeStatisticFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PluginTypeStatisticApi extends IPluginTypeStatisticApi { }
