//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
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
	}
	class Formmsdyn_fieldservicesystemjob_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_fieldservicesystemjob_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_fieldservicesystemjob_Information */
		Body: MyDog.Formmsdyn_fieldservicesystemjob_Information.Body;
		/** The Footer section of form msdyn_fieldservicesystemjob_Information */
		Footer: MyDog.Formmsdyn_fieldservicesystemjob_Information.Footer;
		/** The Navigation of form msdyn_fieldservicesystemjob_Information */
		Navigation: MyDog.Formmsdyn_fieldservicesystemjob_Information.Navigation;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_ConditionCode: DevKit.WebApi.IntegerValue;
		msdyn_ExceptionMessage: DevKit.WebApi.StringValue;
		msdyn_ExceptionTrace: DevKit.WebApi.StringValue;
		/** Shows the entity instances. */
		msdyn_fieldservicesystemjobId: DevKit.WebApi.GuidValue;
		msdyn_InputParameter: DevKit.WebApi.StringValue;
		msdyn_InputParameterType: DevKit.WebApi.OptionSetValue;
		/** Type a name for the job. */
		msdyn_jobname: DevKit.WebApi.StringValue;
		/** Enter the status of the job. */
		msdyn_JobStatus: DevKit.WebApi.OptionSetValue;
		msdyn_JobType: DevKit.WebApi.IntegerValue;
		msdyn_OutputParameter: DevKit.WebApi.StringValue;
		msdyn_OutputParameterType: DevKit.WebApi.OptionSetValue;
		/** Shows the user associated with the field service system job. */
		msdyn_OwnerId: DevKit.WebApi.LookupValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Field Service System Job */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Shows the reason for the status of the field service system job. */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}