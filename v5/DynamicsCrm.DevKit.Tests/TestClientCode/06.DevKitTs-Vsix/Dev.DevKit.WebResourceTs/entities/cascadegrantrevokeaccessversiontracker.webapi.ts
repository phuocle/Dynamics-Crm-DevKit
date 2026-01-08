/**
 * cascadegrantrevokeaccessversiontracker.webapi.ts - cascadegrantrevokeaccessversiontracker WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for cascadegrantrevokeaccessversiontracker
 * All fields return string representation of their values
 */
export interface IcascadegrantrevokeaccessversiontrackerFormattedValue {
	readonly cascadegrantrevokeaccessversiontrackerId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly MessageName: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ParentEntityId: string;
	readonly ParentObjectTypeCode: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * cascadegrantrevokeaccessversiontracker WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IcascadegrantrevokeaccessversiontrackerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IcascadegrantrevokeaccessversiontrackerFormattedValue;
	/** Unique identifier for entity instances */
	cascadegrantrevokeaccessversiontrackerId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** MessageName */
	MessageName: string | null;
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
	/** ParentEntityId */
	ParentEntityId: string | null;
	/** ParentObjectTypeCode */
	ParentObjectTypeCode: number | null;
	/** Status of the CascadeGrantRevokeAccessVersionTracker */
	statecode: number | null;
	/** Reason for the status of the CascadeGrantRevokeAccessVersionTracker */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const cascadegrantrevokeaccessversiontrackerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	cascadegrantrevokeaccessversiontrackerId: { logicalName: 'cascadegrantrevokeaccessversiontrackerid' },
	CreatedBy: { logicalName: 'createdby', readOnly: true },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { logicalName: 'createdonbehalfby', readOnly: true },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	MessageName: { logicalName: 'messagename' },
	ModifiedBy: { logicalName: 'modifiedby', readOnly: true },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { logicalName: 'modifiedonbehalfby', readOnly: true },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ParentEntityId: { logicalName: 'parententityid' },
	ParentObjectTypeCode: { logicalName: 'parentobjecttypecode', type: 'Integer' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * cascadegrantrevokeaccessversiontracker WebApi class for early-bound style coding
 * Usage: const cascadegrantrevokeaccessversiontracker = new cascadegrantrevokeaccessversiontrackerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class cascadegrantrevokeaccessversiontrackerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IcascadegrantrevokeaccessversiontrackerApi>(entity, 'cascadegrantrevokeaccessversiontracker', 'cascadegrantrevokeaccessversiontrackers', cascadegrantrevokeaccessversiontrackerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface cascadegrantrevokeaccessversiontrackerApi extends IcascadegrantrevokeaccessversiontrackerApi { }
