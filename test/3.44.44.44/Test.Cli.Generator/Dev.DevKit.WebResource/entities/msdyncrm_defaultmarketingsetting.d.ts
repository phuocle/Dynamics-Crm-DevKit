//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_defaultmarketingsetting_Information {
		interface tab_Bypass_Email_Deduplication_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_CustomerJourney_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_DoubleOptIn_Sections {
			DoubleOptIn_section_2: DevKit.Controls.Section;
			DoubleOptIn_section_3: DevKit.Controls.Section;
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_MarketingEmail_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_Bypass_Email_Deduplication extends DevKit.Controls.ITab {
			Section: tab_Bypass_Email_Deduplication_Sections;
		}
		interface tab_CustomerJourney extends DevKit.Controls.ITab {
			Section: tab_CustomerJourney_Sections;
		}
		interface tab_DoubleOptIn extends DevKit.Controls.ITab {
			Section: tab_DoubleOptIn_Sections;
		}
		interface tab_MarketingEmail extends DevKit.Controls.ITab {
			Section: tab_MarketingEmail_Sections;
		}
		interface Tabs {
			Bypass_Email_Deduplication: tab_Bypass_Email_Deduplication;
			CustomerJourney: tab_CustomerJourney;
			DoubleOptIn: tab_DoubleOptIn;
			MarketingEmail: tab_MarketingEmail;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Bypass email deduplication (if this is turned on multiple emails can be send to one email address) */
			msdyncrm_bypassemaildeduplication: DevKit.Controls.Boolean;
			/** Select the confirmation message to send contacts requesting to increase their consent level. */
			msdyncrm_consentconfirmationmessage: DevKit.Controls.Lookup;
			msdyncrm_Default: DevKit.Controls.Boolean;
			msdyncrm_DefaultCntntSettings: DevKit.Controls.Lookup;
			/** Provide marketing emails with default from email address. Especially in cases, when all marketers are sending marketing emails from a common default email. */
			msdyncrm_defaultemailfromemail: DevKit.Controls.String;
			/** Provide marketing emails with default from email address. Especially in cases, when all marketers are sending marketing emails from a common default email. */
			msdyncrm_defaultemailfromname: DevKit.Controls.String;
			/** Select a marketing page to show contacts after they confirm an increase of their consent level */
			msdyncrm_defaultmarketingthankyoupage: DevKit.Controls.Lookup;
			/** Select a marketing page to show contacts after they confirm a new subscription */
			msdyncrm_defaultmarketingthankyoupagedoi: DevKit.Controls.Lookup;
			/** Provide the Marketing Page with your default thank-you message. Contacts are redirected to that page after they click the confirm button in a confirmation-request message. */
			msdyncrm_defaultmarketingthankyouurl: DevKit.Controls.String;
			/** Provide the url with your default thank-you message. Contacts are redirected to that page after they click the confirm button in a confirmation-request message for newsletter. */
			msdyncrm_defaultmarketingthankyouurldoi: DevKit.Controls.String;
			msdyncrm_DefaultSetupDomain: DevKit.Controls.Lookup;
			msdyncrm_DefaultTestContact: DevKit.Controls.Lookup;
			/** Default content settings value */
			msdyncrm_defaulttimezone: DevKit.Controls.Integer;
			/** Select the content settings to use for confirmation-request messages. */
			msdyncrm_doubleoptincontentsettings: DevKit.Controls.Lookup;
			msdyncrm_enabledoubleoptin: DevKit.Controls.Boolean;
			msdyncrm_EnableLitmusIntegration: DevKit.Controls.Boolean;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Select the confirmation message to send contacts requesting to join a new mailing list. */
			msdyncrm_subscriptionoptinmessage: DevKit.Controls.Lookup;
			msdyncrm_thankyoupagesource: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_LitmusTermsStatement: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_defaultmarketingsetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_defaultmarketingsetting_Information */
		Body: DevKit.Formmsdyncrm_defaultmarketingsetting_Information.Body;
		/** The Navigation of form msdyncrm_defaultmarketingsetting_Information */
		Navigation: DevKit.Formmsdyncrm_defaultmarketingsetting_Information.Navigation;
		/** The SidePanes of form msdyncrm_defaultmarketingsetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_defaultmarketingsettingApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_defaultmarketingsettingApi
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
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		/** Bypass email deduplication (if this is turned on multiple emails can be send to one email address) */
		msdyncrm_bypassemaildeduplication: boolean;
		/** Select the confirmation message to send contacts requesting to increase their consent level. */
		msdyncrm_consentconfirmationmessage: string;
		msdyncrm_Default: boolean;
		msdyncrm_DefaultCntntSettings: string;
		/** Provide marketing emails with default from email address. Especially in cases, when all marketers are sending marketing emails from a common default email. */
		msdyncrm_defaultemailfromemail: string;
		/** Provide marketing emails with default from email address. Especially in cases, when all marketers are sending marketing emails from a common default email. */
		msdyncrm_defaultemailfromname: string;
		/** Unique ID for entity instances */
		msdyncrm_defaultmarketingsettingId: string;
		/** Select a marketing page to show contacts after they confirm an increase of their consent level */
		msdyncrm_defaultmarketingthankyoupage: string;
		/** Select a marketing page to show contacts after they confirm a new subscription */
		msdyncrm_defaultmarketingthankyoupagedoi: string;
		/** Provide the Marketing Page with your default thank-you message. Contacts are redirected to that page after they click the confirm button in a confirmation-request message. */
		msdyncrm_defaultmarketingthankyouurl: string;
		/** Provide the url with your default thank-you message. Contacts are redirected to that page after they click the confirm button in a confirmation-request message for newsletter. */
		msdyncrm_defaultmarketingthankyouurldoi: string;
		msdyncrm_DefaultSetupDomain: string;
		msdyncrm_DefaultTestContact: string;
		/** Default content settings value */
		msdyncrm_defaulttimezone: number;
		/** Select the content settings to use for confirmation-request messages. */
		msdyncrm_doubleoptincontentsettings: string;
		msdyncrm_enabledoubleoptin: boolean;
		msdyncrm_EnableLitmusIntegration: boolean;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** Select the confirmation message to send contacts requesting to join a new mailing list. */
		msdyncrm_subscriptionoptinmessage: string;
		msdyncrm_thankyoupagesource: OptionSet.msdyncrm_defaultmarketingsetting.msdyncrm_thankyoupagesource;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the default settings */
		statecode: OptionSet.msdyncrm_defaultmarketingsetting.statecode;
		/** Reason for the status of the default settings */
		statuscode: OptionSet.msdyncrm_defaultmarketingsetting.statuscode;
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
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			/** Bypass email deduplication (if this is turned on multiple emails can be send to one email address) */
			readonly msdyncrm_bypassemaildeduplication: string;
			/** Select the confirmation message to send contacts requesting to increase their consent level. */
			readonly msdyncrm_consentconfirmationmessage: string;
			readonly msdyncrm_Default: string;
			readonly msdyncrm_DefaultCntntSettings: string;
			/** Provide marketing emails with default from email address. Especially in cases, when all marketers are sending marketing emails from a common default email. */
			readonly msdyncrm_defaultemailfromemail: string;
			/** Provide marketing emails with default from email address. Especially in cases, when all marketers are sending marketing emails from a common default email. */
			readonly msdyncrm_defaultemailfromname: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_defaultmarketingsettingId: string;
			/** Select a marketing page to show contacts after they confirm an increase of their consent level */
			readonly msdyncrm_defaultmarketingthankyoupage: string;
			/** Select a marketing page to show contacts after they confirm a new subscription */
			readonly msdyncrm_defaultmarketingthankyoupagedoi: string;
			/** Provide the Marketing Page with your default thank-you message. Contacts are redirected to that page after they click the confirm button in a confirmation-request message. */
			readonly msdyncrm_defaultmarketingthankyouurl: string;
			/** Provide the url with your default thank-you message. Contacts are redirected to that page after they click the confirm button in a confirmation-request message for newsletter. */
			readonly msdyncrm_defaultmarketingthankyouurldoi: string;
			readonly msdyncrm_DefaultSetupDomain: string;
			readonly msdyncrm_DefaultTestContact: string;
			/** Default content settings value */
			readonly msdyncrm_defaulttimezone: string;
			/** Select the content settings to use for confirmation-request messages. */
			readonly msdyncrm_doubleoptincontentsettings: string;
			readonly msdyncrm_enabledoubleoptin: string;
			readonly msdyncrm_EnableLitmusIntegration: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** Select the confirmation message to send contacts requesting to join a new mailing list. */
			readonly msdyncrm_subscriptionoptinmessage: string;
			readonly msdyncrm_thankyoupagesource: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the default settings */
			readonly statecode: string;
			/** Reason for the status of the default settings */
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
	namespace msdyncrm_defaultmarketingsetting {
		enum msdyncrm_thankyoupagesource {
			/** 100000001 */
			No,
			/** 100000000 */
			Yes
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