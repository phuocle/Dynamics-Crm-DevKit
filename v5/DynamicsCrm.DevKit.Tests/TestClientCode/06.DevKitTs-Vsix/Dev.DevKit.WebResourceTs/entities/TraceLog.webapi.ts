/**
 * TraceLog.webapi.ts - TraceLog WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TraceLog
 * All fields return string representation of their values
 */
export interface ITraceLogFormattedValue {
	readonly CanBeDeleted: string;
	readonly CollationLevel: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ErrorDetails: string;
	readonly ErrorTypeDisplay: string;
	readonly IsUnique: string;
	readonly Level: string;
	readonly MachineName: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly ParentTraceLogId: string;
	readonly RegardingObjectId: string;
	readonly RegardingObjectOwnerId: string;
	readonly RegardingObjectOwningBusinessUnit: string;
	readonly Text: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TraceActionXml: string;
	readonly TraceCode: string;
	readonly TraceDetailXml: string;
	readonly TraceLogId: string;
	readonly TraceParameterHash: string;
	readonly TraceParameterXml: string;
	readonly TraceRegardingId: string;
	readonly TraceStatus: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * TraceLog WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITraceLogApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITraceLogFormattedValue;
	/** Indicates if this trace log can be deleted. */
	CanBeDeleted: boolean | null;
	/** Indicates the collation level */
	CollationLevel: number | null;
	/** Unique identifier of the user who created the trace. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Time the error is created and logged. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the trace. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	ErrorDetails: string | null;
	/** Trace Error Details */
	ErrorTypeDisplay: string | null;
	/** Tells if this traceLog is created uniquely(only one) for the associated entity. */
	IsUnique: boolean | null;
	/** Information about the trace level. */
	Level: number | null;
	MachineName: string | null;
	/** Unique identifier of the user who modified the trace. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Time the error is updated and logged for the same regarding object. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the trace. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the trace. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Indicates the parent ID of the trace log. */
	ParentTraceLogId: DevKit.Guid | null;
	/** Regarding mailbox or email server profile. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the regarding object. */
	readonly RegardingObjectOwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the regarding object. */
	readonly RegardingObjectOwningBusinessUnit: DevKit.Guid | null;
	/** Text of the trace. */
	Text: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** XML representation of the trace actions. */
	TraceActionXml: string | null;
	/** Error code. */
	TraceCode: number | null;
	/** XML representation of the trace details. */
	TraceDetailXml: string | null;
	/** Unique identifier of the trace. */
	TraceLogId: DevKit.Guid | null;
	/** Stores the hash of the entity object associated with this tracelog. Hash is computed using the object type code and its id. */
	readonly TraceParameterHash: number | null;
	/** XML representation of the trace parameters. */
	TraceParameterXml: string | null;
	/** For internal use only. */
	readonly TraceRegardingId: DevKit.Guid | null;
	/** Status about the trace. */
	TraceStatus: boolean | null;
	/** Time zone code that was in use when the trace was created. */
	UTCConversionTimeZoneCode: number | null;
}

const TraceLogFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CanBeDeleted: { logicalName: 'canbedeleted', type: 'Boolean' },
	CollationLevel: { logicalName: 'collationlevel', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ErrorDetails: { logicalName: 'errordetails' },
	ErrorTypeDisplay: { logicalName: 'errortypedisplay' },
	IsUnique: { logicalName: 'isunique', type: 'Boolean' },
	Level: { logicalName: 'level', type: 'Integer' },
	MachineName: { logicalName: 'machinename' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	ParentTraceLogId: { schemaName: 'ParentTraceLogId', logicalName: '_parenttracelogid_value', entityCollectionName: 'tracelogs', entityLogicalName: 'tracelog' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'emailserverprofiles', entityLogicalName: 'emailserverprofile' },
	RegardingObjectOwnerId: { schemaName: 'RegardingObjectOwnerId', logicalName: '_regardingobjectownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RegardingObjectOwningBusinessUnit: { schemaName: 'RegardingObjectOwningBusinessUnit', logicalName: '_regardingobjectowningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	Text: { logicalName: 'text' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TraceActionXml: { logicalName: 'traceactionxml' },
	TraceCode: { logicalName: 'tracecode', type: 'Integer' },
	TraceDetailXml: { logicalName: 'tracedetailxml' },
	TraceLogId: { logicalName: 'tracelogid' },
	TraceParameterHash: { logicalName: 'traceparameterhash', readOnly: true, type: 'Integer' },
	TraceParameterXml: { logicalName: 'traceparameterxml' },
	TraceRegardingId: { schemaName: 'TraceRegardingId', logicalName: '_traceregardingid_value', readOnly: true, entityCollectionName: 'traceregardings', entityLogicalName: 'traceregarding' },
	TraceStatus: { logicalName: 'tracestatus', type: 'Boolean' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * TraceLog WebApi class for early-bound style coding
 * Usage: const traceLog = new TraceLogApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TraceLogApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITraceLogApi>(entity, 'tracelog', 'tracelogs', TraceLogFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TraceLogApi extends ITraceLogApi { }
