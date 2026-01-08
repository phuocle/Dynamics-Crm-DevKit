/**
 * SolutionHistoryData.webapi.ts - SolutionHistoryData WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SolutionHistoryData
 * All fields return string representation of their values
 */
export interface ISolutionHistoryDataFormattedValue {
	readonly ActivityId: string;
	readonly CorrelationId: string;
	readonly Description: string;
	readonly EndTime_UtcDateAndTime: string;
	readonly ErrorCode: string;
	readonly ExceptionMessage: string;
	readonly ExceptionStack: string;
	readonly IsManaged: string;
	readonly IsMicrosoftPublisher: string;
	readonly IsOverwriteCustomizations: string;
	readonly IsPatch: string;
	readonly Operation: string;
	readonly PackageName: string;
	readonly PackageVersion: string;
	readonly PublisherName: string;
	readonly Result: string;
	readonly SolutionHistoryDataId: string;
	readonly SolutionId: string;
	readonly SolutionName: string;
	readonly SolutionVersion: string;
	readonly StartTime_UtcDateAndTime: string;
	readonly Status: string;
	readonly SubOperation: string;
}

/**
 * SolutionHistoryData WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISolutionHistoryDataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISolutionHistoryDataFormattedValue;
	/** The Activity Id. */
	ActivityId: DevKit.Guid | null;
	/** The Correlation Id. */
	CorrelationId: DevKit.Guid | null;
	/** Comments associated with solution installation */
	Description: string | null;
	/** DateTime of the end of the solution event. */
	EndTime_UtcDateAndTime: Date | null;
	/** The error code of the operation performed on the solution. */
	ErrorCode: number | null;
	/** The Exception Message. */
	ExceptionMessage: string | null;
	/** The Exception Stack. */
	ExceptionStack: string | null;
	/** Is Solution Managed */
	IsManaged: boolean | null;
	/** Is the solution published by a Microsoft publisher. */
	IsMicrosoftPublisher: boolean | null;
	/** Does the event overwrite customizations. */
	IsOverwriteCustomizations: boolean | null;
	/** Is Solution Patch */
	IsPatch: boolean | null;
	/** The operation performed on the solution. */
	Operation: number | null;
	/** Name of the package. */
	PackageName: string | null;
	/** Version of the package. */
	PackageVersion: string | null;
	/** Name of the solution's publisher. */
	PublisherName: string | null;
	/** The result of the operation performed on the solution. */
	Result: number | null;
	/** Unique identifier for entity instances */
	SolutionHistoryDataId: DevKit.Guid | null;
	/** The Solution. */
	SolutionId: DevKit.Guid | null;
	/** Name of the solution. */
	SolutionName: string | null;
	/** The Version of the Solution. */
	SolutionVersion: string | null;
	/** DateTime of the start of the solution event. */
	StartTime_UtcDateAndTime: Date | null;
	/** The status of the operation performed on the solution. */
	Status: number | null;
	/** The suboperation performed on the solution. */
	SubOperation: number | null;
}

const SolutionHistoryDataFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityId: { logicalName: 'activityid' },
	CorrelationId: { logicalName: 'correlationid' },
	Description: { logicalName: 'description' },
	EndTime_UtcDateAndTime: { logicalName: 'endtime', type: 'DateTime' },
	ErrorCode: { logicalName: 'errorcode', type: 'Integer' },
	ExceptionMessage: { logicalName: 'exceptionmessage' },
	ExceptionStack: { logicalName: 'exceptionstack' },
	IsManaged: { logicalName: 'ismanaged', type: 'Boolean' },
	IsMicrosoftPublisher: { logicalName: 'ismicrosoftpublisher', type: 'Boolean' },
	IsOverwriteCustomizations: { logicalName: 'isoverwritecustomizations', type: 'Boolean' },
	IsPatch: { logicalName: 'ispatch', type: 'Boolean' },
	Operation: { logicalName: 'operation', type: 'Integer' },
	PackageName: { logicalName: 'packagename' },
	PackageVersion: { logicalName: 'packageversion' },
	PublisherName: { logicalName: 'publishername' },
	Result: { logicalName: 'result', type: 'Integer' },
	SolutionHistoryDataId: { logicalName: 'solutionhistorydataid' },
	SolutionId: { logicalName: 'solutionid' },
	SolutionName: { logicalName: 'solutionname' },
	SolutionVersion: { logicalName: 'solutionversion' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	Status: { logicalName: 'status', type: 'Integer' },
	SubOperation: { logicalName: 'suboperation', type: 'Integer' },
};

/**
 * SolutionHistoryData WebApi class for early-bound style coding
 * Usage: const solutionHistoryData = new SolutionHistoryDataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SolutionHistoryDataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISolutionHistoryDataApi>(entity, 'solutionhistorydata', 'solutionhistorydatas', SolutionHistoryDataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SolutionHistoryDataApi extends ISolutionHistoryDataApi { }
