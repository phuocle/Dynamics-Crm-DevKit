/**
 * ReportEntity.webapi.ts - ReportEntity WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ReportEntity
 * All fields return string representation of their values
 */
export interface IReportEntityFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsFilterable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly ReportEntityId: string;
	readonly ReportEntityIdUnique: string;
	readonly ReportId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * ReportEntity WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IReportEntityApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IReportEntityFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the report record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the report record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the reportentity. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Information about whether the report is filterable. */
	IsFilterable: boolean | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the report record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the report record was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the reportentity. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the report entity. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the report record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the report record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the report record. */
	ReportEntityId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ReportEntityIdUnique: DevKit.Guid | null;
	/** Unique identifier of the report. */
	ReportId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const ReportEntityFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsFilterable: { logicalName: 'isfilterable', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	ReportEntityId: { logicalName: 'reportentityid' },
	ReportEntityIdUnique: { logicalName: 'reportentityidunique', readOnly: true },
	ReportId: { schemaName: 'ReportId', logicalName: '_reportid_value', entityCollectionName: 'reports', entityLogicalName: 'report' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ReportEntity WebApi class for early-bound style coding
 * Usage: const reportEntity = new ReportEntityApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ReportEntityApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IReportEntityApi>(entity, 'reportentity', 'reportentities', ReportEntityFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ReportEntityApi extends IReportEntityApi { }
