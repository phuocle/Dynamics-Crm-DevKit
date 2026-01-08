/**
 * PowerPagesDDOSAlert.webapi.ts - PowerPagesDDOSAlert WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PowerPagesDDOSAlert WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPowerPagesDDOSAlertApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPowerPagesDDOSAlertApi, 'FormattedValue'>]: string };
	/** AdditionalData */
	AdditionalData: string | null;
	/** AttackType */
	AttackType: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description */
	Description: string | null;
	/** FirstActivityTime */
	FirstActivityTime_UtcDateAndTime: Date | null;
	/** HostName */
	HostName: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Incident Id */
	IncidentId: string | null;
	/** LastActivityTime */
	LastActivityTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
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
	/** PortalId */
	PortalId: string | null;
	/** Unique identifier for entity instances */
	PowerPagesDDOSAlertId: DevKit.Guid | null;
	/** RecordType */
	RecordType: string | null;
	/** Severity */
	Severity: string | null;
	/** Status of the PowerPagesDDOSAlert */
	statecode: number | null;
	/** Reason for the status of the PowerPagesDDOSAlert */
	statuscode: number | null;
	/** TimeGenerated */
	TimeGenerated_UtcDateAndTime: Date | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Title */
	Title: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const PowerPagesDDOSAlertFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdditionalData: { logicalName: 'additionaldata' },
	AttackType: { logicalName: 'attacktype' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	FirstActivityTime_UtcDateAndTime: { logicalName: 'firstactivitytime', type: 'DateTime' },
	HostName: { logicalName: 'hostname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IncidentId: { logicalName: 'incidentid' },
	LastActivityTime_UtcDateAndTime: { logicalName: 'lastactivitytime', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PortalId: { logicalName: 'portalid' },
	PowerPagesDDOSAlertId: { logicalName: 'powerpagesddosalertid' },
	RecordType: { logicalName: 'recordtype' },
	Severity: { logicalName: 'severity' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeGenerated_UtcDateAndTime: { logicalName: 'timegenerated', type: 'DateTime' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PowerPagesDDOSAlert WebApi class for early-bound style coding
 * Usage: const powerPagesDDOSAlert = new PowerPagesDDOSAlertApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PowerPagesDDOSAlertApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPowerPagesDDOSAlertApi>(entity, 'powerpagesddosalert', 'powerpagesddosalerts', PowerPagesDDOSAlertFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PowerPagesDDOSAlertApi extends IPowerPagesDDOSAlertApi { }
