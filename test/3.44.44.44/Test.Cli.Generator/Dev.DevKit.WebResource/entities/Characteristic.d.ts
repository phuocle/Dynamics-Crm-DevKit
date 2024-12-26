//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCharacteristic_Information {
		interface Tabs {
		}
		interface Body {
			/** Select the type of characteristic. */
			CharacteristicType: DevKit.Controls.OptionSet;
			/** Type a detailed description of the characteristic. */
			Description: DevKit.Controls.String;
			/** Type a name for the characteristic. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			characteristic_bookableresourcecharacteristic_Characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_requirementcharacteristic_characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_swarmskill_Skillid: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_workordercharacteristic_Characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_skillattachmenttarget: DevKit.Controls.NavigationItem,
			msdyn_ocsitdskill_skillid_Characteristic: DevKit.Controls.NavigationItem,
			msdyn_rulesetdependencymapping_characteristic_msdyn_referencedpolymorphicentityid: DevKit.Controls.NavigationItem
		}
	}
	class FormCharacteristic_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Characteristic_Information */
		Body: DevKit.FormCharacteristic_Information.Body;
		/** The Navigation of form Characteristic_Information */
		Navigation: DevKit.FormCharacteristic_Information.Navigation;
		/** The SidePanes of form Characteristic_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSkill_Main_Form {
		interface Tabs {
		}
		interface Body {
			/** Select the type of characteristic. */
			CharacteristicType: DevKit.Controls.OptionSet;
			/** Type a detailed description of the characteristic. */
			Description: DevKit.Controls.String;
			/** Type a name for the characteristic. */
			Name: DevKit.Controls.String;
			WebResource_help: DevKit.Controls.WebResource;
		}
		interface Navigation {
			characteristic_bookableresourcecharacteristic_Characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_requirementcharacteristic_characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_swarmskill_Skillid: DevKit.Controls.NavigationItem,
			msdyn_characteristic_msdyn_workordercharacteristic_Characteristic: DevKit.Controls.NavigationItem,
			msdyn_characteristic_skillattachmenttarget: DevKit.Controls.NavigationItem,
			msdyn_ocsitdskill_skillid_Characteristic: DevKit.Controls.NavigationItem,
			msdyn_rulesetdependencymapping_characteristic_msdyn_referencedpolymorphicentityid: DevKit.Controls.NavigationItem
		}
		interface Grid {
			SkilledUsers: DevKit.Controls.Grid;
		}
	}
	class FormSkill_Main_Form extends DevKit.IForm {
		/**
		* Skill Main Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Skill_Main_Form */
		Body: DevKit.FormSkill_Main_Form.Body;
		/** The Navigation of form Skill_Main_Form */
		Navigation: DevKit.FormSkill_Main_Form.Navigation;
		/** The Grid of form Skill_Main_Form */
		Grid: DevKit.FormSkill_Main_Form.Grid;
		/** The SidePanes of form Skill_Main_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCharacteristic_Quick_Create {
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
			/** Select the type of characteristic. */
			CharacteristicType: DevKit.Controls.OptionSet;
			/** Type a detailed description of the characteristic. */
			Description: DevKit.Controls.String;
			/** Type a name for the characteristic. */
			Name: DevKit.Controls.String;
		}
	}
	class FormCharacteristic_Quick_Create extends DevKit.IForm {
		/**
		* Characteristic Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Characteristic_Quick_Create */
		Body: DevKit.FormCharacteristic_Quick_Create.Body;
	}
	class CharacteristicApi {
		/**
		* DynamicsCrm.DevKit CharacteristicApi
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
		/** Unique identifier of the characteristic. */
		CharacteristicId: string;
		/** Select the type of characteristic. */
		CharacteristicType: OptionSet.Characteristic.CharacteristicType;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Type a detailed description of the characteristic. */
		Description: string;
		/** Exchange rate for the currency associated with the characteristic with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a name for the characteristic. */
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
		/** Status of the Characteristic */
		StateCode: OptionSet.Characteristic.StateCode;
		/** Reason for the status of the Characteristic */
		StatusCode: OptionSet.Characteristic.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the Characteristic with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the characteristic. */
			readonly CharacteristicId: string;
			/** Select the type of characteristic. */
			readonly CharacteristicType: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Type a detailed description of the characteristic. */
			readonly Description: string;
			/** Exchange rate for the currency associated with the characteristic with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a name for the characteristic. */
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
			/** Status of the Characteristic */
			readonly StateCode: string;
			/** Reason for the status of the Characteristic */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the Characteristic with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Characteristic {
		enum CharacteristicType {
			/** 2 */
			Certification,
			/** 1 */
			Skill
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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