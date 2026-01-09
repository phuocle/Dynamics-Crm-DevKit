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
	}
	export class Formaaduser_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form aaduser_Information */
		Body: DevKit.Formaaduser_Information.Body;
	}
	export class aaduserApi {
		/**
		* DynamicsCrm.DevKit aaduserApi
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
		/** Unique identifier of a Microsoft Entra ID. */
		aaduserId: string | null;
		/** Indicates if the Account of an Microsoft Entra ID is enabled. */
		AccountEnabled: boolean | null;
		/** Business phone number for the user */
		BusinessPhones: string | null;
		/** City. */
		City: string | null;
		/** Company Name. */
		CompanyName: string | null;
		/** Date and time when the Microsoft Entra ID was created. */
		readonly CreatedDateTime_UtcDateAndTime: Date | null;
		/** The name displayed in the address book for the user. */
		DisplayName: string | null;
		/** The given name (first name) of the user. */
		GivenName: string | null;
		/** A unique identifer for Microsoft Entra ID */
		id: string | null;
		/** ImAddresses for the user */
		ImAddresses: string | null;
		/** The user's job title. */
		JobTitle: string | null;
		/** The SMTP address for the user. */
		Mail: string | null;
		/** The primary cellular telephone number for the user. */
		MobilePhone: string | null;
		/** The office location in the user's place of business. */
		OfficeLocation: string | null;
		/** Postal Code. */
		PostalCode: string | null;
		/** The preferred language for the user. Should follow ISO 639-1 Code; for example 'en-US'. */
		PreferredLanguage: string | null;
		/** Street Address. */
		StreetAddress: string | null;
		/** The user's surname (family name or last name). */
		surname: string | null;
		/** The user principal name (UPN) of the user. */
		UserPrincipalName: string | null;
		/** User Type. */
		UserType: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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