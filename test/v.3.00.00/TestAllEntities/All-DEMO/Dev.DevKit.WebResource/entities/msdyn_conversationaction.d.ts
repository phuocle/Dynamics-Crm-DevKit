//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_conversationaction_Information {
		interface tab__87D6AEF8_978D_4530_BFC7_EB7307C1BBD8_Sections {
		}
		interface tab_ConversationActionLocale_Sections {
			_87D6AEF8_978D_4530_BFC7_EB7307C1BBD8_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__87D6AEF8_978D_4530_BFC7_EB7307C1BBD8 extends DevKit.Controls.ITab {
			Section: tab__87D6AEF8_978D_4530_BFC7_EB7307C1BBD8_Sections;
		}
		interface tab_ConversationActionLocale extends DevKit.Controls.ITab {
			Section: tab_ConversationActionLocale_Sections;
		}
		interface Tabs {
			_87D6AEF8_978D_4530_BFC7_EB7307C1BBD8: tab__87D6AEF8_978D_4530_BFC7_EB7307C1BBD8;
			ConversationActionLocale: tab_ConversationActionLocale;
		}
		interface Body {
			Tab: Tabs;
			/** Action event name option set */
			msdyn_EventName: DevKit.Controls.OptionSet;
			/** Parameters that can be passed thorugh the event */
			msdyn_EventParameter: DevKit.Controls.String;
			/** Web resources main function name */
			msdyn_FunctionName: DevKit.Controls.String;
			/** Icon for the conversation action button */
			msdyn_Icon: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Order for the conversation action button */
			msdyn_Order: DevKit.Controls.Integer;
			/** Web resources to load for the conversation action */
			msdyn_WebResource: DevKit.Controls.String;
		}
		interface Grid {
			Local_fields: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_conversationaction_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_conversationaction_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_conversationaction_Information */
		Body: DevKit.Formmsdyn_conversationaction_Information.Body;
		/** The Grid of form msdyn_conversationaction_Information */
		Grid: DevKit.Formmsdyn_conversationaction_Information.Grid;
		/** The SidePanes of form msdyn_conversationaction_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_conversationactionApi {
		/**
		* DynamicsCrm.DevKit msdyn_conversationactionApi
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
		/** Unique identifier for entity instances */
		msdyn_conversationactionId: DevKit.WebApi.GuidValue;
		/** Action event name option set */
		msdyn_EventName: DevKit.WebApi.OptionSetValue;
		/** Parameters that can be passed thorugh the event */
		msdyn_EventParameter: DevKit.WebApi.StringValue;
		/** Web resources main function name */
		msdyn_FunctionName: DevKit.WebApi.StringValue;
		/** Icon for the conversation action button */
		msdyn_Icon: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Order for the conversation action button */
		msdyn_Order: DevKit.WebApi.IntegerValue;
		/** Web resources to load for the conversation action */
		msdyn_WebResource: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Conversation Action */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Conversation Action */
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
	namespace msdyn_conversationaction {
		enum msdyn_EventName {
			/** 100000002 */
			Customer_Defined_Function,
			/** 100000000 */
			Open_App_Tab_Template,
			/** 100000001 */
			Send_message
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