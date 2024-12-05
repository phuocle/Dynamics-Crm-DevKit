//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_marketingformtemplate_Information {
		interface Tabs {
		}
		interface Body {
			msdyncrm_entityupdatebehavioronsubmit: DevKit.Controls.OptionSet;
			msdyncrm_Label: DevKit.Controls.OptionSet;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			msdyncrm_marketingprovided: DevKit.Controls.Boolean;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_purpose: DevKit.Controls.OptionSet;
			msdyncrm_validforpagetype: DevKit.Controls.OptionSet;
			msdyncrm_visualstyle: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_msdyncrm_marketingformtemplate_msdyncrm_marketingform_marketingformtemplate: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_marketingformtemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingformtemplate_Information */
		Body: DevKit.Formmsdyncrm_marketingformtemplate_Information.Body;
		/** The Navigation of form msdyncrm_marketingformtemplate_Information */
		Navigation: DevKit.Formmsdyncrm_marketingformtemplate_Information.Navigation;
		/** The SidePanes of form msdyncrm_marketingformtemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_marketingformtemplate_Information2 {
		interface Header extends DevKit.Controls.IHeader {
			msdyncrm_entityupdatebehavioronsubmit: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_validforpagetype: DevKit.Controls.OptionSet;
			/** Reason for the status of the marketing form template */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab__8387D531_3CF1_41C3_B97F_B2C9E794D8DA_Sections {
			_8387D531_3CF1_41C3_B97F_B2C9E794D8DA_SECTION_2: DevKit.Controls.Section;
			_8387D531_3CF1_41C3_B97F_B2C9E794D8DA_SECTION_3: DevKit.Controls.Section;
			_8387D531_3CF1_41C3_B97F_B2C9E794D8DA_SECTION_4: DevKit.Controls.Section;
			_A79D205A_8AA9_4A35_AC5A_0B928B3560AD: DevKit.Controls.Section;
		}
		interface tab_Form_Definition_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__8387D531_3CF1_41C3_B97F_B2C9E794D8DA extends DevKit.Controls.ITab {
			Section: tab__8387D531_3CF1_41C3_B97F_B2C9E794D8DA_Sections;
		}
		interface tab_Form_Definition extends DevKit.Controls.ITab {
			Section: tab_Form_Definition_Sections;
		}
		interface Tabs {
			_8387D531_3CF1_41C3_B97F_B2C9E794D8DA: tab__8387D531_3CF1_41C3_B97F_B2C9E794D8DA;
			Form_Definition: tab_Form_Definition;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyncrm_formcontrolmapping: DevKit.Controls.String;
			msdyncrm_formdefinition: DevKit.Controls.ActionCards;
			msdyncrm_formfieldmapping: DevKit.Controls.String;
			/** Form to save */
			msdyncrm_formtosave: DevKit.Controls.Boolean;
			msdyncrm_Label: DevKit.Controls.OptionSet;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_purpose: DevKit.Controls.OptionSet;
			msdyncrm_visualstyle: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_msdyncrm_marketingformtemplate_msdyncrm_marketingform_marketingformtemplate: DevKit.Controls.NavigationItem
		}
		interface Grid {
			FieldsUsedIntemplate: DevKit.Controls.Grid;
			FormsUsingTemplate: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_marketingformtemplate_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingformtemplate_Information2 */
		Body: DevKit.Formmsdyncrm_marketingformtemplate_Information2.Body;
		/** The Header section of form msdyncrm_marketingformtemplate_Information2 */
		Header: DevKit.Formmsdyncrm_marketingformtemplate_Information2.Header;
		/** The Navigation of form msdyncrm_marketingformtemplate_Information2 */
		Navigation: DevKit.Formmsdyncrm_marketingformtemplate_Information2.Navigation;
		/** The Grid of form msdyncrm_marketingformtemplate_Information2 */
		Grid: DevKit.Formmsdyncrm_marketingformtemplate_Information2.Grid;
		/** The SidePanes of form msdyncrm_marketingformtemplate_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_marketingformtemplateApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingformtemplateApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Thumbnail preview of template. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_ConfirmationMessage: string;
		msdyncrm_entityupdatebehavioronsubmit: OptionSet.msdyncrm_marketingformtemplate.msdyncrm_entityupdatebehavioronsubmit;
		msdyncrm_errorimageurl: string;
		msdyncrm_ErrorMessage: string;
		msdyncrm_formcontrolmapping: string;
		msdyncrm_formdefinition: string;
		msdyncrm_formfieldmapping: string;
		/** Form to save */
		readonly msdyncrm_formtosave: boolean;
		msdyncrm_Label: OptionSet.msdyncrm_marketingformtemplate.msdyncrm_Label;
		msdyncrm_Language: OptionSet.msdyncrm_marketingformtemplate.msdyncrm_Language;
		msdyncrm_LimitExceededMessage: string;
		/** Unique ID for entity instances */
		msdyncrm_marketingformtemplateId: string;
		msdyncrm_marketingprovided: boolean;
		/** The name of the custom entity */
		msdyncrm_name: string;
		msdyncrm_purpose: OptionSet.msdyncrm_marketingformtemplate.msdyncrm_purpose;
		msdyncrm_RedirectURL: string;
		msdyncrm_successImageUrl: string;
		/** deprecated */
		msdyncrm_Tag: OptionSet.msdyncrm_marketingformtemplate.msdyncrm_Tag;
		msdyncrm_validforpagetype: OptionSet.msdyncrm_marketingformtemplate.msdyncrm_validforpagetype;
		msdyncrm_visualstyle: OptionSet.msdyncrm_marketingformtemplate.msdyncrm_visualstyle;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique ID for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the marketing form template */
		statecode: OptionSet.msdyncrm_marketingformtemplate.statecode;
		/** Reason for the status of the marketing form template */
		statuscode: OptionSet.msdyncrm_marketingformtemplate.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Thumbnail preview of template. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_ConfirmationMessage: string;
			readonly msdyncrm_entityupdatebehavioronsubmit: string;
			readonly msdyncrm_errorimageurl: string;
			readonly msdyncrm_ErrorMessage: string;
			readonly msdyncrm_formcontrolmapping: string;
			readonly msdyncrm_formdefinition: string;
			readonly msdyncrm_formfieldmapping: string;
			/** Form to save */
			readonly msdyncrm_formtosave: string;
			readonly msdyncrm_Label: string;
			readonly msdyncrm_Language: string;
			readonly msdyncrm_LimitExceededMessage: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingformtemplateId: string;
			readonly msdyncrm_marketingprovided: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			readonly msdyncrm_purpose: string;
			readonly msdyncrm_RedirectURL: string;
			readonly msdyncrm_successImageUrl: string;
			/** deprecated */
			readonly msdyncrm_Tag: string;
			readonly msdyncrm_validforpagetype: string;
			readonly msdyncrm_visualstyle: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique ID for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the marketing form template */
			readonly statecode: string;
			/** Reason for the status of the marketing form template */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_marketingformtemplate {
		enum msdyncrm_entityupdatebehavioronsubmit {
			/** 0 */
			Contacts_and_leads,
			/** 3 */
			No_update,
			/** 1 */
			Only_contacts,
			/** 2 */
			Only_leads
		}
		enum msdyncrm_Label {
			/** 192350001 */
			Layout_enabled,
			/** 192350000 */
			New
		}
		enum msdyncrm_Language {
			/** 1025 */
			Arabic_Saudi_Arabia,
			/** 1069 */
			Basque_Basque,
			/** 1026 */
			Bulgarian_Bulgaria,
			/** 1027 */
			Catalan_Catalan,
			/** 3076 */
			Chinese_Hong_Kong_SAR,
			/** 2052 */
			Chinese_PRC,
			/** 1028 */
			Chinese_Taiwan,
			/** 1050 */
			Croatian_Croatia,
			/** 1029 */
			Czech_Czech_Republic,
			/** 1030 */
			Danish,
			/** 1043 */
			Dutch,
			/** 1033 */
			English,
			/** 3081 */
			English_Australia,
			/** 4105 */
			English_Canada,
			/** 2057 */
			English_Great_Britain,
			/** 1061 */
			Estonian_Estonia,
			/** 1035 */
			Finnish_Finland,
			/** 1036 */
			French,
			/** 3084 */
			French_Canada,
			/** 1110 */
			Galician_Galician,
			/** 1031 */
			German,
			/** 1032 */
			Greek_Greece,
			/** 1037 */
			Hebrew_Israel,
			/** 1038 */
			Hungarian_Hungary,
			/** 1057 */
			Indonesian_Indonesia,
			/** 1040 */
			Italian,
			/** 1041 */
			Japanese,
			/** 1042 */
			Korean_Korea,
			/** 1062 */
			Latvian_Latvia,
			/** 1063 */
			Lithuanian_Lithuania,
			/** 1044 */
			Norwegian_Bokmal_Norway,
			/** 1045 */
			Polish_Poland,
			/** 1046 */
			Portuguese_Brazil,
			/** 2070 */
			Portuguese_Portugal,
			/** 1048 */
			Romanian_Romania,
			/** 1049 */
			Russian_Russia,
			/** 3098 */
			Serbian_Cyrillic_Serbia_and_Montenegro,
			/** 2074 */
			Serbian_Latin_Serbia_and_Montenegro,
			/** 1051 */
			Slovak_Slovakia,
			/** 1060 */
			Slovenian_Slovenia,
			/** 3082 */
			Spanish,
			/** 1053 */
			Swedish_Sweden,
			/** 1054 */
			Thai_Thailand,
			/** 1055 */
			Turkish_Turkey,
			/** 1058 */
			Ukrainian_Ukraine,
			/** 1066 */
			Vietnamese_Vietnam
		}
		enum msdyncrm_purpose {
			/** 3 */
			Collateral_download,
			/** 0 */
			Contact_capture,
			/** 7 */
			Double_Opt_In_Email_based_confirmation,
			/** 5 */
			Event_feedback,
			/** 4 */
			Event_registration,
			/** 2 */
			Lead_generation,
			/** 1 */
			Newsletter_subscription,
			/** 6 */
			Structural
		}
		enum msdyncrm_Tag {
			/** 192350001 */
			Layout_enabled,
			/** 192350000 */
			New
		}
		enum msdyncrm_validforpagetype {
			/** 3 */
			Event_registration,
			/** 2 */
			Forward_to_a_friend,
			/** 0 */
			Landing_page,
			/** 1 */
			Subscription_center
		}
		enum msdyncrm_visualstyle {
			/** 0 */
			_1_column,
			/** 1 */
			_2_column,
			/** 2 */
			Mixed
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350000 */
			Draft,
			/** 2 */
			Inactive,
			/** 192350001 */
			Live
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