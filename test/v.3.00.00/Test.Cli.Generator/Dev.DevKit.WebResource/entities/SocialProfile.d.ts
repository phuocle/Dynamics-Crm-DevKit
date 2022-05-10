//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSocial_Profile {
		interface Header extends DevKit.Controls.IHeader {
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the score that determines the online social influence of the social profile. */
			InfluenceScore: DevKit.Controls.Double;
			/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			/** Identifies if the social profile has been blocked. */
			Blocked: DevKit.Controls.Boolean;
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the customer that this social profile belongs to. */
			CustomerId: DevKit.Controls.Lookup;
			/** Customer's Followers on the Social channel. */
			msdyn_ocfollowercount: DevKit.Controls.Integer;
			/** Customer's followings on the Social channel */
			msdyn_ocfollowingcount: DevKit.Controls.Integer;
			/** Customer's Friend count on the Social Channel */
			msdyn_ocfriendcount: DevKit.Controls.Integer;
			/** The phone number of the social profile. */
			msdyn_phonenumber: DevKit.Controls.String;
			/** Link to the Customer's Social Channel Profile image. */
			msdyn_profileimagelink: DevKit.Controls.String;
			/** Source Id field of social profile entity for Apple Business Messages channel. */
			msdyn_sourceid: DevKit.Controls.String;
			/** Shows the display name of the customer on this social profile. */
			ProfileFullName: DevKit.Controls.String;
			/** Shows the customer that this social profile belongs to. */
			ProfileLink: DevKit.Controls.String;
			/** Shows the name of the social profile on the corresponding social channel. */
			ProfileName: DevKit.Controls.String;
		}
		interface quickForm_related_sp_Body {
		}
		interface quickForm_related_sp extends DevKit.Controls.IQuickView {
			Body: quickForm_related_sp_Body;
		}
		interface QuickForm {
			related_sp: quickForm_related_sp;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSocial_Profile extends DevKit.IForm {
		/**
		* Social Profile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Social_Profile */
		Body: DevKit.FormSocial_Profile.Body;
		/** The Header section of form Social_Profile */
		Header: DevKit.FormSocial_Profile.Header;
		/** The QuickForm of form Social_Profile */
		QuickForm: DevKit.FormSocial_Profile.QuickForm;
		/** The Process of form Social_Profile */
		Process: DevKit.FormSocial_Profile.Process;
		/** The SidePanes of form Social_Profile */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSocial_Profile_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the score that determines the online social influence of the social profile. */
			InfluenceScore: DevKit.Controls.Double;
			/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
			tab_2_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Identifies if the social profile has been blocked. */
			Blocked: DevKit.Controls.Boolean;
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the customer that this social profile belongs to. */
			CustomerId: DevKit.Controls.Lookup;
			/** Customer's Followers on the Social channel. */
			msdyn_ocfollowercount: DevKit.Controls.Integer;
			/** Customer's followings on the Social channel */
			msdyn_ocfollowingcount: DevKit.Controls.Integer;
			/** Customer's Friend count on the Social Channel */
			msdyn_ocfriendcount: DevKit.Controls.Integer;
			/** The phone number of the social profile. */
			msdyn_phonenumber: DevKit.Controls.String;
			/** Link to the Customer's Social Channel Profile image. */
			msdyn_profileimagelink: DevKit.Controls.String;
			/** Source Id field of social profile entity for Apple Business Messages channel. */
			msdyn_sourceid: DevKit.Controls.String;
			/** Shows the display name of the customer on this social profile. */
			ProfileFullName: DevKit.Controls.String;
			/** Shows the customer that this social profile belongs to. */
			ProfileLink: DevKit.Controls.String;
			/** Shows the name of the social profile on the corresponding social channel. */
			ProfileName: DevKit.Controls.String;
		}
		interface quickForm_customer_qfc_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			Name: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_related_sp_Body {
		}
		interface quickForm_customer_qfc extends DevKit.Controls.IQuickView {
			Body: quickForm_customer_qfc_Body;
		}
		interface quickForm_related_sp extends DevKit.Controls.IQuickView {
			Body: quickForm_related_sp_Body;
		}
		interface QuickForm {
			customer_qfc: quickForm_customer_qfc;
			related_sp: quickForm_related_sp;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSocial_Profile_for_Interactive_experience extends DevKit.IForm {
		/**
		* Social Profile for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Social_Profile_for_Interactive_experience */
		Body: DevKit.FormSocial_Profile_for_Interactive_experience.Body;
		/** The Header section of form Social_Profile_for_Interactive_experience */
		Header: DevKit.FormSocial_Profile_for_Interactive_experience.Header;
		/** The QuickForm of form Social_Profile_for_Interactive_experience */
		QuickForm: DevKit.FormSocial_Profile_for_Interactive_experience.QuickForm;
		/** The Process of form Social_Profile_for_Interactive_experience */
		Process: DevKit.FormSocial_Profile_for_Interactive_experience.Process;
		/** The SidePanes of form Social_Profile_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	class SocialProfileApi {
		/**
		* DynamicsCrm.DevKit SocialProfileApi
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
		/** Identifies if the social profile has been blocked. */
		Blocked: boolean;
		/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
		Community: OptionSet.SocialProfile.Community;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the customer that this social profile belongs to. */
		customerid_account: string;
		/** Shows the customer that this social profile belongs to. */
		customerid_contact: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Shows the score that determines the online social influence of the social profile. */
		InfluenceScore: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Flag specifying whether Customer has opted out of getting messages using this SP. */
		msdyn_customeroptout: boolean;
		/** Customer's Followers on the Social channel. */
		msdyn_ocfollowercount: number;
		/** Customer's followings on the Social channel */
		msdyn_ocfollowingcount: number;
		/** Customer's Friend count on the Social Channel */
		msdyn_ocfriendcount: number;
		/** Lookup for Twitter Handle entity. */
		msdyn_octwitterhandleid: string;
		/** The phone number of the social profile. */
		msdyn_phonenumber: string;
		/** Link to the Customer's Social Channel Profile image. */
		msdyn_profileimagelink: string;
		/** Source Id field of social profile entity for Apple Business Messages channel. */
		msdyn_sourceid: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the contact. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the contact. */
		readonly OwningUser: string;
		/** Shows the display name of the customer on this social profile. */
		ProfileFullName: string;
		/** Shows the customer that this social profile belongs to. */
		ProfileLink: string;
		/** Shows the name of the social profile on the corresponding social channel. */
		ProfileName: string;
		/** Unique Identifier of the social profile name. */
		SocialProfileId: string;
		/** Status of the Social Profile */
		StateCode: OptionSet.SocialProfile.StateCode;
		/** Reason for the status of the Social Profile */
		StatusCode: OptionSet.SocialProfile.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Unique ID of the Profile ID */
		UniqueProfileID: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the social profile. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Identifies if the social profile has been blocked. */
			readonly Blocked: string;
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			readonly Community: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the customer that this social profile belongs to. */
			readonly customerid_account: string;
			/** Shows the customer that this social profile belongs to. */
			readonly customerid_contact: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows the score that determines the online social influence of the social profile. */
			readonly InfluenceScore: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Flag specifying whether Customer has opted out of getting messages using this SP. */
			readonly msdyn_customeroptout: string;
			/** Customer's Followers on the Social channel. */
			readonly msdyn_ocfollowercount: string;
			/** Customer's followings on the Social channel */
			readonly msdyn_ocfollowingcount: string;
			/** Customer's Friend count on the Social Channel */
			readonly msdyn_ocfriendcount: string;
			/** Lookup for Twitter Handle entity. */
			readonly msdyn_octwitterhandleid: string;
			/** The phone number of the social profile. */
			readonly msdyn_phonenumber: string;
			/** Link to the Customer's Social Channel Profile image. */
			readonly msdyn_profileimagelink: string;
			/** Source Id field of social profile entity for Apple Business Messages channel. */
			readonly msdyn_sourceid: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the contact. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the contact. */
			readonly OwningUser: string;
			/** Shows the display name of the customer on this social profile. */
			readonly ProfileFullName: string;
			/** Shows the customer that this social profile belongs to. */
			readonly ProfileLink: string;
			/** Shows the name of the social profile on the corresponding social channel. */
			readonly ProfileName: string;
			/** Unique Identifier of the social profile name. */
			readonly SocialProfileId: string;
			/** Status of the Social Profile */
			readonly StateCode: string;
			/** Reason for the status of the Social Profile */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Unique ID of the Profile ID */
			readonly UniqueProfileID: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the social profile. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SocialProfile {
		enum Community {
			/** 16 */
			Apple_Messages_For_Business,
			/** 5 */
			Cortana,
			/** 6 */
			Direct_Line,
			/** 8 */
			Direct_Line_Speech,
			/** 9 */
			Email,
			/** 1 */
			Facebook,
			/** 17 */
			Googles_Business_Messages,
			/** 10 */
			GroupMe,
			/** 11 */
			Kik,
			/** 3 */
			Line,
			/** 7 */
			Microsoft_Teams,
			/** 0 */
			Other,
			/** 13 */
			Skype,
			/** 14 */
			Slack,
			/** 12 */
			Telegram,
			/** 2 */
			Twitter,
			/** 4 */
			Wechat,
			/** 15 */
			WhatsApp
		}
		enum CustomerIdType {
		}
		enum OwnerIdType {
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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