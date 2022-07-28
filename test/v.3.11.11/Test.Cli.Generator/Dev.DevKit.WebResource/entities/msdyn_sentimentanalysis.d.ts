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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_sentimentanalysis_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sentimentanalysis_Information */
		Body: DevKit.Formmsdyn_sentimentanalysis_Information.Body;
		/** The Process of form msdyn_sentimentanalysis_Information */
		Process: DevKit.Formmsdyn_sentimentanalysis_Information.Process;
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Whether multi-language support is enabled */
		msdyn_additionallanguagesenabled: boolean;
		/** The agent threshold for sentiment threshold alerts */
		msdyn_agentthreshold: OptionSet.msdyn_sentimentanalysis.msdyn_agentthreshold;
		/** This field is deprecated */
		msdyn_driversenabled: boolean;
		/** Whether real-time customer sentiment monitoring is enabled */
		msdyn_enabled: boolean;
		/** Enable Unified Routing */
		msdyn_enableur: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_sentimentanalysisId: string;
		/** The supervisor threshold for sentiment threshold alerts */
		msdyn_supervisorthreshold: OptionSet.msdyn_sentimentanalysis.msdyn_supervisorthreshold;
		/** This field is deprecated */
		msdyn_supervisorthresholdalerttimeoutseconds: number;
		/** This field is deprecated */
		msdyn_thresholdalertsenabled: boolean;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the sentiment analysis */
		statecode: OptionSet.msdyn_sentimentanalysis.statecode;
		/** Reason for the status of the Sentiment Analysis */
		statuscode: OptionSet.msdyn_sentimentanalysis.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Whether multi-language support is enabled */
			readonly msdyn_additionallanguagesenabled: string;
			/** The agent threshold for sentiment threshold alerts */
			readonly msdyn_agentthreshold: string;
			/** This field is deprecated */
			readonly msdyn_driversenabled: string;
			/** Whether real-time customer sentiment monitoring is enabled */
			readonly msdyn_enabled: string;
			/** Enable Unified Routing */
			readonly msdyn_enableur: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_sentimentanalysisId: string;
			/** The supervisor threshold for sentiment threshold alerts */
			readonly msdyn_supervisorthreshold: string;
			/** This field is deprecated */
			readonly msdyn_supervisorthresholdalerttimeoutseconds: string;
			/** This field is deprecated */
			readonly msdyn_thresholdalertsenabled: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the sentiment analysis */
			readonly statecode: string;
			/** Reason for the status of the Sentiment Analysis */
			readonly statuscode: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}