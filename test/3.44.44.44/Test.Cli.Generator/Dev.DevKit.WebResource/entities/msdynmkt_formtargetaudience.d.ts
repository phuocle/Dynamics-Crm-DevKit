//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_formtargetaudience_Information {
		interface tab_general_Sections {
			contact_rules: DevKit.Controls.Section;
			general: DevKit.Controls.Section;
			lead_rules: DevKit.Controls.Section;
			parent_contact_rules: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_contactmatchingrule: DevKit.Controls.Lookup;
			msdynmkt_contactmatchingrule1: DevKit.Controls.Lookup;
			msdynmkt_createcontact: DevKit.Controls.OptionSet;
			msdynmkt_createcontact1: DevKit.Controls.OptionSet;
			msdynmkt_createlead: DevKit.Controls.OptionSet;
			msdynmkt_description: DevKit.Controls.String;
			/** Unique identifier for form settings associated with target audience. */
			msdynmkt_formsettingid: DevKit.Controls.Lookup;
			msdynmkt_formtype: DevKit.Controls.OptionSet;
			msdynmkt_handlingduplicatecontacts: DevKit.Controls.OptionSet;
			msdynmkt_handlingduplicatecontacts1: DevKit.Controls.OptionSet;
			msdynmkt_handlingduplicateleads: DevKit.Controls.OptionSet;
			msdynmkt_leadmatchingrule: DevKit.Controls.Lookup;
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_targetentity: DevKit.Controls.OptionSet;
			msdynmkt_updatecontact: DevKit.Controls.OptionSet;
			msdynmkt_updatecontact1: DevKit.Controls.OptionSet;
			msdynmkt_updatelead: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_formsetting_targetaudience_msdynmkt_formtargetaudience: DevKit.Controls.NavigationItem,
			msdynmkt_marketingform_targetaudience_msdynmkt_formtargetaudience: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_formtargetaudience_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_formtargetaudience_Information */
		Body: DevKit.Formmsdynmkt_formtargetaudience_Information.Body;
		/** The Navigation of form msdynmkt_formtargetaudience_Information */
		Navigation: DevKit.Formmsdynmkt_formtargetaudience_Information.Navigation;
		/** The SidePanes of form msdynmkt_formtargetaudience_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_formtargetaudienceApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_formtargetaudienceApi
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
		msdynmkt_contactmatchingrule: string;
		msdynmkt_createcontact: OptionSet.msdynmkt_formtargetaudience.msdynmkt_createcontact;
		msdynmkt_createlead: OptionSet.msdynmkt_formtargetaudience.msdynmkt_createlead;
		msdynmkt_description: string;
		/** Unique identifier for form settings associated with target audience. */
		msdynmkt_formsettingid: string;
		/** Unique identifier for entity instances */
		msdynmkt_formtargetaudienceId: string;
		msdynmkt_formtype: OptionSet.msdynmkt_formtargetaudience.msdynmkt_formtype;
		msdynmkt_handlingduplicatecontacts: OptionSet.msdynmkt_formtargetaudience.msdynmkt_handlingduplicatecontacts;
		msdynmkt_handlingduplicateleads: OptionSet.msdynmkt_formtargetaudience.msdynmkt_handlingduplicateleads;
		msdynmkt_leadmatchingrule: string;
		msdynmkt_name: string;
		msdynmkt_targetentity: OptionSet.msdynmkt_formtargetaudience.msdynmkt_targetentity;
		msdynmkt_updatecontact: OptionSet.msdynmkt_formtargetaudience.msdynmkt_updatecontact;
		msdynmkt_updatelead: OptionSet.msdynmkt_formtargetaudience.msdynmkt_updatelead;
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
		/** Status of the audience settings */
		statecode: OptionSet.msdynmkt_formtargetaudience.statecode;
		/** Reason for the status of the audience settings */
		statuscode: OptionSet.msdynmkt_formtargetaudience.statuscode;
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
			readonly msdynmkt_contactmatchingrule: string;
			readonly msdynmkt_createcontact: string;
			readonly msdynmkt_createlead: string;
			readonly msdynmkt_description: string;
			/** Unique identifier for form settings associated with target audience. */
			readonly msdynmkt_formsettingid: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_formtargetaudienceId: string;
			readonly msdynmkt_formtype: string;
			readonly msdynmkt_handlingduplicatecontacts: string;
			readonly msdynmkt_handlingduplicateleads: string;
			readonly msdynmkt_leadmatchingrule: string;
			readonly msdynmkt_name: string;
			readonly msdynmkt_targetentity: string;
			readonly msdynmkt_updatecontact: string;
			readonly msdynmkt_updatelead: string;
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
			/** Status of the audience settings */
			readonly statecode: string;
			/** Reason for the status of the audience settings */
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
	namespace msdynmkt_formtargetaudience {
		enum msdynmkt_createcontact {
			/** 810180001 */
			No,
			/** 810180000 */
			Yes
		}
		enum msdynmkt_createlead {
			/** 810180001 */
			No,
			/** 810180000 */
			Yes
		}
		enum msdynmkt_formtype {
			/** 534120000 */
			Marketing_form,
			/** 534120001 */
			Registration_form
		}
		enum msdynmkt_handlingduplicatecontacts {
			/** 100000001 */
			Always_create_new_contact,
			/** 100000000 */
			Use_a_rule_to_match_an_existing_contact
		}
		enum msdynmkt_handlingduplicateleads {
			/** 100000001 */
			Always_create_new_lead,
			/** 100000000 */
			Use_a_rule_to_match_an_existing_lead
		}
		enum msdynmkt_targetentity {
			/** 100000001 */
			Contact,
			/** 100000000 */
			Lead,
			/** 100000002 */
			Lead_Contact
		}
		enum msdynmkt_updatecontact {
			/** 810180001 */
			No,
			/** 810180000 */
			Yes
		}
		enum msdynmkt_updatelead {
			/** 810180001 */
			No,
			/** 810180000 */
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