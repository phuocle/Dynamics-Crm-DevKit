//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_estimate_Information {
		interface tab__51C00233_EE56_4421_A30F_AAE78944FDE6_Sections {
			_51C00233_EE56_4421_A30F_AAE78944FDE6_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_EstimateLinesTab_Sections {
			EstimateLinesSection: DevKit.Controls.Section;
		}
		interface tab__51C00233_EE56_4421_A30F_AAE78944FDE6 extends DevKit.Controls.ITab {
			Section: tab__51C00233_EE56_4421_A30F_AAE78944FDE6_Sections;
		}
		interface tab_EstimateLinesTab extends DevKit.Controls.ITab {
			Section: tab_EstimateLinesTab_Sections;
		}
		interface Tabs {
			_51C00233_EE56_4421_A30F_AAE78944FDE6: tab__51C00233_EE56_4421_A30F_AAE78944FDE6;
			EstimateLinesTab: tab_EstimateLinesTab;
		}
		interface Body {
			Tab: Tabs;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Select the name of the project. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			EstimateLinesGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_estimate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_estimate_Information */
		Body: DevKit.Formmsdyn_estimate_Information.Body;
		/** The Process of form msdyn_estimate_Information */
		Process: DevKit.Formmsdyn_estimate_Information.Process;
		/** The Grid of form msdyn_estimate_Information */
		Grid: DevKit.Formmsdyn_estimate_Information.Grid;
		/** The SidePanes of form msdyn_estimate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_estimateApi {
		/**
		* DynamicsCrm.DevKit msdyn_estimateApi
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
		/** Type the name of the custom entity. */
		msdyn_description: string;
		/** Select the type of estimate. */
		msdyn_estimateheadertype: OptionSet.msdyn_estimate.msdyn_estimateheadertype;
		/** Unique identifier for entity instances */
		msdyn_estimateId: string;
		/** Select the name of the project. */
		msdyn_Project: string;
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
		/** Status of the Estimate */
		statecode: OptionSet.msdyn_estimate.statecode;
		/** Reason for the status of the Estimate */
		statuscode: OptionSet.msdyn_estimate.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_estimate {
		enum msdyn_estimateheadertype {
			/** 192350001 */
			Activity_based_estimate,
			/** 192350002 */
			Assignment_based_estimate,
			/** 192350003 */
			Custom_estimate,
			/** 192350000 */
			Resource_based_estimate
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