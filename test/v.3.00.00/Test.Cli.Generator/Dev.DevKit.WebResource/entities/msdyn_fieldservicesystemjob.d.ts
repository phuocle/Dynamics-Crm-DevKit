//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_fieldservicesystemjob_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_ConditionCode: DevKit.Controls.Integer;
			msdyn_ExceptionMessage: DevKit.Controls.String;
			msdyn_ExceptionTrace: DevKit.Controls.String;
			msdyn_InputParameter: DevKit.Controls.String;
			msdyn_InputParameterType: DevKit.Controls.OptionSet;
			/** Type a name for the job. */
			msdyn_jobname: DevKit.Controls.String;
			msdyn_JobType: DevKit.Controls.Integer;
			msdyn_OutputParameter: DevKit.Controls.String;
			msdyn_OutputParameterType: DevKit.Controls.OptionSet;
			/** Shows the user associated with the field service system job. */
			msdyn_OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Field Service System Job */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_fieldservicesystemjob_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_fieldservicesystemjob_Information */
		Body: DevKit.Formmsdyn_fieldservicesystemjob_Information.Body;
		/** The Footer section of form msdyn_fieldservicesystemjob_Information */
		Footer: DevKit.Formmsdyn_fieldservicesystemjob_Information.Footer;
		/** The Navigation of form msdyn_fieldservicesystemjob_Information */
		Navigation: DevKit.Formmsdyn_fieldservicesystemjob_Information.Navigation;
		/** The Process of form msdyn_fieldservicesystemjob_Information */
		Process: DevKit.Formmsdyn_fieldservicesystemjob_Information.Process;
		/** The SidePanes of form msdyn_fieldservicesystemjob_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_fieldservicesystemjobApi {
		/**
		* DynamicsCrm.DevKit msdyn_fieldservicesystemjobApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_ConditionCode: number;
		msdyn_ExceptionMessage: string;
		msdyn_ExceptionTrace: string;
		/** Shows the entity instances. */
		msdyn_fieldservicesystemjobId: string;
		msdyn_InputParameter: string;
		msdyn_InputParameterType: OptionSet.msdyn_fieldservicesystemjob.msdyn_InputParameterType;
		/** Type a name for the job. */
		msdyn_jobname: string;
		/** Enter the status of the job. */
		msdyn_JobStatus: OptionSet.msdyn_fieldservicesystemjob.msdyn_JobStatus;
		msdyn_JobType: number;
		msdyn_OutputParameter: string;
		msdyn_OutputParameterType: OptionSet.msdyn_fieldservicesystemjob.msdyn_OutputParameterType;
		/** Shows the user associated with the field service system job. */
		msdyn_OwnerId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Field Service System Job */
		statecode: OptionSet.msdyn_fieldservicesystemjob.statecode;
		/** Shows the reason for the status of the field service system job. */
		statuscode: OptionSet.msdyn_fieldservicesystemjob.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_fieldservicesystemjob {
		enum msdyn_InputParameterType {
			/** 690970001 */
			Json,
			/** 690970000 */
			String_List,
			/** 690970002 */
			Xml
		}
		enum msdyn_JobStatus {
			/** 690970002 */
			Completed,
			/** 690970003 */
			Failed,
			/** 690970001 */
			In_Progress,
			/** 690970000 */
			Pending
		}
		enum msdyn_OutputParameterType {
			/** 690970001 */
			Json,
			/** 690970000 */
			String_List,
			/** 690970002 */
			Xml
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}