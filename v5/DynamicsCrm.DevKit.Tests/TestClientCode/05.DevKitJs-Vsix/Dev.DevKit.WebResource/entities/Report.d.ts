//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ReportApi {
		/**
		* DynamicsCrm.DevKit ReportApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
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
		readonly ComponentState: OptionSet.Report.ComponentState | null;
		/** Unique identifier of the user who created the report. */
		readonly CreatedBy: string | null;
		/** Major version number of Crm, used to identify the version of Crm in which report is created. */
		CreatedInMajorVersion: number | null;
		/** Date and time when the report was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the report. */
		readonly CreatedOnBehalfBy: string | null;
		/** XML used to define a custom report. */
		readonly CustomReportXml: string | null;
		/** Default filter for the report. */
		DefaultFilter: string | null;
		/** Field to represent the dependent report dataset model. */
		DependentModelReportId: string | null;
		/** Description of the report. */
		Description: string | null;
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
		ManagedType: OptionSet.Report.ManagedType | null;
		/** MIME type of the report. */
		MimeType: string | null;
		/** Unique identifier of the user who last modified the report. */
		readonly ModifiedBy: string | null;
		/** Date and time when the report was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the report. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the report. */
		Name: string | null;
		/** Original Text contents of the RDL file for a Reporting Services report. */
		readonly OriginalBodyText: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the report. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the report. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the report. */
		readonly OwningUser: string | null;
		/** Unique identifier of the parent report. */
		ParentReportId: string | null;
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
		ReportId: string | null;
		/** For internal use only. */
		readonly ReportIdUnique: string | null;
		/** Name of the report on SRS. */
		readonly ReportNameOnSRS: string | null;
		/** Represents the status of the Report. */
		ReportStatus: string | null;
		/** Type of the report. */
		ReportTypeCode: OptionSet.Report.ReportTypeCode | null;
		/** Represents the version of a report. */
		ReportVersion: number | null;
		/** XML used for defining the report schedule. */
		readonly ScheduleXml: string | null;
		/** Report signature date, used to identify a report for upgrades and hotfixes. */
		SignatureDate_UtcDateOnly: Date | null;
		/** Unique identifier of the report signature used to identify a report for upgrades and hotfixes. */
		SignatureId: string | null;
		/** Report signature language code used to identify a report for upgrades and hotfixes. */
		SignatureLcid: number | null;
		/** Report signature major version, used to identify a report for upgrades and hotfixes. */
		SignatureMajorVersion: number | null;
		/** Report signature minor version, used to identify a report for upgrades and hotfixes. */
		SignatureMinorVersion: number | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the report. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Represents the application id to which a CDS powerbi report belongs to. */
			readonly ApplicationId: string;
			/** Binary report contents (base-64 encoded). */
			readonly BodyBinary: string;
			/** Text contents of the RDL file for a Reporting Services report. */
			readonly BodyText: string;
			/** URL for a linked report. */
			readonly BodyUrl: string;
			/** Represents the dataset id of a report. */
			readonly CdsDatasetId: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the report. */
			readonly CreatedBy: string;
			/** Major version number of Crm, used to identify the version of Crm in which report is created. */
			readonly CreatedInMajorVersion: string;
			/** Date and time when the report was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the report. */
			readonly CreatedOnBehalfBy: string;
			/** XML used to define a custom report. */
			readonly CustomReportXml: string;
			/** Default filter for the report. */
			readonly DefaultFilter: string;
			/** Field to represent the dependent report dataset model. */
			readonly DependentModelReportId: string;
			/** Description of the report. */
			readonly Description: string;
			readonly FileContent_name: string;
			/** File name of the report. */
			readonly FileName: string;
			/** File size of the report. */
			readonly FileSize: string;
			/** Version in which the report is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Information about whether the report is a custom report. */
			readonly IsCustomReport: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Information about whether the report is personal or is available to all users. */
			readonly IsPersonal: string;
			/** Information about whether the report is a scheduled report. */
			readonly IsScheduledReport: string;
			/** Language in which the report will be displayed. */
			readonly LanguageCode: string;
			/** Determine how the report workspace is managed. */
			readonly ManagedType: string;
			/** MIME type of the report. */
			readonly MimeType: string;
			/** Unique identifier of the user who last modified the report. */
			readonly ModifiedBy: string;
			/** Date and time when the report was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the report. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the report. */
			readonly Name: string;
			/** Original Text contents of the RDL file for a Reporting Services report. */
			readonly OriginalBodyText: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the report. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the report. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the report. */
			readonly OwningUser: string;
			/** Unique identifier of the parent report. */
			readonly ParentReportId: string;
			/** Represents the Power BI dataset id of a report. */
			readonly PowerBiDatasetId: string;
			/** Field to maintain the sub application id and feature tag for powerbi reports. */
			readonly PowerBiFeatureTag: string;
			/** Represents the powerbi report id for a CDS report. */
			readonly PowerBiReportId: string;
			/** Field to maintain the internal state of the report */
			readonly PowerBiReportInternalState: string;
			/** Contains the name of the Power Bi embedded report. */
			readonly PowerBiReportName: string;
			/** Contains the workspace information of the Power Bi embedded report. */
			readonly PowerBiWorkspaceInfo: string;
			/** For internal use only. */
			readonly QueryInfo: string;
			/** Hash value of the body text of the report. */
			readonly RdlHash: string;
			/** Unique identifier of the report. */
			readonly ReportId: string;
			/** For internal use only. */
			readonly ReportIdUnique: string;
			/** Name of the report on SRS. */
			readonly ReportNameOnSRS: string;
			/** Represents the status of the Report. */
			readonly ReportStatus: string;
			/** Type of the report. */
			readonly ReportTypeCode: string;
			/** Represents the version of a report. */
			readonly ReportVersion: string;
			/** XML used for defining the report schedule. */
			readonly ScheduleXml: string;
			/** Report signature date, used to identify a report for upgrades and hotfixes. */
			readonly SignatureDate_UtcDateOnly: string;
			/** Unique identifier of the report signature used to identify a report for upgrades and hotfixes. */
			readonly SignatureId: string;
			/** Report signature language code used to identify a report for upgrades and hotfixes. */
			readonly SignatureLcid: string;
			/** Report signature major version, used to identify a report for upgrades and hotfixes. */
			readonly SignatureMajorVersion: string;
			/** Report signature minor version, used to identify a report for upgrades and hotfixes. */
			readonly SignatureMinorVersion: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the report. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Report {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum ManagedType {
			/** Customer = 1*/
			Customer = 1,
			/** Dataverse = 0*/
			Dataverse = 0
		}
		enum ReportTypeCode {
			/** Excel_Embedded_Report = 6*/
			Excel_Embedded_Report = 6,
			/** Excel_Embedded_Report_Template = 7*/
			Excel_Embedded_Report_Template = 7,
			/** Linked_Report = 3*/
			Linked_Report = 3,
			/** Other_Report = 2*/
			Other_Report = 2,
			/** Power_BI_Analytic_Report = 5*/
			Power_BI_Analytic_Report = 5,
			/** Power_BI_Paginated_Report = 4*/
			Power_BI_Paginated_Report = 4,
			/** Reporting_Services_Report = 1*/
			Reporting_Services_Report = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}