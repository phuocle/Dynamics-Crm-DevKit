﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_solutioncomponentcountsummary_Information {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {

		}
	}
	class Formmsdyn_solutioncomponentcountsummary_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_solutioncomponentcountsummary_Information */
		Body: DevKit.Formmsdyn_solutioncomponentcountsummary_Information.Body;
		/** The Navigation of form msdyn_solutioncomponentcountsummary_Information */
		Navigation: DevKit.Formmsdyn_solutioncomponentcountsummary_Information.Navigation;
		/** The SidePanes of form msdyn_solutioncomponentcountsummary_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_solutioncomponentcountsummaryApi {
		/**
		* DynamicsCrm.DevKit msdyn_solutioncomponentcountsummaryApi
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
		msdyn_componentlogicalname: string;
		msdyn_componenttype: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_primaryentityname: string;
		/** Unique identifier for entity instances */
		msdyn_solutioncomponentcountsummaryId: string;
		msdyn_solutionid: string;
		msdyn_subtype: string;
		msdyn_total: number;
		msdyn_workflowcategory: string;
		readonly FormattedValue: {
			readonly msdyn_componentlogicalname: string;
			readonly msdyn_componenttype: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_primaryentityname: string;
			/** Unique identifier for entity instances */
			readonly msdyn_solutioncomponentcountsummaryId: string;
			readonly msdyn_solutionid: string;
			readonly msdyn_subtype: string;
			readonly msdyn_total: string;
			readonly msdyn_workflowcategory: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_solutioncomponentcountsummary {
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