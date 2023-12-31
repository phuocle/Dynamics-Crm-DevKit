//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ReportApi {
		/**
		* DynamicsCrm.DevKit ReportApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Binary report contents (base-64 encoded). */
		BodyBinary: string;
		/** Text contents of the RDL file for a Reporting Services report. */
		BodyText: string;
		/** URL for a linked report. */
		BodyUrl: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Report.ComponentState;
		/** Unique identifier of the user who created the report. */
		readonly CreatedBy: string;
		/** Major version number of Crm, used to identify the version of Crm in which report is created. */
		CreatedInMajorVersion: number;
		/** Date and time when the report was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the report. */
		readonly CreatedOnBehalfBy: string;
		/** XML used to define a custom report. */
		readonly CustomReportXml: string;
		/** Default filter for the report. */
		DefaultFilter: string;
		/** Description of the report. */
		Description: string;
		/** File name of the report. */
		FileName: string;
		/** File size of the report. */
		readonly FileSize: number;
		/** Version in which the report is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Information about whether the report is a custom report. */
		readonly IsCustomReport: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Information about whether the report is personal or is available to all users. */
		IsPersonal: boolean;
		/** Information about whether the report is a scheduled report. */
		readonly IsScheduledReport: boolean;
		/** Language in which the report will be displayed. */
		LanguageCode: number;
		/** MIME type of the report. */
		MimeType: string;
		/** Unique identifier of the user who last modified the report. */
		readonly ModifiedBy: string;
		/** Date and time when the report was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the report. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the report. */
		Name: string;
		/** Original Text contents of the RDL file for a Reporting Services report. */
		readonly OriginalBodyText: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the report. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the report. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the report. */
		readonly OwningUser: string;
		/** Unique identifier of the parent report. */
		ParentReportId: string;
		/** For internal use only. */
		readonly QueryInfo: string;
		/** Hash value of the body text of the report. */
		readonly RdlHash: number;
		/** Unique identifier of the report. */
		ReportId: string;
		/** For internal use only. */
		readonly ReportIdUnique: string;
		/** Name of the report on SRS. */
		readonly ReportNameOnSRS: string;
		/** Type of the report. */
		ReportTypeCode: OptionSet.Report.ReportTypeCode;
		/** XML used for defining the report schedule. */
		readonly ScheduleXml: string;
		/** Report signature date, used to identify a report for upgrades and hotfixes. */
		SignatureDate_UtcDateOnly: Date;
		/** Unique identifier of the report signature used to identify a report for upgrades and hotfixes. */
		SignatureId: string;
		/** Report signature language code used to identify a report for upgrades and hotfixes. */
		SignatureLcid: number;
		/** Report signature major version, used to identify a report for upgrades and hotfixes. */
		SignatureMajorVersion: number;
		/** Report signature minor version, used to identify a report for upgrades and hotfixes. */
		SignatureMinorVersion: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the report. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Binary report contents (base-64 encoded). */
			readonly BodyBinary: string;
			/** Text contents of the RDL file for a Reporting Services report. */
			readonly BodyText: string;
			/** URL for a linked report. */
			readonly BodyUrl: string;
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
			/** Description of the report. */
			readonly Description: string;
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
			/** Type of the report. */
			readonly ReportTypeCode: string;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum OwnerIdType {
		}
		enum ReportTypeCode {
			/** 3 */
			Linked_Report,
			/** 2 */
			Other_Report,
			/** 1 */
			Reporting_Services_Report
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}