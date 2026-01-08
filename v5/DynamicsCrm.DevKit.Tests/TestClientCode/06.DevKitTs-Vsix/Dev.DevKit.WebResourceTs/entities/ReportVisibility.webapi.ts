/**
 * ReportVisibility.webapi.ts - ReportVisibility WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ReportVisibility
 * All fields return string representation of their values
 */
export interface IReportVisibilityFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly ReportId: string;
	readonly ReportVisibilityId: string;
	readonly ReportVisibilityIdUnique: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
	readonly VisibilityCode: string;
}

/**
 * ReportVisibility WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IReportVisibilityApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IReportVisibilityFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the report visibility record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the report visibility record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the reportvisibility. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the report visibility record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the report visibility record was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the reportvisibility. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the report visibility. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the report visibility record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the report visibility record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the report. */
	ReportId: DevKit.Guid | null;
	/** Unique identifier of the report visibility record. */
	ReportVisibilityId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ReportVisibilityIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
	/** Type of visibility of the report. */
	VisibilityCode: number | null;
}

const ReportVisibilityFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	ReportId: { schemaName: 'ReportId', logicalName: '_reportid_value', entityCollectionName: 'reports', entityLogicalName: 'report' },
	ReportVisibilityId: { logicalName: 'reportvisibilityid' },
	ReportVisibilityIdUnique: { logicalName: 'reportvisibilityidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	VisibilityCode: { logicalName: 'visibilitycode', type: 'Integer' },
};

/**
 * ReportVisibility WebApi class for early-bound style coding
 * Usage: const reportVisibility = new ReportVisibilityApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ReportVisibilityApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IReportVisibilityApi>(entity, 'reportvisibility', 'reportvisibilities', ReportVisibilityFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ReportVisibilityApi extends IReportVisibilityApi { }
