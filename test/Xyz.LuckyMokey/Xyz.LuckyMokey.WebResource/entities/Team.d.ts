//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormTeam {
		interface Header {
			/** Unique identifier of the default queue for the team. */
			QueueId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_general_Sections {
			General: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
			TeamMembers: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			Members: DevKit.Form.Controls.ControlGrid;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Form.Controls.ControlLookup;
			/** The Azure active directory object Id for a group. */
			AzureActiveDirectoryObjectId: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** Description of the team. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the team. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select the team type. */
			TeamType: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormTeam extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Team
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Team */
		Body: LuckyMokey.FormTeam.Body;
		/** The Header section of form Team */
		Header: LuckyMokey.FormTeam.Header;
	}
	namespace FormTeam_form_Business {
		interface tab_general_Sections {
			General: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
			TeamMembers: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			Members: DevKit.Form.Controls.ControlGrid;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** Description of the team. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the team. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select the team type. */
			TeamType: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navMembers: DevKit.Form.Controls.ControlNavigationItem,
			navRoles: DevKit.Form.Controls.ControlNavigationItem,
			navFieldSecurityProfiles: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormTeam_form_Business extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Team_form_Business
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Team_form_Business */
		Body: LuckyMokey.FormTeam_form_Business.Body;
		/** The Navigation of form Team_form_Business */
		Navigation: LuckyMokey.FormTeam_form_Business.Navigation;
	}
	class TeamApi {
		/**
		* DynamicsCrm.DevKit TeamApi
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
		/** Unique identifier of the user primary responsible for the team. */
		AdministratorId: DevKit.WebApi.LookupValue;
		/** The Azure active directory object Id for a group. */
		AzureActiveDirectoryObjectId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the business unit with which the team is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the team. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the team was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the team. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the team. */
		Description: DevKit.WebApi.StringValue;
		/** Email address for the team. */
		EMailAddress: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the team with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information about whether the team is a default business unit team. */
		IsDefault: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the team. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the team was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the team. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the team. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the team. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the default queue for the team. */
		QueueId: DevKit.WebApi.LookupValue;
		/** Choose the record that the team relates to. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Choose the record that the team relates to. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Select whether the team will be managed by the system. */
		SystemManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier for the team. */
		TeamId: DevKit.WebApi.GuidValue;
		/** Shows the team template that is associated with the team. */
		TeamTemplateId: DevKit.WebApi.LookupValue;
		/** Select the team type. */
		TeamType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the currency associated with the team. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Version number of the team. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Pronunciation of the full name of the team, written in phonetic hiragana or katakana characters. */
		YomiName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace Team {
		enum TeamType {
			/** 0 */
			Owner,
			/** 1 */
			Access,
			/** 2 */
			AAD_Security_Group,
			/** 3 */
			AAD_Office_Group
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
//{'JsForm':['Team','Team form – Business'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}