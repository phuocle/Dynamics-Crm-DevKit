//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_assignmentrule_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Description: DevKit.Controls.String;
			/** Setting depecting if the assignment is done for a team or a seller. */
			msdyn_DistributeTo: DevKit.Controls.OptionSet;
			msdyn_DistributionType: DevKit.Controls.OptionSet;
			msdyn_entityfilter: DevKit.Controls.String;
			/** Evaluation order of the rule */
			msdyn_evaluationorder: DevKit.Controls.Integer;
			/** Setting depecting if the seller or team assignment needs to be done either by filtering attributes or by specifying sellers or teams */
			msdyn_matchtype: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_objecttypecode: DevKit.Controls.OptionSet;
			msdyn_sellerfilter: DevKit.Controls.String;
			/** List of specific sellers or teams that needs to be assigned. */
			msdyn_SpecificSellersOrTeams: DevKit.Controls.String;
			/** Trigger when the rule needs to be evaluated */
			msdyn_triggertype: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_assignmentrule_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_assignmentrule_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_assignmentrule_Information */
		Body: DevKit.Formmsdyn_assignmentrule_Information.Body;
		/** The Process of form msdyn_assignmentrule_Information */
		Process: DevKit.Formmsdyn_assignmentrule_Information.Process;
		/** The SidePanes of form msdyn_assignmentrule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_assignmentruleApi {
		/**
		* DynamicsCrm.DevKit msdyn_assignmentruleApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for entity instances */
		msdyn_assignmentruleId: DevKit.WebApi.GuidValue;
		msdyn_attributefilter: DevKit.WebApi.StringValue;
		msdyn_Description: DevKit.WebApi.StringValue;
		/** Setting depecting if the assignment is done for a team or a seller. */
		msdyn_DistributeTo: DevKit.WebApi.OptionSetValue;
		msdyn_distributewithavailability: DevKit.WebApi.BooleanValue;
		msdyn_distributewithcapacity: DevKit.WebApi.BooleanValue;
		msdyn_DistributionType: DevKit.WebApi.OptionSetValue;
		msdyn_entityfilter: DevKit.WebApi.StringValue;
		/** Evaluation order of the rule */
		msdyn_evaluationorder: DevKit.WebApi.IntegerValue;
		/** Records routed by this rule */
		msdyn_matchedrecords: DevKit.WebApi.IntegerValue;
		/** Setting depecting if the seller or team assignment needs to be done either by filtering attributes or by specifying sellers or teams */
		msdyn_matchtype: DevKit.WebApi.OptionSetValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_objecttypecode: DevKit.WebApi.OptionSetValue;
		msdyn_segmentid: DevKit.WebApi.LookupValue;
		msdyn_sellerfilter: DevKit.WebApi.StringValue;
		/** List of specific sellers or teams that needs to be assigned. */
		msdyn_SpecificSellersOrTeams: DevKit.WebApi.StringValue;
		/** Trigger when the rule needs to be evaluated */
		msdyn_triggertype: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Assignment Rule */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Assignment Rule */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_assignmentrule {
		enum msdyn_DistributeTo {
			/** 0 */
			Sellers,
			/** 1 */
			Team
		}
		enum msdyn_DistributionType {
			/** 1 */
			Load_Balancing,
			/** 0 */
			RoundRobin
		}
		enum msdyn_matchtype {
			/** 2 */
			Any_Sellers,
			/** 0 */
			Filter_using_Attributes,
			/** 1 */
			Specific_List
		}
		enum msdyn_objecttypecode {
			/** 4 */
			Lead,
			/** 3 */
			Opportunity
		}
		enum msdyn_triggertype {
			/** 0 */
			Entity_Create,
			/** 1 */
			FieldUpdate
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}