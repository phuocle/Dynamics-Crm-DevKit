﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_iottocaseprocess_Information {
		interface tab_StageStep12_Sections {
			StageStep11_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep18_Sections {
			StageStep19_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep24_Sections {
			StageStep27_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep30_Sections {
		}
		interface tab_StageStep4_Sections {
			StageStep3_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep12 extends DevKit.Controls.ITab {
			Section: tab_StageStep12_Sections;
		}
		interface tab_StageStep18 extends DevKit.Controls.ITab {
			Section: tab_StageStep18_Sections;
		}
		interface tab_StageStep24 extends DevKit.Controls.ITab {
			Section: tab_StageStep24_Sections;
		}
		interface tab_StageStep30 extends DevKit.Controls.ITab {
			Section: tab_StageStep30_Sections;
		}
		interface tab_StageStep4 extends DevKit.Controls.ITab {
			Section: tab_StageStep4_Sections;
		}
		interface Tabs {
			StageStep12: tab_StageStep12;
			StageStep18: tab_StageStep18;
			StageStep24: tab_StageStep24;
			StageStep30: tab_StageStep30;
			StageStep4: tab_StageStep4;
		}
		interface Body {
			Tab: Tabs;

		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_iottocaseprocess_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iottocaseprocess_Information */
		Body: DevKit.Formmsdyn_iottocaseprocess_Information.Body;
		/** The Process of form msdyn_iottocaseprocess_Information */
		Process: DevKit.Formmsdyn_iottocaseprocess_Information.Process;
		/** The SidePanes of form msdyn_iottocaseprocess_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_iottocaseprocessApi {
		/**
		* DynamicsCrm.DevKit msdyn_iottocaseprocessApi
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
		/** Unique identifier of the active stage for the Business Process Flow instance. */
		ActiveStageId: string;
		/** Date and time when current active stage is started */
		ActiveStageStartedOn_UtcDateOnly: Date;
		/** Duration of Business Process Flow */
		readonly bpf_Duration: number;
		bpf_incidentid: string;
		bpf_msdyn_iotalertid: string;
		/** Description */
		bpf_name: string;
		/** Unique identifier for entity instances */
		BusinessProcessFlowInstanceId: string;
		/** Date and time when Business Process Flow instance is completed. */
		CompletedOn_UtcDateOnly: Date;
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
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		ProcessId: string;
		/** Status of the IoT to Case Process */
		statecode: OptionSet.msdyn_iottocaseprocess.statecode;
		/** Reason for the status of the IoT to Case Process */
		statuscode: OptionSet.msdyn_iottocaseprocess.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Comma delimited string of process stage ids that represent visited stages of the Business Process Flow instance. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_iottocaseprocess {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 3 */
			Aborted,
			/** 1 */
			Active,
			/** 2 */
			Finished
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