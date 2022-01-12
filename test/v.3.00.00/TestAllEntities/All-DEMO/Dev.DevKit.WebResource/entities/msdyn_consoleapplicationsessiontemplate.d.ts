//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_consoleapplicationsessiontemplate_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** The anchor tab for this session. */
			msdyn_AnchorTab: DevKit.Controls.Lookup;
			/** Description of the field */
			msdyn_description: DevKit.Controls.String;
			/** Display icon for the session. */
			msdyn_icon: DevKit.Controls.String;
			/** Name of the session. */
			msdyn_name: DevKit.Controls.String;
			/** Panel mode when a session is opened. */
			msdyn_PanelState: DevKit.Controls.OptionSet;
			/** Whether this session should be pinned. */
			msdyn_Pinned: DevKit.Controls.Boolean;
			/** Title of the session displayed in the session panel. */
			msdyn_Title: DevKit.Controls.String;
			/** Owner who created this session. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_consoleapplicationsessiontemp_tag: DevKit.Controls.NavigationItem
		}
		interface Grid {
			AdditionalTabs: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_consoleapplicationsessiontemplate_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_consoleapplicationsessiontemplate_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_consoleapplicationsessiontemplate_Information */
		Body: DevKit.Formmsdyn_consoleapplicationsessiontemplate_Information.Body;
		/** The Navigation of form msdyn_consoleapplicationsessiontemplate_Information */
		Navigation: DevKit.Formmsdyn_consoleapplicationsessiontemplate_Information.Navigation;
		/** The Grid of form msdyn_consoleapplicationsessiontemplate_Information */
		Grid: DevKit.Formmsdyn_consoleapplicationsessiontemplate_Information.Grid;
		/** The SidePanes of form msdyn_consoleapplicationsessiontemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_consoleapplicationsessiontemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_consoleapplicationsessiontemplateApi
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
		/** The anchor tab for this session. */
		msdyn_AnchorTab: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances. */
		msdyn_consoleapplicationsessiontemplateId: DevKit.WebApi.GuidValue;
		/** Description of the field */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Display icon for the session. */
		msdyn_icon: DevKit.WebApi.StringValue;
		/** Whether to render the sidepanel for this session */
		msdyn_IsPanelHidden: DevKit.WebApi.BooleanValue;
		/** Name of the session. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Panel mode when a session is opened. */
		msdyn_PanelState: DevKit.WebApi.OptionSetValue;
		/** Whether this session should be pinned. */
		msdyn_Pinned: DevKit.WebApi.BooleanValue;
		/** The relative order of all session templates. */
		msdyn_RenderingOrder: DevKit.WebApi.IntegerValue;
		/** Title of the session displayed in the session panel. */
		msdyn_Title: DevKit.WebApi.StringValue;
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
		/** Status of the Session template */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the ConsoleApplicationSessionTemplate */
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
	namespace msdyn_consoleapplicationsessiontemplate {
		enum msdyn_PanelState {
			/** 100000000 */
			Docked,
			/** 100000002 */
			Hidden,
			/** 100000001 */
			Minimized
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