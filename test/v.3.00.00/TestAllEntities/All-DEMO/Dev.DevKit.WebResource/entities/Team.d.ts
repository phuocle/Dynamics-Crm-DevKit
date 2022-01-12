//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTeam_New_Form {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the default queue for the team. */
			QueueId: DevKit.Controls.Lookup;
		}
		interface tab_general_Sections {
			Description: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
			TeamMembers: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Controls.Lookup;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Description of the team. */
			Description: DevKit.Controls.String;
			/** Name of the team. */
			Name: DevKit.Controls.String;
			/** Select the team type. */
			TeamType: DevKit.Controls.OptionSet;
		}
		interface Grid {
			Members: DevKit.Controls.Grid;
		}
	}
	class FormTeam_New_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Team_New_Form Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Team_New_Form */
		Body: DevKit.FormTeam_New_Form.Body;
		/** The Header section of form Team_New_Form */
		Header: DevKit.FormTeam_New_Form.Header;
		/** The Grid of form Team_New_Form */
		Grid: DevKit.FormTeam_New_Form.Grid;
		/** The SidePanes of form Team_New_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTeam {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the default queue for the team. */
			QueueId: DevKit.Controls.Lookup;
		}
		interface tab_general_Sections {
			Description: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
			TeamMembers: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Controls.Lookup;
			/** The Azure active directory object Id for a group. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Description of the team. */
			Description: DevKit.Controls.String;
			MembershipType: DevKit.Controls.OptionSet;
			/** Name of the team. */
			Name: DevKit.Controls.String;
			/** Select the team type. */
			TeamType: DevKit.Controls.OptionSet;
		}
		interface Grid {
			Members: DevKit.Controls.Grid;
		}
	}
	class FormTeam extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Team Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Team */
		Body: DevKit.FormTeam.Body;
		/** The Header section of form Team */
		Header: DevKit.FormTeam.Header;
		/** The Grid of form Team */
		Grid: DevKit.FormTeam.Grid;
		/** The SidePanes of form Team */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTeam_form_Business {
		interface tab_general_Sections {
			Description: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
			TeamMembers: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Controls.Lookup;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Description of the team. */
			Description: DevKit.Controls.String;
			/** Name of the team. */
			Name: DevKit.Controls.String;
			/** Select the team type. */
			TeamType: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem,
			navMembers: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navRoles: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Members: DevKit.Controls.Grid;
		}
	}
	class FormTeam_form_Business extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Team_form_Business Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Team_form_Business */
		Body: DevKit.FormTeam_form_Business.Body;
		/** The Navigation of form Team_form_Business */
		Navigation: DevKit.FormTeam_form_Business.Navigation;
		/** The Grid of form Team_form_Business */
		Grid: DevKit.FormTeam_form_Business.Grid;
		/** The SidePanes of form Team_form_Business */
		SidePanes: DevKit.SidePanes;
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
		IsSasTokenSet: DevKit.WebApi.BooleanValueReadonly;
		MembershipType: DevKit.WebApi.OptionSetValue;
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
		/** Sas Token for Team. */
		SasToken: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		ShareLinkQualifier: DevKit.WebApi.StringValueReadonly;
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
		enum MembershipType {
			/** 3 */
			Guests,
			/** 1 */
			Members,
			/** 0 */
			Members_and_guests,
			/** 2 */
			Owners
		}
		enum TeamType {
			/** 3 */
			AAD_Office_Group,
			/** 2 */
			AAD_Security_Group,
			/** 1 */
			Access,
			/** 0 */
			Owner
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