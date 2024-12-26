//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormLayout {
		interface Header extends DevKit.Controls.IHeader {
			/** The number of people that can be located here */
			msevtmgt_Capacity: DevKit.Controls.Integer;
			/** Indicates whether this location provides easy access for disabled people */
			msevtmgt_DisabledAccess: DevKit.Controls.OptionSet;
			/** Link to the room */
			msevtmgt_Room: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			/** The number of people that can be located here */
			msevtmgt_Capacity: DevKit.Controls.Integer;
			/** Description of the layout */
			msevtmgt_Description: DevKit.Controls.String;
			/** Indicates whether this location provides easy access for disabled people */
			msevtmgt_DisabledAccess: DevKit.Controls.OptionSet;
			/** The number of disabled people that can be located here */
			msevtmgt_DisabledCapacity: DevKit.Controls.Integer;
			/** Standardized floor plan type */
			msevtmgt_FloorPlan: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Link to the room */
			msevtmgt_Room: DevKit.Controls.Lookup;
			/** Square units */
			msevtmgt_Units: DevKit.Controls.OptionSet;
			/** Usable area (square units) */
			msevtmgt_UsableArea: DevKit.Controls.Integer;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_event_layout: DevKit.Controls.NavigationItem,
			msevtmgt_layout_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_layout_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_layout_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_layout_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_layout_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_layout_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_layout_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_layout_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_layout_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_layout_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_layout_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_layout_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_layout_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_layout_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_layout_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_layout_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_layout_msevtmgt_venue: DevKit.Controls.NavigationItem,
			msevtmgt_session_layout: DevKit.Controls.NavigationItem
		}
	}
	class FormLayout extends DevKit.IForm {
		/**
		* Layout [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Layout */
		Body: DevKit.FormLayout.Body;
		/** The Header section of form Layout */
		Header: DevKit.FormLayout.Header;
		/** The Navigation of form Layout */
		Navigation: DevKit.FormLayout.Navigation;
		/** The SidePanes of form Layout */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormLayout_quick_create_form {
		interface tab_GeneralTab_Sections {
			GeneralTab_column_1_section_1: DevKit.Controls.Section;
			GeneralTab_column_2_section_1: DevKit.Controls.Section;
			GeneralTab_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** The number of people that can be located here */
			msevtmgt_Capacity: DevKit.Controls.Integer;
			/** Description of the layout */
			msevtmgt_Description: DevKit.Controls.String;
			/** Indicates whether this location provides easy access for disabled people */
			msevtmgt_DisabledAccess: DevKit.Controls.OptionSet;
			/** Standardized floor plan type */
			msevtmgt_FloorPlan: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Link to the room */
			msevtmgt_Room: DevKit.Controls.Lookup;
		}
	}
	class FormLayout_quick_create_form extends DevKit.IForm {
		/**
		* Layout quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Layout_quick_create_form */
		Body: DevKit.FormLayout_quick_create_form.Body;
	}
	class msevtmgt_LayoutApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_LayoutApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** The date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		/** The number of people that can be located here */
		msevtmgt_Capacity: number;
		/** Description of the layout */
		msevtmgt_Description: string;
		/** Indicates whether this location provides easy access for disabled people */
		msevtmgt_DisabledAccess: OptionSet.msevtmgt_Layout.msevtmgt_DisabledAccess;
		/** The number of disabled people that can be located here */
		msevtmgt_DisabledCapacity: number;
		/** Standardized floor plan type */
		msevtmgt_FloorPlan: OptionSet.msevtmgt_Layout.msevtmgt_FloorPlan;
		/** Unique identifier for entity instances */
		msevtmgt_LayoutId: string;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		/** Link to the room */
		msevtmgt_Room: string;
		/** Square units */
		msevtmgt_Units: OptionSet.msevtmgt_Layout.msevtmgt_Units;
		/** Usable area (square units) */
		msevtmgt_UsableArea: number;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record */
		readonly OwningUser: string;
		/** Status of the layout */
		statecode: OptionSet.msevtmgt_Layout.statecode;
		/** Reason for the status of the layout */
		statuscode: OptionSet.msevtmgt_Layout.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** The date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			/** The number of people that can be located here */
			readonly msevtmgt_Capacity: string;
			/** Description of the layout */
			readonly msevtmgt_Description: string;
			/** Indicates whether this location provides easy access for disabled people */
			readonly msevtmgt_DisabledAccess: string;
			/** The number of disabled people that can be located here */
			readonly msevtmgt_DisabledCapacity: string;
			/** Standardized floor plan type */
			readonly msevtmgt_FloorPlan: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_LayoutId: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			/** Link to the room */
			readonly msevtmgt_Room: string;
			/** Square units */
			readonly msevtmgt_Units: string;
			/** Usable area (square units) */
			readonly msevtmgt_UsableArea: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record */
			readonly OwningUser: string;
			/** Status of the layout */
			readonly statecode: string;
			/** Reason for the status of the layout */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_Layout {
		enum msevtmgt_DisabledAccess {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_FloorPlan {
			/** 100000007 */
			Banquet,
			/** 100000006 */
			Boardroom,
			/** 100000010 */
			Booth,
			/** 100000008 */
			Cabaret,
			/** 100000001 */
			Classroom,
			/** 100000009 */
			Cocktail,
			/** 100000002 */
			Herringbone,
			/** 100000005 */
			Hollow_square,
			/** 100000004 */
			Horse_shoe,
			/** 100000000 */
			Theater,
			/** 100000003 */
			U_shape
		}
		enum msevtmgt_Units {
			/** 100000001 */
			Sq_feet,
			/** 100000000 */
			Sq_meters
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