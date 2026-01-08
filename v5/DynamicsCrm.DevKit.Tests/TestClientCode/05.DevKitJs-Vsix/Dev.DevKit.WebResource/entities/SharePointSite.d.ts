//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SharePointSiteApi {
		/**
		* DynamicsCrm.DevKit SharePointSiteApi
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
		/** Absolute URL of the SharePoint site. */
		AbsoluteURL: string | null;
		/** Unique identifier of the user who created the SharePoint site record. */
		readonly CreatedBy: string | null;
		/** Date and time when the SharePoint site record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the SharePoint site record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the SharePoint site record. */
		Description: string | null;
		/** Exchange rate between the currency associated with the SharePoint site record and the base currency. */
		readonly ExchangeRate: number | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Indicates whether the SharePoint site is the default site or not. */
		IsDefault: boolean | null;
		/** Indicates if SharePoint Grid is present or not. */
		IsGridPresent: boolean | null;
		/** Allows embedding of Power BI Reports available in this SharePoint site. */
		IsPowerBISite: boolean | null;
		/** Date and time when the SharePoint site URL was last validated. */
		LastValidated_UtcDateAndTime: Date | null;
		/** Unique identifier of the user who last modified the SharePoint site record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the SharePoint site record was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the SharePoint site record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the SharePoint site record. */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the document location record. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team that owns the SharePoint site record. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the SharePoint site record. */
		readonly OwningUser: string | null;
		/** Unique identifier of the parent SharePoint site. */
		ParentSite: string | null;
		/** Relative URL of the SharePoint site. */
		RelativeUrl: string | null;
		/** Shows the service type of location of the SharePoint site. */
		ServiceType: OptionSet.SharePointSite.ServiceType | null;
		/** Unique identifier of the SharePoint site in Dynamics 365 */
		SharePointSiteId: string | null;
		/** For internal use only. */
		readonly SiteCollectionId: string | null;
		/** Status of the SharePoint site record. */
		StateCode: OptionSet.SharePointSite.StateCode | null;
		/** Reason for the status of the SharePoint site record. */
		StatusCode: OptionSet.SharePointSite.StatusCode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Unique identifier of the currency associated with the SharePoint site record. */
		readonly TransactionCurrencyId: string | null;
		/** Choose the user who owns the SharePoint site. */
		UserId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Validation status of the SharePoint site URL. */
		ValidationStatus: OptionSet.SharePointSite.ValidationStatus | null;
		/** Reason for validation status of the URL */
		ValidationStatusErrorCode: OptionSet.SharePointSite.ValidationStatusErrorCode | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Absolute URL of the SharePoint site. */
			readonly AbsoluteURL: string;
			/** Unique identifier of the user who created the SharePoint site record. */
			readonly CreatedBy: string;
			/** Date and time when the SharePoint site record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the SharePoint site record. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the SharePoint site record. */
			readonly Description: string;
			/** Exchange rate between the currency associated with the SharePoint site record and the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Indicates whether the SharePoint site is the default site or not. */
			readonly IsDefault: string;
			/** Indicates if SharePoint Grid is present or not. */
			readonly IsGridPresent: string;
			/** Allows embedding of Power BI Reports available in this SharePoint site. */
			readonly IsPowerBISite: string;
			/** Date and time when the SharePoint site URL was last validated. */
			readonly LastValidated_UtcDateAndTime: string;
			/** Unique identifier of the user who last modified the SharePoint site record. */
			readonly ModifiedBy: string;
			/** Date and time when the SharePoint site record was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the SharePoint site record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the SharePoint site record. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the document location record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the SharePoint site record. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the SharePoint site record. */
			readonly OwningUser: string;
			/** Unique identifier of the parent SharePoint site. */
			readonly ParentSite: string;
			/** Relative URL of the SharePoint site. */
			readonly RelativeUrl: string;
			/** Shows the service type of location of the SharePoint site. */
			readonly ServiceType: string;
			/** Unique identifier of the SharePoint site in Dynamics 365 */
			readonly SharePointSiteId: string;
			/** For internal use only. */
			readonly SiteCollectionId: string;
			/** Status of the SharePoint site record. */
			readonly StateCode: string;
			/** Reason for the status of the SharePoint site record. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the SharePoint site record. */
			readonly TransactionCurrencyId: string;
			/** Choose the user who owns the SharePoint site. */
			readonly UserId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Validation status of the SharePoint site URL. */
			readonly ValidationStatus: string;
			/** Reason for validation status of the URL */
			readonly ValidationStatusErrorCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SharePointSite {
		enum FolderStructureEntity {
			/** Account = 1*/
			Account = 1,
			/** Contact = 2*/
			Contact = 2,
			/** None = 0*/
			None = 0
		}
		enum ParentSiteObjectTypeCode {
		}
		enum ServiceType {
			/** MS_Teams = 3*/
			MS_Teams = 3,
			/** OneDrive = 1*/
			OneDrive = 1,
			/** Shared_with_me = 2*/
			Shared_with_me = 2,
			/** SharePoint = 0*/
			SharePoint = 0
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum ValidationStatus {
			/** Could_not_validate = 5*/
			Could_not_validate = 5,
			/** In_Progress = 2*/
			In_Progress = 2,
			/** Invalid = 3*/
			Invalid = 3,
			/** Not_Validated = 1*/
			Not_Validated = 1,
			/** Valid = 4*/
			Valid = 4
		}
		enum ValidationStatusErrorCode {
			/** Authentication_failure = 6*/
			Authentication_failure = 6,
			/** Invalid_certificates = 7*/
			Invalid_certificates = 7,
			/** The_URL_could_not_be_accessed_because_of_Internet_Explorer_security_settings = 5*/
			The_URL_could_not_be_accessed_because_of_Internet_Explorer_security_settings = 5,
			/** The_URL_schemes_of_Microsoft_Dynamics_365_and_SharePoint_are_different = 4*/
			The_URL_schemes_of_Microsoft_Dynamics_365_and_SharePoint_are_different = 4,
			/** This_records_URL_has_not_been_validated = 1*/
			This_records_URL_has_not_been_validated = 1,
			/** This_records_URL_is_not_valid = 3*/
			This_records_URL_is_not_valid = 3,
			/** This_records_URL_is_valid = 2*/
			This_records_URL_is_valid = 2
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