//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAuto_post_rule {
		interface Tabs {
		}
		interface Body {
			/** Name of the rule. */
			msdyn_name: DevKit.Controls.String;
			/** Entity that is enabled for Activity feeds. */
			msdyn_PostConfigId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormAuto_post_rule extends DevKit.IForm {
		/**
		* Auto-post rule [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Auto_post_rule */
		Body: DevKit.FormAuto_post_rule.Body;
		/** The Navigation of form Auto_post_rule */
		Navigation: DevKit.FormAuto_post_rule.Navigation;
		/** The SidePanes of form Auto_post_rule */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_PostRuleConfig_Information {
		interface Tabs {
		}
		interface Body {
			/** Name of the rule. */
			msdyn_name: DevKit.Controls.String;
			/** Entity that is enabled for Activity feeds. */
			msdyn_PostConfigId: DevKit.Controls.Lookup;
			/** Determine whether to post this message to the Yammer Activity Stream. Please do not check this box if this message contains sensitive information requiring Microsoft Dynamics 365 access. */
			msdyn_PostToYammer: DevKit.Controls.Boolean;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_PostRuleConfig_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_PostRuleConfig_Information */
		Body: DevKit.Formmsdyn_PostRuleConfig_Information.Body;
		/** The Navigation of form msdyn_PostRuleConfig_Information */
		Navigation: DevKit.Formmsdyn_PostRuleConfig_Information.Navigation;
		/** The SidePanes of form msdyn_PostRuleConfig_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_PostRuleConfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_PostRuleConfigApi
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
		/** Internal Use Only. */
		msdyn_FormatId: string;
		/** Name of the rule. */
		msdyn_name: string;
		/** Entity that is enabled for Activity feeds. */
		msdyn_PostConfigId: string;
		/** Unique identifier of the post rule configuration. */
		msdyn_PostRuleConfigId: string;
		/** Determine whether to post this message to the Yammer Activity Stream. Please do not check this box if this message contains sensitive information requiring Microsoft Dynamics 365 access. */
		msdyn_PostToYammer: boolean;
		/** Identifier in the format WebResourceName:SchemaName of the definition for this rule. */
		msdyn_RuleId: string;
		/** Internal Use Only. */
		msdyn_RuleSource: string;
		/** Unique identifier of the SDK message processing step for this rule. */
		msdyn_StepId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Post Rule Configuration */
		statecode: OptionSet.msdyn_PostRuleConfig.statecode;
		/** Reason for the status of the Post Rule Configuration */
		statuscode: OptionSet.msdyn_PostRuleConfig.statuscode;
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
			/** Internal Use Only. */
			readonly msdyn_FormatId: string;
			/** Name of the rule. */
			readonly msdyn_name: string;
			/** Entity that is enabled for Activity feeds. */
			readonly msdyn_PostConfigId: string;
			/** Unique identifier of the post rule configuration. */
			readonly msdyn_PostRuleConfigId: string;
			/** Determine whether to post this message to the Yammer Activity Stream. Please do not check this box if this message contains sensitive information requiring Microsoft Dynamics 365 access. */
			readonly msdyn_PostToYammer: string;
			/** Identifier in the format WebResourceName:SchemaName of the definition for this rule. */
			readonly msdyn_RuleId: string;
			/** Internal Use Only. */
			readonly msdyn_RuleSource: string;
			/** Unique identifier of the SDK message processing step for this rule. */
			readonly msdyn_StepId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Post Rule Configuration */
			readonly statecode: string;
			/** Reason for the status of the Post Rule Configuration */
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
	namespace msdyn_PostRuleConfig {
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