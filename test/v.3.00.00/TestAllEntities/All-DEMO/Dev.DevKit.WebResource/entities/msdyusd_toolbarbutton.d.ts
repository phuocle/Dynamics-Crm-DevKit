//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_toolbarbutton_Information {
		interface tab_tab_3_Sections {
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			msdyusd_ButtonText: DevKit.Controls.String;
			msdyusd_EnabledCondition: DevKit.Controls.String;
			msdyusd_Image: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			msdyusd_order: DevKit.Controls.Integer;
			/** Example: CTRL+T */
			msdyusd_shortcutkey: DevKit.Controls.String;
			/** Unique identifier for UII Hosted Application associated with Toolbar Button. */
			msdyusd_showtab: DevKit.Controls.Lookup;
			msdyusd_Tooltip: DevKit.Controls.String;
			msdyusd_VisibleCondition: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the ToolbarButton */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyusd_toolbarbutton_agentscriptaction: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Actions: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_toolbarbutton_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_toolbarbutton_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_toolbarbutton_Information */
		Body: DevKit.Formmsdyusd_toolbarbutton_Information.Body;
		/** The Footer section of form msdyusd_toolbarbutton_Information */
		Footer: DevKit.Formmsdyusd_toolbarbutton_Information.Footer;
		/** The Navigation of form msdyusd_toolbarbutton_Information */
		Navigation: DevKit.Formmsdyusd_toolbarbutton_Information.Navigation;
		/** The Grid of form msdyusd_toolbarbutton_Information */
		Grid: DevKit.Formmsdyusd_toolbarbutton_Information.Grid;
		/** The SidePanes of form msdyusd_toolbarbutton_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyusd_toolbarbuttonApi {
		/**
		* DynamicsCrm.DevKit msdyusd_toolbarbuttonApi
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
		/** Unique identifier for Toolbar Button associated with Toolbar Button. */
		msdyusd_Buttons: DevKit.WebApi.LookupValue;
		msdyusd_ButtonText: DevKit.WebApi.StringValue;
		msdyusd_EnableCondition: DevKit.WebApi.OptionSetValue;
		msdyusd_EnabledCondition: DevKit.WebApi.StringValue;
		msdyusd_Image: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyusd_name: DevKit.WebApi.StringValue;
		msdyusd_order: DevKit.WebApi.IntegerValue;
		msdyusd_ScriptCondition: DevKit.WebApi.StringValue;
		/** Example: CTRL+T */
		msdyusd_shortcutkey: DevKit.WebApi.StringValue;
		/** Unique identifier for UII Hosted Application associated with Toolbar Button. */
		msdyusd_showtab: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyusd_toolbarbuttonId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Toolbar associated with Toolbar Button. */
		msdyusd_ToolbarId: DevKit.WebApi.LookupValue;
		msdyusd_Tooltip: DevKit.WebApi.StringValue;
		msdyusd_VisibleCondition: DevKit.WebApi.StringValue;
		msdyusd_WebResourceUrl: DevKit.WebApi.StringValue;
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
		/** Status of the ToolbarButton */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the ToolbarButton */
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
	namespace msdyusd_toolbarbutton {
		enum msdyusd_EnableCondition {
			/** 803750000 */
			Always,
			/** 803750001 */
			Customer_Session,
			/** 803750002 */
			Script_Expression
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