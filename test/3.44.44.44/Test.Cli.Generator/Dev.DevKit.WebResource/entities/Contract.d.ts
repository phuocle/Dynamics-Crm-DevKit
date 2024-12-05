//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormContract {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the contract's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			billing_information: DevKit.Controls.Section;
			contract_type: DevKit.Controls.Section;
			contract_line: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			header: DevKit.Controls.Section;
			history: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the date when the contract becomes active. */
			ActiveOn: DevKit.Controls.Date;
			/** Select the customer account or contact to which the contract should be billed to provide a quick link to address and other customer details. */
			BillingCustomerId: DevKit.Controls.Lookup;
			/** Enter the end date for the contract's billing period to indicate the period for which the customer must pay for a service. */
			BillingEndOn: DevKit.Controls.Date;
			/** Select the billing schedule of the contract to indicate how often the customer should be invoiced. */
			BillingFrequencyCode: DevKit.Controls.OptionSet;
			/** Enter the start date for the contract's billing period to indicate the period for which the customer must pay for a service. This defaults to the same date that is selected in the Contract Start Date field. */
			BillingStartOn: DevKit.Controls.Date;
			/** Choose which address to send the invoice to. */
			BillToAddress: DevKit.Controls.Lookup;
			/** Shows the date and time when the contract was canceled. */
			CancelOn: DevKit.Controls.Date;
			/** Type additional information about the contract, such as the products or services provided to the customer. */
			ContractLanguage: DevKit.Controls.String;
			/** Shows the number for the contract for customer reference and searching capabilities. You cannot modify this number. */
			ContractNumber: DevKit.Controls.String;
			/** Select the level of service that should be provided for the contract based on your company's definition of bronze, silver, or gold. */
			ContractServiceLevelCode: DevKit.Controls.OptionSet;
			/** Choose the contract template that should be used to determine the terms of the contract, such as allotment type, available hours, and billing frequency. */
			ContractTemplateId: DevKit.Controls.Lookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			CustomerId: DevKit.Controls.Lookup;
			/** Shows for the duration of the contract, in days, based on the contract start and end dates. */
			Duration: DevKit.Controls.Integer;
			/** Enter the date when the contract expires. */
			ExpiresOn: DevKit.Controls.Date;
			/** Shows the total charge to the customer for the service contract, calculated as the sum of values in the Net field for each existing contract line related to the contract. */
			NetPrice: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Choose the original contract that this contract was created from. This information is used to track renewal history. */
			OriginatingContract: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the address for the customer account or contact where the services are provided. */
			ServiceAddress: DevKit.Controls.Lookup;
			/** Type a title or name for the contract that indicates the purpose of the contract. */
			Title: DevKit.Controls.String;
			/** Shows the total discount applied to the contract's service charges, calculated as the sum of values in the Discount fields for each existing contract line related to the contract. */
			TotalDiscount: DevKit.Controls.Money;
			/** Shows the total service charge for the contract, before any discounts are credited. This is calculated as the sum of values in the Total Price field for each existing contract line related to the contract. */
			TotalPrice: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the discounts entered on contract lines for this contract should be entered as a percentage or a fixed dollar value. */
			UseDiscountAsPercentage: DevKit.Controls.Boolean;
		}
		interface Navigation {
			contract_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			contract_adx_portalcomments: DevKit.Controls.NavigationItem,
			Contract_Appointments: DevKit.Controls.NavigationItem,
			contract_cases: DevKit.Controls.NavigationItem,
			Contract_Emails: DevKit.Controls.NavigationItem,
			contract_line_items: DevKit.Controls.NavigationItem,
			contract_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			contract_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			contract_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			contract_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			contract_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			contract_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			contract_msfp_alerts: DevKit.Controls.NavigationItem,
			contract_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			contract_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			contract_originating_contract: DevKit.Controls.NavigationItem,
			Contract_Phonecalls: DevKit.Controls.NavigationItem,
			Contract_ServiceAppointments: DevKit.Controls.NavigationItem,
			Contract_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Contract_lines: DevKit.Controls.Grid;
		}
	}
	class FormContract extends DevKit.IForm {
		/**
		* Contract [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contract */
		Body: DevKit.FormContract.Body;
		/** The Header section of form Contract */
		Header: DevKit.FormContract.Header;
		/** The Navigation of form Contract */
		Navigation: DevKit.FormContract.Navigation;
		/** The Grid of form Contract */
		Grid: DevKit.FormContract.Grid;
		/** The SidePanes of form Contract */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormContract_Information {
		interface tab_details_Sections {
			contract_type: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			history: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			billing_information: DevKit.Controls.Section;
			header: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			details: tab_details;
			general: tab_general;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the date when the contract becomes active. */
			ActiveOn: DevKit.Controls.Date;
			/** Select the customer account or contact to which the contract should be billed to provide a quick link to address and other customer details. */
			BillingCustomerId: DevKit.Controls.Lookup;
			/** Enter the end date for the contract's billing period to indicate the period for which the customer must pay for a service. */
			BillingEndOn: DevKit.Controls.Date;
			/** Select the billing schedule of the contract to indicate how often the customer should be invoiced. */
			BillingFrequencyCode: DevKit.Controls.OptionSet;
			/** Enter the start date for the contract's billing period to indicate the period for which the customer must pay for a service. This defaults to the same date that is selected in the Contract Start Date field. */
			BillingStartOn: DevKit.Controls.Date;
			/** Choose which address to send the invoice to. */
			BillToAddress: DevKit.Controls.Lookup;
			/** Shows the date and time when the contract was canceled. */
			CancelOn: DevKit.Controls.Date;
			/** Type additional information about the contract, such as the products or services provided to the customer. */
			ContractLanguage: DevKit.Controls.String;
			/** Shows the number for the contract for customer reference and searching capabilities. You cannot modify this number. */
			ContractNumber: DevKit.Controls.String;
			/** Select the level of service that should be provided for the contract based on your company's definition of bronze, silver, or gold. */
			ContractServiceLevelCode: DevKit.Controls.OptionSet;
			/** Choose the contract template that should be used to determine the terms of the contract, such as allotment type, available hours, and billing frequency. */
			ContractTemplateId: DevKit.Controls.Lookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			CustomerId: DevKit.Controls.Lookup;
			/** Shows for the duration of the contract, in days, based on the contract start and end dates. */
			Duration: DevKit.Controls.Integer;
			/** Enter the date when the contract expires. */
			ExpiresOn: DevKit.Controls.Date;
			/** Shows the total charge to the customer for the service contract, calculated as the sum of values in the Net field for each existing contract line related to the contract. */
			NetPrice: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Choose the original contract that this contract was created from. This information is used to track renewal history. */
			OriginatingContract: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the address for the customer account or contact where the services are provided. */
			ServiceAddress: DevKit.Controls.Lookup;
			/** Type a title or name for the contract that indicates the purpose of the contract. */
			Title: DevKit.Controls.String;
			/** Shows the total discount applied to the contract's service charges, calculated as the sum of values in the Discount fields for each existing contract line related to the contract. */
			TotalDiscount: DevKit.Controls.Money;
			/** Shows the total service charge for the contract, before any discounts are credited. This is calculated as the sum of values in the Total Price field for each existing contract line related to the contract. */
			TotalPrice: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the discounts entered on contract lines for this contract should be entered as a percentage or a fixed dollar value. */
			UseDiscountAsPercentage: DevKit.Controls.Boolean;
		}
		interface Navigation {
			contract_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			contract_adx_portalcomments: DevKit.Controls.NavigationItem,
			Contract_Appointments: DevKit.Controls.NavigationItem,
			contract_cases: DevKit.Controls.NavigationItem,
			Contract_Emails: DevKit.Controls.NavigationItem,
			contract_line_items: DevKit.Controls.NavigationItem,
			contract_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			contract_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			contract_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			contract_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			contract_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			contract_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			contract_msfp_alerts: DevKit.Controls.NavigationItem,
			contract_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			contract_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			contract_originating_contract: DevKit.Controls.NavigationItem,
			Contract_Phonecalls: DevKit.Controls.NavigationItem,
			Contract_ServiceAppointments: DevKit.Controls.NavigationItem,
			Contract_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormContract_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contract_Information */
		Body: DevKit.FormContract_Information.Body;
		/** The Navigation of form Contract_Information */
		Navigation: DevKit.FormContract_Information.Navigation;
		/** The SidePanes of form Contract_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Unique identifier of the account with which the contract is associated. */
		readonly AccountId: string;
		/** Enter the date when the contract becomes active. */
		ActiveOn_UtcDateOnly: Date;
		/** Type of allotment that the contract supports. */
		AllotmentTypeCode: OptionSet.Contract.AllotmentTypeCode;
		/** Unique identifier of the account to which the contract is to be billed. */
		readonly BillingAccountId: string;
		/** Unique identifier of the contact to whom the contract is to be billed. */
		readonly BillingContactId: string;
		/** Select the customer account or contact to which the contract should be billed to provide a quick link to address and other customer details. */
		billingcustomerid_account: string;
		/** Select the customer account or contact to which the contract should be billed to provide a quick link to address and other customer details. */
		billingcustomerid_contact: string;
		/** Enter the end date for the contract's billing period to indicate the period for which the customer must pay for a service. */
		BillingEndOn_UtcDateOnly: Date;
		/** Select the billing schedule of the contract to indicate how often the customer should be invoiced. */
		BillingFrequencyCode: OptionSet.Contract.BillingFrequencyCode;
		/** Enter the start date for the contract's billing period to indicate the period for which the customer must pay for a service. This defaults to the same date that is selected in the Contract Start Date field. */
		BillingStartOn_UtcDateOnly: Date;
		/** Choose which address to send the invoice to. */
		BillToAddress: string;
		/** Shows the date and time when the contract was canceled. */
		readonly CancelOn_UtcDateOnly: Date;
		/** Unique identifier of the contact specified for the contract. */
		readonly ContactId: string;
		/** Unique identifier of the contract. */
		ContractId: string;
		/** Type additional information about the contract, such as the products or services provided to the customer. */
		ContractLanguage: string;
		/** Shows the number for the contract for customer reference and searching capabilities. You cannot modify this number. */
		ContractNumber: string;
		/** Select the level of service that should be provided for the contract based on your company's definition of bronze, silver, or gold. */
		ContractServiceLevelCode: OptionSet.Contract.ContractServiceLevelCode;
		/** Shows the abbreviation of the contract template selected when the contract is created. */
		readonly ContractTemplateAbbreviation: string;
		/** Choose the contract template that should be used to determine the terms of the contract, such as allotment type, available hours, and billing frequency. */
		ContractTemplateId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
		customerid_account: string;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
		customerid_contact: string;
		/** Shows for the duration of the contract, in days, based on the contract start and end dates. */
		readonly Duration: number;
		/** Days of the week and times during which customer service support is available for the duration of the contract. */
		EffectivityCalendar: string;
		/** The primary email address for the entity. */
		EmailAddress: string;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Enter the date when the contract expires. */
		ExpiresOn_UtcDateOnly: Date;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the total charge to the customer for the service contract, calculated as the sum of values in the Net field for each existing contract line related to the contract. */
		readonly NetPrice: number;
		/** Value of the Net Price in base currency. */
		readonly NetPrice_Base: number;
		/** Choose the original contract that this contract was created from. This information is used to track renewal history. */
		OriginatingContract: string;
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
		/** Choose the address for the customer account or contact where the services are provided. */
		ServiceAddress: string;
		/** Shows whether the contract is in draft, invoiced, active, on hold, canceled, or expired. You can edit only the contracts that are in draft status. */
		StateCode: OptionSet.Contract.StateCode;
		/** Select the contract's status. */
		StatusCode: OptionSet.Contract.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type a title or name for the contract that indicates the purpose of the contract. */
		Title: string;
		/** Shows the total discount applied to the contract's service charges, calculated as the sum of values in the Discount fields for each existing contract line related to the contract. */
		readonly TotalDiscount: number;
		/** Value of the Total Discount in base currency. */
		readonly TotalDiscount_Base: number;
		/** Shows the total service charge for the contract, before any discounts are credited. This is calculated as the sum of values in the Total Price field for each existing contract line related to the contract. */
		readonly TotalPrice: number;
		/** Value of the Total Price in base currency. */
		readonly TotalPrice_Base: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Select whether the discounts entered on contract lines for this contract should be entered as a percentage or a fixed dollar value. */
		UseDiscountAsPercentage: boolean;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the account with which the contract is associated. */
			readonly AccountId: string;
			/** Enter the date when the contract becomes active. */
			readonly ActiveOn_UtcDateOnly: string;
			/** Type of allotment that the contract supports. */
			readonly AllotmentTypeCode: string;
			/** Unique identifier of the account to which the contract is to be billed. */
			readonly BillingAccountId: string;
			/** Unique identifier of the contact to whom the contract is to be billed. */
			readonly BillingContactId: string;
			/** Select the customer account or contact to which the contract should be billed to provide a quick link to address and other customer details. */
			readonly billingcustomerid_account: string;
			/** Select the customer account or contact to which the contract should be billed to provide a quick link to address and other customer details. */
			readonly billingcustomerid_contact: string;
			/** Enter the end date for the contract's billing period to indicate the period for which the customer must pay for a service. */
			readonly BillingEndOn_UtcDateOnly: string;
			/** Select the billing schedule of the contract to indicate how often the customer should be invoiced. */
			readonly BillingFrequencyCode: string;
			/** Enter the start date for the contract's billing period to indicate the period for which the customer must pay for a service. This defaults to the same date that is selected in the Contract Start Date field. */
			readonly BillingStartOn_UtcDateOnly: string;
			/** Choose which address to send the invoice to. */
			readonly BillToAddress: string;
			/** Shows the date and time when the contract was canceled. */
			readonly CancelOn_UtcDateOnly: string;
			/** Unique identifier of the contact specified for the contract. */
			readonly ContactId: string;
			/** Unique identifier of the contract. */
			readonly ContractId: string;
			/** Type additional information about the contract, such as the products or services provided to the customer. */
			readonly ContractLanguage: string;
			/** Shows the number for the contract for customer reference and searching capabilities. You cannot modify this number. */
			readonly ContractNumber: string;
			/** Select the level of service that should be provided for the contract based on your company's definition of bronze, silver, or gold. */
			readonly ContractServiceLevelCode: string;
			/** Shows the abbreviation of the contract template selected when the contract is created. */
			readonly ContractTemplateAbbreviation: string;
			/** Choose the contract template that should be used to determine the terms of the contract, such as allotment type, available hours, and billing frequency. */
			readonly ContractTemplateId: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			readonly customerid_account: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			readonly customerid_contact: string;
			/** Shows for the duration of the contract, in days, based on the contract start and end dates. */
			readonly Duration: string;
			/** Days of the week and times during which customer service support is available for the duration of the contract. */
			readonly EffectivityCalendar: string;
			/** The primary email address for the entity. */
			readonly EmailAddress: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Enter the date when the contract expires. */
			readonly ExpiresOn_UtcDateOnly: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the total charge to the customer for the service contract, calculated as the sum of values in the Net field for each existing contract line related to the contract. */
			readonly NetPrice: string;
			/** Value of the Net Price in base currency. */
			readonly NetPrice_Base: string;
			/** Choose the original contract that this contract was created from. This information is used to track renewal history. */
			readonly OriginatingContract: string;
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
			/** Choose the address for the customer account or contact where the services are provided. */
			readonly ServiceAddress: string;
			/** Shows whether the contract is in draft, invoiced, active, on hold, canceled, or expired. You can edit only the contracts that are in draft status. */
			readonly StateCode: string;
			/** Select the contract's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type a title or name for the contract that indicates the purpose of the contract. */
			readonly Title: string;
			/** Shows the total discount applied to the contract's service charges, calculated as the sum of values in the Discount fields for each existing contract line related to the contract. */
			readonly TotalDiscount: string;
			/** Value of the Total Discount in base currency. */
			readonly TotalDiscount_Base: string;
			/** Shows the total service charge for the contract, before any discounts are credited. This is calculated as the sum of values in the Total Price field for each existing contract line related to the contract. */
			readonly TotalPrice: string;
			/** Value of the Total Price in base currency. */
			readonly TotalPrice_Base: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Select whether the discounts entered on contract lines for this contract should be entered as a percentage or a fixed dollar value. */
			readonly UseDiscountAsPercentage: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Contract {
		enum AllotmentTypeCode {
			/** 3 */
			Coverage_Dates,
			/** 1 */
			Number_of_Cases,
			/** 2 */
			Time
		}
		enum BillingCustomerIdType {
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
		enum ContractServiceLevelCode {
			/** 3 */
			Bronze,
			/** 1 */
			Gold,
			/** 2 */
			Silver
		}
		enum CustomerIdType {
		}
		enum StateCode {
			/** 2 */
			Active,
			/** 4 */
			Canceled,
			/** 0 */
			Draft,
			/** 5 */
			Expired,
			/** 1 */
			Invoiced,
			/** 3 */
			On_Hold
		}
		enum StatusCode {
			/** 3 */
			Active,
			/** 5 */
			Canceled,
			/** 1 */
			Draft,
			/** 6 */
			Expired,
			/** 2 */
			Invoiced,
			/** 4 */
			On_Hold
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