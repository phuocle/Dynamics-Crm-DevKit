//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_opportunitymodelconfig_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_opportunitymodelconfig_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_opportunitymodelconfig_Information */
		Body: DevKit.Formmsdyn_opportunitymodelconfig_Information.Body;
		/** The Process of form msdyn_opportunitymodelconfig_Information */
		Process: DevKit.Formmsdyn_opportunitymodelconfig_Information.Process;
		/** The SidePanes of form msdyn_opportunitymodelconfig_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_opportunitymodelconfig_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_opportunitymodelconfig_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_opportunitymodelconfig_Information2 */
		Body: DevKit.Formmsdyn_opportunitymodelconfig_Information2.Body;
		/** The Process of form msdyn_opportunitymodelconfig_Information2 */
		Process: DevKit.Formmsdyn_opportunitymodelconfig_Information2.Process;
		/** The SidePanes of form msdyn_opportunitymodelconfig_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_opportunitymodelconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_opportunitymodelconfigApi
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
		msdyn_activeOpportunityValue: string;
		/** Date and time when the record was applied. */
		msdyn_appliedon_UtcDateAndTime: Date;
		msdyn_createonField: string;
		msdyn_disqualificationValue: string;
		msdyn_featurestate: string;
		msdyn_isStandardEntity: boolean;
		msdyn_modifiedonField: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_opportunityEntityID: string;
		msdyn_opportunityEntityName: string;
		msdyn_opportunityFormID: string;
		msdyn_opportunityFormName: string;
		/** Unique identifier for entity instances */
		msdyn_opportunitymodelconfigId: string;
		msdyn_opportunityViewID: string;
		msdyn_opportunityViewName: string;
		msdyn_predictionName: string;
		msdyn_qualificationValue: string;
		msdyn_statusField: string;
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
		/** Status of the OpportunityModelConfig */
		statecode: OptionSet.msdyn_opportunitymodelconfig.statecode;
		/** Reason for the status of the OpportunityModelConfig */
		statuscode: OptionSet.msdyn_opportunitymodelconfig.statuscode;
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
			readonly msdyn_activeOpportunityValue: string;
			/** Date and time when the record was applied. */
			readonly msdyn_appliedon_UtcDateAndTime: string;
			readonly msdyn_createonField: string;
			readonly msdyn_disqualificationValue: string;
			readonly msdyn_featurestate: string;
			readonly msdyn_isStandardEntity: string;
			readonly msdyn_modifiedonField: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_opportunityEntityID: string;
			readonly msdyn_opportunityEntityName: string;
			readonly msdyn_opportunityFormID: string;
			readonly msdyn_opportunityFormName: string;
			/** Unique identifier for entity instances */
			readonly msdyn_opportunitymodelconfigId: string;
			readonly msdyn_opportunityViewID: string;
			readonly msdyn_opportunityViewName: string;
			readonly msdyn_predictionName: string;
			readonly msdyn_qualificationValue: string;
			readonly msdyn_statusField: string;
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
			/** Status of the OpportunityModelConfig */
			readonly statecode: string;
			/** Reason for the status of the OpportunityModelConfig */
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
	namespace msdyn_opportunitymodelconfig {
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