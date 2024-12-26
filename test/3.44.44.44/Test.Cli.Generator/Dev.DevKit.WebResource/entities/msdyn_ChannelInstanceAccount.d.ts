//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ChannelInstanceAccount_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_channelinstance_ChannelInstanceAcco: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_ChannelInstanceAccount_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ChannelInstanceAccount_Information */
		Body: DevKit.Formmsdyn_ChannelInstanceAccount_Information.Body;
		/** The Navigation of form msdyn_ChannelInstanceAccount_Information */
		Navigation: DevKit.Formmsdyn_ChannelInstanceAccount_Information.Navigation;
		/** The SidePanes of form msdyn_ChannelInstanceAccount_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSales_SMS_Providers {
		interface tab_phoneNumbersTab_Sections {
			phoneNumbersSection: DevKit.Controls.Section;
		}
		interface tab_providerTab_Sections {
			basicSection: DevKit.Controls.Section;
		}
		interface tab_settingsTab_Sections {
			settingsSection: DevKit.Controls.Section;
		}
		interface tab_phoneNumbersTab extends DevKit.Controls.ITab {
			Section: tab_phoneNumbersTab_Sections;
		}
		interface tab_providerTab extends DevKit.Controls.ITab {
			Section: tab_providerTab_Sections;
		}
		interface tab_settingsTab extends DevKit.Controls.ITab {
			Section: tab_settingsTab_Sections;
		}
		interface Tabs {
			phoneNumbersTab: tab_phoneNumbersTab;
			providerTab: tab_providerTab;
			settingsTab: tab_settingsTab;
		}
		interface Body {
			Tab: Tabs;
			extended_form: DevKit.Controls.ActionCards;
			msdyn_channeldefinitionid: DevKit.Controls.ActionCards;
			/** Unique identifier for entity instances */
			msdyn_ChannelInstanceAccountId: DevKit.Controls.String;
			msdyn_Description: DevKit.Controls.String;
			/** LookUp for Extended Entities brought in by custom channels. */
			msdyn_extendedentityId: DevKit.Controls.Lookup;
			msdyn_Name: DevKit.Controls.String;
			phone_numbers: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_msdyn_channelinstance_ChannelInstanceAcco: DevKit.Controls.NavigationItem
		}
	}
	class FormSales_SMS_Providers extends DevKit.IForm {
		/**
		* Sales SMS Providers [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Sales_SMS_Providers */
		Body: DevKit.FormSales_SMS_Providers.Body;
		/** The Navigation of form Sales_SMS_Providers */
		Navigation: DevKit.FormSales_SMS_Providers.Navigation;
		/** The SidePanes of form Sales_SMS_Providers */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSales_wizard_form {
		interface Header extends DevKit.Controls.IHeader {
			msdyn_Name: DevKit.Controls.String;
		}
		interface tab__0B689D62_FBF7_4DBB_A110_98FB2BC5A34F_Sections {
		}
		interface tab__0B689D62_FBF7_4DBB_A110_98FB2BC5A34F extends DevKit.Controls.ITab {
			Section: tab__0B689D62_FBF7_4DBB_A110_98FB2BC5A34F_Sections;
		}
		interface Tabs {
			_0B689D62_FBF7_4DBB_A110_98FB2BC5A34F: tab__0B689D62_FBF7_4DBB_A110_98FB2BC5A34F;
		}
		interface Body {
			Tab: Tabs;
			wizard_main: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_msdyn_channelinstance_ChannelInstanceAcco: DevKit.Controls.NavigationItem
		}
	}
	class FormSales_wizard_form extends DevKit.IForm {
		/**
		* Sales wizard form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Sales_wizard_form */
		Body: DevKit.FormSales_wizard_form.Body;
		/** The Header section of form Sales_wizard_form */
		Header: DevKit.FormSales_wizard_form.Header;
		/** The Navigation of form Sales_wizard_form */
		Navigation: DevKit.FormSales_wizard_form.Navigation;
		/** The SidePanes of form Sales_wizard_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSMS_providers {
		interface tab_phoneNumbersTab_Sections {
			phoneNumbersSection: DevKit.Controls.Section;
		}
		interface tab_providerTab_Sections {
			basicSection: DevKit.Controls.Section;
		}
		interface tab_settingsTab_Sections {
			settingsSection: DevKit.Controls.Section;
		}
		interface tab_phoneNumbersTab extends DevKit.Controls.ITab {
			Section: tab_phoneNumbersTab_Sections;
		}
		interface tab_providerTab extends DevKit.Controls.ITab {
			Section: tab_providerTab_Sections;
		}
		interface tab_settingsTab extends DevKit.Controls.ITab {
			Section: tab_settingsTab_Sections;
		}
		interface Tabs {
			phoneNumbersTab: tab_phoneNumbersTab;
			providerTab: tab_providerTab;
			settingsTab: tab_settingsTab;
		}
		interface Body {
			Tab: Tabs;
			extended_form: DevKit.Controls.ActionCards;
			msdyn_channeldefinitionid: DevKit.Controls.ActionCards;
			/** Unique identifier for entity instances */
			msdyn_ChannelInstanceAccountId: DevKit.Controls.String;
			msdyn_Description: DevKit.Controls.String;
			/** LookUp for Extended Entities brought in by custom channels. */
			msdyn_extendedentityId: DevKit.Controls.Lookup;
			msdyn_Name: DevKit.Controls.String;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			phone_numbers: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_msdyn_channelinstance_ChannelInstanceAcco: DevKit.Controls.NavigationItem
		}
	}
	class FormSMS_providers extends DevKit.IForm {
		/**
		* SMS providers [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SMS_providers */
		Body: DevKit.FormSMS_providers.Body;
		/** The Navigation of form SMS_providers */
		Navigation: DevKit.FormSMS_providers.Navigation;
		/** The SidePanes of form SMS_providers */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWizard_form {
		interface Header extends DevKit.Controls.IHeader {
			msdyn_Name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			wizard_main: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_msdyn_channelinstance_ChannelInstanceAcco: DevKit.Controls.NavigationItem
		}
	}
	class FormWizard_form extends DevKit.IForm {
		/**
		* Wizard form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Wizard_form */
		Body: DevKit.FormWizard_form.Body;
		/** The Header section of form Wizard_form */
		Header: DevKit.FormWizard_form.Header;
		/** The Navigation of form Wizard_form */
		Navigation: DevKit.FormWizard_form.Navigation;
		/** The SidePanes of form Wizard_form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ChannelInstanceAccountApi {
		/**
		* DynamicsCrm.DevKit msdyn_ChannelInstanceAccountApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Lookup to Channel Definition entity record. */
		msdyn_ChannelDefinitionId: string;
		/** Unique identifier for entity instances */
		msdyn_ChannelInstanceAccountId: string;
		msdyn_Description: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_byoacschannelinstanceaccount: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_infobipchannelinstanceaccount: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_telesignchannelinstanceaccount: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_twiliochannelinstanceaccount: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_vibeschannelinstanceaccount: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityId_msdyn_defextendedchannelinstanceaccount: string;
		msdyn_Name: string;
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
		/** Status of the Channel Instance Account */
		statecode: OptionSet.msdyn_ChannelInstanceAccount.statecode;
		/** Reason for the status of the Channel Instance Account */
		statuscode: OptionSet.msdyn_ChannelInstanceAccount.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Lookup to Channel Definition entity record. */
			readonly msdyn_ChannelDefinitionId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ChannelInstanceAccountId: string;
			readonly msdyn_Description: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_byoacschannelinstanceaccount: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_infobipchannelinstanceaccount: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_telesignchannelinstanceaccount: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_twiliochannelinstanceaccount: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_vibeschannelinstanceaccount: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityId_msdyn_defextendedchannelinstanceaccount: string;
			readonly msdyn_Name: string;
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
			/** Status of the Channel Instance Account */
			readonly statecode: string;
			/** Reason for the status of the Channel Instance Account */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_ChannelInstanceAccount {
		enum msdyn_extendedentityIdType {
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}