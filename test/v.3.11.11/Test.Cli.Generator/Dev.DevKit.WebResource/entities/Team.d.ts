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
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Members: DevKit.Controls.Grid;
		}
	}
	class FormTeam_New_Form extends DevKit.IForm {
		/**
		* New Form [Main Form]
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
		/** The Process of form Team_New_Form */
		Process: DevKit.FormTeam_New_Form.Process;
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
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Members: DevKit.Controls.Grid;
		}
	}
	class FormTeam extends DevKit.IForm {
		/**
		* Team [Main Form]
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
		/** The Process of form Team */
		Process: DevKit.FormTeam.Process;
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
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Members: DevKit.Controls.Grid;
		}
	}
	class FormTeam_form_Business extends DevKit.IForm {
		/**
		* Team form – Business [Main Form]
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
		/** The Process of form Team_form_Business */
		Process: DevKit.FormTeam_form_Business.Process;
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
		/** Unique identifier of the user primary responsible for the team. */
		AdministratorId: string;
		/** The Azure active directory object Id for a group. */
		AzureActiveDirectoryObjectId: string;
		/** Unique identifier of the business unit with which the team is associated. */
		BusinessUnitId: string;
		/** Unique identifier of the user who created the team. */
		readonly CreatedBy: string;
		/** Date and time when the team was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the team. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the team. */
		Description: string;
		/** Email address for the team. */
		EMailAddress: string;
		/** Exchange rate for the currency associated with the team with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Information about whether the team is a default business unit team. */
		readonly IsDefault: boolean;
		readonly IsSasTokenSet: boolean;
		MembershipType: OptionSet.Team.MembershipType;
		/** Unique identifier of the user who last modified the team. */
		readonly ModifiedBy: string;
		/** Date and time when the team was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the team. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the team. */
		Name: string;
		/** Unique identifier of the organization associated with the team. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Unique identifier of the default queue for the team. */
		QueueId: string;
		/** Choose the record that the team relates to. */
		regardingobjectid_knowledgearticle: string;
		/** Choose the record that the team relates to. */
		regardingobjectid_opportunity: string;
		/** Sas Token for Team. */
		readonly SasToken: string;
		/** For internal use only. */
		readonly ShareLinkQualifier: string;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Select whether the team will be managed by the system. */
		readonly SystemManaged: boolean;
		/** Unique identifier for the team. */
		TeamId: string;
		/** Shows the team template that is associated with the team. */
		TeamTemplateId: string;
		/** Select the team type. */
		TeamType: OptionSet.Team.TeamType;
		/** Unique identifier of the currency associated with the team. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Version number of the team. */
		readonly VersionNumber: number;
		/** Pronunciation of the full name of the team, written in phonetic hiragana or katakana characters. */
		YomiName: string;
		readonly FormattedValue: {
			/** Unique identifier of the user primary responsible for the team. */
			readonly AdministratorId: string;
			/** The Azure active directory object Id for a group. */
			readonly AzureActiveDirectoryObjectId: string;
			/** Unique identifier of the business unit with which the team is associated. */
			readonly BusinessUnitId: string;
			/** Unique identifier of the user who created the team. */
			readonly CreatedBy: string;
			/** Date and time when the team was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the team. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the team. */
			readonly Description: string;
			/** Email address for the team. */
			readonly EMailAddress: string;
			/** Exchange rate for the currency associated with the team with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information about whether the team is a default business unit team. */
			readonly IsDefault: string;
			readonly IsSasTokenSet: string;
			readonly MembershipType: string;
			/** Unique identifier of the user who last modified the team. */
			readonly ModifiedBy: string;
			/** Date and time when the team was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the team. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the team. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the team. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Unique identifier of the default queue for the team. */
			readonly QueueId: string;
			/** Choose the record that the team relates to. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Choose the record that the team relates to. */
			readonly regardingobjectid_opportunity: string;
			/** Sas Token for Team. */
			readonly SasToken: string;
			/** For internal use only. */
			readonly ShareLinkQualifier: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Select whether the team will be managed by the system. */
			readonly SystemManaged: string;
			/** Unique identifier for the team. */
			readonly TeamId: string;
			/** Shows the team template that is associated with the team. */
			readonly TeamTemplateId: string;
			/** Select the team type. */
			readonly TeamType: string;
			/** Unique identifier of the currency associated with the team. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Version number of the team. */
			readonly VersionNumber: string;
			/** Pronunciation of the full name of the team, written in phonetic hiragana or katakana characters. */
			readonly YomiName: string;
		}
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
		enum RegardingObjectTypeCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}