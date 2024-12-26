//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSummary {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_Summary_Sections {
			null_section_3: DevKit.Controls.Section;
			topics: DevKit.Controls.Section;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			description: DevKit.Controls.ActionCards;
			description_communication: DevKit.Controls.ActionCards;
			description_email_communication: DevKit.Controls.ActionCards;
			description_tracking: DevKit.Controls.ActionCards;
			extended_form: DevKit.Controls.ActionCards;
			/** Enforcement model for custom channel. */
			msdynmkt_customenforcementmodel: DevKit.Controls.OptionSet;
			/** enforcement model of purpose */
			msdynmkt_enforcementmodel: DevKit.Controls.OptionSet;
			/** enforcement model of purpose */
			msdynmkt_enforcementmodel1: DevKit.Controls.OptionSet;
			/** LookUp for Extended Entities brought in by custom channels. */
			msdynmkt_extendedentityId: DevKit.Controls.Lookup;
			/** The name of the purpose */
			msdynmkt_name: DevKit.Controls.String;
			/** Enforcement model for SMS channel. */
			msdynmkt_smsenforcementmodel: DevKit.Controls.OptionSet;
			/** Purpose Type (Commerical, Transactional, Tracking) */
			msdynmkt_type: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_msdynmkt_compliancesettings4_TrackingCons: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_contactpointconsent4_purposeId_m: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_customchannelmessage_purpose_msdynmkt_purpose: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_purpose_msdynmkt_email_purpose: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_purpose_msdynmkt_emailtemplate_purpose: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_purpose_msdynmkt_topic: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_pushnotification_purpose_msdynmkt_purpose: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_sms_purpose_msdynmkt_purpose: DevKit.Controls.NavigationItem
		}
		interface Grid {
			topicgrid: DevKit.Controls.Grid;
		}
	}
	class FormSummary extends DevKit.IForm {
		/**
		* Summary [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Summary */
		Body: DevKit.FormSummary.Body;
		/** The Header section of form Summary */
		Header: DevKit.FormSummary.Header;
		/** The Navigation of form Summary */
		Navigation: DevKit.FormSummary.Navigation;
		/** The Grid of form Summary */
		Grid: DevKit.FormSummary.Grid;
		/** The SidePanes of form Summary */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPurpose_quick_create_form {
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
			msdynmkt_consentcompliancegroupcontrol: DevKit.Controls.ActionCards;
			/** UIOnly Compliance profile lookup */
			msdynmkt_uionlycomplianceprofilelookup: DevKit.Controls.Lookup;
			/** Purpose lookup */
			msdynmkt_uionlypurposelookup: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
	}
	class FormPurpose_quick_create_form extends DevKit.IForm {
		/**
		* Purpose quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purpose_quick_create_form */
		Body: DevKit.FormPurpose_quick_create_form.Body;
	}
	namespace FormPurpose_quick_create_form2 {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_1_section_2: DevKit.Controls.Section;
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
			description: DevKit.Controls.ActionCards;
			description_email: DevKit.Controls.ActionCards;
			/** Enforcement model for custom channel. */
			msdynmkt_customenforcementmodel: DevKit.Controls.OptionSet;
			/** enforcement model of purpose */
			msdynmkt_enforcementmodel: DevKit.Controls.OptionSet;
			/** The name of the purpose */
			msdynmkt_name: DevKit.Controls.String;
			/** Enforcement model for SMS channel. */
			msdynmkt_smsenforcementmodel: DevKit.Controls.OptionSet;
			/** Purpose Type (Commerical, Transactional, Tracking) */
			msdynmkt_type: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit1: DevKit.Controls.Lookup;
		}
	}
	class FormPurpose_quick_create_form2 extends DevKit.IForm {
		/**
		* Purpose quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purpose_quick_create_form2 */
		Body: DevKit.FormPurpose_quick_create_form2.Body;
	}
	class msdynmkt_purposeApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_purposeApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdynmkt_purpose.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Enforcement model for custom channel. */
		msdynmkt_customenforcementmodel: OptionSet.msdynmkt_purpose.msdynmkt_customenforcementmodel;
		/** the description of the purpose */
		msdynmkt_description: string;
		/** enforcement model of purpose */
		msdynmkt_enforcementmodel: OptionSet.msdynmkt_purpose.msdynmkt_enforcementmodel;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdynmkt_extendedentityId: string;
		/** The name of the purpose */
		msdynmkt_name: string;
		/** Unique identifier for entity instances */
		msdynmkt_purposeId: string;
		/** Enforcement model for SMS channel. */
		msdynmkt_smsenforcementmodel: OptionSet.msdynmkt_purpose.msdynmkt_smsenforcementmodel;
		/** Number of topics associated with this purpose */
		msdynmkt_topiccount: number;
		/** Purpose Type (Commerical, Transactional, Tracking) */
		msdynmkt_type: OptionSet.msdynmkt_purpose.msdynmkt_type;
		/** UIOnly Compliance profile lookup */
		msdynmkt_uionlycomplianceprofilelookup: string;
		/** Purpose lookup */
		msdynmkt_uionlypurposelookup: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Purpose */
		statecode: OptionSet.msdynmkt_purpose.statecode;
		/** Reason for the status of the Purpose */
		statuscode: OptionSet.msdynmkt_purpose.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Enforcement model for custom channel. */
			readonly msdynmkt_customenforcementmodel: string;
			/** the description of the purpose */
			readonly msdynmkt_description: string;
			/** enforcement model of purpose */
			readonly msdynmkt_enforcementmodel: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdynmkt_extendedentityId: string;
			/** The name of the purpose */
			readonly msdynmkt_name: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_purposeId: string;
			/** Enforcement model for SMS channel. */
			readonly msdynmkt_smsenforcementmodel: string;
			/** Number of topics associated with this purpose */
			readonly msdynmkt_topiccount: string;
			/** Purpose Type (Commerical, Transactional, Tracking) */
			readonly msdynmkt_type: string;
			/** UIOnly Compliance profile lookup */
			readonly msdynmkt_uionlycomplianceprofilelookup: string;
			/** Purpose lookup */
			readonly msdynmkt_uionlypurposelookup: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Purpose */
			readonly statecode: string;
			/** Reason for the status of the Purpose */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdynmkt_purpose {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdynmkt_customenforcementmodel {
			/** 534120002 */
			Disabled,
			/** 534120001 */
			Non_Restrictive,
			/** 534120000 */
			Restrictive
		}
		enum msdynmkt_enforcementmodel {
			/** 534120002 */
			Disabled,
			/** 534120001 */
			Non_Restrictive,
			/** 534120000 */
			Restrictive
		}
		enum msdynmkt_extendedentityIdType {
		}
		enum msdynmkt_smsenforcementmodel {
			/** 534120002 */
			Disabled,
			/** 534120001 */
			Non_Restrictive,
			/** 534120000 */
			Restrictive
		}
		enum msdynmkt_type {
			/** 534120000 */
			Commercial_Communication,
			/** 534120002 */
			Tracking,
			/** 534120001 */
			Transactional_Communication
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