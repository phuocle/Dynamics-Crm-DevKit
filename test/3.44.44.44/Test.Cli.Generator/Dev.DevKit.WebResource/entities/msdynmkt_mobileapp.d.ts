//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_mobileapp_Information {
		interface tab__A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46_Sections {
			_6A2A2CC0_DC07_4263_8CBA_7F960224682A: DevKit.Controls.Section;
			_A28A8CB3_0773_4CF8_9198_5CC4DD0270BA: DevKit.Controls.Section;
			_A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46_SECTION_2: DevKit.Controls.Section;
			_A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46_SECTION_3: DevKit.Controls.Section;
			_A6FDB331_7D53_4B82_AE00_FD794DAA2991: DevKit.Controls.Section;
		}
		interface tab__A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46 extends DevKit.Controls.ITab {
			Section: tab__A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46_Sections;
		}
		interface Tabs {
			_A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46: tab__A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46;
		}
		interface Body {
			Tab: Tabs;
			ApiTokenControl: DevKit.Controls.ActionCards;
			AppSetupControl: DevKit.Controls.ActionCards;
			FileLoaderControl: DevKit.Controls.ActionCards;
			msdynmkt_activefcm: DevKit.Controls.Boolean;
			msdynmkt_activeios: DevKit.Controls.Boolean;
			msdynmkt_apikey: DevKit.Controls.String;
			/** Unique identifier for API token associated with mobile application. */
			msdynmkt_apitoken: DevKit.Controls.String;
			msdynmkt_applicationmode: DevKit.Controls.Boolean;
			msdynmkt_authenticationmode: DevKit.Controls.Boolean;
			msdynmkt_bundleId: DevKit.Controls.String;
			msdynmkt_certificate1: DevKit.Controls.String;
			msdynmkt_certificate2: DevKit.Controls.String;
			msdynmkt_certificate3: DevKit.Controls.String;
			msdynmkt_certificate4: DevKit.Controls.String;
			msdynmkt_certificate5: DevKit.Controls.String;
			msdynmkt_certificateName: DevKit.Controls.String;
			/** The description of the custom entity. */
			msdynmkt_description: DevKit.Controls.String;
			msdynmkt_keyid: DevKit.Controls.String;
			/** Unique identifier for entity instances */
			msdynmkt_mobileappId: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_password: DevKit.Controls.String;
			msdynmkt_signingkey: DevKit.Controls.String;
			msdynmkt_teamId: DevKit.Controls.String;
			/** The public endpoint - ui only value */
			msdynmkt_uionly_value_endpoint: DevKit.Controls.String;
			/** The organization id - ui only value. */
			msdynmkt_uionly_value_organizationid: DevKit.Controls.String;
			msdynmkt_validationfcm: DevKit.Controls.OptionSet;
			msdynmkt_validationios: DevKit.Controls.OptionSet;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_mobileapp: DevKit.Controls.NavigationItem,
			msdynmkt_mobileapp_mobiledevice: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_mobileapp_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_mobileapp_Information */
		Body: DevKit.Formmsdynmkt_mobileapp_Information.Body;
		/** The Navigation of form msdynmkt_mobileapp_Information */
		Navigation: DevKit.Formmsdynmkt_mobileapp_Information.Navigation;
		/** The SidePanes of form msdynmkt_mobileapp_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_mobileappApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_mobileappApi
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
		msdynmkt_activefcm: boolean;
		msdynmkt_activeios: boolean;
		msdynmkt_apikey: string;
		/** Unique identifier for API token associated with mobile application. */
		msdynmkt_apitoken: string;
		msdynmkt_applicationmode: boolean;
		msdynmkt_authenticationmode: boolean;
		msdynmkt_bundleId: string;
		msdynmkt_certificate1: string;
		msdynmkt_certificate2: string;
		msdynmkt_certificate3: string;
		msdynmkt_certificate4: string;
		msdynmkt_certificate5: string;
		msdynmkt_certificateName: string;
		/** The description of the custom entity. */
		msdynmkt_description: string;
		msdynmkt_keyid: string;
		/** Unique identifier for entity instances */
		msdynmkt_mobileappId: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_password: string;
		msdynmkt_signingkey: string;
		msdynmkt_teamId: string;
		/** The public endpoint - ui only value */
		msdynmkt_uionly_value_endpoint: string;
		/** The organization id - ui only value. */
		msdynmkt_uionly_value_organizationid: string;
		msdynmkt_validationfcm: OptionSet.msdynmkt_mobileapp.msdynmkt_validationfcm;
		msdynmkt_validationios: OptionSet.msdynmkt_mobileapp.msdynmkt_validationios;
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
		/** Status of the mobile device */
		statecode: OptionSet.msdynmkt_mobileapp.statecode;
		/** Status of the mobile device */
		statuscode: OptionSet.msdynmkt_mobileapp.statuscode;
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
			readonly msdynmkt_activefcm: string;
			readonly msdynmkt_activeios: string;
			readonly msdynmkt_apikey: string;
			/** Unique identifier for API token associated with mobile application. */
			readonly msdynmkt_apitoken: string;
			readonly msdynmkt_applicationmode: string;
			readonly msdynmkt_authenticationmode: string;
			readonly msdynmkt_bundleId: string;
			readonly msdynmkt_certificate1: string;
			readonly msdynmkt_certificate2: string;
			readonly msdynmkt_certificate3: string;
			readonly msdynmkt_certificate4: string;
			readonly msdynmkt_certificate5: string;
			readonly msdynmkt_certificateName: string;
			/** The description of the custom entity. */
			readonly msdynmkt_description: string;
			readonly msdynmkt_keyid: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_mobileappId: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_password: string;
			readonly msdynmkt_signingkey: string;
			readonly msdynmkt_teamId: string;
			/** The public endpoint - ui only value */
			readonly msdynmkt_uionly_value_endpoint: string;
			/** The organization id - ui only value. */
			readonly msdynmkt_uionly_value_organizationid: string;
			readonly msdynmkt_validationfcm: string;
			readonly msdynmkt_validationios: string;
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
			/** Status of the mobile device */
			readonly statecode: string;
			/** Status of the mobile device */
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
	namespace msdynmkt_mobileapp {
		enum msdynmkt_validationfcm {
			/** 295660001 */
			Checking,
			/** 295660003 */
			Invalid,
			/** 295660000 */
			Not_started,
			/** 295660002 */
			Valid,
			/** 295660004 */
			Valid_connected
		}
		enum msdynmkt_validationios {
			/** 295660001 */
			Checking,
			/** 295660003 */
			Invalid,
			/** 295660000 */
			Not_started,
			/** 295660002 */
			Valid,
			/** 295660004 */
			Valid_connected
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