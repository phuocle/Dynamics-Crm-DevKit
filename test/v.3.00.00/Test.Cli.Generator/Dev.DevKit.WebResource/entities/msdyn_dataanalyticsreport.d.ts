//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAnalytics_Report_Record {
		interface tab__4659BB92_7C23_42B1_BE09_7F52780E95D0_Sections {
		}
		interface tab__4659BB92_7C23_42B1_BE09_7F52780E95D0 extends DevKit.Controls.ITab {
			Section: tab__4659BB92_7C23_42B1_BE09_7F52780E95D0_Sections;
		}
		interface Tabs {
			_4659BB92_7C23_42B1_BE09_7F52780E95D0: tab__4659BB92_7C23_42B1_BE09_7F52780E95D0;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormAnalytics_Report_Record extends DevKit.IForm {
		/**
		* Analytics Report Record [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Analytics_Report_Record */
		Body: DevKit.FormAnalytics_Report_Record.Body;
		/** The Process of form Analytics_Report_Record */
		Process: DevKit.FormAnalytics_Report_Record.Process;
		/** The SidePanes of form Analytics_Report_Record */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_dataanalyticsreportApi {
		/**
		* DynamicsCrm.DevKit msdyn_dataanalyticsreportApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_dataanalyticsreport.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Record the Checksum during initial provision so we can validate if the org has been restored or copied over. */
		msdyn_analyticschecksum: number;
		/** Unique identifier for entity instances */
		msdyn_dataanalyticsreportId: string;
		/** Data Insights And Analytics Feature Id */
		msdyn_datainsightsandanalyticsfeatureId: string;
		/** Report Display Order */
		msdyn_displayorder: number;
		/** Specifies whether this report is enabled for rendering */
		msdyn_isenabled: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Power BI Report Provision Status for this Analytics Record */
		msdyn_provisionstatus: boolean;
		/** Report Entity Name */
		msdyn_reportentityname: string;
		/** Report Group */
		msdyn_reportgroup: string;
		/** Power BI Report ID */
		msdyn_reportid: string;
		/** Report Page */
		msdyn_reportpage: string;
		/** Report Template Id used for sending provision request */
		msdyn_reporttemplateid: string;
		/** Power BI Workspace ID */
		msdyn_workspaceid: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Data Analytics Report */
		statecode: OptionSet.msdyn_dataanalyticsreport.statecode;
		/** Reason for the status of the Data Analytics Report */
		statuscode: OptionSet.msdyn_dataanalyticsreport.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Record the Checksum during initial provision so we can validate if the org has been restored or copied over. */
			readonly msdyn_analyticschecksum: string;
			/** Unique identifier for entity instances */
			readonly msdyn_dataanalyticsreportId: string;
			/** Data Insights And Analytics Feature Id */
			readonly msdyn_datainsightsandanalyticsfeatureId: string;
			/** Report Display Order */
			readonly msdyn_displayorder: string;
			/** Specifies whether this report is enabled for rendering */
			readonly msdyn_isenabled: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Power BI Report Provision Status for this Analytics Record */
			readonly msdyn_provisionstatus: string;
			/** Report Entity Name */
			readonly msdyn_reportentityname: string;
			/** Report Group */
			readonly msdyn_reportgroup: string;
			/** Power BI Report ID */
			readonly msdyn_reportid: string;
			/** Report Page */
			readonly msdyn_reportpage: string;
			/** Report Template Id used for sending provision request */
			readonly msdyn_reporttemplateid: string;
			/** Power BI Workspace ID */
			readonly msdyn_workspaceid: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Data Analytics Report */
			readonly statecode: string;
			/** Reason for the status of the Data Analytics Report */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_dataanalyticsreport {
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
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}