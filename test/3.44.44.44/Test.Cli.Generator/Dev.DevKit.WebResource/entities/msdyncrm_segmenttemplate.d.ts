//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_segmenttemplate_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity */
			msdyncrm_segmentname: DevKit.Controls.String;
			/** Segment type */
			msdyncrm_segmenttype: DevKit.Controls.OptionSet;
		}
		interface tab_definition_tab_Sections {
			_65A9C7F2_83F0_4388_8364_6F3BA63B773A_SECTION_SEGMENTTEMPLATE_2: DevKit.Controls.Section;
		}
		interface tab_general_tab_Sections {
		}
		interface tab_definition_tab extends DevKit.Controls.ITab {
			Section: tab_definition_tab_Sections;
		}
		interface tab_general_tab extends DevKit.Controls.ITab {
			Section: tab_general_tab_Sections;
		}
		interface Tabs {
			definition_tab: tab_definition_tab;
			general_tab: tab_general_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The segment description */
			msdyncrm_description: DevKit.Controls.String;
			/** deprecated */
			msdyncrm_Tag: DevKit.Controls.OptionSet;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			/** Filter query of a static segment */
			msdyncrm_segmentfilterquery: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_segmentname: DevKit.Controls.String;
			msdyncrm_segmentquery: DevKit.Controls.ActionCards;
			/** The segment query definition */
			msdyncrm_segmentquery: DevKit.Controls.String;
			/** Segment type */
			msdyncrm_segmenttype: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Segment Template */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Segment Template */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_msdyncrm_segmenttemplate_msdyncrm_segment_SegmentTemplate: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_segmenttemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_segmenttemplate_Information */
		Body: DevKit.Formmsdyncrm_segmenttemplate_Information.Body;
		/** The Header section of form msdyncrm_segmenttemplate_Information */
		Header: DevKit.Formmsdyncrm_segmenttemplate_Information.Header;
		/** The Navigation of form msdyncrm_segmenttemplate_Information */
		Navigation: DevKit.Formmsdyncrm_segmenttemplate_Information.Navigation;
		/** The SidePanes of form msdyncrm_segmenttemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_segmenttemplate_Quick_Create {
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
			/** The segment description */
			msdyncrm_description: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_segmentname: DevKit.Controls.String;
			/** The segment query definition */
			msdyncrm_segmentquery: DevKit.Controls.String;
			/** Segment type */
			msdyncrm_segmenttype: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyncrm_segmenttemplate_Quick_Create extends DevKit.IForm {
		/**
		* Quick create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_segmenttemplate_Quick_Create */
		Body: DevKit.Formmsdyncrm_segmenttemplate_Quick_Create.Body;
	}
	class msdyncrm_segmenttemplateApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_segmenttemplateApi
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
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The segment description */
		msdyncrm_description: string;
		msdyncrm_Label: OptionSet.msdyncrm_segmenttemplate.msdyncrm_Label;
		msdyncrm_Language: OptionSet.msdyncrm_segmenttemplate.msdyncrm_Language;
		/** Query type */
		msdyncrm_querytype: OptionSet.msdyncrm_segmenttemplate.msdyncrm_querytype;
		/** Filter query of a static segment */
		msdyncrm_segmentfilterquery: string;
		/** Static segment member IDs */
		msdyncrm_segmentmemberids: string;
		/** The name of the custom entity */
		msdyncrm_segmentname: string;
		/** The segment query definition */
		msdyncrm_segmentquery: string;
		/** Unique identifier for entity instances */
		msdyncrm_segmenttemplateId: string;
		/** Segment type */
		msdyncrm_segmenttype: OptionSet.msdyncrm_segmenttemplate.msdyncrm_segmenttype;
		/** deprecated */
		msdyncrm_Tag: OptionSet.msdyncrm_segmenttemplate.msdyncrm_Tag;
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
		/** Status of the Segment Template */
		statecode: OptionSet.msdyncrm_segmenttemplate.statecode;
		/** Reason for the status of the Segment Template */
		statuscode: OptionSet.msdyncrm_segmenttemplate.statuscode;
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
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The segment description */
			readonly msdyncrm_description: string;
			readonly msdyncrm_Label: string;
			readonly msdyncrm_Language: string;
			/** Query type */
			readonly msdyncrm_querytype: string;
			/** Filter query of a static segment */
			readonly msdyncrm_segmentfilterquery: string;
			/** Static segment member IDs */
			readonly msdyncrm_segmentmemberids: string;
			/** The name of the custom entity */
			readonly msdyncrm_segmentname: string;
			/** The segment query definition */
			readonly msdyncrm_segmentquery: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_segmenttemplateId: string;
			/** Segment type */
			readonly msdyncrm_segmenttype: string;
			/** deprecated */
			readonly msdyncrm_Tag: string;
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
			/** Status of the Segment Template */
			readonly statecode: string;
			/** Reason for the status of the Segment Template */
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
	namespace msdyncrm_segmenttemplate {
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
		enum msdyncrm_querytype {
			/** 192350000 */
			Interaction_based,
			/** 192350001 */
			Profile_based
		}
		enum msdyncrm_segmenttype {
			/** 192350002 */
			Compound_segment,
			/** 192350000 */
			Dynamic_segment,
			/** 192350001 */
			Static_segment
		}
		enum msdyncrm_Tag {
			/** 192350002 */
			Behavioral,
			/** 192350000 */
			Demographic,
			/** 192350001 */
			Firmographic
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
			/** 192350000 */
			Draft,
			/** 192350004 */
			Expired,
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