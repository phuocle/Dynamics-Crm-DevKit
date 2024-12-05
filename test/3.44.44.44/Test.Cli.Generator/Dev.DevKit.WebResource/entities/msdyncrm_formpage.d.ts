//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_formpage_Information {
		interface Tabs {
		}
		interface Body {
			msdyncrm_ConfirmationMessage: DevKit.Controls.String;
			msdyncrm_errorImageUrl: DevKit.Controls.String;
			msdyncrm_ErrorMessage: DevKit.Controls.String;
			msdyncrm_externalformhosting_iframe: DevKit.Controls.ActionCards;
			/** External Hosting Format */
			msdyncrm_externalhostingformat: DevKit.Controls.OptionSet;
			/** External hosting format description */
			msdyncrm_externalhostingformat_description: DevKit.Controls.String;
			msdyncrm_javascriptcode_compound: DevKit.Controls.ActionCards;
			msdyncrm_LimitExceededMessage: DevKit.Controls.String;
			/** Usage of a marketing form on a marketing page. */
			msdyncrm_marketingformId: DevKit.Controls.Lookup;
			/** The marketing page contains a marketing form. */
			msdyncrm_marketingpageid: DevKit.Controls.Lookup;
			/** Name of the marketing form page */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_RedirectURL: DevKit.Controls.String;
			msdyncrm_successImageUrl: DevKit.Controls.String;
			/** The website contains a marketing form */
			msdyncrm_websiteid: DevKit.Controls.Lookup;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
		interface quickForm_MarketingFormQuickViewForm_Body {
		}
		interface quickForm_MarketingFormQuickViewForm extends DevKit.Controls.IQuickView {
			Body: quickForm_MarketingFormQuickViewForm_Body;
		}
		interface QuickForm {
			MarketingFormQuickViewForm: quickForm_MarketingFormQuickViewForm;
		}
	}
	class Formmsdyncrm_formpage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_formpage_Information */
		Body: DevKit.Formmsdyncrm_formpage_Information.Body;
		/** The Navigation of form msdyncrm_formpage_Information */
		Navigation: DevKit.Formmsdyncrm_formpage_Information.Navigation;
		/** The QuickForm of form msdyncrm_formpage_Information */
		QuickForm: DevKit.Formmsdyncrm_formpage_Information.QuickForm;
		/** The SidePanes of form msdyncrm_formpage_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_formpage_Information2 {
		interface Tabs {
		}
		interface Body {
			msdyncrm_ConfirmationMessage: DevKit.Controls.String;
			msdyncrm_ErrorMessage: DevKit.Controls.String;
			msdyncrm_LimitExceededMessage: DevKit.Controls.String;
			/** Usage of a marketing form on a marketing page. */
			msdyncrm_marketingformId: DevKit.Controls.Lookup;
			/** Name of the marketing form page */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_RedirectURL: DevKit.Controls.String;
			/** The website contains a marketing form */
			msdyncrm_websiteid: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyncrm_formpage_Information2 extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_formpage_Information2 */
		Body: DevKit.Formmsdyncrm_formpage_Information2.Body;
	}
	class msdyncrm_formpageApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_formpageApi
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
		msdyncrm_ConfirmationMessage: string;
		msdyncrm_errorImageUrl: string;
		msdyncrm_ErrorMessage: string;
		/** Usage of a Marketing Form on an Event. */
		msdyncrm_eventId: string;
		msdyncrm_externalformhosting_iframe: string;
		/** External Hosting Format */
		msdyncrm_externalhostingformat: OptionSet.msdyncrm_formpage.msdyncrm_externalhostingformat;
		/** External hosting format description */
		msdyncrm_externalhostingformat_description: string;
		/** Unique ID for entity instances */
		msdyncrm_formpageId: string;
		msdyncrm_javascriptcode: string;
		msdyncrm_javascriptcode_compound: string;
		msdyncrm_LimitExceededMessage: string;
		/** Usage of a marketing form on a marketing page. */
		msdyncrm_marketingformId: string;
		/** The marketing page contains a marketing form. */
		msdyncrm_marketingpageid: string;
		/** Name of the marketing form page */
		msdyncrm_name: string;
		msdyncrm_RedirectURL: string;
		msdyncrm_successImageUrl: string;
		/** The website contains a marketing form */
		msdyncrm_websiteid: string;
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
		/** Status of the form page */
		statecode: OptionSet.msdyncrm_formpage.statecode;
		/** Form page status reason */
		statuscode: OptionSet.msdyncrm_formpage.statuscode;
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
			readonly msdyncrm_ConfirmationMessage: string;
			readonly msdyncrm_errorImageUrl: string;
			readonly msdyncrm_ErrorMessage: string;
			/** Usage of a Marketing Form on an Event. */
			readonly msdyncrm_eventId: string;
			readonly msdyncrm_externalformhosting_iframe: string;
			/** External Hosting Format */
			readonly msdyncrm_externalhostingformat: string;
			/** External hosting format description */
			readonly msdyncrm_externalhostingformat_description: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_formpageId: string;
			readonly msdyncrm_javascriptcode: string;
			readonly msdyncrm_javascriptcode_compound: string;
			readonly msdyncrm_LimitExceededMessage: string;
			/** Usage of a marketing form on a marketing page. */
			readonly msdyncrm_marketingformId: string;
			/** The marketing page contains a marketing form. */
			readonly msdyncrm_marketingpageid: string;
			/** Name of the marketing form page */
			readonly msdyncrm_name: string;
			readonly msdyncrm_RedirectURL: string;
			readonly msdyncrm_successImageUrl: string;
			/** The website contains a marketing form */
			readonly msdyncrm_websiteid: string;
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
			/** Status of the form page */
			readonly statecode: string;
			/** Form page status reason */
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
	namespace msdyncrm_formpage {
		enum msdyncrm_externalhostingformat {
			/** 192350000 */
			I_want_to_host_it_as_a_script,
			/** 192350001 */
			I_want_to_host_it_as_an_iframe
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