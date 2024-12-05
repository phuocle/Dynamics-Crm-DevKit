//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_customerjourneytemplate_Information {
		interface tab__45900481_9215_4C68_8EE2_71984CCB70FA_Sections {
			_45900481_9215_4C68_8EE2_71984CCB70FA_SECTION_2: DevKit.Controls.Section;
			_45900481_9215_4C68_8EE2_71984CCB70FA_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_designer_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__45900481_9215_4C68_8EE2_71984CCB70FA extends DevKit.Controls.ITab {
			Section: tab__45900481_9215_4C68_8EE2_71984CCB70FA_Sections;
		}
		interface tab_designer extends DevKit.Controls.ITab {
			Section: tab_designer_Sections;
		}
		interface Tabs {
			_45900481_9215_4C68_8EE2_71984CCB70FA: tab__45900481_9215_4C68_8EE2_71984CCB70FA;
			designer: tab_designer;
		}
		interface Body {
			Tab: Tabs;
			msdyncrm_description: DevKit.Controls.String;
			/** Tells which type of entity is targeted */
			msdyncrm_entitytarget: DevKit.Controls.OptionSet;
			/** Form to save */
			msdyncrm_formtosave: DevKit.Controls.Boolean;
			/** Tells whether the customer journey is recurring */
			msdyncrm_isrecurring: DevKit.Controls.Boolean;
			msdyncrm_Label: DevKit.Controls.OptionSet;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_purposeoption: DevKit.Controls.OptionSet;
			/** The number of iterations */
			msdyncrm_recurrencecount: DevKit.Controls.Integer;
			/** The duration of the iteration (in days) */
			msdyncrm_recurrenceintervaldays: DevKit.Controls.Integer;
			msdyncrm_workflowdefinition: DevKit.Controls.ActionCards;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the customer journey template */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the customer journey template */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_msdyncrm_customerjourneytemplate_msdyncrm_customerjourney_CustomerJourneyTemplate: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_customerjourneytemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_customerjourneytemplate_Information */
		Body: DevKit.Formmsdyncrm_customerjourneytemplate_Information.Body;
		/** The Navigation of form msdyncrm_customerjourneytemplate_Information */
		Navigation: DevKit.Formmsdyncrm_customerjourneytemplate_Information.Navigation;
		/** The SidePanes of form msdyncrm_customerjourneytemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_customerjourneytemplate_New_Form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdyncrm_description: DevKit.Controls.String;
			/** Tells which type of entity is targeted */
			msdyncrm_entitytarget: DevKit.Controls.OptionSet;
			/** Tells whether the customer journey is recurring */
			msdyncrm_isrecurring: DevKit.Controls.Boolean;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** The optional reference to the Customer Journey from which this Template is originated. */
			msdyncrm_Origin: DevKit.Controls.Lookup;
			msdyncrm_purposeoption: DevKit.Controls.OptionSet;
			/** The number of iterations */
			msdyncrm_recurrencecount: DevKit.Controls.Integer;
			/** The duration of the iteration (in days) */
			msdyncrm_recurrenceintervaldays: DevKit.Controls.Integer;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyncrm_customerjourneytemplate_New_Form extends DevKit.IForm {
		/**
		* New form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_customerjourneytemplate_New_Form */
		Body: DevKit.Formmsdyncrm_customerjourneytemplate_New_Form.Body;
	}
	class msdyncrm_customerjourneytemplateApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_customerjourneytemplateApi
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
		/** The state of customer journey */
		msdyncrm_customerjourneydesignerstate: string;
		msdyncrm_customerjourneyid: string;
		/** Unique ID for entity instances */
		msdyncrm_customerjourneytemplateId: string;
		msdyncrm_description: string;
		/** Tells which type of entity is targeted */
		msdyncrm_entitytarget: OptionSet.msdyncrm_customerjourneytemplate.msdyncrm_entitytarget;
		/** Form to save */
		readonly msdyncrm_formtosave: boolean;
		/** Tells whether the customer journey is recurring */
		msdyncrm_isrecurring: boolean;
		msdyncrm_Label: OptionSet.msdyncrm_customerjourneytemplate.msdyncrm_Label;
		msdyncrm_Language: OptionSet.msdyncrm_customerjourneytemplate.msdyncrm_Language;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** The optional reference to the Customer Journey from which this Template is originated. */
		msdyncrm_Origin: string;
		msdyncrm_purposeoption: OptionSet.msdyncrm_customerjourneytemplate.msdyncrm_purposeoption;
		/** The number of iterations */
		msdyncrm_recurrencecount: number;
		/** The duration of the iteration (in days) */
		msdyncrm_recurrenceintervaldays: number;
		/** deprecated */
		msdyncrm_Tag: OptionSet.msdyncrm_customerjourneytemplate.msdyncrm_Tag;
		msdyncrm_validationresults: string;
		/** The customer journey design definition */
		msdyncrm_workflowdefinition: string;
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
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the customer journey template */
		statecode: OptionSet.msdyncrm_customerjourneytemplate.statecode;
		/** Reason for the status of the customer journey template */
		statuscode: OptionSet.msdyncrm_customerjourneytemplate.statuscode;
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
			/** The state of customer journey */
			readonly msdyncrm_customerjourneydesignerstate: string;
			readonly msdyncrm_customerjourneyid: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_customerjourneytemplateId: string;
			readonly msdyncrm_description: string;
			/** Tells which type of entity is targeted */
			readonly msdyncrm_entitytarget: string;
			/** Form to save */
			readonly msdyncrm_formtosave: string;
			/** Tells whether the customer journey is recurring */
			readonly msdyncrm_isrecurring: string;
			readonly msdyncrm_Label: string;
			readonly msdyncrm_Language: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** The optional reference to the Customer Journey from which this Template is originated. */
			readonly msdyncrm_Origin: string;
			readonly msdyncrm_purposeoption: string;
			/** The number of iterations */
			readonly msdyncrm_recurrencecount: string;
			/** The duration of the iteration (in days) */
			readonly msdyncrm_recurrenceintervaldays: string;
			/** deprecated */
			readonly msdyncrm_Tag: string;
			readonly msdyncrm_validationresults: string;
			/** The customer journey design definition */
			readonly msdyncrm_workflowdefinition: string;
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
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the customer journey template */
			readonly statecode: string;
			/** Reason for the status of the customer journey template */
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
	namespace msdyncrm_customerjourneytemplate {
		enum msdyncrm_entitytarget {
			/** 1 */
			Account,
			/** 0 */
			Contact
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
		enum msdyncrm_purposeoption {
			/** 0 */
			Announcement,
			/** 6 */
			Email_marketing,
			/** 3 */
			Event_marketing,
			/** 4 */
			Large_deals,
			/** 1 */
			Multipurpose,
			/** 5 */
			Newsletters,
			/** 2 */
			Onboarding
		}
		enum msdyncrm_Tag {
			/** 192350001 */
			Layout_enabled,
			/** 192350000 */
			New
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