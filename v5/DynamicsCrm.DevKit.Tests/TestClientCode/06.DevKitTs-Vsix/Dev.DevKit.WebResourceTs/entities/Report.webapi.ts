/**
 * Report.webapi.ts - Report WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Report
 * All fields return string representation of their values
 */
export interface IReportFormattedValue {
	readonly ApplicationId: string;
	readonly BodyBinary: string;
	readonly BodyText: string;
	readonly BodyUrl: string;
	readonly CdsDatasetId: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedInMajorVersion: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomReportXml: string;
	readonly DefaultFilter: string;
	readonly DependentModelReportId: string;
	readonly Description: string;
	readonly FileContent_name: string;
	readonly FileName: string;
	readonly FileSize: string;
	readonly IntroducedVersion: string;
	readonly IsCustomizable: string;
	readonly IsCustomReport: string;
	readonly IsManaged: string;
	readonly IsPersonal: string;
	readonly IsScheduledReport: string;
	readonly LanguageCode: string;
	readonly ManagedType: string;
	readonly MimeType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OriginalBodyText: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ParentReportId: string;
	readonly PowerBiDatasetId: string;
	readonly PowerBiFeatureTag: string;
	readonly PowerBiReportId: string;
	readonly PowerBiReportInternalState: string;
	readonly PowerBiReportName: string;
	readonly PowerBiWorkspaceInfo: string;
	readonly QueryInfo: string;
	readonly RdlHash: string;
	readonly ReportId: string;
	readonly ReportIdUnique: string;
	readonly ReportNameOnSRS: string;
	readonly ReportStatus: string;
	readonly ReportTypeCode: string;
	readonly ReportVersion: string;
	readonly ScheduleXml: string;
	readonly SignatureDate_UtcDateOnly: string;
	readonly SignatureId: string;
	readonly SignatureLcid: string;
	readonly SignatureMajorVersion: string;
	readonly SignatureMinorVersion: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * Report WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IReportApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IReportFormattedValue;
	/** Represents the application id to which a CDS powerbi report belongs to. */
	readonly ApplicationId: string | null;
	/** Binary report contents (base-64 encoded). */
	BodyBinary: string | null;
	/** Text contents of the RDL file for a Reporting Services report. */
	BodyText: string | null;
	/** URL for a linked report. */
	BodyUrl: string | null;
	/** Represents the dataset id of a report. */
	readonly CdsDatasetId: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the report. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Major version number of Crm, used to identify the version of Crm in which report is created. */
	CreatedInMajorVersion: number | null;
	/** Date and time when the report was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the report. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** XML used to define a custom report. */
	readonly CustomReportXml: string | null;
	/** Default filter for the report. */
	DefaultFilter: string | null;
	/** Field to represent the dependent report dataset model. */
	DependentModelReportId: DevKit.Guid | null;
	/** Description of the report. */
	Description: string | null;
	/** File Content */
	readonly FileContent_name: string | null;
	/** File name of the report. */
	FileName: string | null;
	/** File size of the report. */
	readonly FileSize: number | null;
	/** Version in which the report is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Information about whether the report is a custom report. */
	readonly IsCustomReport: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Information about whether the report is personal or is available to all users. */
	IsPersonal: boolean | null;
	/** Information about whether the report is a scheduled report. */
	readonly IsScheduledReport: boolean | null;
	/** Language in which the report will be displayed. */
	LanguageCode: number | null;
	/** Determine how the report workspace is managed. */
	ManagedType: number | null;
	/** MIME type of the report. */
	MimeType: string | null;
	/** Unique identifier of the user who last modified the report. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the report was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the report. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the report. */
	Name: string | null;
	/** Original Text contents of the RDL file for a Reporting Services report. */
	readonly OriginalBodyText: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the report. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the report. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the report. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the report. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the parent report. */
	ParentReportId: DevKit.Guid | null;
	/** Represents the Power BI dataset id of a report. */
	readonly PowerBiDatasetId: string | null;
	/** Field to maintain the sub application id and feature tag for powerbi reports. */
	PowerBiFeatureTag: string | null;
	/** Represents the powerbi report id for a CDS report. */
	readonly PowerBiReportId: string | null;
	/** Field to maintain the internal state of the report */
	readonly PowerBiReportInternalState: string | null;
	/** Contains the name of the Power Bi embedded report. */
	readonly PowerBiReportName: string | null;
	/** Contains the workspace information of the Power Bi embedded report. */
	readonly PowerBiWorkspaceInfo: string | null;
	/** For internal use only. */
	readonly QueryInfo: string | null;
	/** Hash value of the body text of the report. */
	readonly RdlHash: number | null;
	/** Unique identifier of the report. */
	ReportId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ReportIdUnique: DevKit.Guid | null;
	/** Name of the report on SRS. */
	readonly ReportNameOnSRS: string | null;
	/** Represents the status of the Report. */
	ReportStatus: string | null;
	/** Type of the report. */
	ReportTypeCode: number | null;
	/** Represents the version of a report. */
	ReportVersion: number | null;
	/** XML used for defining the report schedule. */
	readonly ScheduleXml: string | null;
	/** Report signature date, used to identify a report for upgrades and hotfixes. */
	SignatureDate_UtcDateOnly: Date | null;
	/** Unique identifier of the report signature used to identify a report for upgrades and hotfixes. */
	SignatureId: DevKit.Guid | null;
	/** Report signature language code used to identify a report for upgrades and hotfixes. */
	SignatureLcid: number | null;
	/** Report signature major version, used to identify a report for upgrades and hotfixes. */
	SignatureMajorVersion: number | null;
	/** Report signature minor version, used to identify a report for upgrades and hotfixes. */
	SignatureMinorVersion: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the report. */
	readonly VersionNumber: number | null;
}

const ReportFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ApplicationId: { logicalName: 'applicationid', readOnly: true },
	BodyBinary: { logicalName: 'bodybinary' },
	BodyText: { logicalName: 'bodytext' },
	BodyUrl: { logicalName: 'bodyurl' },
	CdsDatasetId: { logicalName: 'cdsdatasetid', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedInMajorVersion: { logicalName: 'createdinmajorversion', type: 'Integer' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomReportXml: { logicalName: 'customreportxml', readOnly: true },
	DefaultFilter: { logicalName: 'defaultfilter' },
	DependentModelReportId: { schemaName: 'DependentModelReportId', logicalName: '_dependentmodelreportid_value', entityCollectionName: 'reports', entityLogicalName: 'report' },
	Description: { logicalName: 'description' },
	FileContent_name: { logicalName: 'filecontent', readOnly: true },
	FileName: { logicalName: 'filename' },
	FileSize: { logicalName: 'filesize', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsCustomReport: { logicalName: 'iscustomreport', readOnly: true, type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsPersonal: { logicalName: 'ispersonal', type: 'Boolean' },
	IsScheduledReport: { logicalName: 'isscheduledreport', readOnly: true, type: 'Boolean' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	ManagedType: { logicalName: 'managedtype', type: 'Integer' },
	MimeType: { logicalName: 'mimetype' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OriginalBodyText: { logicalName: 'originalbodytext', readOnly: true },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentReportId: { schemaName: 'ParentReportId', logicalName: '_parentreportid_value', entityCollectionName: 'reports', entityLogicalName: 'report' },
	PowerBiDatasetId: { logicalName: 'powerbidatasetid', readOnly: true },
	PowerBiFeatureTag: { logicalName: 'powerbifeaturetag' },
	PowerBiReportId: { logicalName: 'powerbireportid', readOnly: true },
	PowerBiReportInternalState: { logicalName: 'powerbireportinternalstate', readOnly: true },
	PowerBiReportName: { logicalName: 'powerbireportname', readOnly: true },
	PowerBiWorkspaceInfo: { logicalName: 'powerbiworkspaceinfo', readOnly: true },
	QueryInfo: { logicalName: 'queryinfo', readOnly: true },
	RdlHash: { logicalName: 'rdlhash', readOnly: true, type: 'Integer' },
	ReportId: { logicalName: 'reportid' },
	ReportIdUnique: { logicalName: 'reportidunique', readOnly: true },
	ReportNameOnSRS: { logicalName: 'reportnameonsrs', readOnly: true },
	ReportStatus: { logicalName: 'reportstatus' },
	ReportTypeCode: { logicalName: 'reporttypecode', type: 'Integer' },
	ReportVersion: { logicalName: 'reportversion', type: 'Integer' },
	ScheduleXml: { logicalName: 'schedulexml', readOnly: true },
	SignatureDate_UtcDateOnly: { logicalName: 'signaturedate', type: 'DateTime' },
	SignatureId: { logicalName: 'signatureid' },
	SignatureLcid: { logicalName: 'signaturelcid', type: 'Integer' },
	SignatureMajorVersion: { logicalName: 'signaturemajorversion', type: 'Integer' },
	SignatureMinorVersion: { logicalName: 'signatureminorversion', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Report WebApi class for early-bound style coding
 * Usage: const report = new ReportApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ReportApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IReportApi>(entity, 'report', 'reports', ReportFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ReportApi extends IReportApi { }
