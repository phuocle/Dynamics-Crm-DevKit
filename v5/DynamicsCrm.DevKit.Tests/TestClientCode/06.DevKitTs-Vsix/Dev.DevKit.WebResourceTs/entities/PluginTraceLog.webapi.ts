/**
 * PluginTraceLog.webapi.ts - PluginTraceLog WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PluginTraceLog WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPluginTraceLogApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPluginTraceLogApi, 'FormattedValue'>]: string };
	/** Unsecured configuration for the plug-in trace log. */
	readonly Configuration: string | null;
	/** Unique identifier for tracking plug-in or custom workflow activity execution. */
	readonly CorrelationId: DevKit.Guid | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Depth of execution of the plug-in or custom workflow activity. */
	readonly Depth: number | null;
	/** Details of the exception. */
	readonly ExceptionDetails: string | null;
	/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
	readonly IsSystemCreated: boolean | null;
	/** Trace text from the plug-in. */
	readonly MessageBlock: string | null;
	/** Name of the message that triggered this plug-in. */
	readonly MessageName: string | null;
	/** Type of execution. */
	readonly Mode: number | null;
	/** Type of custom code. */
	readonly OperationType: number | null;
	/** Unique identifier for the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Time, in milliseconds, to construct. */
	readonly PerformanceConstructorDuration: number | null;
	/** Date and time when constructed. */
	readonly PerformanceConstructorStartTime_UtcDateAndTime: Date | null;
	/** Time, in milliseconds, to execute the request. */
	readonly PerformanceExecutionDuration: number | null;
	/** Time, in milliseconds, to execute the request. */
	readonly PerformanceExecutionStartTime_UtcDateAndTime: Date | null;
	/** Asynchronous workflow persistence key. */
	readonly PersistenceKey: DevKit.Guid | null;
	/** ID of the plug-in registration step. */
	readonly PluginStepId: DevKit.Guid | null;
	/** Unique identifier for an entity instance. */
	readonly PluginTraceLogId: DevKit.Guid | null;
	/** Entity, if any, that the plug-in is executed against. */
	readonly PrimaryEntity: string | null;
	/** Plug-in profile formatted as serialized text. */
	readonly Profile: string | null;
	/** Unique identifier of the message request. */
	readonly RequestId: DevKit.Guid | null;
	/** Secured configuration for the plug-in trace log. */
	readonly SecureConfiguration: string | null;
	/** Class name of the plug-in. */
	readonly TypeName: string | null;
}

const PluginTraceLogFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Configuration: { logicalName: 'configuration', readOnly: true },
	CorrelationId: { logicalName: 'correlationid', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Depth: { logicalName: 'depth', readOnly: true, type: 'Integer' },
	ExceptionDetails: { logicalName: 'exceptiondetails', readOnly: true },
	IsSystemCreated: { logicalName: 'issystemcreated', readOnly: true, type: 'Boolean' },
	MessageBlock: { logicalName: 'messageblock', readOnly: true },
	MessageName: { logicalName: 'messagename', readOnly: true },
	Mode: { logicalName: 'mode', readOnly: true, type: 'Integer' },
	OperationType: { logicalName: 'operationtype', readOnly: true, type: 'Integer' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	PerformanceConstructorDuration: { logicalName: 'performanceconstructorduration', readOnly: true, type: 'Integer' },
	PerformanceConstructorStartTime_UtcDateAndTime: { logicalName: 'performanceconstructorstarttime', readOnly: true, type: 'DateTime' },
	PerformanceExecutionDuration: { logicalName: 'performanceexecutionduration', readOnly: true, type: 'Integer' },
	PerformanceExecutionStartTime_UtcDateAndTime: { logicalName: 'performanceexecutionstarttime', readOnly: true, type: 'DateTime' },
	PersistenceKey: { logicalName: 'persistencekey', readOnly: true },
	PluginStepId: { logicalName: 'pluginstepid', readOnly: true },
	PluginTraceLogId: { logicalName: 'plugintracelogid', readOnly: true },
	PrimaryEntity: { logicalName: 'primaryentity', readOnly: true },
	Profile: { logicalName: 'profile', readOnly: true },
	RequestId: { logicalName: 'requestid', readOnly: true },
	SecureConfiguration: { logicalName: 'secureconfiguration', readOnly: true },
	TypeName: { logicalName: 'typename', readOnly: true },
};

/**
 * PluginTraceLog WebApi class for early-bound style coding
 * Usage: const pluginTraceLog = new PluginTraceLogApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PluginTraceLogApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPluginTraceLogApi>(entity, 'plugintracelog', 'plugintracelogs', PluginTraceLogFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PluginTraceLogApi extends IPluginTraceLogApi { }
