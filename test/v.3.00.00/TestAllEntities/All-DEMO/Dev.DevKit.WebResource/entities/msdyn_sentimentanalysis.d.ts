//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_sentimentanalysis_Information {
		interface tab_GeneralTab_Sections {
			AgentNotificationsSection: DevKit.Controls.Section;
			GeneralSection: DevKit.Controls.Section;
			SupervisorNotificationsSection: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Whether multi-language support is enabled */
			msdyn_additionallanguagesenabled: DevKit.Controls.Boolean;
			msdyn_agentsettingssubheading: DevKit.Controls.ActionCards;
			/** The agent threshold for sentiment threshold alerts */
			msdyn_agentthreshold: DevKit.Controls.OptionSet;
			/** Whether real-time customer sentiment monitoring is enabled */
			msdyn_enabled: DevKit.Controls.Boolean;
			msdyn_generalsubheading: DevKit.Controls.ActionCards;
			msdyn_supervisorsettingssubheading: DevKit.Controls.ActionCards;
			/** The supervisor threshold for sentiment threshold alerts */
			msdyn_supervisorthreshold: DevKit.Controls.OptionSet;
		}
	}
	class Formmsdyn_sentimentanalysis_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_sentimentanalysis_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sentimentanalysis_Information */
		Body: DevKit.Formmsdyn_sentimentanalysis_Information.Body;
		/** The SidePanes of form msdyn_sentimentanalysis_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_sentimentanalysisApi {
		/**
		* DynamicsCrm.DevKit msdyn_sentimentanalysisApi
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
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Whether multi-language support is enabled */
		msdyn_additionallanguagesenabled: DevKit.WebApi.BooleanValue;
		/** The agent threshold for sentiment threshold alerts */
		msdyn_agentthreshold: DevKit.WebApi.OptionSetValue;
		/** This field is deprecated */
		msdyn_driversenabled: DevKit.WebApi.BooleanValue;
		/** Whether real-time customer sentiment monitoring is enabled */
		msdyn_enabled: DevKit.WebApi.BooleanValue;
		/** Enable Unified Routing */
		msdyn_enableur: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_sentimentanalysisId: DevKit.WebApi.GuidValue;
		/** The supervisor threshold for sentiment threshold alerts */
		msdyn_supervisorthreshold: DevKit.WebApi.OptionSetValue;
		/** This field is deprecated */
		msdyn_supervisorthresholdalerttimeoutseconds: DevKit.WebApi.IntegerValue;
		/** This field is deprecated */
		msdyn_thresholdalertsenabled: DevKit.WebApi.BooleanValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the sentiment analysis */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Sentiment Analysis */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_sentimentanalysis {
		enum msdyn_agentthreshold {
			/** 0 */
			Dont_show_alerts,
			/** 8 */
			Negative,
			/** 9 */
			Slightly_negative,
			/** 7 */
			Very_negative
		}
		enum msdyn_supervisorthreshold {
			/** 0 */
			Dont_send_notifications,
			/** 8 */
			Negative,
			/** 9 */
			Slightly_negative,
			/** 7 */
			Very_negative
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}