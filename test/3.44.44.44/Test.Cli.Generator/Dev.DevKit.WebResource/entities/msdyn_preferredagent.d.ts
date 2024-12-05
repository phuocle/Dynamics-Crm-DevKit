//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_preferredagent_Information {
		interface tab_Preferred_Agent_Sections {
		}
		interface tab_Preferred_Agent extends DevKit.Controls.ITab {
			Section: tab_Preferred_Agent_Sections;
		}
		interface Tabs {
			Preferred_Agent: tab_Preferred_Agent;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Store the id for preferred agent routed entity. */
			msdyn_recordId: DevKit.Controls.Lookup;
			/** Stores the system user id for the preferred agent. */
			msdyn_systemuserId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_preferredagent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_preferredagent_Information */
		Body: DevKit.Formmsdyn_preferredagent_Information.Body;
		/** The Navigation of form msdyn_preferredagent_Information */
		Navigation: DevKit.Formmsdyn_preferredagent_Information.Navigation;
		/** The SidePanes of form msdyn_preferredagent_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPreferred_Agent_quick_create_form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Store the id for preferred agent routed entity. */
			msdyn_recordId: DevKit.Controls.Lookup;
			/** Stores the system user id for the preferred agent. */
			msdyn_systemuserId: DevKit.Controls.Lookup;
		}
	}
	class FormPreferred_Agent_quick_create_form extends DevKit.IForm {
		/**
		* Preferred Agent quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Preferred_Agent_quick_create_form */
		Body: DevKit.FormPreferred_Agent_quick_create_form.Body;
	}
	class msdyn_preferredagentApi {
		/**
		* DynamicsCrm.DevKit msdyn_preferredagentApi
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
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Stores the preference rating for a preferred agent for a specific record. */
		msdyn_preferencerating: number;
		/** Unique identifier for entity instances */
		msdyn_preferredagentId: string;
		/** Store the id for preferred agent routed entity. */
		msdyn_recordId_account: string;
		/** Store the id for preferred agent routed entity. */
		msdyn_recordId_contact: string;
		/** Stores the Record Type of the Preferred Agent */
		msdyn_recordtype: OptionSet.msdyn_preferredagent.msdyn_recordtype;
		/** Stores the system user id for the preferred agent. */
		msdyn_systemuserId: string;
		/** Used for assigning last agent as preferred agent */
		msdyn_temporarypreference: boolean;
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
		/** Status of the Preferred Agent */
		statecode: OptionSet.msdyn_preferredagent.statecode;
		/** Reason for the status of the Preferred Agent */
		statuscode: OptionSet.msdyn_preferredagent.statuscode;
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
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Stores the preference rating for a preferred agent for a specific record. */
			readonly msdyn_preferencerating: string;
			/** Unique identifier for entity instances */
			readonly msdyn_preferredagentId: string;
			/** Store the id for preferred agent routed entity. */
			readonly msdyn_recordId_account: string;
			/** Store the id for preferred agent routed entity. */
			readonly msdyn_recordId_contact: string;
			/** Stores the Record Type of the Preferred Agent */
			readonly msdyn_recordtype: string;
			/** Stores the system user id for the preferred agent. */
			readonly msdyn_systemuserId: string;
			/** Used for assigning last agent as preferred agent */
			readonly msdyn_temporarypreference: string;
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
			/** Status of the Preferred Agent */
			readonly statecode: string;
			/** Reason for the status of the Preferred Agent */
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
	namespace msdyn_preferredagent {
		enum msdyn_recordIdType {
		}
		enum msdyn_recordtype {
			/** 192350000 */
			Account,
			/** 192350001 */
			Contact
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