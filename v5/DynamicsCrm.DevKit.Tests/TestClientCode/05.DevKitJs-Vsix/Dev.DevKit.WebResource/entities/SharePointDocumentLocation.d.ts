//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSharePointDocumentLocation_Information {
		interface tab_general_Sections {
			/** Section 1 */
			_272EB814_0769_5EBE_3ED1_E95A0B16853E: DevKit.Controls.Section;
			/** URL Options */
			url_option: DevKit.Controls.Section;
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
			/** Absolute URL of the SharePoint document location. */
			AbsoluteURL: DevKit.Controls.String;
			/** Description of the SharePoint document location record. */
			Description: DevKit.Controls.String;
			/** Location type of the SharePoint document location. */
			LocationType: DevKit.Controls.OptionSet;
			/** Name of the SharePoint document location record. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the SharePoint document location record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the parent site or location. */
			ParentSiteOrLocation: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the SharePoint document location record is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Relative URL of the SharePoint document location. */
			RelativeUrl: DevKit.Controls.String;
		}
		interface Navigation {
			navSubDocumentLocations: DevKit.Controls.NavigationItem;
		}
	}
	export class FormSharePointDocumentLocation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form SharePointDocumentLocation_Information */
		Body: DevKit.FormSharePointDocumentLocation_Information.Body;
		/** The Navigation of form SharePointDocumentLocation_Information */
		Navigation: DevKit.FormSharePointDocumentLocation_Information.Navigation;
	}
	export class SharePointDocumentLocationApi {
		/**
		* DynamicsCrm.DevKit SharePointDocumentLocationApi
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
		/** Absolute URL of the SharePoint document location. */
		AbsoluteURL: string | null;
		/** Unique identifier of the user who created the SharePoint document location record. */
		readonly CreatedBy: string | null;
		/** Date and time when the SharePoint document location record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the SharePoint document location record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the SharePoint document location record. */
		Description: string | null;
		/** Exchange rate between the currency associated with the SharePoint document location record and the base currency. */
		readonly ExchangeRate: number | null;
		/** Sequence number of the import that created the SharePoint document location record. */
		ImportSequenceNumber: number | null;
		/** Location type of the SharePoint document location. */
		LocationType: OptionSet.SharePointDocumentLocation.LocationType | null;
		/** Unique identifier of the user who last modified the SharePoint document location record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the SharePoint document location record was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the SharePoint document location record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the SharePoint document location record. */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the SharePoint document location record. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the SharePoint document location record. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the SharePoint document location record. */
		readonly OwningUser: string | null;
		/** Relative URL of the SharePoint document location. */
		RelativeUrl: string | null;
		/** Shows the service type of the SharePoint site. */
		ServiceType: OptionSet.SharePointDocumentLocation.ServiceType | null;
		/** Unique identifier of the SharePoint document location record. */
		SharePointDocumentLocationId: string | null;
		/** For internal use only. */
		readonly SiteCollectionId: string | null;
		/** Status of the SharePoint document location record. */
		StateCode: OptionSet.SharePointDocumentLocation.StateCode | null;
		/** Reason for the status of the SharePoint document location record. */
		StatusCode: OptionSet.SharePointDocumentLocation.StatusCode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Unique identifier of the currency associated with the SharePoint document location record. */
		readonly TransactionCurrencyId: string | null;
		/** Choose the user who owns the SharePoint document location. */
		UserId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Absolute URL of the SharePoint document location. */
			readonly AbsoluteURL: string;
			/** Unique identifier of the user who created the SharePoint document location record. */
			readonly CreatedBy: string;
			/** Date and time when the SharePoint document location record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the SharePoint document location record. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the SharePoint document location record. */
			readonly Description: string;
			/** Exchange rate between the currency associated with the SharePoint document location record and the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created the SharePoint document location record. */
			readonly ImportSequenceNumber: string;
			/** Location type of the SharePoint document location. */
			readonly LocationType: string;
			/** Unique identifier of the user who last modified the SharePoint document location record. */
			readonly ModifiedBy: string;
			/** Date and time when the SharePoint document location record was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the SharePoint document location record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the SharePoint document location record. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the SharePoint document location record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the SharePoint document location record. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the SharePoint document location record. */
			readonly OwningUser: string;
			/** Relative URL of the SharePoint document location. */
			readonly RelativeUrl: string;
			/** Shows the service type of the SharePoint site. */
			readonly ServiceType: string;
			/** Unique identifier of the SharePoint document location record. */
			readonly SharePointDocumentLocationId: string;
			/** For internal use only. */
			readonly SiteCollectionId: string;
			/** Status of the SharePoint document location record. */
			readonly StateCode: string;
			/** Reason for the status of the SharePoint document location record. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the SharePoint document location record. */
			readonly TransactionCurrencyId: string;
			/** Choose the user who owns the SharePoint document location. */
			readonly UserId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SharePointDocumentLocation {
		enum LocationType {
			/** Dedicated_for_OneNote_Integration = 1*/
			Dedicated_for_OneNote_Integration = 1,
			/** General = 0*/
			General = 0
		}
		enum ParentSiteOrLocationTypeCode {
		}
		enum RegardingObjectTypeCode {
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