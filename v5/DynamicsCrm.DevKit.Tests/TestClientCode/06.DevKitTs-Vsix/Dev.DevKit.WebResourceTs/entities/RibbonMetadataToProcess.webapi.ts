/**
 * RibbonMetadataToProcess.webapi.ts - RibbonMetadataToProcess WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RibbonMetadataToProcess
 * All fields return string representation of their values
 */
export interface IRibbonMetadataToProcessFormattedValue {
	readonly CompletedOn_UtcDateAndTime: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly EntityName2: string;
	readonly ExceptionMessage: string;
	readonly IsDbUpdate: string;
	readonly ProcessedOn_UtcDateAndTime: string;
	readonly RetryCount: string;
	readonly RibbonMetadataRowId: string;
	readonly SolutionId: string;
	readonly SolutionName: string;
	readonly Status: string;
}

/**
 * RibbonMetadataToProcess WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRibbonMetadataToProcessApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRibbonMetadataToProcessFormattedValue;
	/** Shows the date and time when the ribbon entity record has finished processing. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CompletedOn_UtcDateAndTime: Date | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Entity Logical Name */
	EntityName2: string | null;
	/** Exception message */
	ExceptionMessage: string | null;
	/** Is entity created via Db Update */
	IsDbUpdate: number | null;
	/** Shows the date and time when the record was processed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ProcessedOn_UtcDateAndTime: Date | null;
	/** Retry Count */
	RetryCount: number | null;
	/** Unique identifier for Ribbon Metadata Instance To Process */
	RibbonMetadataRowId: DevKit.Guid | null;
	/** Solution Id */
	SolutionId: DevKit.Guid | null;
	/** Solution Name of the ribbon entity */
	SolutionName: string | null;
	/** Status */
	Status: number | null;
}

const RibbonMetadataToProcessFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CompletedOn_UtcDateAndTime: { logicalName: 'completedon', readOnly: true, type: 'DateTime' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	EntityName2: { logicalName: 'entityname' },
	ExceptionMessage: { logicalName: 'exceptionmessage' },
	IsDbUpdate: { logicalName: 'isdbupdate', type: 'Integer' },
	ProcessedOn_UtcDateAndTime: { logicalName: 'processedon', readOnly: true, type: 'DateTime' },
	RetryCount: { logicalName: 'retrycount', type: 'Integer' },
	RibbonMetadataRowId: { logicalName: 'ribbonmetadatarowid' },
	SolutionId: { logicalName: 'solutionid' },
	SolutionName: { logicalName: 'solutionname' },
	Status: { logicalName: 'status', type: 'Integer' },
};

/**
 * RibbonMetadataToProcess WebApi class for early-bound style coding
 * Usage: const ribbonMetadataToProcess = new RibbonMetadataToProcessApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RibbonMetadataToProcessApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRibbonMetadataToProcessApi>(entity, 'ribbonmetadatatoprocess', 'ribbonmetadatatoprocesses', RibbonMetadataToProcessFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RibbonMetadataToProcessApi extends IRibbonMetadataToProcessApi { }
