/**
 * cascadegrantrevokeaccessrecordstracker.webapi.ts - cascadegrantrevokeaccessrecordstracker WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for cascadegrantrevokeaccessrecordstracker
 * All fields return string representation of their values
 */
export interface IcascadegrantrevokeaccessrecordstrackerFormattedValue {
	readonly cascadegrantrevokeaccessrecordstrackerId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ProcessedRecords: string;
	readonly RecordsAttachment_name: string;
	readonly RecordsJson: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SyncTrackerId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TotalRecords: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * cascadegrantrevokeaccessrecordstracker WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IcascadegrantrevokeaccessrecordstrackerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IcascadegrantrevokeaccessrecordstrackerFormattedValue;
	/** Unique identifier for entity instances */
	cascadegrantrevokeaccessrecordstrackerId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** ProcessedRecords */
	ProcessedRecords: number | null;
	/** RecordsAttachment */
	readonly RecordsAttachment_name: string | null;
	/** RecordsJson */
	RecordsJson: string | null;
	/** Status of the CascadeGrantRevokeAccessRecordsTracker */
	statecode: number | null;
	/** Reason for the status of the CascadeGrantRevokeAccessRecordsTracker */
	statuscode: number | null;
	/** SyncTrackerId */
	SyncTrackerId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** TotalRecords */
	TotalRecords: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const cascadegrantrevokeaccessrecordstrackerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	cascadegrantrevokeaccessrecordstrackerId: { logicalName: 'cascadegrantrevokeaccessrecordstrackerid' },
	CreatedBy: { logicalName: 'createdby', readOnly: true },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { logicalName: 'createdonbehalfby', readOnly: true },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { logicalName: 'modifiedby', readOnly: true },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { logicalName: 'modifiedonbehalfby', readOnly: true },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ProcessedRecords: { logicalName: 'processedrecords', type: 'Integer' },
	RecordsAttachment_name: { logicalName: 'recordsattachment', readOnly: true },
	RecordsJson: { logicalName: 'recordsjson' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SyncTrackerId: { schemaName: 'SyncTrackerId', logicalName: '_synctrackerid_value', entityCollectionName: 'cascadegrantrevokeaccessversiontrackers', entityLogicalName: 'cascadegrantrevokeaccessversiontracker' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TotalRecords: { logicalName: 'totalrecords', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * cascadegrantrevokeaccessrecordstracker WebApi class for early-bound style coding
 * Usage: const cascadegrantrevokeaccessrecordstracker = new cascadegrantrevokeaccessrecordstrackerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class cascadegrantrevokeaccessrecordstrackerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IcascadegrantrevokeaccessrecordstrackerApi>(entity, 'cascadegrantrevokeaccessrecordstracker', 'cascadegrantrevokeaccessrecordstrackers', cascadegrantrevokeaccessrecordstrackerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface cascadegrantrevokeaccessrecordstrackerApi extends IcascadegrantrevokeaccessrecordstrackerApi { }
