//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_autonomouscasecreationrule_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Autonomous case creation and update rule */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab_Rules_Sections {
			Business_rules_section_1: DevKit.Controls.Section;
			Business_rules_section_2: DevKit.Controls.Section;
			Business_rules_section_3: DevKit.Controls.Section;
		}
		interface tab_Rules extends DevKit.Controls.ITab {
			Section: tab_Rules_Sections;
		}
		interface Tabs {
			Rules: tab_Rules;
		}
		interface Body {
			Tab: Tabs;
			msdyn_conditionsxml: DevKit.Controls.String;
			/** Order of creation rule */
			msdyn_order: DevKit.Controls.Integer;
			/** Field to be predicted */
			msdyn_predictorfields: DevKit.Controls.String;
			msdyn_regarding: DevKit.Controls.String;
			msdyn_rulename: DevKit.Controls.String;
			/** Unique name for the entity. */
			msdyn_uniquename: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_autonomouscasecreationrule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_autonomouscasecreationrule_Information */
		Body: DevKit.Formmsdyn_autonomouscasecreationrule_Information.Body;
		/** The Header section of form msdyn_autonomouscasecreationrule_Information */
		Header: DevKit.Formmsdyn_autonomouscasecreationrule_Information.Header;
		/** The Navigation of form msdyn_autonomouscasecreationrule_Information */
		Navigation: DevKit.Formmsdyn_autonomouscasecreationrule_Information.Navigation;
		/** The SidePanes of form msdyn_autonomouscasecreationrule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_autonomouscasecreationruleApi {
		/**
		* DynamicsCrm.DevKit msdyn_autonomouscasecreationruleApi
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
		readonly ComponentState: OptionSet.msdyn_autonomouscasecreationrule.ComponentState;
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
		/** Unique identifier for entity instances */
		msdyn_autonomouscasecreationruleId: string;
		msdyn_conditionsxml: string;
		msdyn_customapiname: string;
		/** Order of creation rule */
		msdyn_order: number;
		/** Field to be predicted */
		msdyn_predictorfields: string;
		msdyn_regarding: string;
		msdyn_rulename: string;
		/** Unique name for the entity. */
		msdyn_uniquename: string;
		msdyn_useCustomApi: boolean;
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
		/** Status of the Autonomous case creation and update rule */
		statecode: OptionSet.msdyn_autonomouscasecreationrule.statecode;
		/** Reason for the status of the Autonomous case creation and update rule */
		statuscode: OptionSet.msdyn_autonomouscasecreationrule.statuscode;
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
			/** Unique identifier for entity instances */
			readonly msdyn_autonomouscasecreationruleId: string;
			readonly msdyn_conditionsxml: string;
			readonly msdyn_customapiname: string;
			/** Order of creation rule */
			readonly msdyn_order: string;
			/** Field to be predicted */
			readonly msdyn_predictorfields: string;
			readonly msdyn_regarding: string;
			readonly msdyn_rulename: string;
			/** Unique name for the entity. */
			readonly msdyn_uniquename: string;
			readonly msdyn_useCustomApi: string;
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
			/** Status of the Autonomous case creation and update rule */
			readonly statecode: string;
			/** Reason for the status of the Autonomous case creation and update rule */
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
	namespace msdyn_autonomouscasecreationrule {
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
		enum statecode {
			/** 1 */
			Active,
			/** 0 */
			Draft
		}
		enum statuscode {
			/** 2 */
			Active,
			/** 1 */
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