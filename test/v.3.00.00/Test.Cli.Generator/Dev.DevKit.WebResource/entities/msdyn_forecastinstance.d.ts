//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_forecastinstance_Information {
		interface tab_tab_Sections {
			section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab extends DevKit.Controls.ITab {
			Section: tab_tab_Sections;
		}
		interface Tabs {
			tab: tab_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the actual value (money) achieved toward the target as of the last rollup date. */
			msdyn_actualamount: DevKit.Controls.Money;
			/** Unique identifier for the forecast definition that is associated with the forecast. */
			msdyn_forecastdefinitionid: DevKit.Controls.Lookup;
			/** Unique identifier for the forecast recurrence associated with the forecast. */
			msdyn_forecastrecurrenceid: DevKit.Controls.Lookup;
			/** Shows the changed value of the best case rollup (Money type) as of the last rolled-up date. */
			msdyn_manualbestcaseamount: DevKit.Controls.Money;
			/** Shows the changed value of the committed rollup (Money type) as of the last rolled-up date. */
			msdyn_manualcommittedamount: DevKit.Controls.Money;
			/** Shows the changed value of the pipeline rollup (Money type) as of the last rolled-up date. */
			msdyn_manualpipelineamount: DevKit.Controls.Money;
			/** Shows the percentage achieved against the target. */
			msdyn_percentageachieved: DevKit.Controls.Decimal;
			/** Select a target (Money type) to track a monetary amount, such as estimated revenue from an opportunity. */
			msdyn_targetamount: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_forecastinstance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_forecastinstance_Information */
		Body: DevKit.Formmsdyn_forecastinstance_Information.Body;
		/** The Process of form msdyn_forecastinstance_Information */
		Process: DevKit.Formmsdyn_forecastinstance_Information.Process;
		/** The SidePanes of form msdyn_forecastinstance_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_forecastinstanceApi {
		/**
		* DynamicsCrm.DevKit msdyn_forecastinstanceApi
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
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the actual value (money) achieved toward the target as of the last rollup date. */
		msdyn_actualamount: number;
		/** Value of the Actual (Money) in base currency. */
		readonly msdyn_actualamount_Base: number;
		/** Shows the rollup value (money) for the best case category as of the last rollup date. */
		msdyn_bestcaseamount: number;
		/** Value of the BestCase in base currency. */
		readonly msdyn_bestcaseamount_Base: number;
		/** Shows the committed rollup value (money) as of the last rollup date. */
		msdyn_committedamount: number;
		/** Value of the Committed in base currency. */
		readonly msdyn_committedamount_Base: number;
		/** Unique identifier for the forecast definition that is associated with the forecast. */
		msdyn_forecastdefinitionid: string;
		/** Unique identifier for the forecast. */
		msdyn_forecastinstanceId: string;
		/** For internal use only. */
		msdyn_forecastinstancetype: number;
		/** Name of the forecast. */
		msdyn_forecastname: string;
		/** Unique identifier for the parent forecast that is associated with the forecast. */
		msdyn_forecastparentid: string;
		/** Unique identifier for the forecast recurrence associated with the forecast. */
		msdyn_forecastrecurrenceid: string;
		/** Select whether the bestcase rollup has been manually updated. */
		msdyn_ismanualbestcase: number;
		/** Select whether the committed rollup has been manually updated. */
		msdyn_ismanualcommitted: number;
		/** Select whether the pipeline rollup has been manually updated. */
		msdyn_ismanualpipeline: number;
		/** Is quota source manual */
		msdyn_isquotasourcemanual: boolean;
		/** For internal use only. */
		msdyn_level: number;
		/** Shows the changed value of the best case rollup (Money type) as of the last rolled-up date. */
		msdyn_manualbestcaseamount: number;
		/** Value of the Manual BestCase in base currency. */
		readonly msdyn_manualbestcaseamount_Base: number;
		/** Shows the changed value of the committed rollup (Money type) as of the last rolled-up date. */
		msdyn_manualcommittedamount: number;
		/** Value of the Manual Committed in base currency. */
		readonly msdyn_manualcommittedamount_Base: number;
		/** Shows the changed value of the pipeline rollup (Money type) as of the last rolled-up date. */
		msdyn_manualpipelineamount: number;
		/** Value of the Manual Pipeline in base currency. */
		readonly msdyn_manualpipelineamount_Base: number;
		/** Unique identifier for the matching goal associated with the forecast. */
		msdyn_matchinggoalid: string;
		/** Shows the percentage achieved against the target. */
		readonly msdyn_percentageachieved: number;
		/** Shows the pipeline rollup value (money) as of the last rollup date. */
		msdyn_pipelineamount: number;
		/** Value of the Pipeline in base currency. */
		readonly msdyn_pipelineamount_Base: number;
		/** Shows the recurrence index of the forecast created from the forecast definition. */
		msdyn_recurrenceindex: number;
		/** Select a target (Money type) to track a monetary amount, such as estimated revenue from an opportunity. */
		msdyn_targetamount: number;
		/** Value of the Target (Money) in base currency. */
		readonly msdyn_targetamount_Base: number;
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
		/** Status of the Forecast */
		statecode: OptionSet.msdyn_forecastinstance.statecode;
		/** Reason for the status of the Forecast */
		statuscode: OptionSet.msdyn_forecastinstance.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_forecastinstance {
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