//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormForm_settings_main_form {
		interface tab_audience_tab_Sections {
			audience_settings_section: DevKit.Controls.Section;
			target_audience_section: DevKit.Controls.Section;
		}
		interface tab_general_tab_body_Sections {
			general_section: DevKit.Controls.Section;
			post_submission_section: DevKit.Controls.Section;
		}
		interface tab_lead_contact_mapping_tab_Sections {
			lead_contact_mapping: DevKit.Controls.Section;
		}
		interface tab_audience_tab extends DevKit.Controls.ITab {
			Section: tab_audience_tab_Sections;
		}
		interface tab_general_tab_body extends DevKit.Controls.ITab {
			Section: tab_general_tab_body_Sections;
		}
		interface tab_lead_contact_mapping_tab extends DevKit.Controls.ITab {
			Section: tab_lead_contact_mapping_tab_Sections;
		}
		interface Tabs {
			audience_tab: tab_audience_tab;
			general_tab_body: tab_general_tab_body;
			lead_contact_mapping_tab: tab_lead_contact_mapping_tab;
		}
		interface Body {
			Tab: Tabs;
			lead_contact_mapping_ctrl: DevKit.Controls.ActionCards;
			msdynmkt_defaultformtargetaudience: DevKit.Controls.Lookup;
			msdynmkt_Doubleoptin: DevKit.Controls.Boolean;
			msdynmkt_Errornotification: DevKit.Controls.String;
			msdynmkt_formtype: DevKit.Controls.OptionSet;
			msdynmkt_Name: DevKit.Controls.String;
			msdynmkt_Postsubmissionactions: DevKit.Controls.OptionSet;
			msdynmkt_Prefillfields: DevKit.Controls.Boolean;
			msdynmkt_Redirectaftersubmission: DevKit.Controls.Boolean;
			msdynmkt_Thankyouemail: DevKit.Controls.Boolean;
			msdynmkt_Thankyounotification: DevKit.Controls.String;
		}
		interface Navigation {
			msdynmkt_formtargetaudience_formsetting: DevKit.Controls.NavigationItem
		}
		interface Grid {
			audience_settings_ctrl: DevKit.Controls.Grid;
		}
	}
	class FormForm_settings_main_form extends DevKit.IForm {
		/**
		* Form settings main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Form_settings_main_form */
		Body: DevKit.FormForm_settings_main_form.Body;
		/** The Navigation of form Form_settings_main_form */
		Navigation: DevKit.FormForm_settings_main_form.Navigation;
		/** The Grid of form Form_settings_main_form */
		Grid: DevKit.FormForm_settings_main_form.Grid;
		/** The SidePanes of form Form_settings_main_form */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_formsettingApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_formsettingApi
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
		msdynmkt_createanewcontact_choice: OptionSet.msdynmkt_formsetting.msdynmkt_createanewcontact_choice;
		msdynmkt_defaultformtargetaudience: string;
		msdynmkt_defaulttargetaudience: OptionSet.msdynmkt_formsetting.msdynmkt_defaulttargetaudience;
		msdynmkt_Doubleoptin: boolean;
		msdynmkt_Duplicaterecords: OptionSet.msdynmkt_formsetting.msdynmkt_Duplicaterecords;
		msdynmkt_Errornotification: string;
		/** Unique identifier for entity instances */
		msdynmkt_formsettingId: string;
		msdynmkt_formtype: OptionSet.msdynmkt_formsetting.msdynmkt_formtype;
		msdynmkt_Howtomatchexistingcontact: OptionSet.msdynmkt_formsetting.msdynmkt_Howtomatchexistingcontact;
		msdynmkt_linkedleadtoparentcontact_choice: OptionSet.msdynmkt_formsetting.msdynmkt_linkedleadtoparentcontact_choice;
		msdynmkt_matchexistingcontact_choice: OptionSet.msdynmkt_formsetting.msdynmkt_matchexistingcontact_choice;
		msdynmkt_Name: string;
		msdynmkt_parentcontactwithsubmitteddata_choice: boolean;
		msdynmkt_Postsubmissionactions: OptionSet.msdynmkt_formsetting.msdynmkt_Postsubmissionactions;
		msdynmkt_Prefillfields: boolean;
		msdynmkt_Redirectaftersubmission: boolean;
		msdynmkt_Thankyouemail: boolean;
		msdynmkt_Thankyounotification: string;
		msdynmkt_Updatematchedcontactwithsubmitteddata: OptionSet.msdynmkt_formsetting.msdynmkt_Updatematchedcontactwithsubmitteddata;
		msdynmkt_updateparentcontactwithsubmitteddata_choi: OptionSet.msdynmkt_formsetting.msdynmkt_updateparentcontactwithsubmitteddata_choi;
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
		/** Status of the form settings */
		statecode: OptionSet.msdynmkt_formsetting.statecode;
		/** Reason for the status of the form settings */
		statuscode: OptionSet.msdynmkt_formsetting.statuscode;
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
			readonly msdynmkt_createanewcontact_choice: string;
			readonly msdynmkt_defaultformtargetaudience: string;
			readonly msdynmkt_defaulttargetaudience: string;
			readonly msdynmkt_Doubleoptin: string;
			readonly msdynmkt_Duplicaterecords: string;
			readonly msdynmkt_Errornotification: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_formsettingId: string;
			readonly msdynmkt_formtype: string;
			readonly msdynmkt_Howtomatchexistingcontact: string;
			readonly msdynmkt_linkedleadtoparentcontact_choice: string;
			readonly msdynmkt_matchexistingcontact_choice: string;
			readonly msdynmkt_Name: string;
			readonly msdynmkt_parentcontactwithsubmitteddata_choice: string;
			readonly msdynmkt_Postsubmissionactions: string;
			readonly msdynmkt_Prefillfields: string;
			readonly msdynmkt_Redirectaftersubmission: string;
			readonly msdynmkt_Thankyouemail: string;
			readonly msdynmkt_Thankyounotification: string;
			readonly msdynmkt_Updatematchedcontactwithsubmitteddata: string;
			readonly msdynmkt_updateparentcontactwithsubmitteddata_choi: string;
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
			/** Status of the form settings */
			readonly statecode: string;
			/** Reason for the status of the form settings */
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
	namespace msdynmkt_formsetting {
		enum msdynmkt_createanewcontact_choice {
			/** 100000001 */
			Contact,
			/** 100000000 */
			Lead,
			/** 100000002 */
			Lead_Contact
		}
		enum msdynmkt_defaulttargetaudience {
			/** 100000001 */
			Contact,
			/** 100000000 */
			Lead,
			/** 100000002 */
			Lead_Contact
		}
		enum msdynmkt_Duplicaterecords {
			/** 100000001 */
			Always_create_new_record,
			/** 100000000 */
			Match_existing_contact_using_email
		}
		enum msdynmkt_formtype {
			/** 534120000 */
			Marketing_form,
			/** 534120001 */
			Registration_form
		}
		enum msdynmkt_Howtomatchexistingcontact {
			/** 100000001 */
			Always_create_new_record,
			/** 100000000 */
			Match_existing_contact_using_email
		}
		enum msdynmkt_linkedleadtoparentcontact_choice {
			/** 100000001 */
			Contact,
			/** 100000000 */
			Lead,
			/** 100000002 */
			Lead_Contact
		}
		enum msdynmkt_matchexistingcontact_choice {
			/** 100000001 */
			Always_create_new_record,
			/** 100000000 */
			Match_existing_contact_using_email
		}
		enum msdynmkt_Postsubmissionactions {
			/** 100000000 */
			Thank_you_message
		}
		enum msdynmkt_Updatematchedcontactwithsubmitteddata {
			/** 100000001 */
			Contact,
			/** 100000000 */
			Lead,
			/** 100000002 */
			Lead_Contact
		}
		enum msdynmkt_updateparentcontactwithsubmitteddata_choi {
			/** 100000001 */
			Contact,
			/** 100000000 */
			Lead,
			/** 100000002 */
			Lead_Contact
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