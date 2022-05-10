//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEntitlement_Template {
		interface tab_general_Sections {
			entitlementtemplateterms: DevKit.Controls.Section;
			entitlementtemplatetermsInUCI: DevKit.Controls.Section;
			entitlementterms: DevKit.Controls.Section;
			information: DevKit.Controls.Section;
			products: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether the entitlement allocation is based on number of cases or number of hours. */
			AllocationTypeCode: DevKit.Controls.OptionSet;
			/** Information about whether to decrease the remaining terms when the case is created or when it is resolved */
			DecreaseRemainingOn: DevKit.Controls.OptionSet;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Enter the date and time when the entitlement ends. */
			EndDate: DevKit.Controls.Date;
			/** Type a descriptive name for the entitlement template. */
			Name: DevKit.Controls.String;
			/** Tells whether case creation is restricted based on entitlement terms. */
			RestrictCaseCreation: DevKit.Controls.Boolean;
			/** Choose the service level agreement (SLA) associated with the entitlement. */
			SLAId: DevKit.Controls.Lookup;
			/** Enter the date and time when the entitlement begins. */
			StartDate: DevKit.Controls.Date;
			/** Type the total number of entitlement terms. */
			TotalTerms: DevKit.Controls.Decimal;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			editableEntitlementChannelGridControl: DevKit.Controls.Grid;
			grid_EntitlementChannel: DevKit.Controls.Grid;
			grid_EntitlementProducts: DevKit.Controls.Grid;
		}
	}
	class FormEntitlement_Template extends DevKit.IForm {
		/**
		* Entitlement Template [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Entitlement_Template */
		Body: DevKit.FormEntitlement_Template.Body;
		/** The Process of form Entitlement_Template */
		Process: DevKit.FormEntitlement_Template.Process;
		/** The Grid of form Entitlement_Template */
		Grid: DevKit.FormEntitlement_Template.Grid;
		/** The SidePanes of form Entitlement_Template */
		SidePanes: DevKit.SidePanes;
	}
	class EntitlementTemplateApi {
		/**
		* DynamicsCrm.DevKit EntitlementTemplateApi
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
		/** Select whether the entitlement allocation is based on number of cases or number of hours. */
		AllocationTypeCode: OptionSet.EntitlementTemplate.AllocationTypeCode;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Information about whether to decrease the remaining terms when the case is created or when it is resolved */
		DecreaseRemainingOn: OptionSet.EntitlementTemplate.DecreaseRemainingOn;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: string;
		/** Enter the date and time when the entitlement ends. */
		EndDate_UtcDateOnly: Date;
		/** Unique identifier for entity instances */
		EntitlementTemplateId: string;
		/** Entity type for which the entitlement template applies */
		entitytype: OptionSet.EntitlementTemplate.entitytype;
		/** Exchange rate for the currency associated with the contact with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Select the access someone will have to the knowledge base on the portal. */
		KbAccessLevel: OptionSet.EntitlementTemplate.KbAccessLevel;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a descriptive name for the entitlement template. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Tells whether case creation is restricted based on entitlement terms. */
		RestrictCaseCreation: boolean;
		/** Choose the service level agreement (SLA) associated with the entitlement. */
		SLAId: string;
		/** Enter the date and time when the entitlement begins. */
		StartDate_UtcDateOnly: Date;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type the total number of entitlement terms. */
		TotalTerms: number;
		/** Unique identifier of the currency associated with the contact. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Select whether the entitlement allocation is based on number of cases or number of hours. */
			readonly AllocationTypeCode: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Information about whether to decrease the remaining terms when the case is created or when it is resolved */
			readonly DecreaseRemainingOn: string;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			readonly Description: string;
			/** Enter the date and time when the entitlement ends. */
			readonly EndDate_UtcDateOnly: string;
			/** Unique identifier for entity instances */
			readonly EntitlementTemplateId: string;
			/** Entity type for which the entitlement template applies */
			readonly entitytype: string;
			/** Exchange rate for the currency associated with the contact with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Select the access someone will have to the knowledge base on the portal. */
			readonly KbAccessLevel: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name for the entitlement template. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Tells whether case creation is restricted based on entitlement terms. */
			readonly RestrictCaseCreation: string;
			/** Choose the service level agreement (SLA) associated with the entitlement. */
			readonly SLAId: string;
			/** Enter the date and time when the entitlement begins. */
			readonly StartDate_UtcDateOnly: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type the total number of entitlement terms. */
			readonly TotalTerms: string;
			/** Unique identifier of the currency associated with the contact. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace EntitlementTemplate {
		enum AllocationTypeCode {
			/** 0 */
			Number_of_cases,
			/** 1 */
			Number_of_hours
		}
		enum DecreaseRemainingOn {
			/** 1 */
			Case_Creation,
			/** 0 */
			Case_Resolution
		}
		enum entitytype {
			/** 0 */
			Case,
			/** 192350000 */
			Work_Order
		}
		enum KbAccessLevel {
			/** 2 */
			None,
			/** 1 */
			Premium,
			/** 0 */
			Standard
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