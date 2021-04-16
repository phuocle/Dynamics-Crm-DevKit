//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Binary report contents (base-64 encoded). */
		BodyBinary: DevKit.WebApi.StringValue;
		/** Text contents of the RDL file for a Reporting Services report. */
		BodyText: DevKit.WebApi.StringValue;
		/** URL for a linked report. */
		BodyUrl: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the report. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Major version number of Crm, used to identify the version of Crm in which report is created. */
		CreatedInMajorVersion: DevKit.WebApi.IntegerValue;
		/** Date and time when the report was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the report. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** XML used to define a custom report. */
		CustomReportXml: DevKit.WebApi.StringValueReadonly;
		/** Default filter for the report. */
		DefaultFilter: DevKit.WebApi.StringValue;
		/** Description of the report. */
		Description: DevKit.WebApi.StringValue;
		/** File name of the report. */
		FileName: DevKit.WebApi.StringValue;
		/** File size of the report. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Version in which the report is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information about whether the report is a custom report. */
		IsCustomReport: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the report is personal or is available to all users. */
		IsPersonal: DevKit.WebApi.BooleanValue;
		/** Information about whether the report is a scheduled report. */
		IsScheduledReport: DevKit.WebApi.BooleanValueReadonly;
		/** Language in which the report will be displayed. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** MIME type of the report. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the report. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the report was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the report. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the report. */
		Name: DevKit.WebApi.StringValue;
		/** Original Text contents of the RDL file for a Reporting Services report. */
		OriginalBodyText: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the report. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the report. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the report. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the parent report. */
		ParentReportId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		QueryInfo: DevKit.WebApi.StringValueReadonly;
		/** Hash value of the body text of the report. */
		RdlHash: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the report. */
		ReportId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ReportIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Name of the report on SRS. */
		ReportNameOnSRS: DevKit.WebApi.StringValueReadonly;
		/** Type of the report. */
		ReportTypeCode: DevKit.WebApi.OptionSetValue;
		/** XML used for defining the report schedule. */
		ScheduleXml: DevKit.WebApi.StringValueReadonly;
		/** Report signature date, used to identify a report for upgrades and hotfixes. */
		SignatureDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the report signature used to identify a report for upgrades and hotfixes. */
		SignatureId: DevKit.WebApi.GuidValue;
		/** Report signature language code used to identify a report for upgrades and hotfixes. */
		SignatureLcid: DevKit.WebApi.IntegerValue;
		/** Report signature major version, used to identify a report for upgrades and hotfixes. */
		SignatureMajorVersion: DevKit.WebApi.IntegerValue;
		/** Report signature minor version, used to identify a report for upgrades and hotfixes. */
		SignatureMinorVersion: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the report. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Report {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum ReportTypeCode {
			/** 1 */
			Reporting_Services_Report,
			/** 2 */
			Other_Report,
			/** 3 */
			Linked_Report
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}