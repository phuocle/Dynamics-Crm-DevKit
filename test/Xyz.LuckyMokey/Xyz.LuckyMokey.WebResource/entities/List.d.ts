//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormMarketing_List {
		interface Header {
			/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
			LastUsedOn: DevKit.Form.Controls.ControlDate;
			/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
			LockStatus: DevKit.Form.Controls.ControlBoolean;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_Summary_Sections {
			information: DevKit.Form.Controls.ControlSection;
			campaigns: DevKit.Form.Controls.ControlSection;
			quickcampaigns: DevKit.Form.Controls.ControlSection;
		}
		interface tab_members_Sections {
			members: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_members extends DevKit.Form.Controls.IControlTab {
			Section: tab_members_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
			members: tab_members;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			Campaigns: DevKit.Form.Controls.ControlGrid;
			QuickCampaigns: DevKit.Form.Controls.ControlGrid;
			accountsUCI: DevKit.Form.Controls.ControlGrid;
			contactsUCI: DevKit.Form.Controls.ControlGrid;
			leadsUCI: DevKit.Form.Controls.ControlGrid;
			contacts: DevKit.Form.Controls.ControlGrid;
			accounts: DevKit.Form.Controls.ControlGrid;
			leads: DevKit.Form.Controls.ControlGrid;
			dynamic_accounts: DevKit.Form.Controls.ControlGrid;
			dynamic_contacts: DevKit.Form.Controls.ControlGrid;
			dynamic_leads: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Type the cost of obtaining the marketing list. */
			Cost: DevKit.Form.Controls.ControlMoney;
			/** Select the type of members that this marketing list will contain: accounts, contacts, or leads. Each list can have only one member type and this value can't be changed after the marketing list is created. */
			CreatedFromCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type additional information to describe the marketing list, such as the intended use or date of the last update. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
			LastUsedOn: DevKit.Form.Controls.ControlDate;
			/** Type a name for the marketing list so that it is identified correctly in lists. */
			ListName: DevKit.Form.Controls.ControlString;
			/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
			LockStatus: DevKit.Form.Controls.ControlBoolean;
			/** Type of the members that can be stored in the marketing list. Please do not remove from form! */
			MemberType: DevKit.Form.Controls.ControlInteger;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type the intended use of the marketing list to identify its key segments, target offers, or business group. */
			Purpose: DevKit.Form.Controls.ControlString;
			/** Query used for retrieving members of marketing list. */
			Query: DevKit.Form.Controls.ControlString;
			/** Type the source of the marketing list, such as a third-party supplier or internal database. */
			Source: DevKit.Form.Controls.ControlString;
			/** Shows whether the marketing list is active or inactive. Inactive marketing lists are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select whether you want the marketing list to be static or dynamic. The members in a static marketing list are unchanging. A dynamic marketing list is based on a dynamic query that retrieves the updated list of members */
			Type: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormMarketing_List extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Marketing_List
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Marketing_List */
		Body: LuckyMokey.FormMarketing_List.Body;
		/** The Header section of form Marketing_List */
		Header: LuckyMokey.FormMarketing_List.Header;
	}
	namespace FormMarketing_List_Light {
		interface Header {
			/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
			LastUsedOn: DevKit.Form.Controls.ControlDate;
			/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
			LockStatus: DevKit.Form.Controls.ControlBoolean;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_Summary_Sections {
			information: DevKit.Form.Controls.ControlSection;
			members: DevKit.Form.Controls.ControlSection;
			Summary_section_5: DevKit.Form.Controls.ControlSection;
			campaigns: DevKit.Form.Controls.ControlSection;
			quickcampaigns: DevKit.Form.Controls.ControlSection;
			Summary_section_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			accountsUCI: DevKit.Form.Controls.ControlGrid;
			contactsUCI: DevKit.Form.Controls.ControlGrid;
			leadsUCI: DevKit.Form.Controls.ControlGrid;
			contacts: DevKit.Form.Controls.ControlGrid;
			accounts: DevKit.Form.Controls.ControlGrid;
			leads: DevKit.Form.Controls.ControlGrid;
			dynamic_accounts: DevKit.Form.Controls.ControlGrid;
			dynamic_contacts: DevKit.Form.Controls.ControlGrid;
			dynamic_leads: DevKit.Form.Controls.ControlGrid;
			Campaigns: DevKit.Form.Controls.ControlGrid;
			QuickCampaigns: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Type the cost of obtaining the marketing list. */
			Cost: DevKit.Form.Controls.ControlMoney;
			/** Select the type of members that this marketing list will contain: accounts, contacts, or leads. Each list can have only one member type and this value can't be changed after the marketing list is created. */
			CreatedFromCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type additional information to describe the marketing list, such as the intended use or date of the last update. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
			LastUsedOn: DevKit.Form.Controls.ControlDate;
			/** Type a name for the marketing list so that it is identified correctly in lists. */
			ListName: DevKit.Form.Controls.ControlString;
			/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
			LockStatus: DevKit.Form.Controls.ControlBoolean;
			/** Type of the members that can be stored in the marketing list. Please do not remove from form! */
			MemberType: DevKit.Form.Controls.ControlInteger;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type the intended use of the marketing list to identify its key segments, target offers, or business group. */
			Purpose: DevKit.Form.Controls.ControlString;
			/** Query used for retrieving members of marketing list. */
			Query: DevKit.Form.Controls.ControlString;
			/** Type the source of the marketing list, such as a third-party supplier or internal database. */
			Source: DevKit.Form.Controls.ControlString;
			/** Shows whether the marketing list is active or inactive. Inactive marketing lists are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select whether you want the marketing list to be static or dynamic. The members in a static marketing list are unchanging. A dynamic marketing list is based on a dynamic query that retrieves the updated list of members */
			Type: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormMarketing_List_Light extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Marketing_List_Light
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Marketing_List_Light */
		Body: LuckyMokey.FormMarketing_List_Light.Body;
		/** The Header section of form Marketing_List_Light */
		Header: LuckyMokey.FormMarketing_List_Light.Header;
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
//{'JsForm':['Marketing List','Marketing List Light'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}