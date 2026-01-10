//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTeam {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the default queue for the team. */
			QueueId: DevKit.Controls.Lookup;
		}
		interface tab_general_Sections {
			/** DESCRIPTION */
			Description: DevKit.Controls.Section;
			/** GENERAL */
			General: DevKit.Controls.Section;
			/** TEAM MEMBERS */
			TeamMembers: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Controls.Lookup;
			/** The object Id for a group. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Description of the team. */
			Description: DevKit.Controls.String;
			/** Membership Type */
			MembershipType: DevKit.Controls.OptionSet;
			/** Name of the team. */
			Name: DevKit.Controls.String;
			/** Select the team type. */
			TeamType: DevKit.Controls.OptionSet;
		}
		interface Grid {
			/** MEMBERS */
			Members: DevKit.Controls.Grid;
		}
	}
	export class FormTeam extends DevKit.IForm {
		/**
		* Team [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Team */
		Body: DevKit.FormTeam.Body;
		/** The Header section of form Team */
		Header: DevKit.FormTeam.Header;
		/** The Grid of form Team */
		Grid: DevKit.FormTeam.Grid;
	}
	namespace FormTeam_form_Business {
		interface tab_general_Sections {
			/** DESCRIPTION */
			Description: DevKit.Controls.Section;
			/** GENERAL */
			General: DevKit.Controls.Section;
			/** TEAM MEMBERS */
			TeamMembers: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
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
			/** Background Processes */
			navAsyncOperations: DevKit.Controls.NavigationItem;
			/** Audit History */
			navAudit: DevKit.Controls.NavigationItem;
			/** Connections */
			navConnections: DevKit.Controls.NavigationItem;
			/** Field Security Profiles */
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem;
			/** Members */
			navMembers: DevKit.Controls.NavigationItem;
			/** Process Sessions */
			navProcessSessions: DevKit.Controls.NavigationItem;
			/** Security Roles */
			navRoles: DevKit.Controls.NavigationItem;
		}
		interface Grid {
			/** MEMBERS */
			Members: DevKit.Controls.Grid;
		}
	}
	export class FormTeam_form_Business extends DevKit.IForm {
		/**
		* Team form – Business [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Team_form_Business */
		Body: DevKit.FormTeam_form_Business.Body;
		/** The Navigation of form Team_form_Business */
		Navigation: DevKit.FormTeam_form_Business.Navigation;
		/** The Grid of form Team_form_Business */
		Grid: DevKit.FormTeam_form_Business.Grid;
	}
	export class TeamApi {
		/**
		* DynamicsCrm.DevKit TeamApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the user primary responsible for the team. */
		AdministratorId: string | null;
		/** The object Id for a group. */
		AzureActiveDirectoryObjectId: string | null;
		/** Unique identifier of the business unit with which the team is associated. */
		BusinessUnitId: string | null;
		/** Unique identifier of the user who created the team. */
		readonly CreatedBy: string | null;
		/** Date and time when the team was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the team. */
		readonly CreatedOnBehalfBy: string | null;
		/** The delegated authorization context for the team. */
		DelegatedAuthorizationId: string | null;
		/** Description of the team. */
		Description: string | null;
		/** Email address for the team. */
		EMailAddress: string | null;
		/** Exchange rate for the currency associated with the team with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Information about whether the team is a default business unit team. */
		readonly IsDefault: boolean | null;
		readonly IsSasTokenSet: boolean | null;
		MembershipType: OptionSet.Team.MembershipType | null;
		/** Unique identifier of the user who last modified the team. */
		readonly ModifiedBy: string | null;
		/** Date and time when the team was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the team. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the team. */
		Name: string | null;
		/** Unique identifier of the organization associated with the team. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Unique identifier of the default queue for the team. */
		QueueId: string | null;
		/** Choose the record that the team relates to. */
		RegardingObjectId: string | null;
		/** Sas Token for Team. */
		readonly SasToken: string | null;
		/** For internal use only. */
		readonly ShareLinkQualifier: string | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** Select whether the team will be managed by the system. */
		readonly SystemManaged: boolean | null;
		/** Unique identifier for the team. */
		TeamId: string | null;
		/** Shows the team template that is associated with the team. */
		TeamTemplateId: string | null;
		/** Select the team type. */
		TeamType: OptionSet.Team.TeamType | null;
		/** Unique identifier of the currency associated with the team. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Version number of the team. */
		readonly VersionNumber: number | null;
		/** Pronunciation of the full name of the team, written in phonetic hiragana or katakana characters. */
		YomiName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user primary responsible for the team. */
			readonly AdministratorId: string;
			/** The object Id for a group. */
			readonly AzureActiveDirectoryObjectId: string;
			/** Unique identifier of the business unit with which the team is associated. */
			readonly BusinessUnitId: string;
			/** Unique identifier of the user who created the team. */
			readonly CreatedBy: string;
			/** Date and time when the team was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the team. */
			readonly CreatedOnBehalfBy: string;
			/** The delegated authorization context for the team. */
			readonly DelegatedAuthorizationId: string;
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
			readonly RegardingObjectId: string;
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
			/** Guests = 3*/
			Guests = 3,
			/** Members = 1*/
			Members = 1,
			/** Members_and_guests = 0*/
			Members_and_guests = 0,
			/** Owners = 2*/
			Owners = 2
		}
		enum RegardingObjectTypeCode {
		}
		enum TeamType {
			/** Access = 1*/
			Access = 1,
			/** Office_Group = 3*/
			Office_Group = 3,
			/** Owner = 0*/
			Owner = 0,
			/** Security_Group = 2*/
			Security_Group = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}