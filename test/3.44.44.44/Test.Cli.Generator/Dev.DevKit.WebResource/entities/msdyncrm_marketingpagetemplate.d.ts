//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_marketingpagetemplate_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Name of the marketing page template */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_type: DevKit.Controls.OptionSet;
			/** Marketing page template status reason */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_1_Sections {
			tab_1_section_2: DevKit.Controls.Section;
			tab_1_section_3: DevKit.Controls.Section;
			tab_1_section_4: DevKit.Controls.Section;
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyncrm_content: DevKit.Controls.ActionCards;
			msdyncrm_contenttype: DevKit.Controls.OptionSet;
			msdyncrm_formpagemapping: DevKit.Controls.String;
			/** Form to save */
			msdyncrm_formtosave: DevKit.Controls.Boolean;
			msdyncrm_Label: DevKit.Controls.OptionSet;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			msdyncrm_markettype: DevKit.Controls.OptionSet;
			/** Name of the marketing page template */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_optimizedfor: DevKit.Controls.OptionSet;
			msdyncrm_purpose: DevKit.Controls.OptionSet;
			msdyncrm_visualstyle: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_marketingpage_marketingpagetemplate: DevKit.Controls.NavigationItem,
			msdyncrm_marketingpagetemplate_formpagetemplate: DevKit.Controls.NavigationItem
		}
		interface Grid {
			MarketingPagesUsingTemplate: DevKit.Controls.Grid;
			Related_Forms: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_marketingpagetemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingpagetemplate_Information */
		Body: DevKit.Formmsdyncrm_marketingpagetemplate_Information.Body;
		/** The Header section of form msdyncrm_marketingpagetemplate_Information */
		Header: DevKit.Formmsdyncrm_marketingpagetemplate_Information.Header;
		/** The Navigation of form msdyncrm_marketingpagetemplate_Information */
		Navigation: DevKit.Formmsdyncrm_marketingpagetemplate_Information.Navigation;
		/** The Grid of form msdyncrm_marketingpagetemplate_Information */
		Grid: DevKit.Formmsdyncrm_marketingpagetemplate_Information.Grid;
		/** The SidePanes of form msdyncrm_marketingpagetemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_marketingpagetemplateApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingpagetemplateApi
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
		msdyncrm_content: string;
		msdyncrm_contenttype: OptionSet.msdyncrm_marketingpagetemplate.msdyncrm_contenttype;
		msdyncrm_formpagemapping: string;
		/** Form to save */
		readonly msdyncrm_formtosave: boolean;
		msdyncrm_Label: OptionSet.msdyncrm_marketingpagetemplate.msdyncrm_Label;
		msdyncrm_Language: OptionSet.msdyncrm_marketingpagetemplate.msdyncrm_Language;
		/** Unique ID for entity instances */
		msdyncrm_marketingpagetemplateId: string;
		msdyncrm_marketingprovided: boolean;
		msdyncrm_markettype: OptionSet.msdyncrm_marketingpagetemplate.msdyncrm_markettype;
		/** Name of the marketing page template */
		msdyncrm_name: string;
		msdyncrm_optimizedfor: OptionSet.msdyncrm_marketingpagetemplate.msdyncrm_optimizedfor;
		msdyncrm_purpose: OptionSet.msdyncrm_marketingpagetemplate.msdyncrm_purpose;
		/** deprecated */
		msdyncrm_Tag: OptionSet.msdyncrm_marketingpagetemplate.msdyncrm_Tag;
		msdyncrm_type: OptionSet.msdyncrm_marketingpagetemplate.msdyncrm_type;
		msdyncrm_visualstyle: OptionSet.msdyncrm_marketingpagetemplate.msdyncrm_visualstyle;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the team that owns this. */
		readonly OwningUser: string;
		/** Status of the marketing page template */
		statecode: OptionSet.msdyncrm_marketingpagetemplate.statecode;
		/** Marketing page template status reason */
		statuscode: OptionSet.msdyncrm_marketingpagetemplate.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
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
			readonly msdyncrm_content: string;
			readonly msdyncrm_contenttype: string;
			readonly msdyncrm_formpagemapping: string;
			/** Form to save */
			readonly msdyncrm_formtosave: string;
			readonly msdyncrm_Label: string;
			readonly msdyncrm_Language: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingpagetemplateId: string;
			readonly msdyncrm_marketingprovided: string;
			readonly msdyncrm_markettype: string;
			/** Name of the marketing page template */
			readonly msdyncrm_name: string;
			readonly msdyncrm_optimizedfor: string;
			readonly msdyncrm_purpose: string;
			/** deprecated */
			readonly msdyncrm_Tag: string;
			readonly msdyncrm_type: string;
			readonly msdyncrm_visualstyle: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the team that owns this. */
			readonly OwningUser: string;
			/** Status of the marketing page template */
			readonly statecode: string;
			/** Marketing page template status reason */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_marketingpagetemplate {
		enum msdyncrm_contenttype {
			/** 3 */
			Company_background,
			/** 6 */
			Confirmation_request,
			/** 4 */
			Event_information,
			/** 5 */
			Offers_and_discounts,
			/** 2 */
			Product_information,
			/** 1 */
			Product_launch,
			/** 0 */
			Structural
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
		enum msdyncrm_markettype {
			/** 2 */
			All,
			/** 1 */
			Consumer,
			/** 0 */
			Enterprise
		}
		enum msdyncrm_optimizedfor {
			/** 0 */
			Desktop,
			/** 2 */
			Mobile,
			/** 1 */
			Tablet
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
		enum msdyncrm_type {
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
			/** 2 */
			Colorful,
			/** 1 */
			Dark,
			/** 0 */
			Light,
			/** 3 */
			Other
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