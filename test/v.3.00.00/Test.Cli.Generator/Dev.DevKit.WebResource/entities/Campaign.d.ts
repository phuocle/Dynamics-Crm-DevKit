//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCampaign {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the expected revenue for the campaign for return on investment projections and post-campaign reporting. */
			ExpectedRevenue: DevKit.Controls.Money;
			/** Select whether the campaign is a template that can be copied when you create future campaigns. */
			IsTemplate: DevKit.Controls.Boolean;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the campaign's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_DETAILS_Sections {
			ADMINISTRATION: DevKit.Controls.Section;
			DESCRIPTION: DevKit.Controls.Section;
			FINANCIALS: DevKit.Controls.Section;
			RESPONSES: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_Sections {
			CAMPAIGN: DevKit.Controls.Section;
			CAMPAIGN_ACTIVITIES: DevKit.Controls.Section;
			LEADS: DevKit.Controls.Section;
			LISTS: DevKit.Controls.Section;
			OFFER: DevKit.Controls.Section;
			RELATED_PANE: DevKit.Controls.Section;
			SCHEDULES: DevKit.Controls.Section;
		}
		interface tab_DETAILS extends DevKit.Controls.ITab {
			Section: tab_DETAILS_Sections;
		}
		interface tab_SUMMARY extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_Sections;
		}
		interface Tabs {
			DETAILS: tab_DETAILS;
			SUMMARY: tab_SUMMARY;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the date when the campaign was closed or completed. */
			ActualEnd: DevKit.Controls.Date;
			/** Enter the actual start date and time for the campaign. */
			ActualStart: DevKit.Controls.Date;
			/** Type the amount budgeted for the campaign to define a limit for how much you can spend. */
			BudgetedCost: DevKit.Controls.Money;
			/** Type a number or other tracking code to identify the campaign. If no value is entered, a code will be generated automatically. */
			CodeName: DevKit.Controls.String;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type additional information to describe the campaign, such as the products or services offered or the targeted audience. */
			Description: DevKit.Controls.String;
			/** Type the expected response rate for the campaign as a full number between 0 and 100. */
			ExpectedResponse: DevKit.Controls.Integer;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type a name for the campaign so that it is identified correctly in lists. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type the objective of the campaign, including products, services, discounts, and pricing. */
			Objective: DevKit.Controls.String;
			/** Type the sum of any miscellaneous campaign costs not included in the campaign activities to make sure the actual cost of the campaign is calculated correctly. */
			OtherCost: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Enter the date when the campaign is scheduled to end. */
			ProposedEnd: DevKit.Controls.Date;
			/** Enter the date when the campaign is scheduled to start. */
			ProposedStart: DevKit.Controls.Date;
			TmpRegardingObjectId: DevKit.Controls.String;
			/** Shows the sum of the amounts entered in the Total Cost of Campaign Activities and Miscellaneous Costs fields. */
			TotalActualCost: DevKit.Controls.Money;
			/** Shows the sum of the values entered in the Actual Cost field on all campaign activities related to the campaign. */
			TotalCampaignActivityActualCost: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select the type of the campaign. */
			TypeCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Activities: DevKit.Controls.Grid;
			Leads: DevKit.Controls.Grid;
			Lists: DevKit.Controls.Grid;
			Responses: DevKit.Controls.Grid;
		}
	}
	class FormCampaign extends DevKit.IForm {
		/**
		* Campaign [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Campaign */
		Body: DevKit.FormCampaign.Body;
		/** The Header section of form Campaign */
		Header: DevKit.FormCampaign.Header;
		/** The Process of form Campaign */
		Process: DevKit.FormCampaign.Process;
		/** The Grid of form Campaign */
		Grid: DevKit.FormCampaign.Grid;
		/** The SidePanes of form Campaign */
		SidePanes: DevKit.SidePanes;
	}
	class CampaignApi {
		/**
		* DynamicsCrm.DevKit CampaignApi
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
		/** Enter the date when the campaign was closed or completed. */
		ActualEnd_UtcDateOnly: Date;
		/** Enter the actual start date and time for the campaign. */
		ActualStart_UtcDateOnly: Date;
		/** Type the amount budgeted for the campaign to define a limit for how much you can spend. */
		BudgetedCost: number;
		/** Value of the Budget Allocated in base currency. */
		readonly BudgetedCost_Base: number;
		/** Unique identifier of the campaign. */
		CampaignId: string;
		/** Type a number or other tracking code to identify the campaign. If no value is entered, a code will be generated automatically. */
		CodeName: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the campaign, such as the products or services offered or the targeted audience. */
		Description: string;
		/** The primary email address for the entity. */
		EmailAddress: string;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Type the expected response rate for the campaign as a full number between 0 and 100. */
		ExpectedResponse: number;
		/** Type the expected revenue for the campaign for return on investment projections and post-campaign reporting. */
		ExpectedRevenue: number;
		/** Value of the Estimated Revenue in base currency. */
		readonly ExpectedRevenue_Base: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Select whether the campaign is a template that can be copied when you create future campaigns. */
		IsTemplate: boolean;
		/** Type the promotional message or marketing copy for the campaign. */
		Message: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Describes whether campaign is opted out or not */
		msdyn_gdproptout: boolean;
		/** Type a name for the campaign so that it is identified correctly in lists. */
		Name: string;
		/** Type the objective of the campaign, including products, services, discounts, and pricing. */
		Objective: string;
		/** Type the sum of any miscellaneous campaign costs not included in the campaign activities to make sure the actual cost of the campaign is calculated correctly. */
		OtherCost: number;
		/** Value of the Miscellaneous Costs in base currency. */
		readonly OtherCost_Base: number;
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
		/** Choose the price list associated with this item to make sure the products associated with the campaign are offered at the correct prices. */
		PriceListId: string;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Type a promotional code to track sales related to the campaign or allow customers to redeem a discount offer. */
		PromotionCodeName: string;
		/** Enter the date when the campaign is scheduled to end. */
		ProposedEnd_UtcDateOnly: Date;
		/** Enter the date when the campaign is scheduled to start. */
		ProposedStart_UtcDateOnly: Date;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Shows the status of the campaign. By default, campaigns are active and can't be deactivated. */
		StateCode: OptionSet.Campaign.StateCode;
		/** Select the campaign's status. */
		StatusCode: OptionSet.Campaign.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		TmpRegardingObjectId: string;
		/** Shows the sum of the amounts entered in the Total Cost of Campaign Activities and Miscellaneous Costs fields. */
		readonly TotalActualCost: number;
		/** Value of the Total Cost of Campaign in base currency. */
		readonly TotalActualCost_Base: number;
		/** Shows the sum of the values entered in the Actual Cost field on all campaign activities related to the campaign. */
		readonly TotalCampaignActivityActualCost: number;
		/** Value of the Total Cost of Campaign Activities in base currency. */
		readonly TotalCampaignActivityActualCost_Base: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Select the type of the campaign. */
		TypeCode: OptionSet.Campaign.TypeCode;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Enter the date when the campaign was closed or completed. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Enter the actual start date and time for the campaign. */
			readonly ActualStart_UtcDateOnly: string;
			/** Type the amount budgeted for the campaign to define a limit for how much you can spend. */
			readonly BudgetedCost: string;
			/** Value of the Budget Allocated in base currency. */
			readonly BudgetedCost_Base: string;
			/** Unique identifier of the campaign. */
			readonly CampaignId: string;
			/** Type a number or other tracking code to identify the campaign. If no value is entered, a code will be generated automatically. */
			readonly CodeName: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the campaign, such as the products or services offered or the targeted audience. */
			readonly Description: string;
			/** The primary email address for the entity. */
			readonly EmailAddress: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Type the expected response rate for the campaign as a full number between 0 and 100. */
			readonly ExpectedResponse: string;
			/** Type the expected revenue for the campaign for return on investment projections and post-campaign reporting. */
			readonly ExpectedRevenue: string;
			/** Value of the Estimated Revenue in base currency. */
			readonly ExpectedRevenue_Base: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Select whether the campaign is a template that can be copied when you create future campaigns. */
			readonly IsTemplate: string;
			/** Type the promotional message or marketing copy for the campaign. */
			readonly Message: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Describes whether campaign is opted out or not */
			readonly msdyn_gdproptout: string;
			/** Type a name for the campaign so that it is identified correctly in lists. */
			readonly Name: string;
			/** Type the objective of the campaign, including products, services, discounts, and pricing. */
			readonly Objective: string;
			/** Type the sum of any miscellaneous campaign costs not included in the campaign activities to make sure the actual cost of the campaign is calculated correctly. */
			readonly OtherCost: string;
			/** Value of the Miscellaneous Costs in base currency. */
			readonly OtherCost_Base: string;
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
			/** Choose the price list associated with this item to make sure the products associated with the campaign are offered at the correct prices. */
			readonly PriceListId: string;
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Type a promotional code to track sales related to the campaign or allow customers to redeem a discount offer. */
			readonly PromotionCodeName: string;
			/** Enter the date when the campaign is scheduled to end. */
			readonly ProposedEnd_UtcDateOnly: string;
			/** Enter the date when the campaign is scheduled to start. */
			readonly ProposedStart_UtcDateOnly: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Shows the status of the campaign. By default, campaigns are active and can't be deactivated. */
			readonly StateCode: string;
			/** Select the campaign's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			readonly TmpRegardingObjectId: string;
			/** Shows the sum of the amounts entered in the Total Cost of Campaign Activities and Miscellaneous Costs fields. */
			readonly TotalActualCost: string;
			/** Value of the Total Cost of Campaign in base currency. */
			readonly TotalActualCost_Base: string;
			/** Shows the sum of the values entered in the Actual Cost field on all campaign activities related to the campaign. */
			readonly TotalCampaignActivityActualCost: string;
			/** Value of the Total Cost of Campaign Activities in base currency. */
			readonly TotalCampaignActivityActualCost_Base: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Select the type of the campaign. */
			readonly TypeCode: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Campaign {
		enum OwnerIdType {
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 4 */
			Canceled,
			/** 3 */
			Completed,
			/** 6 */
			Inactive,
			/** 2 */
			Launched,
			/** 0 */
			Proposed,
			/** 1 */
			Ready_To_Launch,
			/** 5 */
			Suspended
		}
		enum TypeCode {
			/** 1 */
			Advertisement,
			/** 4 */
			Co_branding,
			/** 2 */
			Direct_Marketing,
			/** 3 */
			Event,
			/** 5 */
			Other
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