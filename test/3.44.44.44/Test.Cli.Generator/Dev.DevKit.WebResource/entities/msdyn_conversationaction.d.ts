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
		interface Navigation {
			msdyn_msdyn_conversationaction_msdyn_channelcapability_ConversationAction: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationaction_msdyn_conversationactionlocale_CAkey: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Local_fields: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_conversationaction_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_conversationaction_Information */
		Body: DevKit.Formmsdyn_conversationaction_Information.Body;
		/** The Navigation of form msdyn_conversationaction_Information */
		Navigation: DevKit.Formmsdyn_conversationaction_Information.Navigation;
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
		/** Unique identifier for entity instances */
		msdyn_conversationactionId: string;
		/** Action event name option set */
		msdyn_EventName: OptionSet.msdyn_conversationaction.msdyn_EventName;
		/** Parameters that can be passed thorugh the event */
		msdyn_EventParameter: string;
		/** Web resources main function name */
		msdyn_FunctionName: string;
		/** Icon for the conversation action button */
		msdyn_Icon: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Order for the conversation action button */
		msdyn_Order: number;
		/** Web resources to load for the conversation action */
		msdyn_WebResource: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
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
		/** Status of the Conversation Action */
		statecode: OptionSet.msdyn_conversationaction.statecode;
		/** Reason for the status of the Conversation Action */
		statuscode: OptionSet.msdyn_conversationaction.statuscode;
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
			/** Unique identifier for entity instances */
			readonly msdyn_conversationactionId: string;
			/** Action event name option set */
			readonly msdyn_EventName: string;
			/** Parameters that can be passed thorugh the event */
			readonly msdyn_EventParameter: string;
			/** Web resources main function name */
			readonly msdyn_FunctionName: string;
			/** Icon for the conversation action button */
			readonly msdyn_Icon: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Order for the conversation action button */
			readonly msdyn_Order: string;
			/** Web resources to load for the conversation action */
			readonly msdyn_WebResource: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Status of the Conversation Action */
			readonly statecode: string;
			/** Reason for the status of the Conversation Action */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}