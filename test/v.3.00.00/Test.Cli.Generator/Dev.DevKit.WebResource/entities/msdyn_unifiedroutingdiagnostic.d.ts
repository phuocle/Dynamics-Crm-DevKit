//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_unifiedroutingdiagnostic_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the rule execution was completed. */
			msdyn_completedon: DevKit.Controls.DateTime;
			/** Unique identifier for Decision rule set associated with unifiedroutingdiagnostic. */
			msdyn_decisionrulesetid: DevKit.Controls.Lookup;
			/** Evaluation */
			msdyn_evaluation: DevKit.Controls.String;
			/** Input data */
			msdyn_inputdata: DevKit.Controls.String;
			/** Name of the unifiedroutingdiagnostic record */
			msdyn_name: DevKit.Controls.String;
			/** Output data */
			msdyn_outputdata: DevKit.Controls.String;
			/** Rule type */
			msdyn_ruletype: DevKit.Controls.OptionSet;
			/** Date and time when the rule execution was started. */
			msdyn_startedon: DevKit.Controls.DateTime;
			/** Unique identifier for the target object associated with unifiedroutingdiagnostic. */
			msdyn_targetobject: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_unifiedroutingdiagnostic_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_unifiedroutingdiagnostic_Information */
		Body: DevKit.Formmsdyn_unifiedroutingdiagnostic_Information.Body;
		/** The Process of form msdyn_unifiedroutingdiagnostic_Information */
		Process: DevKit.Formmsdyn_unifiedroutingdiagnostic_Information.Process;
		/** The SidePanes of form msdyn_unifiedroutingdiagnostic_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_unifiedroutingdiagnosticApi {
		/**
		* DynamicsCrm.DevKit msdyn_unifiedroutingdiagnosticApi
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
		/** Date and time when the rule execution was completed. */
		msdyn_completedon_UtcDateAndTime: Date;
		/** Unique identifier for Decision rule set associated with unifiedroutingdiagnostic. */
		msdyn_decisionrulesetid: string;
		/** Diagnostics data */
		msdyn_diagnosticdata: string;
		/** Diagnostic Data type */
		msdyn_diagnosticdatatype: OptionSet.msdyn_unifiedroutingdiagnostic.msdyn_diagnosticdatatype;
		/** Evaluation */
		msdyn_evaluation: string;
		/** Input data */
		msdyn_inputdata: string;
		/** Name of the unifiedroutingdiagnostic record */
		msdyn_name: string;
		/** Unique identifier for Conversation associated with unifiedroutingdiagnostic. */
		msdyn_ocliveworkitemid: string;
		/** Output data */
		msdyn_outputdata: string;
		/** Rule type */
		msdyn_ruletype: OptionSet.msdyn_unifiedroutingdiagnostic.msdyn_ruletype;
		/** Sequence number */
		msdyn_sequencenumber: number;
		/** Date and time when the rule execution was started. */
		msdyn_startedon_UtcDateAndTime: Date;
		/** Unique identifier for the target object associated with unifiedroutingdiagnostic. */
		msdyn_targetobject_msdyn_ocliveworkitem: string;
		/** Unique identifier for the target object associated with unifiedroutingdiagnostic. */
		msdyn_targetobject_queueitem: string;
		/** Unique identifier for entity instances */
		msdyn_unifiedroutingdiagnosticId: string;
		/** Unique identifier for Unified routing run associated with Unified routing diagnostic. */
		msdyn_unifiedroutingrunid: string;
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
		/** Status of the unifiedroutingdiagnostic */
		statecode: OptionSet.msdyn_unifiedroutingdiagnostic.statecode;
		/** Reason for the status of the unifiedroutingdiagnostic */
		statuscode: OptionSet.msdyn_unifiedroutingdiagnostic.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_unifiedroutingdiagnostic {
		enum msdyn_diagnosticdatatype {
			/** 4 */
			Assignment_Diagnostic,
			/** 2 */
			Demand_Classification_Diagnostic,
			/** 1 */
			Demand_ML_Diagnostic,
			/** 3 */
			Demand_RTQ_Diagnostic,
			/** 0 */
			Unknown
		}
		enum msdyn_ruletype {
			/** 6 */
			Assignment,
			/** 9 */
			Assignment_Selection_Criteria,
			/** 1 */
			Demand_Classification,
			/** 11 */
			Intake,
			/** 4 */
			ML,
			/** 5 */
			Prioritization,
			/** 2 */
			Route_To_Queue,
			/** 3 */
			Skill_Identification
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