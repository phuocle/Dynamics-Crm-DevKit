/**
 * ReportLink.webapi.ts - ReportLink WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ReportLink
 * All fields return string representation of their values
 */
export interface IReportLinkFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly LinkedReportId: string;
	readonly LinkedReportName: string;
	readonly LinkTypeCode: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly ReportId: string;
	readonly ReportLinkId: string;
	readonly ReportLinkIdUnique: string;
	readonly VersionNumber: string;
}

/**
 * ReportLink WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IReportLinkApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IReportLinkFormattedValue;
	/** Unique identifier of the user who created the report link. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the report link record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the reportlink. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the linked report. */
	LinkedReportId: DevKit.Guid | null;
	/** Name of the linked report. */
	LinkedReportName: string | null;
	/** Link type of the report. */
	LinkTypeCode: number | null;
	/** Unique identifier of the user who last modified the report link. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the report link was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the reportlink. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the report link. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the report link. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the report link. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the main report. */
	ReportId: DevKit.Guid | null;
	/** Unique identifier of the report link. */
	ReportLinkId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ReportLinkIdUnique: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const ReportLinkFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LinkedReportId: { schemaName: 'LinkedReportId', logicalName: '_linkedreportid_value', entityCollectionName: 'reports', entityLogicalName: 'report' },
	LinkedReportName: { logicalName: 'linkedreportname' },
	LinkTypeCode: { logicalName: 'linktypecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	ReportId: { schemaName: 'ReportId', logicalName: '_reportid_value', entityCollectionName: 'reports', entityLogicalName: 'report' },
	ReportLinkId: { logicalName: 'reportlinkid' },
	ReportLinkIdUnique: { logicalName: 'reportlinkidunique', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ReportLink WebApi class for early-bound style coding
 * Usage: const reportLink = new ReportLinkApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ReportLinkApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IReportLinkApi>(entity, 'reportlink', 'reportlinks', ReportLinkFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ReportLinkApi extends IReportLinkApi { }
