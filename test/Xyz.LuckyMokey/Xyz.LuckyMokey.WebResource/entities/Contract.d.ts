//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormContract {
		interface Header {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the contract's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			header: DevKit.Form.Controls.ControlSection;
			contract_type: DevKit.Form.Controls.ControlSection;
			history: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
			notes: DevKit.Form.Controls.ControlSection;
			contract_line: DevKit.Form.Controls.ControlSection;
			billing_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			Contract_lines: DevKit.Form.Controls.ControlGrid;
			/** Enter the date when the contract becomes active. */
			ActiveOn: DevKit.Form.Controls.ControlDate;
			/** Select the customer account or contact to which the contract should be billed to provide a quick link to address and other customer details. */
			BillingCustomerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the end date for the contract's billing period to indicate the period for which the customer must pay for a service. */
			BillingEndOn: DevKit.Form.Controls.ControlDate;
			/** Select the billing schedule of the contract to indicate how often the customer should be invoiced. */
			BillingFrequencyCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the start date for the contract's billing period to indicate the period for which the customer must pay for a service. This defaults to the same date that is selected in the Contract Start Date field. */
			BillingStartOn: DevKit.Form.Controls.ControlDate;
			/** Choose which address to send the invoice to. */
			BillToAddress: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the contract was canceled. */
			CancelOn: DevKit.Form.Controls.ControlDate;
			/** Type additional information about the contract, such as the products or services provided to the customer. */
			ContractLanguage: DevKit.Form.Controls.ControlString;
			/** Shows the number for the contract for customer reference and searching capabilities. You cannot modify this number. */
			ContractNumber: DevKit.Form.Controls.ControlString;
			/** Select the level of service that should be provided for the contract based on your company's definition of bronze, silver, or gold. */
			ContractServiceLevelCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the contract template that should be used to determine the terms of the contract, such as allotment type, available hours, and billing frequency. */
			ContractTemplateId: DevKit.Form.Controls.ControlLookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Shows for the duration of the contract, in days, based on the contract start and end dates. */
			Duration: DevKit.Form.Controls.ControlInteger;
			/** Enter the date when the contract expires. */
			ExpiresOn: DevKit.Form.Controls.ControlDate;
			/** Shows the total charge to the customer for the service contract, calculated as the sum of values in the Net field for each existing contract line related to the contract. */
			NetPrice: DevKit.Form.Controls.ControlMoney;
			/** Choose the original contract that this contract was created from. This information is used to track renewal history. */
			OriginatingContract: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the address for the customer account or contact where the services are provided. */
			ServiceAddress: DevKit.Form.Controls.ControlLookup;
			/** Type a title or name for the contract that indicates the purpose of the contract. */
			Title: DevKit.Form.Controls.ControlString;
			/** Shows the total discount applied to the contract's service charges, calculated as the sum of values in the Discount fields for each existing contract line related to the contract. */
			TotalDiscount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total service charge for the contract, before any discounts are credited. This is calculated as the sum of values in the Total Price field for each existing contract line related to the contract. */
			TotalPrice: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the discounts entered on contract lines for this contract should be entered as a percentage or a fixed dollar value. */
			UseDiscountAsPercentage: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormContract extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Contract
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Contract */
		Body: LuckyMokey.FormContract.Body;
		/** The Header section of form Contract */
		Header: LuckyMokey.FormContract.Header;
	}
	namespace FormContract_Information {
		interface tab_general_Sections {
			header: DevKit.Form.Controls.ControlSection;
			billing_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_details_Sections {
			contract_type: DevKit.Form.Controls.ControlSection;
			history: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_details extends DevKit.Form.Controls.IControlTab {
			Section: tab_details_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			general: tab_general;
			details: tab_details;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter the date when the contract becomes active. */
			ActiveOn: DevKit.Form.Controls.ControlDate;
			/** Select the customer account or contact to which the contract should be billed to provide a quick link to address and other customer details. */
			BillingCustomerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the end date for the contract's billing period to indicate the period for which the customer must pay for a service. */
			BillingEndOn: DevKit.Form.Controls.ControlDate;
			/** Select the billing schedule of the contract to indicate how often the customer should be invoiced. */
			BillingFrequencyCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the start date for the contract's billing period to indicate the period for which the customer must pay for a service. This defaults to the same date that is selected in the Contract Start Date field. */
			BillingStartOn: DevKit.Form.Controls.ControlDate;
			/** Choose which address to send the invoice to. */
			BillToAddress: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the contract was canceled. */
			CancelOn: DevKit.Form.Controls.ControlDate;
			/** Type additional information about the contract, such as the products or services provided to the customer. */
			ContractLanguage: DevKit.Form.Controls.ControlString;
			/** Shows the number for the contract for customer reference and searching capabilities. You cannot modify this number. */
			ContractNumber: DevKit.Form.Controls.ControlString;
			/** Select the level of service that should be provided for the contract based on your company's definition of bronze, silver, or gold. */
			ContractServiceLevelCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the contract template that should be used to determine the terms of the contract, such as allotment type, available hours, and billing frequency. */
			ContractTemplateId: DevKit.Form.Controls.ControlLookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Shows for the duration of the contract, in days, based on the contract start and end dates. */
			Duration: DevKit.Form.Controls.ControlInteger;
			/** Enter the date when the contract expires. */
			ExpiresOn: DevKit.Form.Controls.ControlDate;
			/** Shows the total charge to the customer for the service contract, calculated as the sum of values in the Net field for each existing contract line related to the contract. */
			NetPrice: DevKit.Form.Controls.ControlMoney;
			/** Choose the original contract that this contract was created from. This information is used to track renewal history. */
			OriginatingContract: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the address for the customer account or contact where the services are provided. */
			ServiceAddress: DevKit.Form.Controls.ControlLookup;
			/** Type a title or name for the contract that indicates the purpose of the contract. */
			Title: DevKit.Form.Controls.ControlString;
			/** Shows the total discount applied to the contract's service charges, calculated as the sum of values in the Discount fields for each existing contract line related to the contract. */
			TotalDiscount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total service charge for the contract, before any discounts are credited. This is calculated as the sum of values in the Total Price field for each existing contract line related to the contract. */
			TotalPrice: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the discounts entered on contract lines for this contract should be entered as a percentage or a fixed dollar value. */
			UseDiscountAsPercentage: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormContract_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Contract_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Contract_Information */
		Body: LuckyMokey.FormContract_Information.Body;
	}
	class ContractApi {
		/**
		* DynamicsCrm.DevKit ContractApi
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
		/** Unique identifier of the account with which the contract is associated. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the date when the contract becomes active. */
		ActiveOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type of allotment that the contract supports. */
		AllotmentTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the account to which the contract is to be billed. */
		BillingAccountId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the contact to whom the contract is to be billed. */
		BillingContactId: DevKit.WebApi.LookupValueReadonly;
		billingcustomerid_account: DevKit.WebApi.LookupValue;
		billingcustomerid_contact: DevKit.WebApi.LookupValue;
		/** Enter the end date for the contract's billing period to indicate the period for which the customer must pay for a service. */
		BillingEndOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the billing schedule of the contract to indicate how often the customer should be invoiced. */
		BillingFrequencyCode: DevKit.WebApi.OptionSetValue;
		/** Enter the start date for the contract's billing period to indicate the period for which the customer must pay for a service. This defaults to the same date that is selected in the Contract Start Date field. */
		BillingStartOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Choose which address to send the invoice to. */
		BillToAddress: DevKit.WebApi.LookupValue;
		/** Shows the date and time when the contract was canceled. */
		CancelOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the contact specified for the contract. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the contract. */
		ContractId: DevKit.WebApi.GuidValue;
		/** Type additional information about the contract, such as the products or services provided to the customer. */
		ContractLanguage: DevKit.WebApi.StringValue;
		/** Shows the number for the contract for customer reference and searching capabilities. You cannot modify this number. */
		ContractNumber: DevKit.WebApi.StringValue;
		/** Select the level of service that should be provided for the contract based on your company's definition of bronze, silver, or gold. */
		ContractServiceLevelCode: DevKit.WebApi.OptionSetValue;
		/** Shows the abbreviation of the contract template selected when the contract is created. */
		ContractTemplateAbbreviation: DevKit.WebApi.StringValueReadonly;
		/** Choose the contract template that should be used to determine the terms of the contract, such as allotment type, available hours, and billing frequency. */
		ContractTemplateId: DevKit.WebApi.LookupValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Shows for the duration of the contract, in days, based on the contract start and end dates. */
		Duration: DevKit.WebApi.IntegerValueReadonly;
		/** Days of the week and times during which customer service support is available for the duration of the contract. */
		EffectivityCalendar: DevKit.WebApi.StringValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Enter the date when the contract expires. */
		ExpiresOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the total charge to the customer for the service contract, calculated as the sum of values in the Net field for each existing contract line related to the contract. */
		NetPrice: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Net Price in base currency. */
		NetPrice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the original contract that this contract was created from. This information is used to track renewal history. */
		OriginatingContract: DevKit.WebApi.LookupValue;
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
		/** Choose the address for the customer account or contact where the services are provided. */
		ServiceAddress: DevKit.WebApi.LookupValue;
		/** Shows whether the contract is in draft, invoiced, active, on hold, canceled, or expired. You can edit only the contracts that are in draft status. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the contract's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type a title or name for the contract that indicates the purpose of the contract. */
		Title: DevKit.WebApi.StringValue;
		/** Shows the total discount applied to the contract's service charges, calculated as the sum of values in the Discount fields for each existing contract line related to the contract. */
		TotalDiscount: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Total Discount in base currency. */
		TotalDiscount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total service charge for the contract, before any discounts are credited. This is calculated as the sum of values in the Total Price field for each existing contract line related to the contract. */
		TotalPrice: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Total Price in base currency. */
		TotalPrice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Select whether the discounts entered on contract lines for this contract should be entered as a percentage or a fixed dollar value. */
		UseDiscountAsPercentage: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Contract {
		enum AllotmentTypeCode {
			/** 1 */
			Number_of_Cases,
			/** 2 */
			Time,
			/** 3 */
			Coverage_Dates
		}
		enum BillingFrequencyCode {
			/** 1 */
			Monthly,
			/** 2 */
			Bimonthly,
			/** 3 */
			Quarterly,
			/** 4 */
			Semiannually,
			/** 5 */
			Annually
		}
		enum ContractServiceLevelCode {
			/** 1 */
			Gold,
			/** 2 */
			Silver,
			/** 3 */
			Bronze
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Invoiced,
			/** 2 */
			Active,
			/** 3 */
			On_Hold,
			/** 4 */
			Canceled,
			/** 5 */
			Expired
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Invoiced,
			/** 3 */
			Active,
			/** 4 */
			On_Hold,
			/** 5 */
			Canceled,
			/** 6 */
			Expired
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
//{'JsForm':['Contract','Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}