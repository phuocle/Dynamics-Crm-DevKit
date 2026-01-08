/**
 * ImportJob.webapi.ts - ImportJob WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ImportJob
 * All fields return string representation of their values
 */
export interface IImportJobFormattedValue {
	readonly CompletedOn_UtcDateAndTime: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Data: string;
	readonly ImportContext: string;
	readonly ImportJobId: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OperationContext: string;
	readonly OrganizationId: string;
	readonly Progress: string;
	readonly SolutionId: string;
	readonly SolutionName: string;
	readonly StartedOn_UtcDateAndTime: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * ImportJob WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IImportJobApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IImportJobFormattedValue;
	/** Date and time when the import job was completed. */
	readonly CompletedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who created the importJob. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the import job record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the import job record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unstructured data associated with the import job. */
	Data: string | null;
	/** The context of the import */
	ImportContext: string | null;
	/** Unique identifier of the import job. */
	ImportJobId: DevKit.Guid | null;
	/** Unique identifier of the user who modified the importJob. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the import job was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the import job record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the import job. */
	Name: string | null;
	/** The context of the solution operation */
	OperationContext: string | null;
	/** Unique identifier of the organization associated with the importjob. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Import Progress Percentage. */
	Progress: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Unique identifier of the solution. */
	SolutionName: string | null;
	/** Date and time when the import job was started. */
	readonly StartedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const ImportJobFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CompletedOn_UtcDateAndTime: { logicalName: 'completedon', readOnly: true, type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	ImportContext: { logicalName: 'importcontext' },
	ImportJobId: { logicalName: 'importjobid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OperationContext: { logicalName: 'operationcontext' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	Progress: { logicalName: 'progress', type: 'Number' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SolutionName: { logicalName: 'solutionname' },
	StartedOn_UtcDateAndTime: { logicalName: 'startedon', readOnly: true, type: 'DateTime' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * ImportJob WebApi class for early-bound style coding
 * Usage: const importJob = new ImportJobApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ImportJobApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IImportJobApi>(entity, 'importjob', 'importjobs', ImportJobFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ImportJobApi extends IImportJobApi { }
