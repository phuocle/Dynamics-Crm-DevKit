//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormContract_Detail {
		interface tab_general_Sections {
			contract_detail_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
			administration: DevKit.Form.Controls.ControlSection;
			notes: DevKit.Form.Controls.ControlSection;
			allotment_details: DevKit.Form.Controls.ControlSection;
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
			/** Enter the date when the contract line becomes active. */
			ActiveOn: DevKit.Form.Controls.ControlDate;
			/** Shows the number of cases or minutes remaining, based on the resolved cases logged to the contract line. */
			AllotmentsRemaining: DevKit.Form.Controls.ControlInteger;
			/** Shows the number of cases or minutes used in the resolved cases on the contract line. */
			AllotmentsUsed: DevKit.Form.Controls.ControlInteger;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type the discount amount for the contract line to deduct any negotiated or other savings from the net amount due. */
			Discount: DevKit.Form.Controls.ControlMoney;
			/** Type the discount rate that should be applied to the Total Price, for use in calculating the net amount due for the contract line. */
			DiscountPercentage: DevKit.Form.Controls.ControlDecimal;
			/** Enter the date when the contract line expires. The date is automatically filled with the contract date, but you can change it if required. */
			ExpiresOn: DevKit.Form.Controls.ControlDate;
			/** Type the number of units of the specified product or service that are eligible for support on the contract line. */
			InitialQuantity: DevKit.Form.Controls.ControlInteger;
			/** Shows the total charge to the customer for the contract line, calculated as the Total Price minus any discounts. */
			Net: DevKit.Form.Controls.ControlMoney;
			/** Type the total service charge for the contract line before any discounts are credited. */
			Price: DevKit.Form.Controls.ControlMoney;
			/** Choose the product that is eligible for services on the contract line. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the serial number for the product that is eligible for services on the contract line. */
			ProductSerialNumber: DevKit.Form.Controls.ControlString;
			/** Shows the cost per case or minute, calculated by dividing the Total Price value by the total number of cases or minutes allocated to the contract line. */
			Rate: DevKit.Form.Controls.ControlMoney;
			/** Choose the address for the customer account or contact where the services are provided. */
			ServiceAddress: DevKit.Form.Controls.ControlLookup;
			/** Type a title or name that describes the contract line. */
			Title: DevKit.Form.Controls.ControlString;
			/** Type the total number of minutes or cases allowed for the contract line. */
			TotalAllotments: DevKit.Form.Controls.ControlInteger;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormContract_Detail extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Contract_Detail
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Contract_Detail */
		Body: LuckyMokey.FormContract_Detail.Body;
	}
	namespace FormContractDetail_Information {
		interface tab_general_Sections {
			contract_detail_information: DevKit.Form.Controls.ControlSection;
			allotment_details: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_administration_Sections {
			customer_information: DevKit.Form.Controls.ControlSection;
			serial_number: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_administration extends DevKit.Form.Controls.IControlTab {
			Section: tab_administration_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			general: tab_general;
			administration: tab_administration;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter the date when the contract line becomes active. */
			ActiveOn: DevKit.Form.Controls.ControlDate;
			/** Shows the number of cases or minutes remaining, based on the resolved cases logged to the contract line. */
			AllotmentsRemaining: DevKit.Form.Controls.ControlInteger;
			/** Shows the number of cases or minutes used in the resolved cases on the contract line. */
			AllotmentsUsed: DevKit.Form.Controls.ControlInteger;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type the discount amount for the contract line to deduct any negotiated or other savings from the net amount due. */
			Discount: DevKit.Form.Controls.ControlMoney;
			/** Type the discount rate that should be applied to the Total Price, for use in calculating the net amount due for the contract line. */
			DiscountPercentage: DevKit.Form.Controls.ControlDecimal;
			/** Enter the date when the contract line expires. The date is automatically filled with the contract date, but you can change it if required. */
			ExpiresOn: DevKit.Form.Controls.ControlDate;
			/** Type the number of units of the specified product or service that are eligible for support on the contract line. */
			InitialQuantity: DevKit.Form.Controls.ControlInteger;
			/** Shows the total charge to the customer for the contract line, calculated as the Total Price minus any discounts. */
			Net: DevKit.Form.Controls.ControlMoney;
			/** Type the total service charge for the contract line before any discounts are credited. */
			Price: DevKit.Form.Controls.ControlMoney;
			/** Choose the product that is eligible for services on the contract line. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the serial number for the product that is eligible for services on the contract line. */
			ProductSerialNumber: DevKit.Form.Controls.ControlString;
			/** Shows the cost per case or minute, calculated by dividing the Total Price value by the total number of cases or minutes allocated to the contract line. */
			Rate: DevKit.Form.Controls.ControlMoney;
			/** Choose the address for the customer account or contact where the services are provided. */
			ServiceAddress: DevKit.Form.Controls.ControlLookup;
			/** Type a title or name that describes the contract line. */
			Title: DevKit.Form.Controls.ControlString;
			/** Type the total number of minutes or cases allowed for the contract line. */
			TotalAllotments: DevKit.Form.Controls.ControlInteger;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormContractDetail_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ContractDetail_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ContractDetail_Information */
		Body: LuckyMokey.FormContractDetail_Information.Body;
	}
	class ContractDetailApi {
		/**
		* DynamicsCrm.DevKit ContractDetailApi
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
		/** Enter the date when the contract line becomes active. */
		ActiveOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the number of minutes over the Total Allotments field that have been spent on resolved cases related to the contract line. */
		AllotmentsOverage: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the number of cases or minutes remaining, based on the resolved cases logged to the contract line. */
		AllotmentsRemaining: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the number of cases or minutes used in the resolved cases on the contract line. */
		AllotmentsUsed: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier for the contact associated with the contract line. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the contract line. */
		ContractDetailId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the contract associated with the contract line. */
		ContractId: DevKit.WebApi.LookupValue;
		/** Status of the contract. */
		ContractStateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Type the discount amount for the contract line to deduct any negotiated or other savings from the net amount due. */
		Discount: DevKit.WebApi.MoneyValue;
		/** Value of the Discount in base currency. */
		Discount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type the discount rate that should be applied to the Total Price, for use in calculating the net amount due for the contract line. */
		DiscountPercentage: DevKit.WebApi.DecimalValue;
		/** Days of the week and times for which the contract line item is effective. */
		EffectivityCalendar: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Enter the date when the contract line expires. The date is automatically filled with the contract date, but you can change it if required. */
		ExpiresOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type the number of units of the specified product or service that are eligible for support on the contract line. */
		InitialQuantity: DevKit.WebApi.IntegerValue;
		/** Type the line item number for the contract line to easily identify the contract line and make sure it's listed in the correct order in the parent contract. */
		LineItemOrder: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the total charge to the customer for the contract line, calculated as the Total Price minus any discounts. */
		Net: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Net in base currency. */
		Net_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Type the total service charge for the contract line before any discounts are credited. */
		Price: DevKit.WebApi.MoneyValue;
		/** Value of the Total Price in base currency. */
		Price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the product that is eligible for services on the contract line. */
		ProductId: DevKit.WebApi.LookupValue;
		/** Type the serial number for the product that is eligible for services on the contract line. */
		ProductSerialNumber: DevKit.WebApi.StringValue;
		/** Shows the cost per case or minute, calculated by dividing the Total Price value by the total number of cases or minutes allocated to the contract line. */
		Rate: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Rate in base currency. */
		Rate_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the address for the customer account or contact where the services are provided. */
		ServiceAddress: DevKit.WebApi.LookupValue;
		/** Select the unit type allotted in the contract line, such as cases or minutes, to determine the level of support. */
		ServiceContractUnitsCode: DevKit.WebApi.OptionSetValue;
		/** Shows whether the contract line is existing, renewed, canceled, or expired. You can't edit a contract line after it is saved, regardless of the status. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the contract line's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type a title or name that describes the contract line. */
		Title: DevKit.WebApi.StringValue;
		/** Type the total number of minutes or cases allowed for the contract line. */
		TotalAllotments: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
		UoMId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the unit group associated with the contract line. */
		UoMScheduleId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ContractDetail {
		enum ContractStateCode {
		}
		enum ServiceContractUnitsCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 0 */
			Existing,
			/** 1 */
			Renewed,
			/** 2 */
			Canceled,
			/** 3 */
			Expired
		}
		enum StatusCode {
			/** 1 */
			New,
			/** 2 */
			Renewed,
			/** 3 */
			Canceled,
			/** 4 */
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
//{'JsForm':['Contract Detail','Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}