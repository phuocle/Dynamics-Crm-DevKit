//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_satisfactionmetric_Information {
		interface Tabs {
		}
		interface Body {
			/** Description of the satisfaction metric. */
			msfp_description: DevKit.Controls.String;
			/** Last computed value of the satisfaction metric. */
			msfp_lastcomputedvalue: DevKit.Controls.String;
			/** Name of the satisfaction metric. */
			msfp_name: DevKit.Controls.String;
			/** Project to which the satisfaction metric belongs. */
			msfp_project: DevKit.Controls.Lookup;
			/** Type of the satisfaction metric. */
			msfp_type: DevKit.Controls.String;
			/** User who owns the satisfaction metric. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msfp_msfp_satisfactionmetric_msfp_alert: DevKit.Controls.NavigationItem,
			msfp_msfp_satisfactionmetric_msfp_alertrule: DevKit.Controls.NavigationItem
		}
	}
	class Formmsfp_satisfactionmetric_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_satisfactionmetric_Information */
		Body: DevKit.Formmsfp_satisfactionmetric_Information.Body;
		/** The Navigation of form msfp_satisfactionmetric_Information */
		Navigation: DevKit.Formmsfp_satisfactionmetric_Information.Navigation;
		/** The SidePanes of form msfp_satisfactionmetric_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msfp_satisfactionmetricApi {
		/**
		* DynamicsCrm.DevKit msfp_satisfactionmetricApi
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
		/** Description of the satisfaction metric. */
		msfp_description: string;
		/** Historical computed value of the satisfaction metric. */
		msfp_historicalcomputedvalue: string;
		/** Indicates if the satisfaction metric is system defined or user defined. */
		msfp_issystemkpi: boolean;
		/** Date and time when the satisfaction metric was last computed. */
		msfp_lastcomputedon_UtcDateAndTime: Date;
		/** Last computed value of the satisfaction metric. */
		msfp_lastcomputedvalue: string;
		/** Maximum value of the satisfaction metric. */
		msfp_maximumvalue: number;
		/** Minimum value of the satisfaction metric. */
		msfp_minimumvalue: number;
		/** Name of the satisfaction metric. */
		msfp_name: string;
		/** Project to which the satisfaction metric belongs. */
		msfp_project: string;
		/** Questions on which the satisfaction metric is calculated. */
		msfp_questions: string;
		/** Unique identifier for entity instances */
		msfp_satisfactionmetricId: string;
		/** Status of the satisfaction metric. */
		msfp_status: OptionSet.msfp_satisfactionmetric.msfp_status;
		/** Threshold value of the satisfaction metric. */
		msfp_threshold: number;
		/** Type of the satisfaction metric. */
		msfp_type: string;
		/** Version number of the satisfaction metric. */
		msfp_versionnumber: number;
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
		/** Status of the Satisfaction metric */
		statecode: OptionSet.msfp_satisfactionmetric.statecode;
		/** Reason for the status of the Satisfaction metric */
		statuscode: OptionSet.msfp_satisfactionmetric.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Description of the satisfaction metric. */
			readonly msfp_description: string;
			/** Historical computed value of the satisfaction metric. */
			readonly msfp_historicalcomputedvalue: string;
			/** Indicates if the satisfaction metric is system defined or user defined. */
			readonly msfp_issystemkpi: string;
			/** Date and time when the satisfaction metric was last computed. */
			readonly msfp_lastcomputedon_UtcDateAndTime: string;
			/** Last computed value of the satisfaction metric. */
			readonly msfp_lastcomputedvalue: string;
			/** Maximum value of the satisfaction metric. */
			readonly msfp_maximumvalue: string;
			/** Minimum value of the satisfaction metric. */
			readonly msfp_minimumvalue: string;
			/** Name of the satisfaction metric. */
			readonly msfp_name: string;
			/** Project to which the satisfaction metric belongs. */
			readonly msfp_project: string;
			/** Questions on which the satisfaction metric is calculated. */
			readonly msfp_questions: string;
			/** Unique identifier for entity instances */
			readonly msfp_satisfactionmetricId: string;
			/** Status of the satisfaction metric. */
			readonly msfp_status: string;
			/** Threshold value of the satisfaction metric. */
			readonly msfp_threshold: string;
			/** Type of the satisfaction metric. */
			readonly msfp_type: string;
			/** Version number of the satisfaction metric. */
			readonly msfp_versionnumber: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Status of the Satisfaction metric */
			readonly statecode: string;
			/** Reason for the status of the Satisfaction metric */
			readonly statuscode: string;
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
	namespace msfp_satisfactionmetric {
		enum msfp_status {
			/** 647390000 */
			Active,
			/** 647390001 */
			InActive
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