//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_agentscriptaction_Information {
		interface tab_AdvancedTab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_AdvancedTab extends DevKit.Controls.ITab {
			Section: tab_AdvancedTab_Sections;
		}
		interface Tabs {
			AdvancedTab: tab_AdvancedTab;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for UII Action associated with Agent Script Action. */
			msdyusd_Action: DevKit.Controls.Lookup;
			msdyusd_ActionData: DevKit.Controls.String;
			/** Unique identifier for UII Hosted Application associated with Agent Script Action. */
			msdyusd_Application: DevKit.Controls.Lookup;
			/** javascript expression.   Expression must evaluate to true or false.   If the expression throws an exception, it is assumed to be false and this action will not fire. */
			msdyusd_Condition: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			msdyusd_order: DevKit.Controls.Integer;
			/** Example: CTRL-T */
			msdyusd_ShortcutKey: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_ParameterInput: DevKit.Controls.WebResource;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Agent Script Action */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyusd_agentscriptaction_windowroute_MultipleMatches: DevKit.Controls.NavigationItem,
			nav_msdyusd_agentscriptaction_windowroute_NoMatchesAction: DevKit.Controls.NavigationItem,
			nav_msdyusd_agentscriptaction_windowroute_SingleMatchAction: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyusd_agentscriptaction_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_agentscriptaction_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_agentscriptaction_Information */
		Body: DevKit.Formmsdyusd_agentscriptaction_Information.Body;
		/** The Footer section of form msdyusd_agentscriptaction_Information */
		Footer: DevKit.Formmsdyusd_agentscriptaction_Information.Footer;
		/** The Navigation of form msdyusd_agentscriptaction_Information */
		Navigation: DevKit.Formmsdyusd_agentscriptaction_Information.Navigation;
		/** The Process of form msdyusd_agentscriptaction_Information */
		Process: DevKit.Formmsdyusd_agentscriptaction_Information.Process;
		/** The SidePanes of form msdyusd_agentscriptaction_Information */
		SidePanes: DevKit.SidePanes;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}