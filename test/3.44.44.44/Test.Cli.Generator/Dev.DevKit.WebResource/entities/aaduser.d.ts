//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formaaduser_Information {
		interface Tabs {
		}
		interface Body {
			/** The name displayed in the address book for the user. */
			DisplayName: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formaaduser_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form aaduser_Information */
		Body: DevKit.Formaaduser_Information.Body;
		/** The Navigation of form aaduser_Information */
		Navigation: DevKit.Formaaduser_Information.Navigation;
		/** The SidePanes of form aaduser_Information */
		SidePanes: DevKit.SidePanes;
	}
	class aaduserApi {
		/**
		* DynamicsCrm.DevKit aaduserApi
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
		/** Unique identifier of a Microsoft Entra ID. */
		aaduserId: string;
		/** Indicates if the Account of an Microsoft Entra ID is enabled. */
		AccountEnabled: boolean;
		/** Business phone number for the user */
		BusinessPhones: string;
		/** City. */
		City: string;
		/** Company Name. */
		CompanyName: string;
		/** Date and time when the Microsoft Entra ID was created. */
		readonly CreatedDateTime_UtcDateAndTime: Date;
		/** The name displayed in the address book for the user. */
		DisplayName: string;
		/** The given name (first name) of the user. */
		GivenName: string;
		/** A unique identifer for Microsoft Entra ID */
		id: string;
		/** ImAddresses for the user */
		ImAddresses: string;
		/** The user's job title. */
		JobTitle: string;
		/** The SMTP address for the user. */
		Mail: string;
		/** The primary cellular telephone number for the user. */
		MobilePhone: string;
		/** The office location in the user's place of business. */
		OfficeLocation: string;
		/** Postal Code. */
		PostalCode: string;
		/** The preferred language for the user. Should follow ISO 639-1 Code; for example 'en-US'. */
		PreferredLanguage: string;
		/** Street Address. */
		StreetAddress: string;
		/** The user's surname (family name or last name). */
		surname: string;
		/** The user principal name (UPN) of the user. */
		UserPrincipalName: string;
		/** User Type. */
		UserType: string;
		readonly FormattedValue: {
			/** Unique identifier of a Microsoft Entra ID. */
			readonly aaduserId: string;
			/** Indicates if the Account of an Microsoft Entra ID is enabled. */
			readonly AccountEnabled: string;
			/** Business phone number for the user */
			readonly BusinessPhones: string;
			/** City. */
			readonly City: string;
			/** Company Name. */
			readonly CompanyName: string;
			/** Date and time when the Microsoft Entra ID was created. */
			readonly CreatedDateTime_UtcDateAndTime: string;
			/** The name displayed in the address book for the user. */
			readonly DisplayName: string;
			/** The given name (first name) of the user. */
			readonly GivenName: string;
			/** A unique identifer for Microsoft Entra ID */
			readonly id: string;
			/** ImAddresses for the user */
			readonly ImAddresses: string;
			/** The user's job title. */
			readonly JobTitle: string;
			/** The SMTP address for the user. */
			readonly Mail: string;
			/** The primary cellular telephone number for the user. */
			readonly MobilePhone: string;
			/** The office location in the user's place of business. */
			readonly OfficeLocation: string;
			/** Postal Code. */
			readonly PostalCode: string;
			/** The preferred language for the user. Should follow ISO 639-1 Code; for example 'en-US'. */
			readonly PreferredLanguage: string;
			/** Street Address. */
			readonly StreetAddress: string;
			/** The user's surname (family name or last name). */
			readonly surname: string;
			/** The user principal name (UPN) of the user. */
			readonly UserPrincipalName: string;
			/** User Type. */
			readonly UserType: string;
		}
	}
}
declare namespace OptionSet {
	namespace aaduser {
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