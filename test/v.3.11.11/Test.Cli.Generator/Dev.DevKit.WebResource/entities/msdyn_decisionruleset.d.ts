//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_decisionruleset_Information {
		interface Tabs {
		}
		interface Body {
			/** Defines the authoring mode for the rule set */
			msdyn_authoringmode: DevKit.Controls.OptionSet;
			/** Description of the rule set record */
			msdyn_description: DevKit.Controls.String;
			/** Input contract for the ruleset */
			msdyn_inputcontractid: DevKit.Controls.Lookup;
			/** Represent collection of similar type */
			msdyn_isinputcollection: DevKit.Controls.Boolean;
			/** Name of the rule set record */
			msdyn_name: DevKit.Controls.String;
			/** Output contract for the ruleset */
			msdyn_outputcontractid: DevKit.Controls.Lookup;
			/** Defines type of the rule set */
			msdyn_rulesetdefinition: DevKit.Controls.String;
			/** Defines type of the rule set */
			msdyn_rulesettype: DevKit.Controls.OptionSet;
			/** Unique name for the ruleset record */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_decisionruleset_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_decisionruleset_Information */
		Body: DevKit.Formmsdyn_decisionruleset_Information.Body;
		/** The Process of form msdyn_decisionruleset_Information */
		Process: DevKit.Formmsdyn_decisionruleset_Information.Process;
		/** The SidePanes of form msdyn_decisionruleset_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_decisionrulesetApi {
		/**
		* DynamicsCrm.DevKit msdyn_decisionrulesetApi
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
		readonly ComponentState: OptionSet.msdyn_decisionruleset.ComponentState;
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
		/** AI builder model for the ruleset */
		msdyn_aibmodelid: string;
		/** Defines the authoring mode for the rule set */
		msdyn_authoringmode: OptionSet.msdyn_decisionruleset.msdyn_authoringmode;
		/** Unique identifier for entity instances */
		msdyn_decisionrulesetId: string;
		/** Description of the rule set record */
		msdyn_description: string;
		/** Input contract for the ruleset */
		msdyn_inputcontractid: string;
		/** Represent collection of similar type */
		msdyn_isinputcollection: boolean;
		/** Defines the type for ML model */
		msdyn_mlmodeltype: OptionSet.msdyn_decisionruleset.msdyn_mlmodeltype;
		/** Name of the rule set record */
		msdyn_name: string;
		/** Output contract for the ruleset */
		msdyn_outputcontractid: string;
		/** Defines type of the rule set */
		msdyn_rulesetdefinition: string;
		/** Defines type of the rule set */
		msdyn_rulesettype: OptionSet.msdyn_decisionruleset.msdyn_rulesettype;
		/** Unique name for the ruleset record */
		msdyn_UniqueName: string;
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
		/** Status of the Decision rule set */
		statecode: OptionSet.msdyn_decisionruleset.statecode;
		/** Reason for the status of the Decision rule set */
		statuscode: OptionSet.msdyn_decisionruleset.statuscode;
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
			/** AI builder model for the ruleset */
			readonly msdyn_aibmodelid: string;
			/** Defines the authoring mode for the rule set */
			readonly msdyn_authoringmode: string;
			/** Unique identifier for entity instances */
			readonly msdyn_decisionrulesetId: string;
			/** Description of the rule set record */
			readonly msdyn_description: string;
			/** Input contract for the ruleset */
			readonly msdyn_inputcontractid: string;
			/** Represent collection of similar type */
			readonly msdyn_isinputcollection: string;
			/** Defines the type for ML model */
			readonly msdyn_mlmodeltype: string;
			/** Name of the rule set record */
			readonly msdyn_name: string;
			/** Output contract for the ruleset */
			readonly msdyn_outputcontractid: string;
			/** Defines type of the rule set */
			readonly msdyn_rulesetdefinition: string;
			/** Defines type of the rule set */
			readonly msdyn_rulesettype: string;
			/** Unique name for the ruleset record */
			readonly msdyn_UniqueName: string;
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
			/** Status of the Decision rule set */
			readonly statecode: string;
			/** Reason for the status of the Decision rule set */
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
	namespace msdyn_decisionruleset {
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
		enum msdyn_authoringmode {
			/** 192350000 */
			Decision_list
		}
		enum msdyn_mlmodeltype {
			/** 192350002 */
			Effort_based,
			/** 192350001 */
			Sentiment_based,
			/** 192350000 */
			Skill_based
		}
		enum msdyn_rulesettype {
			/** 192350000 */
			Declarative,
			/** 192350001 */
			ML_model_based
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}