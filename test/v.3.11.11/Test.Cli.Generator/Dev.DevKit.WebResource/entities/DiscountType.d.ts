//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDiscountType_Information {
		interface tab_general_Sections {
			description: DevKit.Controls.Section;
			discount_type_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the discount list. */
			Description: DevKit.Controls.String;
			/** Information about whether the discount list amounts are specified as monetary amounts or percentages. */
			IsAmountType: DevKit.Controls.Boolean;
			/** Name of the discount list. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the currency associated with the discount type. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the discount list. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormDiscountType_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form DiscountType_Information */
		Body: DevKit.FormDiscountType_Information.Body;
		/** The Footer section of form DiscountType_Information */
		Footer: DevKit.FormDiscountType_Information.Footer;
		/** The Process of form DiscountType_Information */
		Process: DevKit.FormDiscountType_Information.Process;
		/** The SidePanes of form DiscountType_Information */
		SidePanes: DevKit.SidePanes;
	}
	class DiscountTypeApi {
		/**
		* DynamicsCrm.DevKit DiscountTypeApi
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
		/** Unique identifier of the user who created the discount list. */
		readonly CreatedBy: string;
		/** Date and time when the discount list was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the discounttype. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the discount list. */
		Description: string;
		/** Unique identifier of the discount list. */
		DiscountTypeId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Information about whether the discount list amounts are specified as monetary amounts or percentages. */
		IsAmountType: boolean;
		/** Unique identifier of the user who last modified the discount list. */
		readonly ModifiedBy: string;
		/** Date and time when the discount list was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the discounttype. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the discount list. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the discount list. */
		StateCode: OptionSet.DiscountType.StateCode;
		/** Reason for the status of the discount list. */
		StatusCode: OptionSet.DiscountType.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the discount type. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the discount list. */
			readonly CreatedBy: string;
			/** Date and time when the discount list was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the discounttype. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the discount list. */
			readonly Description: string;
			/** Unique identifier of the discount list. */
			readonly DiscountTypeId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information about whether the discount list amounts are specified as monetary amounts or percentages. */
			readonly IsAmountType: string;
			/** Unique identifier of the user who last modified the discount list. */
			readonly ModifiedBy: string;
			/** Date and time when the discount list was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the discounttype. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the discount list. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the discount list. */
			readonly StateCode: string;
			/** Reason for the status of the discount list. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the discount type. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DiscountType {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 100001 */
			Active,
			/** 100002 */
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