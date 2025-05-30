﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_smsphonenumber_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdynmkt_number: DevKit.Controls.String;
			/** Status */
			msdynmkt_status: DevKit.Controls.OptionSet;
			/** The type of the custom entity. */
			msdynmkt_type: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_smsphonenumber_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_smsphonenumber_Information */
		Body: DevKit.Formmsdynmkt_smsphonenumber_Information.Body;
		/** The Navigation of form msdynmkt_smsphonenumber_Information */
		Navigation: DevKit.Formmsdynmkt_smsphonenumber_Information.Navigation;
		/** The SidePanes of form msdynmkt_smsphonenumber_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_smsphonenumberApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_smsphonenumberApi
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
		/** The name of the custom entity. */
		msdynmkt_number: string;
		/** Unique identifier for entity instances */
		msdynmkt_smsphonenumberId: string;
		/** Status */
		msdynmkt_status: OptionSet.msdynmkt_smsphonenumber.msdynmkt_status;
		/** The type of the custom entity. */
		msdynmkt_type: string;
		readonly FormattedValue: {
			/** The name of the custom entity. */
			readonly msdynmkt_number: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_smsphonenumberId: string;
			/** Status */
			readonly msdynmkt_status: string;
			/** The type of the custom entity. */
			readonly msdynmkt_type: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_smsphonenumber {
		enum msdynmkt_status {
			/** 192350001 */
			Active,
			/** 192350000 */
			Pending
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