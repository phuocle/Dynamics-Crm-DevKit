//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_windowroute_Information {
		interface tab_CTITab_Sections {
			CTI: DevKit.Controls.Section;
			MultipleMatchesTab: DevKit.Controls.Section;
			NoMatchesTab: DevKit.Controls.Section;
			SingleMatchTab: DevKit.Controls.Section;
		}
		interface tab_GeneralTab_Sections {
			_B27D995D_EA0A_4463_9253_92F19878B844_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_ResultTab_Sections {
			EntitySearch: DevKit.Controls.Section;
			OptionsSection: DevKit.Controls.Section;
			Result: DevKit.Controls.Section;
			Tab: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_2: DevKit.Controls.Section;
		}
		interface tab_CTITab extends DevKit.Controls.ITab {
			Section: tab_CTITab_Sections;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface tab_ResultTab extends DevKit.Controls.ITab {
			Section: tab_ResultTab_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			CTITab: tab_CTITab;
			GeneralTab: tab_GeneralTab;
			ResultTab: tab_ResultTab;
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			msdyusd_Action: DevKit.Controls.OptionSet;
			/** Unique identifier for UII Hosted Application associated with Window Route. */
			msdyusd_Application: DevKit.Controls.Lookup;
			msdyusd_Condition: DevKit.Controls.String;
			msdyusd_DashboardFrame: DevKit.Controls.String;
			msdyusd_Destination: DevKit.Controls.OptionSet;
			msdyusd_Direction: DevKit.Controls.OptionSet;
			/** Unique identifier for Entity Numeric Mapping associated with Window Route. */
			msdyusd_Entity: DevKit.Controls.Lookup;
			/** Unique identifier for Entity Search associated with Routing Rule. */
			msdyusd_EntitySearch: DevKit.Controls.Lookup;
			msdyusd_field: DevKit.Controls.String;
			/** Unique identifier for UII Hosted Application associated with Window Route. */
			msdyusd_From: DevKit.Controls.Lookup;
			/** Unique identifier for Entity Search associated with Window Route. */
			msdyusd_FromSearch: DevKit.Controls.Lookup;
			msdyusd_HideNavBar: DevKit.Controls.Boolean;
			msdyusd_HideRibbon: DevKit.Controls.Boolean;
			/** Unique identifier for Entity Type associated with Routing Rule. */
			msdyusd_InitiatingActivity: DevKit.Controls.Lookup;
			/** Unique identifier for Action Call associated with Routing Rule. */
			msdyusd_MultipleMatches: DevKit.Controls.Lookup;
			msdyusd_MultipleMatchesDecision: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			msdyusd_NoMatchDecision: DevKit.Controls.OptionSet;
			/** Unique identifier for Action Call associated with Routing Rule. */
			msdyusd_NoMatchesAction: DevKit.Controls.Lookup;
			msdyusd_Order: DevKit.Controls.Integer;
			msdyusd_RouteType: DevKit.Controls.OptionSet;
			/** Unique identifier for UII Hosted Application associated with Window Route. */
			msdyusd_showtab: DevKit.Controls.Lookup;
			/** Unique identifier for Action Call associated with Routing Rule. */
			msdyusd_SingleMatchAction: DevKit.Controls.Lookup;
			msdyusd_SingleMatchDecision: DevKit.Controls.OptionSet;
			msdyusd_SourceFrame: DevKit.Controls.String;
			msdyusd_url: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Window Route */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyusd_windowroute_agentscriptaction: DevKit.Controls.NavigationItem,
			nav_msdyusd_windowroute_ctisearch: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			CTISearches: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_windowroute_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_windowroute_Information */
		Body: DevKit.Formmsdyusd_windowroute_Information.Body;
		/** The Footer section of form msdyusd_windowroute_Information */
		Footer: DevKit.Formmsdyusd_windowroute_Information.Footer;
		/** The Navigation of form msdyusd_windowroute_Information */
		Navigation: DevKit.Formmsdyusd_windowroute_Information.Navigation;
		/** The Process of form msdyusd_windowroute_Information */
		Process: DevKit.Formmsdyusd_windowroute_Information.Process;
		/** The Grid of form msdyusd_windowroute_Information */
		Grid: DevKit.Formmsdyusd_windowroute_Information.Grid;
		/** The SidePanes of form msdyusd_windowroute_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyusd_windowrouteApi {
		/**
		* DynamicsCrm.DevKit msdyusd_windowrouteApi
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
		msdyusd_Action: OptionSet.msdyusd_windowroute.msdyusd_Action;
		/** Unique identifier for UII Hosted Application associated with Window Route. */
		msdyusd_Application: string;
		/** Unique identifier for Agent Script Action associated with Window Route. */
		msdyusd_ApplicationAction: string;
		msdyusd_Condition: string;
		msdyusd_DashboardFrame: string;
		msdyusd_Destination: OptionSet.msdyusd_windowroute.msdyusd_Destination;
		msdyusd_Direction: OptionSet.msdyusd_windowroute.msdyusd_Direction;
		/** Unique identifier for Entity Numeric Mapping associated with Window Route. */
		msdyusd_Entity: string;
		/** Unique identifier for Entity Search associated with Routing Rule. */
		msdyusd_EntitySearch: string;
		msdyusd_field: string;
		/** Unique identifier for UII Hosted Application associated with Window Route. */
		msdyusd_From: string;
		/** Unique identifier for Entity Search associated with Window Route. */
		msdyusd_FromSearch: string;
		msdyusd_HideNavBar: boolean;
		msdyusd_HideRibbon: boolean;
		/** Unique identifier for Entity Type associated with Routing Rule. */
		msdyusd_InitiatingActivity: string;
		msdyusd_loadarea: string;
		/** Unique identifier for Action Call associated with Routing Rule. */
		msdyusd_MultipleMatches: string;
		msdyusd_MultipleMatchesDecision: OptionSet.msdyusd_windowroute.msdyusd_MultipleMatchesDecision;
		/** The name of the custom entity. */
		msdyusd_name: string;
		msdyusd_NoMatchDecision: OptionSet.msdyusd_windowroute.msdyusd_NoMatchDecision;
		/** Unique identifier for Action Call associated with Routing Rule. */
		msdyusd_NoMatchesAction: string;
		msdyusd_Order: number;
		msdyusd_RouteType: OptionSet.msdyusd_windowroute.msdyusd_RouteType;
		/** Unique identifier for UII Hosted Application associated with Window Route. */
		msdyusd_showtab: string;
		/** Unique identifier for Action Call associated with Routing Rule. */
		msdyusd_SingleMatchAction: string;
		msdyusd_SingleMatchDecision: OptionSet.msdyusd_windowroute.msdyusd_SingleMatchDecision;
		msdyusd_SourceFrame: string;
		msdyusd_url: string;
		/** Unique identifier for entity instances */
		msdyusd_windowrouteId: string;
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
		/** Status of the Window Route */
		statecode: OptionSet.msdyusd_windowroute.statecode;
		/** Reason for the status of the Window Route */
		statuscode: OptionSet.msdyusd_windowroute.statuscode;
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
			readonly msdyusd_Action: string;
			/** Unique identifier for UII Hosted Application associated with Window Route. */
			readonly msdyusd_Application: string;
			/** Unique identifier for Agent Script Action associated with Window Route. */
			readonly msdyusd_ApplicationAction: string;
			readonly msdyusd_Condition: string;
			readonly msdyusd_DashboardFrame: string;
			readonly msdyusd_Destination: string;
			readonly msdyusd_Direction: string;
			/** Unique identifier for Entity Numeric Mapping associated with Window Route. */
			readonly msdyusd_Entity: string;
			/** Unique identifier for Entity Search associated with Routing Rule. */
			readonly msdyusd_EntitySearch: string;
			readonly msdyusd_field: string;
			/** Unique identifier for UII Hosted Application associated with Window Route. */
			readonly msdyusd_From: string;
			/** Unique identifier for Entity Search associated with Window Route. */
			readonly msdyusd_FromSearch: string;
			readonly msdyusd_HideNavBar: string;
			readonly msdyusd_HideRibbon: string;
			/** Unique identifier for Entity Type associated with Routing Rule. */
			readonly msdyusd_InitiatingActivity: string;
			readonly msdyusd_loadarea: string;
			/** Unique identifier for Action Call associated with Routing Rule. */
			readonly msdyusd_MultipleMatches: string;
			readonly msdyusd_MultipleMatchesDecision: string;
			/** The name of the custom entity. */
			readonly msdyusd_name: string;
			readonly msdyusd_NoMatchDecision: string;
			/** Unique identifier for Action Call associated with Routing Rule. */
			readonly msdyusd_NoMatchesAction: string;
			readonly msdyusd_Order: string;
			readonly msdyusd_RouteType: string;
			/** Unique identifier for UII Hosted Application associated with Window Route. */
			readonly msdyusd_showtab: string;
			/** Unique identifier for Action Call associated with Routing Rule. */
			readonly msdyusd_SingleMatchAction: string;
			readonly msdyusd_SingleMatchDecision: string;
			readonly msdyusd_SourceFrame: string;
			readonly msdyusd_url: string;
			/** Unique identifier for entity instances */
			readonly msdyusd_windowrouteId: string;
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
			/** Status of the Window Route */
			readonly statecode: string;
			/** Reason for the status of the Window Route */
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
	namespace msdyusd_windowroute {
		enum msdyusd_Action {
			/** 803750000 */
			Create_Session,
			/** 803750004 */
			Default,
			/** 803750005 */
			In_Place,
			/** 803750003 */
			None,
			/** 803750002 */
			Route_Window,
			/** 803750001 */
			Show_Outside
		}
		enum msdyusd_Destination {
			/** 803750001 */
			Entity_Search,
			/** 803750000 */
			Tab
		}
		enum msdyusd_Direction {
			/** 2 */
			Both,
			/** 1 */
			Inbound,
			/** 0 */
			Outbound
		}
		enum msdyusd_MultipleMatchesDecision {
			/** 803750002 */
			Create_Session_then_Do_Action,
			/** 803750000 */
			Do_Action,
			/** 803750001 */
			Next_Rule
		}
		enum msdyusd_NoMatchDecision {
			/** 803750002 */
			Create_Session_then_Do_Action,
			/** 803750000 */
			Do_Action,
			/** 803750001 */
			Next_Rule
		}
		enum msdyusd_RouteType {
			/** 803750003 */
			In_Place,
			/** 803750002 */
			Menu_Chosen,
			/** 803750001 */
			OnLoad,
			/** 803750000 */
			Popup
		}
		enum msdyusd_SingleMatchDecision {
			/** 803750003 */
			Create_Session_Load_Match_then_Do_Action,
			/** 803750002 */
			Create_Session_then_Do_Action,
			/** 803750000 */
			Do_Action,
			/** 803750001 */
			Next_Rule
		}
		enum OwnerIdType {
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