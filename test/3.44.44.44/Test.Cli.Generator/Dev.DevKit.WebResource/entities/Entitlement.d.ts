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
			entitlement_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			entitlement_adx_portalcomments: DevKit.Controls.NavigationItem,
			entitlement_Appointments: DevKit.Controls.NavigationItem,
			entitlement_cases: DevKit.Controls.NavigationItem,
			entitlement_Emails: DevKit.Controls.NavigationItem,
			entitlement_entitlementchannel_EntitlementId: DevKit.Controls.NavigationItem,
			entitlement_IncidentResolutions: DevKit.Controls.NavigationItem,
			entitlement_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			entitlement_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			entitlement_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			entitlement_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			entitlement_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			entitlement_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			entitlement_msfp_alerts: DevKit.Controls.NavigationItem,
			entitlement_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			entitlement_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			entitlement_OpportunityCloses: DevKit.Controls.NavigationItem,
			entitlement_OrderCloses: DevKit.Controls.NavigationItem,
			entitlement_PhoneCalls: DevKit.Controls.NavigationItem,
			entitlement_QuoteCloses: DevKit.Controls.NavigationItem,
			entitlement_ServiceAppointments: DevKit.Controls.NavigationItem,
			entitlement_Tasks: DevKit.Controls.NavigationItem,
			msdyn_entitlement_msdyn_entitlementapplication_entitlement: DevKit.Controls.NavigationItem,
			msdyn_entitlement_msdyn_workorderproduct_Entitlement: DevKit.Controls.NavigationItem,
			msdyn_entitlement_msdyn_workorderservice_entitlement: DevKit.Controls.NavigationItem
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
		* Entitlement [Main Form]
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
		/** Unique identifier for Account associated with Entitlement. */
		readonly AccountId: string;
		/** Select the type of entitlement terms. */
		AllocationTypeCode: OptionSet.Entitlement.AllocationTypeCode;
		/** Unique identifier for Contact associated with Entitlement. */
		readonly ContactId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the entitlement. */
		readonly CreatedOnBehalfBy: string;
		/** Choose a contact or account for which this entitlement has been defined. */
		customerid_account: string;
		/** Choose a contact or account for which this entitlement has been defined. */
		customerid_contact: string;
		/** Select whether to decrease the remaining terms when the case is created or when it is resolved. */
		DecreaseRemainingOn: OptionSet.Entitlement.DecreaseRemainingOn;
		/** Type additional information to describe the Entitlement */
		Description: string;
		/** The primary email address for the entity. */
		EmailAddress: string;
		/** Enter the date when the entitlement ends. */
		EndDate_UtcDateOnly: Date;
		/** Unique identifier for entity instances */
		EntitlementId: string;
		/** Unique identifier for Entitlement Template associated with Entitlement. */
		EntitlementTemplateId: string;
		/** Entity type for which the entitlement applies */
		entitytype: OptionSet.Entitlement.entitytype;
		/** Exchange rate for the currency associated with the contact with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows whether this entitlement is the default one for the specified customer. */
		IsDefault: boolean;
		/** Select the access someone will have to the knowledge base on the portal. */
		KbAccessLevel: OptionSet.Entitlement.KbAccessLevel;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The work order entities to which the entitlement is applicable. */
		msdyn_AppliesTo: OptionSet.Entitlement.msdyn_AppliesTo;
		/** The priority level when considering which eligible entitlement to apply, where the lower the number the higher the priority. */
		msdyn_EntitlementPrioritization: number;
		/** The percent discount the entitlement applies to the work order. */
		msdyn_PercentDiscount: number;
		/** The price list that the entitlement applies to the work order. */
		msdyn_PriceListToApply: string;
		/** Type a meaningful name for the entitlement. */
		Name: string;
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
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Type the total number of entitlement terms that are left. */
		RemainingTerms: number;
		/** Tells whether case creation is restricted based on entitlement terms. */
		RestrictCaseCreation: boolean;
		/** Choose the service level agreement (SLA) associated with the entitlement. */
		SLAId: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Enter the date when the entitlement starts. */
		StartDate_UtcDateOnly: Date;
		/** For internal use only. */
		StateCode: OptionSet.Entitlement.StateCode;
		/** Select the reason code that explains the status of the entitlement. */
		StatusCode: OptionSet.Entitlement.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type the total number of entitlement terms. */
		TotalTerms: number;
		/** Unique identifier of the currency associated with the contact. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier for Account associated with Entitlement. */
			readonly AccountId: string;
			/** Select the type of entitlement terms. */
			readonly AllocationTypeCode: string;
			/** Unique identifier for Contact associated with Entitlement. */
			readonly ContactId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the entitlement. */
			readonly CreatedOnBehalfBy: string;
			/** Choose a contact or account for which this entitlement has been defined. */
			readonly customerid_account: string;
			/** Choose a contact or account for which this entitlement has been defined. */
			readonly customerid_contact: string;
			/** Select whether to decrease the remaining terms when the case is created or when it is resolved. */
			readonly DecreaseRemainingOn: string;
			/** Type additional information to describe the Entitlement */
			readonly Description: string;
			/** The primary email address for the entity. */
			readonly EmailAddress: string;
			/** Enter the date when the entitlement ends. */
			readonly EndDate_UtcDateOnly: string;
			/** Unique identifier for entity instances */
			readonly EntitlementId: string;
			/** Unique identifier for Entitlement Template associated with Entitlement. */
			readonly EntitlementTemplateId: string;
			/** Entity type for which the entitlement applies */
			readonly entitytype: string;
			/** Exchange rate for the currency associated with the contact with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows whether this entitlement is the default one for the specified customer. */
			readonly IsDefault: string;
			/** Select the access someone will have to the knowledge base on the portal. */
			readonly KbAccessLevel: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The work order entities to which the entitlement is applicable. */
			readonly msdyn_AppliesTo: string;
			/** The priority level when considering which eligible entitlement to apply, where the lower the number the higher the priority. */
			readonly msdyn_EntitlementPrioritization: string;
			/** The percent discount the entitlement applies to the work order. */
			readonly msdyn_PercentDiscount: string;
			/** The price list that the entitlement applies to the work order. */
			readonly msdyn_PriceListToApply: string;
			/** Type a meaningful name for the entitlement. */
			readonly Name: string;
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
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Type the total number of entitlement terms that are left. */
			readonly RemainingTerms: string;
			/** Tells whether case creation is restricted based on entitlement terms. */
			readonly RestrictCaseCreation: string;
			/** Choose the service level agreement (SLA) associated with the entitlement. */
			readonly SLAId: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Enter the date when the entitlement starts. */
			readonly StartDate_UtcDateOnly: string;
			/** For internal use only. */
			readonly StateCode: string;
			/** Select the reason code that explains the status of the entitlement. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type the total number of entitlement terms. */
			readonly TotalTerms: string;
			/** Unique identifier of the currency associated with the contact. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
		enum CustomerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}