﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormActivity_Form {
		interface tab_data_tab_Sections {
			data_tab_section: DevKit.Controls.Section;
		}
		interface tab_main_tab_Sections {
			_BE1EF7ED_4DD6_4F60_BFAE_5A265D7CA548_SECTION_2: DevKit.Controls.Section;
			_C205D9FB_2B88_444B_BA74_F5E654BB17AF: DevKit.Controls.Section;
			description_section: DevKit.Controls.Section;
			workflowdetails_section: DevKit.Controls.Section;
		}
		interface tab_data_tab extends DevKit.Controls.ITab {
			Section: tab_data_tab_Sections;
		}
		interface tab_main_tab extends DevKit.Controls.ITab {
			Section: tab_main_tab_Sections;
		}
		interface Tabs {
			data_tab: tab_data_tab;
			main_tab: tab_main_tab;
		}
		interface Body {
			Tab: Tabs;
			insights_data: DevKit.Controls.ActionCards;
			msdyncrm_description: DevKit.Controls.String;
			msdyncrm_description1: DevKit.Controls.String;
			msdyncrm_EntityTarget: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyncrm_name: DevKit.Controls.String;
			/** Unique identifier for Process associated with launchworkflowactivity. */
			msdyncrm_workflowid: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormActivity_Form extends DevKit.IForm {
		/**
		* Activity Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Activity_Form */
		Body: DevKit.FormActivity_Form.Body;
		/** The Navigation of form Activity_Form */
		Navigation: DevKit.FormActivity_Form.Navigation;
		/** The SidePanes of form Activity_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_launchworkflowactivityApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_launchworkflowactivityApi
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
		msdyncrm_description: string;
		msdyncrm_EntityTarget: OptionSet.msdyncrm_launchworkflowactivity.msdyncrm_EntityTarget;
		msdyncrm_insightsdata: string;
		/** Unique identifier for entity instances */
		msdyncrm_launchworkflowactivityId: string;
		/** The name of the custom entity. */
		msdyncrm_name: string;
		/** Unique identifier for Process associated with launchworkflowactivity. */
		msdyncrm_workflowid: string;
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
		/** Status of the launchworkflowactivity */
		statecode: OptionSet.msdyncrm_launchworkflowactivity.statecode;
		/** Reason for the status of the launchworkflowactivity */
		statuscode: OptionSet.msdyncrm_launchworkflowactivity.statuscode;
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
			readonly msdyncrm_description: string;
			readonly msdyncrm_EntityTarget: string;
			readonly msdyncrm_insightsdata: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_launchworkflowactivityId: string;
			/** The name of the custom entity. */
			readonly msdyncrm_name: string;
			/** Unique identifier for Process associated with launchworkflowactivity. */
			readonly msdyncrm_workflowid: string;
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
			/** Status of the launchworkflowactivity */
			readonly statecode: string;
			/** Reason for the status of the launchworkflowactivity */
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
	namespace msdyncrm_launchworkflowactivity {
		enum msdyncrm_EntityTarget {
			/** 192350000 */
			Account,
			/** 192350001 */
			Contact
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