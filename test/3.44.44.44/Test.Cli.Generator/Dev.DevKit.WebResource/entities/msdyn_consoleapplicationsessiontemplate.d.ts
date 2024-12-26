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
			msdyn_msdyn_consoleapplicationsessiontemplate_msdyn_scenario_SessionTemplate: DevKit.Controls.NavigationItem
		}
		interface Grid {
			AdditionalTabs: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_consoleapplicationsessiontemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
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
		/** The anchor tab for this session. */
		msdyn_AnchorTab: string;
		/** Unique identifier for entity instances. */
		msdyn_consoleapplicationsessiontemplateId: string;
		/** Description of the field */
		msdyn_description: string;
		/** Display icon for the session. */
		msdyn_icon: string;
		/** Whether to render the sidepanel for this session */
		msdyn_IsPanelHidden: boolean;
		/** Name of the session. */
		msdyn_name: string;
		/** Panel mode when a session is opened. */
		msdyn_PanelState: OptionSet.msdyn_consoleapplicationsessiontemplate.msdyn_PanelState;
		/** Whether this session should be pinned. */
		msdyn_Pinned: boolean;
		/** The relative order of all session templates. */
		msdyn_RenderingOrder: number;
		/** Title of the session displayed in the session panel. */
		msdyn_Title: string;
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
		/** Status of the Session template */
		statecode: OptionSet.msdyn_consoleapplicationsessiontemplate.statecode;
		/** Reason for the status of the ConsoleApplicationSessionTemplate */
		statuscode: OptionSet.msdyn_consoleapplicationsessiontemplate.statuscode;
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
			/** The anchor tab for this session. */
			readonly msdyn_AnchorTab: string;
			/** Unique identifier for entity instances. */
			readonly msdyn_consoleapplicationsessiontemplateId: string;
			/** Description of the field */
			readonly msdyn_description: string;
			/** Display icon for the session. */
			readonly msdyn_icon: string;
			/** Whether to render the sidepanel for this session */
			readonly msdyn_IsPanelHidden: string;
			/** Name of the session. */
			readonly msdyn_name: string;
			/** Panel mode when a session is opened. */
			readonly msdyn_PanelState: string;
			/** Whether this session should be pinned. */
			readonly msdyn_Pinned: string;
			/** The relative order of all session templates. */
			readonly msdyn_RenderingOrder: string;
			/** Title of the session displayed in the session panel. */
			readonly msdyn_Title: string;
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
			/** Status of the Session template */
			readonly statecode: string;
			/** Reason for the status of the ConsoleApplicationSessionTemplate */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}