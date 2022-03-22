//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMarketing_List {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
			LastUsedOn: DevKit.Controls.Date;
			/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
			LockStatus: DevKit.Controls.Boolean;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_members_Sections {
			listoperationssection: DevKit.Controls.Section;
			members: DevKit.Controls.Section;
			ucimembers: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			campaigns: DevKit.Controls.Section;
			information: DevKit.Controls.Section;
			quickcampaigns: DevKit.Controls.Section;
		}
		interface tab_members extends DevKit.Controls.ITab {
			Section: tab_members_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			members: tab_members;
			notes: tab_notes;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Type the cost of obtaining the marketing list. */
			Cost: DevKit.Controls.Money;
			/** Select the type of members that this marketing list will contain: accounts, contacts, or leads. Each list can have only one member type and this value can't be changed after the marketing list is created. */
			CreatedFromCode: DevKit.Controls.OptionSet;
			/** Type additional information to describe the marketing list, such as the intended use or date of the last update. */
			Description: DevKit.Controls.String;
			/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
			LastUsedOn: DevKit.Controls.Date;
			/** Type a name for the marketing list so that it is identified correctly in lists. */
			ListName: DevKit.Controls.String;
			/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
			LockStatus: DevKit.Controls.Boolean;
			/** Type of the members that can be stored in the marketing list. Please do not remove from form! */
			MemberType: DevKit.Controls.Integer;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the intended use of the marketing list to identify its key segments, target offers, or business group. */
			Purpose: DevKit.Controls.String;
			/** Query used for retrieving members of marketing list. */
			Query: DevKit.Controls.String;
			/** Type the source of the marketing list, such as a third-party supplier or internal database. */
			Source: DevKit.Controls.String;
			/** Shows whether the marketing list is active or inactive. Inactive marketing lists are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Controls.OptionSet;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether you want the marketing list to be static or dynamic. The members in a static marketing list are unchanging. A dynamic marketing list is based on a dynamic query that retrieves the updated list of members */
			Type: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			accounts: DevKit.Controls.Grid;
			accountsUCI: DevKit.Controls.Grid;
			Campaigns: DevKit.Controls.Grid;
			contacts: DevKit.Controls.Grid;
			contactsUCI: DevKit.Controls.Grid;
			dynamic_accounts: DevKit.Controls.Grid;
			dynamic_contacts: DevKit.Controls.Grid;
			dynamic_leads: DevKit.Controls.Grid;
			leads: DevKit.Controls.Grid;
			leadsUCI: DevKit.Controls.Grid;
			ListOperationsSubGrid: DevKit.Controls.Grid;
			QuickCampaigns: DevKit.Controls.Grid;
		}
	}
	class FormMarketing_List extends DevKit.IForm {
		/**
		* Marketing List [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Marketing_List */
		Body: DevKit.FormMarketing_List.Body;
		/** The Header section of form Marketing_List */
		Header: DevKit.FormMarketing_List.Header;
		/** The Process of form Marketing_List */
		Process: DevKit.FormMarketing_List.Process;
		/** The Grid of form Marketing_List */
		Grid: DevKit.FormMarketing_List.Grid;
		/** The SidePanes of form Marketing_List */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMarketing_List_Light {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
			LastUsedOn: DevKit.Controls.Date;
			/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
			LockStatus: DevKit.Controls.Boolean;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			campaigns: DevKit.Controls.Section;
			information: DevKit.Controls.Section;
			members: DevKit.Controls.Section;
			quickcampaigns: DevKit.Controls.Section;
			Summary_section_4: DevKit.Controls.Section;
			Summary_section_5: DevKit.Controls.Section;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			notes: tab_notes;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Type the cost of obtaining the marketing list. */
			Cost: DevKit.Controls.Money;
			/** Select the type of members that this marketing list will contain: accounts, contacts, or leads. Each list can have only one member type and this value can't be changed after the marketing list is created. */
			CreatedFromCode: DevKit.Controls.OptionSet;
			/** Type additional information to describe the marketing list, such as the intended use or date of the last update. */
			Description: DevKit.Controls.String;
			/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
			LastUsedOn: DevKit.Controls.Date;
			/** Type a name for the marketing list so that it is identified correctly in lists. */
			ListName: DevKit.Controls.String;
			/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
			LockStatus: DevKit.Controls.Boolean;
			/** Type of the members that can be stored in the marketing list. Please do not remove from form! */
			MemberType: DevKit.Controls.Integer;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the intended use of the marketing list to identify its key segments, target offers, or business group. */
			Purpose: DevKit.Controls.String;
			/** Query used for retrieving members of marketing list. */
			Query: DevKit.Controls.String;
			/** Type the source of the marketing list, such as a third-party supplier or internal database. */
			Source: DevKit.Controls.String;
			/** Shows whether the marketing list is active or inactive. Inactive marketing lists are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Controls.OptionSet;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether you want the marketing list to be static or dynamic. The members in a static marketing list are unchanging. A dynamic marketing list is based on a dynamic query that retrieves the updated list of members */
			Type: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			accounts: DevKit.Controls.Grid;
			accountsUCI: DevKit.Controls.Grid;
			Campaigns: DevKit.Controls.Grid;
			contacts: DevKit.Controls.Grid;
			contactsUCI: DevKit.Controls.Grid;
			dynamic_accounts: DevKit.Controls.Grid;
			dynamic_contacts: DevKit.Controls.Grid;
			dynamic_leads: DevKit.Controls.Grid;
			leads: DevKit.Controls.Grid;
			leadsUCI: DevKit.Controls.Grid;
			QuickCampaigns: DevKit.Controls.Grid;
		}
	}
	class FormMarketing_List_Light extends DevKit.IForm {
		/**
		* Marketing List Light [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Marketing_List_Light */
		Body: DevKit.FormMarketing_List_Light.Body;
		/** The Header section of form Marketing_List_Light */
		Header: DevKit.FormMarketing_List_Light.Header;
		/** The Process of form Marketing_List_Light */
		Process: DevKit.FormMarketing_List_Light.Process;
		/** The Grid of form Marketing_List_Light */
		Grid: DevKit.FormMarketing_List_Light.Grid;
		/** The SidePanes of form Marketing_List_Light */
		SidePanes: DevKit.SidePanes;
	}
	class ListApi {
		/**
		* DynamicsCrm.DevKit ListApi
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
		/** Type the cost of obtaining the marketing list. */
		Cost: number;
		/** Value of the Cost in base currency. */
		readonly Cost_Base: number;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Select the type of members that this marketing list will contain: accounts, contacts, or leads. Each list can have only one member type and this value can't be changed after the marketing list is created. */
		CreatedFromCode: OptionSet.List.CreatedFromCode;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the marketing list, such as the intended use or date of the last update. */
		Description: string;
		/** Select whether to override the opt-out settings on leads, contacts, and accounts for the members of the target marketing lists of the campaign activity. If No is selected, those who have chosen to opt out won't be excluded from the list. This means they will receive marketing materials. */
		DoNotSendOnOptOut: boolean;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Select whether inactive accounts, contacts, or leads should be excluded from the campaign activity distribution when the marketing list is included in a campaign. */
		IgnoreInactiveListMembers: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
		LastUsedOn_UtcDateOnly: Date;
		/** Unique identifier of the marketing list. */
		ListId: string;
		/** Type a name for the marketing list so that it is identified correctly in lists. */
		ListName: string;
		/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
		LockStatus: boolean;
		/** Shows the sum of all members in the marketing list. */
		MemberCount: number;
		/** Type of the members that can be stored in the marketing list. Please do not remove from form! */
		MemberType: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
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
		processedMemberCount: number;
		processFetchXML: string;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Type the intended use of the marketing list to identify its key segments, target offers, or business group. */
		Purpose: string;
		/** Query used for retrieving members of marketing list. */
		Query: string;
		/** Type the source of the marketing list, such as a third-party supplier or internal database. */
		Source: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Shows whether the marketing list is active or inactive. Inactive marketing lists are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.List.StateCode;
		/** Select the marketing list's status. */
		StatusCode: OptionSet.List.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Select whether you want the marketing list to be static or dynamic. The members in a static marketing list are unchanging. A dynamic marketing list is based on a dynamic query that retrieves the updated list of members */
		Type: boolean;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace List {
		enum CreatedFromCode {
			/** 1 */
			Account,
			/** 2 */
			Contact,
			/** 4 */
			Lead
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 0 */
			Active,
			/** 1 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}