//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_requirementgroup_Information {
		interface Tabs {
		}
		interface Body {
			/** Whether this offering is a template or not. */
			msdyn_istemplate: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Requirement Group Template Reference */
			msdyn_requirementgrouptemplateid: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_requirementgroup_requirementrelationship_requirementgroupid: DevKit.Controls.NavigationItem,
			nav_msdyn_requirementgroup_resourcerequirement_requirementgroupid: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ResourceRequirements: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_requirementgroup_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_requirementgroup_Information */
		Body: DevKit.Formmsdyn_requirementgroup_Information.Body;
		/** The Navigation of form msdyn_requirementgroup_Information */
		Navigation: DevKit.Formmsdyn_requirementgroup_Information.Navigation;
		/** The Process of form msdyn_requirementgroup_Information */
		Process: DevKit.Formmsdyn_requirementgroup_Information.Process;
		/** The Grid of form msdyn_requirementgroup_Information */
		Grid: DevKit.Formmsdyn_requirementgroup_Information.Grid;
		/** The SidePanes of form msdyn_requirementgroup_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormRequirement_Group_Quick_Create {
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
			/** Whether this offering is a template or not. */
			msdyn_istemplate: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Requirement Group Template Reference */
			msdyn_requirementgrouptemplateid: DevKit.Controls.Lookup;
		}
	}
	class FormRequirement_Group_Quick_Create extends DevKit.IForm {
		/**
		* Requirement Group Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Requirement_Group_Quick_Create */
		Body: DevKit.FormRequirement_Group_Quick_Create.Body;
	}
	class msdyn_requirementgroupApi {
		/**
		* DynamicsCrm.DevKit msdyn_requirementgroupApi
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
		/** Auto Group Type */
		msdyn_autogrouptype: OptionSet.msdyn_requirementgroup.msdyn_autogrouptype;
		/** Whether this offering is a template or not. */
		msdyn_istemplate: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_requirementgroupId: string;
		/** Requirement Group Template Reference */
		msdyn_requirementgrouptemplateid: string;
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
		/** Status of the Requirement Group */
		statecode: OptionSet.msdyn_requirementgroup.statecode;
		/** Reason for the status of the Requirement Group */
		statuscode: OptionSet.msdyn_requirementgroup.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_requirementgroup {
		enum msdyn_autogrouptype {
			/** 1 */
			Crew,
			/** 0 */
			None
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}