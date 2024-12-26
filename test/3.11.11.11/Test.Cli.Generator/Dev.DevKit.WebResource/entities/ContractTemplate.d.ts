//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormContractTemplate_Information {
		interface Tabs {
		}
		interface Body {
			/** Abbreviation of the contract template name. */
			Abbreviation: DevKit.Controls.String;
			/** Criteria for the contracts based on the template, such as number of cases, time, or coverage dates. */
			AllotmentTypeCode: DevKit.Controls.OptionSet;
			/** How often the customer or account is to be billed in contracts that are based on the template. */
			BillingFrequencyCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the level of service specified in contracts that are based on the template. */
			ContractServiceLevelCode: DevKit.Controls.OptionSet;
			/** Description of the contract template. */
			Description: DevKit.Controls.String;
			effectivitycalendar: DevKit.Controls.ActionCards;
			IFRAME_ContractTemplateCalendar: DevKit.Controls.IFrame;
			/** Name of the contract template. */
			Name: DevKit.Controls.String;
			/** Specifies whether the discount is a percentage or a monetary amount in contracts based on the template. */
			UseDiscountAsPercentage: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormContractTemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ContractTemplate_Information */
		Body: DevKit.FormContractTemplate_Information.Body;
		/** The Process of form ContractTemplate_Information */
		Process: DevKit.FormContractTemplate_Information.Process;
		/** The SidePanes of form ContractTemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ContractTemplateApi {
		/**
		* DynamicsCrm.DevKit ContractTemplateApi
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
		/** Abbreviation of the contract template name. */
		Abbreviation: string;
		/** Criteria for the contracts based on the template, such as number of cases, time, or coverage dates. */
		AllotmentTypeCode: OptionSet.ContractTemplate.AllotmentTypeCode;
		/** How often the customer or account is to be billed in contracts that are based on the template. */
		BillingFrequencyCode: OptionSet.ContractTemplate.BillingFrequencyCode;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ContractTemplate.ComponentState;
		/** Unique identifier of the level of service specified in contracts that are based on the template. */
		ContractServiceLevelCode: OptionSet.ContractTemplate.ContractServiceLevelCode;
		/** Unique identifier of the contract template. */
		ContractTemplateId: string;
		/** For internal use only. */
		readonly ContractTemplateIdUnique: string;
		/** Unique identifier of the user who created the contract template. */
		readonly CreatedBy: string;
		/** Date and time when the contract template was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the contracttemplate. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the contract template. */
		Description: string;
		/** Days of the week and times for which contracts based on the template are effective. */
		EffectivityCalendar: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the contract template. */
		readonly ModifiedBy: string;
		/** Date and time when the contract template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the contracttemplate. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the contract template. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Specifies whether the discount is a percentage or a monetary amount in contracts based on the template. */
		UseDiscountAsPercentage: boolean;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Abbreviation of the contract template name. */
			readonly Abbreviation: string;
			/** Criteria for the contracts based on the template, such as number of cases, time, or coverage dates. */
			readonly AllotmentTypeCode: string;
			/** How often the customer or account is to be billed in contracts that are based on the template. */
			readonly BillingFrequencyCode: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the level of service specified in contracts that are based on the template. */
			readonly ContractServiceLevelCode: string;
			/** Unique identifier of the contract template. */
			readonly ContractTemplateId: string;
			/** For internal use only. */
			readonly ContractTemplateIdUnique: string;
			/** Unique identifier of the user who created the contract template. */
			readonly CreatedBy: string;
			/** Date and time when the contract template was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the contracttemplate. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the contract template. */
			readonly Description: string;
			/** Days of the week and times for which contracts based on the template are effective. */
			readonly EffectivityCalendar: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the contract template. */
			readonly ModifiedBy: string;
			/** Date and time when the contract template was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the contracttemplate. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the contract template. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Specifies whether the discount is a percentage or a monetary amount in contracts based on the template. */
			readonly UseDiscountAsPercentage: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ContractTemplate {
		enum AllotmentTypeCode {
			/** 3 */
			Coverage_Dates,
			/** 1 */
			Number_of_Cases,
			/** 2 */
			Time
		}
		enum BillingFrequencyCode {
			/** 5 */
			Annually,
			/** 2 */
			Bimonthly,
			/** 1 */
			Monthly,
			/** 3 */
			Quarterly,
			/** 4 */
			Semiannually
		}
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum ContractServiceLevelCode {
			/** 3 */
			Bronze,
			/** 1 */
			Gold,
			/** 2 */
			Silver
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