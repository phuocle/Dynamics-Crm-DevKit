//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPass {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the pass */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab_sessions_Sections {
			sessions: DevKit.Controls.Section;
			sessions_2: DevKit.Controls.Section;
		}
		interface tab_sessions extends DevKit.Controls.ITab {
			Section: tab_sessions_Sections;
		}
		interface Tabs {
			sessions: tab_sessions;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_descriptorsyncstatus: DevKit.Controls.OptionSet;
			/** Unique identifier for the event associated with the pass */
			msevtmgt_eventid: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			/** Number of passes allocated */
			msevtmgt_noofpassesallocated: DevKit.Controls.Integer;
			/** Number of passes left */
			msevtmgt_noofpassesleft: DevKit.Controls.Integer;
			/** Number of passes sold */
			msevtmgt_noofpassessold: DevKit.Controls.Integer;
			msevtmgt_passprice: DevKit.Controls.Money;
			/** Unique identifier of the currency associated with the entity */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_pass_msevtmgt_attendeepass_Pass: DevKit.Controls.NavigationItem,
			msevtmgt_pass_msevtmgt_eventpurchasepass_Pass: DevKit.Controls.NavigationItem,
			msevtmgt_pass_msevtmgt_session_PassSessions: DevKit.Controls.NavigationItem
		}
		interface quickForm_eventSummaryQuickView_Body {
			msevtmgt_building: DevKit.Controls.QuickView;
			msevtmgt_EventEndDate: DevKit.Controls.QuickView;
			msevtmgt_EventStartDate: DevKit.Controls.QuickView;
			msevtmgt_Name: DevKit.Controls.QuickView;
			msevtmgt_PrimaryGoal: DevKit.Controls.QuickView;
		}
		interface quickForm_eventSummaryQuickView extends DevKit.Controls.IQuickView {
			Body: quickForm_eventSummaryQuickView_Body;
		}
		interface QuickForm {
			eventSummaryQuickView: quickForm_eventSummaryQuickView;
		}
		interface Grid {
			Sessions: DevKit.Controls.Grid;
			Sessions_2: DevKit.Controls.Grid;
		}
	}
	class FormPass extends DevKit.IForm {
		/**
		* Pass [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Pass */
		Body: DevKit.FormPass.Body;
		/** The Header section of form Pass */
		Header: DevKit.FormPass.Header;
		/** The Navigation of form Pass */
		Navigation: DevKit.FormPass.Navigation;
		/** The QuickForm of form Pass */
		QuickForm: DevKit.FormPass.QuickForm;
		/** The Grid of form Pass */
		Grid: DevKit.FormPass.Grid;
		/** The SidePanes of form Pass */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_pass_Quick_Create_Form {
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
			/** Unique identifier for the event associated with the pass */
			msevtmgt_eventid: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			/** Number of passes allocated */
			msevtmgt_noofpassesallocated: DevKit.Controls.Integer;
			/** Number of passes sold */
			msevtmgt_noofpassessold: DevKit.Controls.Integer;
			msevtmgt_passprice: DevKit.Controls.Money;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsevtmgt_pass_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_pass_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_pass_Quick_Create_Form.Body;
	}
	class msevtmgt_passApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_passApi
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
		/** Exchange rate between the base currency and the currency associated with the entity */
		readonly ExchangeRate: number;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_costperunit: number;
		/** Value of the cost per unit (in the base currency) */
		readonly msevtmgt_costperunit_Base: number;
		msevtmgt_descriptorsyncstatus: OptionSet.msevtmgt_pass.msevtmgt_descriptorsyncstatus;
		/** Unique identifier for the event associated with the pass */
		msevtmgt_eventid: string;
		/** The name of the custom entity */
		msevtmgt_name: string;
		/** Number of passes allocated */
		msevtmgt_noofpassesallocated: number;
		/** Number of passes left */
		readonly msevtmgt_noofpassesleft: number;
		/** Number of passes sold */
		msevtmgt_noofpassessold: number;
		/** Unique identifier for entity instances */
		msevtmgt_passId: string;
		msevtmgt_passprice: number;
		/** Value of the pass price (in the base currency) */
		readonly msevtmgt_passprice_Base: number;
		readonly msevtmgt_totalcost: number;
		/** Value of the total cost (in the base currency) */
		readonly msevtmgt_totalcost_Base: number;
		/** All active records */
		msevtmgt_track: string;
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
		/** Status of the pass */
		statecode: OptionSet.msevtmgt_pass.statecode;
		/** Reason for the status of the pass */
		statuscode: OptionSet.msevtmgt_pass.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity */
		TransactionCurrencyId: string;
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
			/** Exchange rate between the base currency and the currency associated with the entity */
			readonly ExchangeRate: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_costperunit: string;
			/** Value of the cost per unit (in the base currency) */
			readonly msevtmgt_costperunit_Base: string;
			readonly msevtmgt_descriptorsyncstatus: string;
			/** Unique identifier for the event associated with the pass */
			readonly msevtmgt_eventid: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			/** Number of passes allocated */
			readonly msevtmgt_noofpassesallocated: string;
			/** Number of passes left */
			readonly msevtmgt_noofpassesleft: string;
			/** Number of passes sold */
			readonly msevtmgt_noofpassessold: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_passId: string;
			readonly msevtmgt_passprice: string;
			/** Value of the pass price (in the base currency) */
			readonly msevtmgt_passprice_Base: string;
			readonly msevtmgt_totalcost: string;
			/** Value of the total cost (in the base currency) */
			readonly msevtmgt_totalcost_Base: string;
			/** All active records */
			readonly msevtmgt_track: string;
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
			/** Status of the pass */
			readonly statecode: string;
			/** Reason for the status of the pass */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity */
			readonly TransactionCurrencyId: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_pass {
		enum msevtmgt_descriptorsyncstatus {
			/** 100000001 */
			Going_live,
			/** 100000002 */
			Going_live_failed,
			/** 100000003 */
			Modifying_capacity,
			/** 100000004 */
			Modifying_capacity_failed,
			/** 100000005 */
			Not_Synced,
			/** 100000000 */
			Synced
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