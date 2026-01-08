/**
 * msdyn_AIEvent.webapi.ts - msdyn_AIEvent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_AIEvent
 * All fields return string representation of their values
 */
export interface Imsdyn_AIEventFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_AIConfigurationId: string;
	readonly msdyn_AIEventId: string;
	readonly msdyn_AIModelId: string;
	readonly msdyn_ApprovalId: string;
	readonly msdyn_AutomationLink: string;
	readonly msdyn_AutomationName: string;
	readonly msdyn_ConsumptionSource: string;
	readonly msdyn_CreditConsumed: string;
	readonly msdyn_DataInfo: string;
	readonly msdyn_DataInfoFile_name: string;
	readonly msdyn_DataType: string;
	readonly msdyn_EventData: string;
	readonly msdyn_Name: string;
	readonly msdyn_Output: string;
	readonly msdyn_OutputFile_name: string;
	readonly msdyn_PartnerSource: string;
	readonly msdyn_ProcessingDate_UtcDateAndTime: string;
	readonly msdyn_ProcessingStatus: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly QuickTest: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_AIEvent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIEventApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_AIEventFormattedValue;
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
	/** AI Configuration */
	msdyn_AIConfigurationId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_AIEventId: DevKit.Guid | null;
	/** AI Model */
	msdyn_AIModelId: DevKit.Guid | null;
	/** Approval Id */
	msdyn_ApprovalId: string | null;
	/** Automation Link */
	msdyn_AutomationLink: string | null;
	/** Automation Name */
	msdyn_AutomationName: string | null;
	/** Consumption Source */
	msdyn_ConsumptionSource: number | null;
	/** Credit Consumed */
	msdyn_CreditConsumed: number | null;
	/** Data Info */
	msdyn_DataInfo: string | null;
	/** Data Info File */
	readonly msdyn_DataInfoFile_name: string | null;
	/** Data Type */
	msdyn_DataType: string | null;
	/** Event Data */
	msdyn_EventData: string | null;
	/** Name */
	msdyn_Name: string | null;
	/** Output */
	msdyn_Output: string | null;
	/** Output File */
	readonly msdyn_OutputFile_name: string | null;
	/** Partner Source */
	msdyn_PartnerSource: string | null;
	/** Processing Date */
	msdyn_ProcessingDate_UtcDateAndTime: Date | null;
	/** Processing Status */
	msdyn_ProcessingStatus: number | null;
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
	/** Quick Test */
	QuickTest: boolean | null;
	/** Status of the AI Event */
	statecode: number | null;
	/** Reason for the status of the AI Event */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AIEventFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AIConfigurationId: { schemaName: 'msdyn_AIConfigurationId', logicalName: '_msdyn_aiconfigurationid_value', entityCollectionName: 'msdyn_aiconfigurations', entityLogicalName: 'msdyn_aiconfiguration' },
	msdyn_AIEventId: { logicalName: 'msdyn_aieventid' },
	msdyn_AIModelId: { schemaName: 'msdyn_AIModelId', logicalName: '_msdyn_aimodelid_value', entityCollectionName: 'msdyn_aimodels', entityLogicalName: 'msdyn_aimodel' },
	msdyn_ApprovalId: { logicalName: 'msdyn_approvalid' },
	msdyn_AutomationLink: { logicalName: 'msdyn_automationlink' },
	msdyn_AutomationName: { logicalName: 'msdyn_automationname' },
	msdyn_ConsumptionSource: { logicalName: 'msdyn_consumptionsource', type: 'Integer' },
	msdyn_CreditConsumed: { logicalName: 'msdyn_creditconsumed', type: 'Integer' },
	msdyn_DataInfo: { logicalName: 'msdyn_datainfo' },
	msdyn_DataInfoFile_name: { logicalName: 'msdyn_datainfofile', readOnly: true },
	msdyn_DataType: { logicalName: 'msdyn_datatype' },
	msdyn_EventData: { logicalName: 'msdyn_eventdata' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_Output: { logicalName: 'msdyn_output' },
	msdyn_OutputFile_name: { logicalName: 'msdyn_outputfile', readOnly: true },
	msdyn_PartnerSource: { logicalName: 'msdyn_partnersource' },
	msdyn_ProcessingDate_UtcDateAndTime: { logicalName: 'msdyn_processingdate', type: 'DateTime' },
	msdyn_ProcessingStatus: { logicalName: 'msdyn_processingstatus', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	QuickTest: { logicalName: 'msdyn_quicktest', type: 'Boolean' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_AIEvent WebApi class for early-bound style coding
 * Usage: const msdyn_AIEvent = new msdyn_AIEventApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIEventApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIEventApi>(entity, 'msdyn_aievent', 'msdyn_aievents', msdyn_AIEventFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIEventApi extends Imsdyn_AIEventApi { }
