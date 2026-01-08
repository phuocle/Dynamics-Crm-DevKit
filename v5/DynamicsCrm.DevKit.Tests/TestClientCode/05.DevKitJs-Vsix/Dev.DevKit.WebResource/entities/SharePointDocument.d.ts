//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SharePointDocumentApi {
		/**
		* DynamicsCrm.DevKit SharePointDocumentApi
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
		/** Type the URL where the SharePoint document is located. */
		readonly AbsoluteUrl: string | null;
		/** Name of the person who created the application. */
		readonly AppCreatedBy: string | null;
		/** Name of the person who last modified the application. */
		readonly AppModifiedBy: string | null;
		/** Name of the author of the SharePoint document. */
		Author: string | null;
		/** Shows the business unit that the record is associated with. */
		BusinessUnitId: string | null;
		/** Shows who the SharePoint document is checked out to. */
		readonly CheckedOutTo: string | null;
		/** Type a comment about the document that is being checked in. */
		readonly CheckInComment: string | null;
		/** Shows the number of child folders. */
		readonly ChildFolderCount: number | null;
		/** Shows how many child items there are. */
		readonly ChildItemCount: number | null;
		/** The content type of the document. */
		readonly ContentType: string | null;
		/** Shows the unique identifier of the content type. */
		readonly ContentTypeId: number | null;
		/** SharePoint source item URL */
		readonly CopySource: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of a SharePoint document in document library. */
		readonly DocumentId: number | null;
		/** Location type of the SharePoint document location. */
		readonly DocumentLocationType: OptionSet.SharePointDocument.DocumentLocationType | null;
		/** Edit Url of the Sharepoint Form */
		readonly Edit: string | null;
		/** Shows the edit URL of the SharePoint document. */
		readonly EditUrl: string | null;
		/** Shows the exchange rate between the currency associated with the SharePoint document record and the base currency. */
		readonly ExchangeRate: number | null;
		/** Shows the file size. */
		readonly FileSize: number | null;
		/** Shows the file type. */
		readonly FileType: string | null;
		/** Shows the full name of the SharePoint document. */
		readonly FullName: string | null;
		/** Stores the Icon Class name of the SharePoint document. */
		readonly IconClassName: string | null;
		/** Shows whether the file is checked out. */
		readonly IsCheckedOut: boolean | null;
		/** Shows whether the file is a folder. */
		readonly IsFolder: boolean | null;
		/** Shows whether to fetch data recursively from the given folder location. */
		readonly IsRecursiveFetch: boolean | null;
		/** Unique identifier of the associated document location. */
		readonly LocationId: string | null;
		/** Name of the associated document location. */
		readonly LocationName: string | null;
		/** Shows the date and time when the SharePoint document was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly Modified_UtcDateAndTime: Date | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who modified the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the SharePoint document. */
		readonly OrganizationId: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string | null;
		/** Shows the Read URL of the SharePoint document. */
		readonly ReadUrl: string | null;
		/** Relative location of Sharepoint Document */
		readonly RelativeLocation: string | null;
		/** Shows the service type of the SharePoint site. */
		ServiceType: OptionSet.SharePointDocument.ServiceType | null;
		/** Shows the date and time when the SharePoint document record was created. */
		readonly SharePointCreatedOn_UtcDateAndTime: Date | null;
		/** Shows the unique identifier of the SharePoint document record. */
		SharePointDocumentId: string | null;
		/** Shows who last updated the document record. */
		readonly SharePointModifiedBy: string | null;
		/** Shows the title or name that describes the SharePoint document. */
		readonly Title: string | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string | null;
		/** Shows the SharePoint document version */
		readonly Version: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Type the URL where the SharePoint document is located. */
			readonly AbsoluteUrl: string;
			/** Name of the person who created the application. */
			readonly AppCreatedBy: string;
			/** Name of the person who last modified the application. */
			readonly AppModifiedBy: string;
			/** Name of the author of the SharePoint document. */
			readonly Author: string;
			/** Shows the business unit that the record is associated with. */
			readonly BusinessUnitId: string;
			/** Shows who the SharePoint document is checked out to. */
			readonly CheckedOutTo: string;
			/** Type a comment about the document that is being checked in. */
			readonly CheckInComment: string;
			/** Shows the number of child folders. */
			readonly ChildFolderCount: string;
			/** Shows how many child items there are. */
			readonly ChildItemCount: string;
			/** The content type of the document. */
			readonly ContentType: string;
			/** Shows the unique identifier of the content type. */
			readonly ContentTypeId: string;
			/** SharePoint source item URL */
			readonly CopySource: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of a SharePoint document in document library. */
			readonly DocumentId: string;
			/** Location type of the SharePoint document location. */
			readonly DocumentLocationType: string;
			/** Edit Url of the Sharepoint Form */
			readonly Edit: string;
			/** Shows the edit URL of the SharePoint document. */
			readonly EditUrl: string;
			/** Shows the exchange rate between the currency associated with the SharePoint document record and the base currency. */
			readonly ExchangeRate: string;
			/** Shows the file size. */
			readonly FileSize: string;
			/** Shows the file type. */
			readonly FileType: string;
			/** Shows the full name of the SharePoint document. */
			readonly FullName: string;
			/** Stores the Icon Class name of the SharePoint document. */
			readonly IconClassName: string;
			/** Shows whether the file is checked out. */
			readonly IsCheckedOut: string;
			/** Shows whether the file is a folder. */
			readonly IsFolder: string;
			/** Shows whether to fetch data recursively from the given folder location. */
			readonly IsRecursiveFetch: string;
			/** Unique identifier of the associated document location. */
			readonly LocationId: string;
			/** Name of the associated document location. */
			readonly LocationName: string;
			/** Shows the date and time when the SharePoint document was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly Modified_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who modified the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the SharePoint document. */
			readonly OrganizationId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Shows the Read URL of the SharePoint document. */
			readonly ReadUrl: string;
			/** Relative location of Sharepoint Document */
			readonly RelativeLocation: string;
			/** Shows the service type of the SharePoint site. */
			readonly ServiceType: string;
			/** Shows the date and time when the SharePoint document record was created. */
			readonly SharePointCreatedOn_UtcDateAndTime: string;
			/** Shows the unique identifier of the SharePoint document record. */
			readonly SharePointDocumentId: string;
			/** Shows who last updated the document record. */
			readonly SharePointModifiedBy: string;
			/** Shows the title or name that describes the SharePoint document. */
			readonly Title: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Shows the SharePoint document version */
			readonly Version: string;
		}
	}
}
declare namespace OptionSet {
	namespace SharePointDocument {
		enum DocumentLocationType {
			/** Dedicated_for_OneNote_Integration = 1*/
			Dedicated_for_OneNote_Integration = 1,
			/** General = 0*/
			General = 0
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