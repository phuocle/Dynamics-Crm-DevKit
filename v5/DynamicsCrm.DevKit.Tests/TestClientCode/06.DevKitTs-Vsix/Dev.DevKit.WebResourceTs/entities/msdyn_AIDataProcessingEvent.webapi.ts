/**
 * msdyn_AIDataProcessingEvent.webapi.ts - msdyn_AIDataProcessingEvent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_AIDataProcessingEvent
 * All fields return string representation of their values
 */
export interface Imsdyn_AIDataProcessingEventFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_AIDataProcessingEventId: string;
	readonly msdyn_CustomData: string;
	readonly msdyn_InputData_name: string;
	readonly msdyn_InputDataFormat: string;
	readonly msdyn_Name: string;
	readonly msdyn_ProcessedData: string;
	readonly msdyn_ProcessingStatus: string;
	readonly msdyn_ProcessorName: string;
	readonly msdyn_ProcessorType: string;
	readonly msdyn_ReceivedDate_TimezoneDateOnly: string;
	readonly msdyn_UpdatedDate_UtcDateAndTime: string;
	readonly msdyn_ValidationResult: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_AIDataProcessingEvent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIDataProcessingEventApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_AIDataProcessingEventFormattedValue;
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
	/** Unique identifier for entity instances */
	msdyn_AIDataProcessingEventId: DevKit.Guid | null;
	/** Free area. Used for instructions to a reviewer, or JSON for cases where maker needs more customized info. */
	msdyn_CustomData: string | null;
	/** Input data of the process (e.g. file content for Document Processing). */
	readonly msdyn_InputData_name: string | null;
	/** Format of Input Data (JSON, XML, etc) */
	msdyn_InputDataFormat: string | null;
	/** Name of data source (e.g. file name on Document Processing) */
	msdyn_Name: string | null;
	/** Output of AI models for this data. (e.g. Extracted data from Documents in Doc. Processing) */
	msdyn_ProcessedData: string | null;
	/** Current processing status of data. */
	msdyn_ProcessingStatus: number | null;
	/** Agent or Model processing this data. */
	msdyn_ProcessorName: string | null;
	/** Type of processor (e.g. bot or workflow) */
	msdyn_ProcessorType: string | null;
	/** Date input data was received. */
	msdyn_ReceivedDate_TimezoneDateOnly: Date | null;
	/** Date the last update of Processing Status happened. */
	msdyn_UpdatedDate_UtcDateAndTime: Date | null;
	/** Result of validation process when this data is handled by an agent or AI model. */
	msdyn_ValidationResult: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the DataProcessingEvent */
	statecode: number | null;
	/** Reason for the status of the DataProcessingEvent */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AIDataProcessingEventFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AIDataProcessingEventId: { logicalName: 'msdyn_aidataprocessingeventid' },
	msdyn_CustomData: { logicalName: 'msdyn_customdata' },
	msdyn_InputData_name: { logicalName: 'msdyn_inputdata', readOnly: true },
	msdyn_InputDataFormat: { logicalName: 'msdyn_inputdataformat' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_ProcessedData: { logicalName: 'msdyn_processeddata' },
	msdyn_ProcessingStatus: { logicalName: 'msdyn_processingstatus', type: 'Integer' },
	msdyn_ProcessorName: { logicalName: 'msdyn_processorname' },
	msdyn_ProcessorType: { logicalName: 'msdyn_processortype' },
	msdyn_ReceivedDate_TimezoneDateOnly: { logicalName: 'msdyn_receiveddate', type: 'DateTime' },
	msdyn_UpdatedDate_UtcDateAndTime: { logicalName: 'msdyn_updateddate', type: 'DateTime' },
	msdyn_ValidationResult: { logicalName: 'msdyn_validationresult' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_AIDataProcessingEvent WebApi class for early-bound style coding
 * Usage: const msdyn_AIDataProcessingEvent = new msdyn_AIDataProcessingEventApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIDataProcessingEventApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIDataProcessingEventApi>(entity, 'msdyn_aidataprocessingevent', 'msdyn_aidataprocessingevents', msdyn_AIDataProcessingEventFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIDataProcessingEventApi extends Imsdyn_AIDataProcessingEventApi { }
