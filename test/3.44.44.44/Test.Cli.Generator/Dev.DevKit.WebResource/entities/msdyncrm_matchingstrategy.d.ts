//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_matchingstrategy_Information {
		interface Tabs {
		}
		interface Body {
			/** Description of the form matching */
			msdyncrm_description: DevKit.Controls.String;
			/** Name of the form matching record */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_targetentity: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_marketingform_contactmatchingstrategy: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_marketingform_leadmatchingstrategy: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_marketingpageconfiguration_contactmatchingstrategy: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_marketingpageconfiguration_leadmatchingstrategy: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_matchingstrategyattribute_msdyncrm_matchingstrategy: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Fields: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_matchingstrategy_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_matchingstrategy_Information */
		Body: DevKit.Formmsdyncrm_matchingstrategy_Information.Body;
		/** The Navigation of form msdyncrm_matchingstrategy_Information */
		Navigation: DevKit.Formmsdyncrm_matchingstrategy_Information.Navigation;
		/** The Grid of form msdyncrm_matchingstrategy_Information */
		Grid: DevKit.Formmsdyncrm_matchingstrategy_Information.Grid;
		/** The SidePanes of form msdyncrm_matchingstrategy_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_matchingstrategyApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_matchingstrategyApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		/** Description of the form matching */
		msdyncrm_description: string;
		msdyncrm_matchingstrategyfields: string;
		msdyncrm_matchingstrategyfieldsstatus: OptionSet.msdyncrm_matchingstrategy.msdyncrm_matchingstrategyfieldsstatus;
		/** Unique ID for entity instances */
		msdyncrm_matchingstrategyId: string;
		/** Name of the form matching record */
		msdyncrm_name: string;
		msdyncrm_targetentity: OptionSet.msdyncrm_matchingstrategy.msdyncrm_targetentity;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the form matching */
		statecode: OptionSet.msdyncrm_matchingstrategy.statecode;
		/** Form matching status reason */
		statuscode: OptionSet.msdyncrm_matchingstrategy.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			/** Description of the form matching */
			readonly msdyncrm_description: string;
			readonly msdyncrm_matchingstrategyfields: string;
			readonly msdyncrm_matchingstrategyfieldsstatus: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_matchingstrategyId: string;
			/** Name of the form matching record */
			readonly msdyncrm_name: string;
			readonly msdyncrm_targetentity: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the form matching */
			readonly statecode: string;
			/** Form matching status reason */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_matchingstrategy {
		enum msdyncrm_matchingstrategyfieldsstatus {
			/** 100000000 */
			Not_validated,
			/** 100000001 */
			Validated
		}
		enum msdyncrm_targetentity {
			/** 192350000 */
			Contact,
			/** 192350001 */
			Lead
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