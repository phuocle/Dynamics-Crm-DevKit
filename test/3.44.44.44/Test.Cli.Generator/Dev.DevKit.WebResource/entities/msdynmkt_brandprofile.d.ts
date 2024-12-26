//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_brandprofile_Information {
		interface tab__F7E7A749_9E56_4A8C_94E5_91B05F2617C8_Sections {
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_logos_Sections {
			tab_logos: DevKit.Controls.Section;
		}
		interface tab_theme_tab_Sections {
		}
		interface tab_themes_tab_Sections {
			themes_tab_section_1: DevKit.Controls.Section;
		}
		interface tab__F7E7A749_9E56_4A8C_94E5_91B05F2617C8 extends DevKit.Controls.ITab {
			Section: tab__F7E7A749_9E56_4A8C_94E5_91B05F2617C8_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_logos extends DevKit.Controls.ITab {
			Section: tab_tab_logos_Sections;
		}
		interface tab_theme_tab extends DevKit.Controls.ITab {
			Section: tab_theme_tab_Sections;
		}
		interface tab_themes_tab extends DevKit.Controls.ITab {
			Section: tab_themes_tab_Sections;
		}
		interface Tabs {
			_F7E7A749_9E56_4A8C_94E5_91B05F2617C8: tab__F7E7A749_9E56_4A8C_94E5_91B05F2617C8;
			tab_2: tab_tab_2;
			tab_3: tab_tab_3;
			tab_logos: tab_tab_logos;
			theme_tab: tab_theme_tab;
			themes_tab: tab_themes_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Default */
			msdynmkt_default: DevKit.Controls.Boolean;
			msdynmkt_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Facebook URL */
			msdynmkt_social_facebook: DevKit.Controls.String;
			/** Instagram URL */
			msdynmkt_social_instagram: DevKit.Controls.String;
			/** LinkedIn URL */
			msdynmkt_social_linkedin: DevKit.Controls.String;
			/** Twitter URL */
			msdynmkt_social_twitter: DevKit.Controls.String;
			msdynmkt_social_youtube: DevKit.Controls.String;
			msdynmkt_themestate: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Reason for the status of the Brand profile */
			statuscode: DevKit.Controls.OptionSet;
			theme_ctrl: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_msdynmkt_brandprofile_brandsender: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_brandprofile_msdynmkt_brandtheme: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_brandprofile_msdynmkt_email_brandprofile: DevKit.Controls.NavigationItem
		}
		interface Grid {
			logos_grid: DevKit.Controls.Grid;
			Senders: DevKit.Controls.Grid;
			Themes: DevKit.Controls.Grid;
		}
	}
	class Formmsdynmkt_brandprofile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_brandprofile_Information */
		Body: DevKit.Formmsdynmkt_brandprofile_Information.Body;
		/** The Navigation of form msdynmkt_brandprofile_Information */
		Navigation: DevKit.Formmsdynmkt_brandprofile_Information.Navigation;
		/** The Grid of form msdynmkt_brandprofile_Information */
		Grid: DevKit.Formmsdynmkt_brandprofile_Information.Grid;
		/** The SidePanes of form msdynmkt_brandprofile_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormLogos {
		interface tab_tab_logos_Sections {
			tab_logos: DevKit.Controls.Section;
		}
		interface tab_tab_logos extends DevKit.Controls.ITab {
			Section: tab_tab_logos_Sections;
		}
		interface Tabs {
			tab_logos: tab_tab_logos;
		}
		interface Body {
			Tab: Tabs;

		}
		interface Navigation {
			msdynmkt_msdynmkt_brandprofile_brandsender: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_brandprofile_msdynmkt_brandtheme: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_brandprofile_msdynmkt_email_brandprofile: DevKit.Controls.NavigationItem
		}
		interface Grid {
			logos_grid: DevKit.Controls.Grid;
		}
	}
	class FormLogos extends DevKit.IForm {
		/**
		* Logos [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Logos */
		Body: DevKit.FormLogos.Body;
		/** The Navigation of form Logos */
		Navigation: DevKit.FormLogos.Navigation;
		/** The Grid of form Logos */
		Grid: DevKit.FormLogos.Grid;
		/** The SidePanes of form Logos */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_brandprofileApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_brandprofileApi
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
		/** Unique identifier for entity instances */
		msdynmkt_brandprofileId: string;
		/** Default */
		msdynmkt_default: boolean;
		msdynmkt_description: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** Facebook URL */
		msdynmkt_social_facebook: string;
		/** Instagram URL */
		msdynmkt_social_instagram: string;
		/** LinkedIn URL */
		msdynmkt_social_linkedin: string;
		/** Twitter URL */
		msdynmkt_social_twitter: string;
		msdynmkt_social_youtube: string;
		msdynmkt_themestate: string;
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
		/** Status of the Brand profile */
		statecode: OptionSet.msdynmkt_brandprofile.statecode;
		/** Reason for the status of the Brand profile */
		statuscode: OptionSet.msdynmkt_brandprofile.statuscode;
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
			/** Unique identifier for entity instances */
			readonly msdynmkt_brandprofileId: string;
			/** Default */
			readonly msdynmkt_default: string;
			readonly msdynmkt_description: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** Facebook URL */
			readonly msdynmkt_social_facebook: string;
			/** Instagram URL */
			readonly msdynmkt_social_instagram: string;
			/** LinkedIn URL */
			readonly msdynmkt_social_linkedin: string;
			/** Twitter URL */
			readonly msdynmkt_social_twitter: string;
			readonly msdynmkt_social_youtube: string;
			readonly msdynmkt_themestate: string;
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
			/** Status of the Brand profile */
			readonly statecode: string;
			/** Reason for the status of the Brand profile */
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
	namespace msdynmkt_brandprofile {
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