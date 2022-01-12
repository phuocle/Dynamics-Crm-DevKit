//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEntitlement {
		interface Header extends DevKit.Controls.IHeader {
			/** Choose a contact or account for which this entitlement has been defined. */
			CustomerId: DevKit.Controls.Lookup;
			/** Enter the date when the entitlement ends. */
			EndDate: DevKit.Controls.Date;
			/** Type the total number of entitlement terms that are left. */
			RemainingTerms: DevKit.Controls.Decimal;
			/** For internal use only. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			contacts: DevKit.Controls.Section;
			entitlementapplications: DevKit.Controls.Section;
			entitlementterms: DevKit.Controls.Section;
			entitlementterms_2: DevKit.Controls.Section;
			entitlementtermsInUCI: DevKit.Controls.Section;
			fieldservice: DevKit.Controls.Section;
			information: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
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
			/** Select the type of entitlement terms. */
			AllocationTypeCode: DevKit.Controls.OptionSet;
			/** Choose a contact or account for which this entitlement has been defined. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select whether to decrease the remaining terms when the case is created or when it is resolved. */
			DecreaseRemainingOn: DevKit.Controls.OptionSet;
			/** Type additional information to describe the Entitlement */
			Description: DevKit.Controls.String;
			/** Enter the date when the entitlement ends. */
			EndDate: DevKit.Controls.Date;
			/** Entity type for which the entitlement applies */
			entitytype: DevKit.Controls.OptionSet;
			/** Shows whether this entitlement is the default one for the specified customer. */
			IsDefault: DevKit.Controls.Boolean;
			/** The work order entities to which the entitlement is applicable. */
			msdyn_AppliesTo: DevKit.Controls.OptionSet;
			/** The priority level when considering which eligible entitlement to apply, where the lower the number the higher the priority. */
			msdyn_EntitlementPrioritization: DevKit.Controls.Integer;
			/** The percent discount the entitlement applies to the work order. */
			msdyn_PercentDiscount: DevKit.Controls.Double;
			/** The price list that the entitlement applies to the work order. */
			msdyn_PriceListToApply: DevKit.Controls.Lookup;
			/** Type a meaningful name for the entitlement. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the total number of entitlement terms that are left. */
			RemainingTerms: DevKit.Controls.Decimal;
			/** Tells whether case creation is restricted based on entitlement terms. */
			RestrictCaseCreation: DevKit.Controls.Boolean;
			/** Choose the service level agreement (SLA) associated with the entitlement. */
			SLAId: DevKit.Controls.Lookup;
			/** Enter the date when the entitlement starts. */
			StartDate: DevKit.Controls.Date;
			/** Type the total number of entitlement terms. */
			TotalTerms: DevKit.Controls.Decimal;
		}
		interface Navigation {
			navCases: DevKit.Controls.NavigationItem
		}
		interface Grid {
			editableEntitlementChannelGridControl: DevKit.Controls.Grid;
			grid_EntitlementApplications: DevKit.Controls.Grid;
			grid_EntitlementChannel: DevKit.Controls.Grid;
			grid_EntitlementContacts: DevKit.Controls.Grid;
			grid_EntitlementProducts: DevKit.Controls.Grid;
		}
	}
	class FormEntitlement extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Entitlement Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Entitlement */
		Body: DevKit.FormEntitlement.Body;
		/** The Header section of form Entitlement */
		Header: DevKit.FormEntitlement.Header;
		/** The Navigation of form Entitlement */
		Navigation: DevKit.FormEntitlement.Navigation;
		/** The Grid of form Entitlement */
		Grid: DevKit.FormEntitlement.Grid;
		/** The SidePanes of form Entitlement */
		SidePanes: DevKit.SidePanes;
	}
	class EntitlementApi {
		/**
		* DynamicsCrm.DevKit EntitlementApi
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
		/** Unique identifier for Account associated with Entitlement. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** Select the type of entitlement terms. */
		AllocationTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for Contact associated with Entitlement. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the entitlement. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose a contact or account for which this entitlement has been defined. */
		customerid_account: DevKit.WebApi.LookupValue;
		/** Choose a contact or account for which this entitlement has been defined. */
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Select whether to decrease the remaining terms when the case is created or when it is resolved. */
		DecreaseRemainingOn: DevKit.WebApi.OptionSetValue;
		/** Type additional information to describe the Entitlement */
		Description: DevKit.WebApi.StringValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Enter the date when the entitlement ends. */
		EndDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier for entity instances */
		EntitlementId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Entitlement Template associated with Entitlement. */
		EntitlementTemplateId: DevKit.WebApi.LookupValue;
		/** Entity type for which the entitlement applies */
		entitytype: DevKit.WebApi.OptionSetValue;
		/** Exchange rate for the currency associated with the contact with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows whether this entitlement is the default one for the specified customer. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Select the access someone will have to the knowledge base on the portal. */
		KbAccessLevel: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The work order entities to which the entitlement is applicable. */
		msdyn_AppliesTo: DevKit.WebApi.OptionSetValue;
		/** The priority level when considering which eligible entitlement to apply, where the lower the number the higher the priority. */
		msdyn_EntitlementPrioritization: DevKit.WebApi.IntegerValue;
		/** The percent discount the entitlement applies to the work order. */
		msdyn_PercentDiscount: DevKit.WebApi.DoubleValue;
		/** The price list that the entitlement applies to the work order. */
		msdyn_PriceListToApply: DevKit.WebApi.LookupValue;
		/** Type a meaningful name for the entitlement. */
		Name: DevKit.WebApi.StringValue;
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
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Type the total number of entitlement terms that are left. */
		RemainingTerms: DevKit.WebApi.DecimalValue;
		/** Tells whether case creation is restricted based on entitlement terms. */
		RestrictCaseCreation: DevKit.WebApi.BooleanValue;
		/** Choose the service level agreement (SLA) associated with the entitlement. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Enter the date when the entitlement starts. */
		StartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the reason code that explains the status of the entitlement. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type the total number of entitlement terms. */
		TotalTerms: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the currency associated with the contact. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Entitlement {
		enum AllocationTypeCode {
			/** 192350000 */
			Discount_and_Price_List,
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
		enum msdyn_AppliesTo {
			/** 690970002 */
			Both_Work_Order_Products_Services,
			/** 690970000 */
			Work_Order_Products,
			/** 690970001 */
			Work_Order_Services
		}
		enum StateCode {
			/** 1 */
			Active,
			/** 2 */
			Cancelled,
			/** 0 */
			Draft,
			/** 3 */
			Expired,
			/** 4 */
			Waiting
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Cancelled,
			/** 0 */
			Draft,
			/** 3 */
			Expired,
			/** 1200 */
			Waiting
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