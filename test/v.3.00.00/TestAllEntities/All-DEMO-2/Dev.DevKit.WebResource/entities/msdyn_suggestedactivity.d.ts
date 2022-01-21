//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_suggestedactivity_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Subject: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_suggestedactivity_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_suggestedactivity_Information */
		Body: DevKit.Formmsdyn_suggestedactivity_Information.Body;
		/** The Process of form msdyn_suggestedactivity_Information */
		Process: DevKit.Formmsdyn_suggestedactivity_Information.Process;
		/** The SidePanes of form msdyn_suggestedactivity_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_suggestedactivity_Information2 {
		interface Tabs {
		}
		interface Body {
			msdyn_Subject: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_suggestedactivity_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_suggestedactivity_Information2 */
		Body: DevKit.Formmsdyn_suggestedactivity_Information2.Body;
		/** The Process of form msdyn_suggestedactivity_Information2 */
		Process: DevKit.Formmsdyn_suggestedactivity_Information2.Process;
		/** The SidePanes of form msdyn_suggestedactivity_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_suggestedactivityApi {
		/**
		* DynamicsCrm.DevKit msdyn_suggestedactivityApi
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
		msdyn_ActivityType: DevKit.WebApi.StringValue;
		msdyn_BodyPreview: DevKit.WebApi.StringValue;
		/** Created Date */
		msdyn_createddate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_duration: DevKit.WebApi.StringValue;
		/** End Time */
		msdyn_endtime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Exchange web link */
		msdyn_exchangeweblink: DevKit.WebApi.StringValue;
		msdyn_Importance: DevKit.WebApi.StringValue;
		/** Location */
		msdyn_location: DevKit.WebApi.StringValue;
		/** Regarding Name */
		msdyn_regardingname: DevKit.WebApi.StringValue;
		/** Sender */
		msdyn_sender: DevKit.WebApi.StringValue;
		/** Sender's Name */
		msdyn_sendername: DevKit.WebApi.StringValue;
		/** Start Time */
		msdyn_starttime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_Subject: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_suggestedactivityId: DevKit.WebApi.GuidValue;
		/** To */
		msdyn_to: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace msdyn_suggestedactivity {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}