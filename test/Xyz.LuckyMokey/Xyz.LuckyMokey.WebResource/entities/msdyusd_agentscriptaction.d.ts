//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyusd_agentscriptaction_Information {
		interface tab_AdvancedTab_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_AdvancedTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_AdvancedTab_Sections;
		}
		interface Tabs {
			AdvancedTab: tab_AdvancedTab;
		}
		interface Body {
			Tab: Tabs;
			WebResource_ParameterInput: DevKit.Form.Controls.ControlWebResource;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for UII Action associated with Agent Script Action. */
			msdyusd_Action: DevKit.Form.Controls.ControlLookup;
			msdyusd_ActionData: DevKit.Form.Controls.ControlString;
			/** Unique identifier for UII Hosted Application associated with Agent Script Action. */
			msdyusd_Application: DevKit.Form.Controls.ControlLookup;
			/** javascript expression.   Expression must evaluate to true or false.   If the expression throws an exception, it is assumed to be false and this action will not fire. */
			msdyusd_Condition: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Form.Controls.ControlString;
			msdyusd_order: DevKit.Form.Controls.ControlInteger;
			/** Example: CTRL-T */
			msdyusd_ShortcutKey: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Agent Script Action */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyusd_subactioncalls: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_agentscriptaction_windowroute_MultipleMatches: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_agentscriptaction_windowroute_NoMatchesAction: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_agentscriptaction_windowroute_SingleMatchAction: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyusd_agentscriptaction_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_agentscriptaction_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyusd_agentscriptaction_Information */
		Body: LuckyMokey.Formmsdyusd_agentscriptaction_Information.Body;
		/** The Footer section of form msdyusd_agentscriptaction_Information */
		Footer: LuckyMokey.Formmsdyusd_agentscriptaction_Information.Footer;
		/** The Navigation of form msdyusd_agentscriptaction_Information */
		Navigation: LuckyMokey.Formmsdyusd_agentscriptaction_Information.Navigation;
	}
	class msdyusd_agentscriptactionApi {
		/**
		* DynamicsCrm.DevKit msdyusd_agentscriptactionApi
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
		/** Unique identifier for UII Action associated with Agent Script Action. */
		msdyusd_Action: DevKit.WebApi.LookupValue;
		msdyusd_ActionData: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyusd_agentscriptactionId: DevKit.WebApi.GuidValue;
		/** Unique identifier for UII Hosted Application associated with Agent Script Action. */
		msdyusd_Application: DevKit.WebApi.LookupValue;
		/** javascript expression.   Expression must evaluate to true or false.   If the expression throws an exception, it is assumed to be false and this action will not fire. */
		msdyusd_Condition: DevKit.WebApi.StringValue;
		msdyusd_LaunchifDynamic: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		msdyusd_name: DevKit.WebApi.StringValue;
		msdyusd_order: DevKit.WebApi.IntegerValue;
		/** Example: CTRL-T */
		msdyusd_ShortcutKey: DevKit.WebApi.StringValue;
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
		/** Status of the Agent Script Action */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Agent Script Action */
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
	namespace msdyusd_agentscriptaction {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}