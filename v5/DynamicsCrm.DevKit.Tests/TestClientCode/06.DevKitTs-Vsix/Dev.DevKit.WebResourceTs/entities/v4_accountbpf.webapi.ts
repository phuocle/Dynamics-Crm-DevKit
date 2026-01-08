/**
 * v4_accountbpf.webapi.ts - v4_accountbpf WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for v4_accountbpf
 * All fields return string representation of their values
 */
export interface Iv4_accountbpfFormattedValue {
	readonly ActiveStageId: string;
	readonly ActiveStageStartedOn_UtcDateOnly: string;
	readonly bpf_accountid: string;
	readonly bpf_Duration: string;
	readonly bpf_name: string;
	readonly BusinessProcessFlowInstanceId: string;
	readonly CompletedOn_UtcDateOnly: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ProcessId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TraversedPath: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * v4_accountbpf WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iv4_accountbpfApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Iv4_accountbpfFormattedValue;
	/** Unique identifier of the active stage for the Business Process Flow instance. */
	ActiveStageId: DevKit.Guid | null;
	/** Date and time when current active stage is started */
	ActiveStageStartedOn_UtcDateOnly: Date | null;
	/** Account */
	bpf_accountid: DevKit.Guid | null;
	/** Duration of Business Process Flow */
	readonly bpf_Duration: number | null;
	/** Description */
	bpf_name: string | null;
	/** Unique identifier for entity instances */
	BusinessProcessFlowInstanceId: DevKit.Guid | null;
	/** Date and time when Business Process Flow instance is completed. */
	CompletedOn_UtcDateOnly: Date | null;
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
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the workflow associated to the Business Process Flow instance. */
	ProcessId: DevKit.Guid | null;
	/** Status of the AccountBPF */
	statecode: number | null;
	/** Reason for the status of the AccountBPF */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Comma delimited string of process stage ids that represent visited stages of the Business Process Flow instance. */
	TraversedPath: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const v4_accountbpfFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActiveStageId: { schemaName: 'ActiveStageId', logicalName: '_activestageid_value', entityCollectionName: 'processstages', entityLogicalName: 'processstage' },
	ActiveStageStartedOn_UtcDateOnly: { logicalName: 'activestagestartedon', type: 'DateTime' },
	bpf_accountid: { schemaName: 'bpf_accountid', logicalName: '_bpf_accountid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	bpf_Duration: { logicalName: 'bpf_duration', readOnly: true, type: 'Integer' },
	bpf_name: { logicalName: 'bpf_name' },
	BusinessProcessFlowInstanceId: { logicalName: 'businessprocessflowinstanceid' },
	CompletedOn_UtcDateOnly: { logicalName: 'completedon', type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ProcessId: { schemaName: 'ProcessId', logicalName: '_processid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TraversedPath: { logicalName: 'traversedpath' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * v4_accountbpf WebApi class for early-bound style coding
 * Usage: const v4_accountbpf = new v4_accountbpfApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class v4_accountbpfApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iv4_accountbpfApi>(entity, 'v4_accountbpf', 'v4_accountbpfs', v4_accountbpfFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface v4_accountbpfApi extends Iv4_accountbpfApi { }
