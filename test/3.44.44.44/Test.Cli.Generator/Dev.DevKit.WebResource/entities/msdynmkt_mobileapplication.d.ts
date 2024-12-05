//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_mobileapplication_Information {
		interface tab__A477696B_0E56_4530_80CA_29BAC08CD292_Sections {
			_4BE71A76_A3C7_4E60_8DCB_1AE50112A0F4: DevKit.Controls.Section;
			_A477696B_0E56_4530_80CA_29BAC08CD292_SECTION_2: DevKit.Controls.Section;
			_A477696B_0E56_4530_80CA_29BAC08CD292_SECTION_3: DevKit.Controls.Section;
			_E2B995FF_B910_4A38_B3BA_E36C264B2211: DevKit.Controls.Section;
			_E2C995FF_B910_4A38_B3BA_E36C264B2211: DevKit.Controls.Section;
		}
		interface tab__A477696B_0E56_4530_80CA_29BAC08CD292 extends DevKit.Controls.ITab {
			Section: tab__A477696B_0E56_4530_80CA_29BAC08CD292_Sections;
		}
		interface Tabs {
			_A477696B_0E56_4530_80CA_29BAC08CD292: tab__A477696B_0E56_4530_80CA_29BAC08CD292;
		}
		interface Body {
			Tab: Tabs;
			ApiTokenControl: DevKit.Controls.ActionCards;
			AppSetupControl: DevKit.Controls.ActionCards;
			FileLoaderControl: DevKit.Controls.ActionCards;
			msdynmkt_activefcm: DevKit.Controls.Boolean;
			msdynmkt_activeios: DevKit.Controls.Boolean;
			msdynmkt_apikey: DevKit.Controls.ActionCards;
			/** Unique identifier for API token associated with mobile application. */
			msdynmkt_apiToken: DevKit.Controls.String;
			msdynmkt_applicationmode: DevKit.Controls.Boolean;
			msdynmkt_applicationnicknameapns: DevKit.Controls.String;
			msdynmkt_applicationnicknamefcm: DevKit.Controls.String;
			msdynmkt_authenticationmode: DevKit.Controls.Boolean;
			msdynmkt_bundleid: DevKit.Controls.ActionCards;
			msdynmkt_certificate: DevKit.Controls.String;
			msdynmkt_CertificateName: DevKit.Controls.String;
			/** The description of the custom entity. */
			msdynmkt_description: DevKit.Controls.String;
			/** The public endpoint. */
			msdynmkt_endpoint: DevKit.Controls.String;
			msdynmkt_keyid: DevKit.Controls.ActionCards;
			/** Unique identifier for entity instances */
			msdynmkt_mobileapplicationId: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** The organization id. */
			msdynmkt_organizationid: DevKit.Controls.String;
			msdynmkt_password: DevKit.Controls.ActionCards;
			msdynmkt_signingkey: DevKit.Controls.ActionCards;
			msdynmkt_teamid: DevKit.Controls.ActionCards;
			msdynmkt_tokencopied: DevKit.Controls.Boolean;
			msdynmkt_validationfcm: DevKit.Controls.OptionSet;
			msdynmkt_validationios: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_mobileapplication: DevKit.Controls.NavigationItem,
			msdynmkt_mobileapplication_mobiledevice: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_mobileapplication_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_mobileapplication_Information */
		Body: DevKit.Formmsdynmkt_mobileapplication_Information.Body;
		/** The Navigation of form msdynmkt_mobileapplication_Information */
		Navigation: DevKit.Formmsdynmkt_mobileapplication_Information.Navigation;
		/** The SidePanes of form msdynmkt_mobileapplication_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_mobileapplicationApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_mobileapplicationApi
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
		msdynmkt_activefcm: boolean;
		msdynmkt_activeios: boolean;
		msdynmkt_apikey: string;
		/** Unique identifier for API token associated with mobile application. */
		msdynmkt_apiToken: string;
		msdynmkt_applicationmode: boolean;
		msdynmkt_applicationnicknameapns: string;
		msdynmkt_applicationnicknamefcm: string;
		msdynmkt_authenticationmode: boolean;
		msdynmkt_BundleId: string;
		msdynmkt_certificate: string;
		msdynmkt_CertificateName: string;
		/** The description of the custom entity. */
		msdynmkt_description: string;
		/** The public endpoint. */
		msdynmkt_endpoint: string;
		/** Is ready to be used */
		msdynmkt_isconnected: string;
		msdynmkt_keyId: string;
		/** Unique identifier for entity instances */
		msdynmkt_mobileapplicationId: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** The organization id. */
		msdynmkt_organizationid: string;
		msdynmkt_password: string;
		msdynmkt_signingKey: string;
		msdynmkt_teamId: string;
		/** Notification message for test send */
		msdynmkt_testmessage: string;
		msdynmkt_tokencopied: boolean;
		msdynmkt_validationfcm: OptionSet.msdynmkt_mobileapplication.msdynmkt_validationfcm;
		msdynmkt_validationios: OptionSet.msdynmkt_mobileapplication.msdynmkt_validationios;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		readonly FormattedValue: {
			readonly msdynmkt_activefcm: string;
			readonly msdynmkt_activeios: string;
			readonly msdynmkt_apikey: string;
			/** Unique identifier for API token associated with mobile application. */
			readonly msdynmkt_apiToken: string;
			readonly msdynmkt_applicationmode: string;
			readonly msdynmkt_applicationnicknameapns: string;
			readonly msdynmkt_applicationnicknamefcm: string;
			readonly msdynmkt_authenticationmode: string;
			readonly msdynmkt_BundleId: string;
			readonly msdynmkt_certificate: string;
			readonly msdynmkt_CertificateName: string;
			/** The description of the custom entity. */
			readonly msdynmkt_description: string;
			/** The public endpoint. */
			readonly msdynmkt_endpoint: string;
			/** Is ready to be used */
			readonly msdynmkt_isconnected: string;
			readonly msdynmkt_keyId: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_mobileapplicationId: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** The organization id. */
			readonly msdynmkt_organizationid: string;
			readonly msdynmkt_password: string;
			readonly msdynmkt_signingKey: string;
			readonly msdynmkt_teamId: string;
			/** Notification message for test send */
			readonly msdynmkt_testmessage: string;
			readonly msdynmkt_tokencopied: string;
			readonly msdynmkt_validationfcm: string;
			readonly msdynmkt_validationios: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_mobileapplication {
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