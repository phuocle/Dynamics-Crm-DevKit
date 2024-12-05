//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_marketingemailtestsend_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity */
			msdyncrm_subject: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_marketingemailtestsend_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_Appointments: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_Emails: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemailtestsend_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_marketingemailtestsend_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingemailtestsend_Information */
		Body: DevKit.Formmsdyncrm_marketingemailtestsend_Information.Body;
		/** The Navigation of form msdyncrm_marketingemailtestsend_Information */
		Navigation: DevKit.Formmsdyncrm_marketingemailtestsend_Information.Navigation;
		/** The SidePanes of form msdyncrm_marketingemailtestsend_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_marketingemailtestsend_New_Form {
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
			msdyncrm_abtestid: DevKit.Controls.String;
			msdyncrm_abtestvariantid: DevKit.Controls.String;
			msdyncrm_emailid: DevKit.Controls.String;
			msdyncrm_testcontactid: DevKit.Controls.Lookup;
			msdyncrm_testcontentsettingsid: DevKit.Controls.Lookup;
			msdyncrm_testsendemailaddress: DevKit.Controls.String;
		}
	}
	class Formmsdyncrm_marketingemailtestsend_New_Form extends DevKit.IForm {
		/**
		* New form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingemailtestsend_New_Form */
		Body: DevKit.Formmsdyncrm_marketingemailtestsend_New_Form.Body;
	}
	class msdyncrm_marketingemailtestsendApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingemailtestsendApi
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
		msdyncrm_abtestid: string;
		msdyncrm_abtestvariantid: string;
		msdyncrm_email_contenttype: OptionSet.msdyncrm_marketingemailtestsend.msdyncrm_email_contenttype;
		msdyncrm_emailbody: string;
		msdyncrm_emailid: string;
		msdyncrm_entityname: string;
		msdyncrm_from: string;
		msdyncrm_fromexpression: string;
		msdyncrm_htmlpart: string;
		msdyncrm_keywords: string;
		/** Unique ID for entity instances */
		msdyncrm_marketingemailtestsendId: string;
		msdyncrm_marketinglistid: string;
		msdyncrm_messagedesignation: OptionSet.msdyncrm_marketingemailtestsend.msdyncrm_messagedesignation;
		msdyncrm_messagetype: number;
		msdyncrm_replytoexpression: string;
		/** The name of the custom entity */
		msdyncrm_subject: string;
		msdyncrm_testcontactid: string;
		msdyncrm_testcontentsettingsid: string;
		msdyncrm_testsendemailaddress: string;
		msdyncrm_textpart: string;
		msdyncrm_toexpression: string;
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
		/** Status of the marketing email test send */
		statecode: OptionSet.msdyncrm_marketingemailtestsend.statecode;
		/** Marketing email test-send status reason */
		statuscode: OptionSet.msdyncrm_marketingemailtestsend.statuscode;
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
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_abtestid: string;
			readonly msdyncrm_abtestvariantid: string;
			readonly msdyncrm_email_contenttype: string;
			readonly msdyncrm_emailbody: string;
			readonly msdyncrm_emailid: string;
			readonly msdyncrm_entityname: string;
			readonly msdyncrm_from: string;
			readonly msdyncrm_fromexpression: string;
			readonly msdyncrm_htmlpart: string;
			readonly msdyncrm_keywords: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingemailtestsendId: string;
			readonly msdyncrm_marketinglistid: string;
			readonly msdyncrm_messagedesignation: string;
			readonly msdyncrm_messagetype: string;
			readonly msdyncrm_replytoexpression: string;
			/** The name of the custom entity */
			readonly msdyncrm_subject: string;
			readonly msdyncrm_testcontactid: string;
			readonly msdyncrm_testcontentsettingsid: string;
			readonly msdyncrm_testsendemailaddress: string;
			readonly msdyncrm_textpart: string;
			readonly msdyncrm_toexpression: string;
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
			/** Status of the marketing email test send */
			readonly statecode: string;
			/** Marketing email test-send status reason */
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
	namespace msdyncrm_marketingemailtestsend {
		enum msdyncrm_email_contenttype {
			/** 1 */
			Confirmation_request,
			/** 0 */
			Default
		}
		enum msdyncrm_messagedesignation {
			/** 0 */
			Commercial,
			/** 1 */
			Transactional
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