//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_socialpostingconfiguration_Information {
		interface Header extends DevKit.Controls.IHeader {
			msdyncrm_connectstatus: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the social media account */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab_msdyncrm_socialconfiguration_generaltab_Sections {
			msdyncrm_socialconfiguration_generaltab_column_2_section_1: DevKit.Controls.Section;
		}
		interface tab_msdyncrm_socialconfiguration_generaltab extends DevKit.Controls.ITab {
			Section: tab_msdyncrm_socialconfiguration_generaltab_Sections;
		}
		interface Tabs {
			msdyncrm_socialconfiguration_generaltab: tab_msdyncrm_socialconfiguration_generaltab;
		}
		interface Body {
			Tab: Tabs;
			/** Expiration date for social media account */
			msdyncrm_expirydate: DevKit.Controls.Date;
			/** The name of the social post */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_networkname: DevKit.Controls.String;
			msdyncrm_Privacypolicy: DevKit.Controls.String;
			msdyncrm_SocialChannel: DevKit.Controls.OptionSet;
			msdyncrm_Termsofservice: DevKit.Controls.String;
			msdyncrm_TokenType: DevKit.Controls.OptionSet;
			msdyncrm_UserAccountDisabled: DevKit.Controls.Boolean;
			msdyncrm_UserName: DevKit.Controls.String;
			msdyncrm_validationdate: DevKit.Controls.Date;
		}
		interface Navigation {
			msdyncrm_msdyncrm_socialpostingconfiguration_msdyncrm_socialpost_socialconfiguration: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_socialpostingconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_socialpostingconfiguration_Information */
		Body: DevKit.Formmsdyncrm_socialpostingconfiguration_Information.Body;
		/** The Header section of form msdyncrm_socialpostingconfiguration_Information */
		Header: DevKit.Formmsdyncrm_socialpostingconfiguration_Information.Header;
		/** The Navigation of form msdyncrm_socialpostingconfiguration_Information */
		Navigation: DevKit.Formmsdyncrm_socialpostingconfiguration_Information.Navigation;
		/** The SidePanes of form msdyncrm_socialpostingconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSp_QuickCreateForm {
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
			/** The name of the social post */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_SocialChannel: DevKit.Controls.OptionSet;
		}
	}
	class FormSp_QuickCreateForm extends DevKit.IForm {
		/**
		* Sp-QuickCreateForm [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Sp_QuickCreateForm */
		Body: DevKit.FormSp_QuickCreateForm.Body;
	}
	class msdyncrm_socialpostingconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_socialpostingconfigurationApi
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
		msdyncrm_connectstatus: string;
		msdyncrm_consent: boolean;
		msdyncrm_consentneeded: boolean;
		msdyncrm_consenttext: string;
		/** Expiration date for social media account */
		readonly msdyncrm_expirydate_UtcDateOnly: Date;
		/** The name of the social post */
		msdyncrm_name: string;
		msdyncrm_networkid: string;
		msdyncrm_networkname: string;
		msdyncrm_Privacypolicy: string;
		msdyncrm_SocialChannel: OptionSet.msdyncrm_socialpostingconfiguration.msdyncrm_SocialChannel;
		/** Unique identifier for this entity */
		msdyncrm_socialpostingconfigurationId: string;
		msdyncrm_Termsofservice: string;
		msdyncrm_TokenType: OptionSet.msdyncrm_socialpostingconfiguration.msdyncrm_TokenType;
		msdyncrm_UserAccountDisabled: boolean;
		msdyncrm_UserName: string;
		msdyncrm_validationdate_UtcDateOnly: Date;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the social media account */
		statecode: OptionSet.msdyncrm_socialpostingconfiguration.statecode;
		/** Reason for the status of the social media account */
		statuscode: OptionSet.msdyncrm_socialpostingconfiguration.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created */
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
			readonly msdyncrm_connectstatus: string;
			readonly msdyncrm_consent: string;
			readonly msdyncrm_consentneeded: string;
			readonly msdyncrm_consenttext: string;
			/** Expiration date for social media account */
			readonly msdyncrm_expirydate_UtcDateOnly: string;
			/** The name of the social post */
			readonly msdyncrm_name: string;
			readonly msdyncrm_networkid: string;
			readonly msdyncrm_networkname: string;
			readonly msdyncrm_Privacypolicy: string;
			readonly msdyncrm_SocialChannel: string;
			/** Unique identifier for this entity */
			readonly msdyncrm_socialpostingconfigurationId: string;
			readonly msdyncrm_Termsofservice: string;
			readonly msdyncrm_TokenType: string;
			readonly msdyncrm_UserAccountDisabled: string;
			readonly msdyncrm_UserName: string;
			readonly msdyncrm_validationdate_UtcDateOnly: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the social media account */
			readonly statecode: string;
			/** Reason for the status of the social media account */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_socialpostingconfiguration {
		enum msdyncrm_SocialChannel {
			/** 270100001 */
			Facebook,
			/** 270100003 */
			Instagram,
			/** 270100002 */
			LinkedIn,
			/** 270100000 */
			Twitter
		}
		enum msdyncrm_TokenType {
			/** 270100001 */
			Page,
			/** 270100000 */
			User
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