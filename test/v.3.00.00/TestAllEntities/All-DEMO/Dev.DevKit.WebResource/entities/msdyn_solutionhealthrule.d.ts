//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_solutionhealthrule_Information {
		interface Tabs {
		}
		interface Body {
			/** Rule description. */
			msdyn_Description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_OwningSolutionId: DevKit.Controls.String;
			msdyn_ResolutionAction: DevKit.Controls.Lookup;
			/** This message will be visible to end use when he/she tried to resolve rule failure. */
			msdyn_resolutionmessage: DevKit.Controls.String;
			/** Rule set to which the rule belongs to. */
			msdyn_solutionhealthrulesetId: DevKit.Controls.Lookup;
			msdyn_Workflow: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_solutionhealthrule_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_solutionhealthrule_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_solutionhealthrule_Information */
		Body: DevKit.Formmsdyn_solutionhealthrule_Information.Body;
		/** The SidePanes of form msdyn_solutionhealthrule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_solutionhealthruleApi {
		/**
		* DynamicsCrm.DevKit msdyn_solutionhealthruleApi
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
		/** Type of the Component being diagnosed like appmodule, sitemap, systemform etc. */
		msdyn_ComponentType: DevKit.WebApi.StringValue;
		/** Rule description. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_OwningSolutionId: DevKit.WebApi.StringValue;
		msdyn_ResolutionAction: DevKit.WebApi.LookupValue;
		/** This message will be visible to end use when he/she tried to resolve rule failure. */
		msdyn_resolutionmessage: DevKit.WebApi.StringValue;
		/** Type of Resolution action. */
		msdyn_ResolutionType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		msdyn_solutionhealthruleId: DevKit.WebApi.GuidValue;
		/** Rule set to which the rule belongs to. */
		msdyn_solutionhealthrulesetId: DevKit.WebApi.LookupValue;
		msdyn_uniquename: DevKit.WebApi.StringValue;
		msdyn_Workflow: DevKit.WebApi.LookupValue;
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
		/** Status of the Solution Health Rule */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Solution Health Rule */
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
	namespace msdyn_solutionhealthrule {
		enum msdyn_ResolutionType {
			/** 192350000 */
			Auto_Heal,
			/** 192350001 */
			Customer_Action_Required,
			/** 192350002 */
			Documenation,
			/** 192350003 */
			None
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